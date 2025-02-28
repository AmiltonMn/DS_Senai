import { Request, Response } from "express";
import { Prisma } from "../lib/Prisma.ts";
import CryptoJS from "crypto-js"
import dotenv from 'dotenv'
import jwt from "jsonwebtoken"

dotenv.config()

class AuthController {
    static async register(req: Request, res: Response) : Promise<any> {
        const { name, email, password } = req.body
        
        const passwordCrypt = CryptoJS.AES.encrypt(password, process.env.SECRET as string).toString()


        
        try {
            let user = await Prisma.user.create({
                data: {
                    Name: name,
                    Email: email,
                    Password: passwordCrypt
                }
            })

            return res.status(201).send({ message: "Usuário cadastrado com sucesso!", user})
        } catch (error) {
            return res.status(500).send({ message: `Algo deu errado: ${error}`})
        }
    }

    static async login (req: Request, res: Response) : Promise<any> {
        const { email, password } = req.body
        
        let user = await Prisma.user.findFirst({
            where: {
                Email: email,
                Password: password
            }
        })

        console.log(user)

        if (!user)
            return res.status(400).send({ message: "Email ou senha inválido!" })

        var bytes = CryptoJS.AES.decrypt(user.Password, process.env.SECRET as string)
        const passwordDecrypted = bytes.toString(CryptoJS.enc.Utf8)

        if (password !== passwordDecrypted)
            throw new Error('Usuário e/ou senha inválido!')

        var secret = process.env.SECRET
        if (!secret)
            secret = ''

        const token = jwt.sign(
            {
                id: user.IdUser,
            },
            secret,
            {
                expiresIn: '2 days'
            }
        );

        return res.status(200).send({token: token})
    }
}

export default AuthController;