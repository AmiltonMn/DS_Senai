import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();
const people: object[] = [];

export default router

    .post('/register', 
        (req: Request, res: Response) => {
            const { nome, age: age } = req.body
            res.status(200).send(`Pessoa ${nome} ${age} recebida com sucesso!`);
        }
    )

    .get('/getData', 
        (req: Request, res: Response) => {
            res.status(200).send(`Fazendo um get no servidor!`);
        }
    )

    .get('/getDataQuery', 
        (req: Request, res: Response) => {
            const { nome, age: age } = req.query
            res.status(200).send(`Fazendo um GET no servidor! Nome: ${nome}, Idade: ${age}`);
        }
    )

    .get('/getData/:id',
        (req: Request, res: Response) => {
            const { id } = req.params
            res.status(200).send(`Fazendo um get no servidor! id: ${id}`);
        }
    )

    .put('/usuarios/:id', 
        (req: Request, res: Response) => {
            const { id } = req.params;
            const { nome, age: age } = req.body;

            res.status(200).send(`Pessoa com o id: ${id} foi atualizado para ${nome} ${agr}`)
        }
    )

    .patch('/atualizar/:id', 
        (req: Request, res: Response) => {
            const { id } = req.params;
            const { nome } = req.body;
            // Suponhamos que você atualize a pessoa aqui
            
            res.send(`Nome da pessoa com ID ${id} foi atualizado para: ${nome}`);
        }
    )

    .delete('/deletar/:id', 
        (req: Request, res: Response) => {
            const { id } = req.params;
            
            res.status(200).send(`Pessoa com o id: ${id} foi deletada `)
        }
    )