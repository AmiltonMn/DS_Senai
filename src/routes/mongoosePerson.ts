import Person from "../models/Person.ts";
import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();
const people: object[] = [];

export default router

        // Register de uma unidade de person
        .post('/register', async (req: Request, res: Response) => 
        {
            const { name, age } = req.body;
            
            try {
                const person = new Person({ name, age });
                await person.save();
                res.status(201).json(person);
            } catch (error) {
                res.status(400).json({ message: 'Erro ao criar pessoa', error });
            }
        })

        // Get das people
        .get('/people', async (req: Request, res: Response) => 
        {
            try {
                const people = await Person.find();
                res.status(200).json(people);
            } catch (error) {
                res.status(400).json({ message: 'Erro ao buscar pessoas', error });
            }
        })

        // Atualização
        /* 
            Aquele { new: true } é para mandar o person atualizado
            Caso queira mudar para aparecer o antigo, é só colocar
            { new: false } ou tirar essa parte
        */
        .put('/person/:id', async (req: Request, res: Response) => 
        {
            const { id } = req.params;
            const { name, age } = req.body;
            
            try {
                const person = await Person.findByIdAndUpdate(id, { name, age }, { new: true });
                if (!person) {
                    res.status(404).json({ message: 'Pessoa não encontrada' });
                }
                res.status(200).json(person);
            } catch (error) {
                res.status(400).json({ message: 'Erro ao atualizar pessoa', error });
            }
        })

        // Delete de uma person
        .delete('/person/:id', async (req: Request, res: Response) => 
        {
            const { id } = req.params;
            try {
                const person = await Person.findByIdAndDelete(id);
                if (!person) {
                    res.status(404).json({ message: 'Pessoa não encontrada' });
                }
                res.status(200).json({ message: 'Pessoa deletada com sucesso' });
            } catch (error) {
                res.status(400).json({ message: 'Erro ao deletar pessoa', error });
            }
        })