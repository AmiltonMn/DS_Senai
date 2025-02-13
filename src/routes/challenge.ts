import express, { Request, Response, Router } from 'express';

interface IUser {

    nome: string,
    sobrenome: string,
    id: number
}

const router : Router = express.Router();
const users : IUser[] = []

export default router

    .post('/register',
        (req: Request, res: Response) => {
            const { nome, sobrenome } = req.body

            users.push({nome: nome, sobrenome: sobrenome, id: users.length + 1})

            res.status(200).send(`Usuário ${nome} registrado com sucesso!`)
        }
    )

    .get('',
        (req: Request, res: Response) => {
            res.status(200).send(users)
        }
    )

    .get('/:id',
        (req: Request, res: Response) => {
            const { id } = req.params

            let findUser = users.filter(user => (user.id === Number(id)))
            res.status(200).send(findUser)
        }
    )

    .put('/:id',
        (req: Request, res: Response) => {
            const { id } = req.params;
            const { nome, sobrenome } = req.body;

            try {
                let attUser = users.filter(user => (user.id === Number(id)))

                users[attUser[0].id - 1].nome = nome
                users[attUser[0].id - 1].sobrenome = sobrenome

                res.status(200).send(`Pessoa com o id: ${id} foi atualizado para ${nome} ${sobrenome}`)
            } catch (error) {
                res.status(404).send(`O usuário com este ID não foi encontrado!`)
            }
        }
    )

    .put('/:id',
        (req: Request, res: Response) => {
            const { id } = req.params;
            const { nome, sobrenome } = req.body;

            try {
                let attUser = users.filter(user => (user.id === Number(id)))

                users[attUser[0].id - 1].nome = nome
                users[attUser[0].id - 1].sobrenome = sobrenome

                res.status(200).send(`Pessoa com o id: ${id} foi atualizado para ${nome} ${sobrenome}`)
            } catch (error) {
                res.status(404).send(`O usuário com este ID não foi encontrado!`)
            }
        }
    )

    .patch('/:id',
        (req: Request, res: Response) => {
            const { id } = req.params;
            const { nome } = req.body;
            
            try {
                let attUser = users.filter(user => (user.id === Number(id)))

                users[attUser[0].id - 1].nome = nome

                res.status(200).send(`Pessoa com o id: ${id} foi atualizado para ${nome}`)
            } catch (error) {
                res.status(404).send(`O usuário com este ID não foi encontrado!`)
            }
        }
    )

    .delete('/:id', 
        (req: Request, res: Response) => {
            const { id } = req.params;
            users.splice(Number(id) - 1, 1)
            
            res.status(200).send(`Pessoa com o id: ${id} foi deletada `)
        }
    )