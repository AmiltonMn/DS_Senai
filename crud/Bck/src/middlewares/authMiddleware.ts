import { Request, Response, NextFunction } from "express";

export const ValidateRegister = (req: Request, res: Response, next: NextFunction) => {
    const { email, name, password } = req.body;

    if (!email || !password || !name) {
        res.status(400).json( {erro: "Preencha todos os campos"} )
    }

    next();
};

export const ValidateLogin = (req: Request, res: Response, next: NextFunction) => {
    const { login } = req.body;

    if (!login) {
        res.status(400).json( {erro: "E-mail ou nome de usuário é obrigatório!"} )
    }

    next();
};