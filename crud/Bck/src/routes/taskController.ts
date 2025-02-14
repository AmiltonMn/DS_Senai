import express, { Request, Response, Router } from "express";
import Task from "../models/Task.ts";

const router : Router = express.Router();

export default router

    .post('/new',
         async (req: Request, res: Response) => {
            const { title, description, completed } = req.body
            try {
                if (!title) {
                    res.status(204).json({message: "Erro de envio dos dados!"})
                }

                let newtask = new Task({title, description, completed})
                await newtask.save()
                res.status(200).json({message: `Nova task criada com sucesso!`, task: {newtask}})
            } catch (error) {
                res.status(500).json({message: `Ocorreu algum erro, por favor tente novamente`, error: error})
            }
        }
    )

    .get('',
        async (req: Request, res: Response) => {
            try {
                let tasks = await Task.find()
                res.status(200).json({message: 'Aqui estão as tasks', tasks: tasks})
            } catch (error) {
                res.status(404).json({message: 'As tasks não foram encontradas', error: error})
            }
        }
    )

    .get('/:id',
        async (req: Request, res: Response) => {

            const { id } = req.params

            try {
                let task = await Task.findById(id)
                res.status(200).json({message: 'Aqui esta a task', task: task})
            } catch (error) {
                res.status(404).json({message: 'A task não foi encontrada', error: error})
            }
        }
    )

    .put('/:id',
        async (req: Request, res: Response) => {
            const { id } = req.params
            const { title, description, completed } = req.body

            try {
                let task = await Task.findByIdAndUpdate(id, { title, description, completed, updateAt: Date.now() }, { new: true })
                res.status(200).json({message: 'A task foi atualizada com sucesso!', task: task})
            } catch (error) {
                res.status(404).json({message: 'A task não foi encontrada', error: error})
            }
        }
    )

    .delete('/:id',
        async (req: Request, res: Response) => {
            const { id } = req.params

            try {
                await Task.findByIdAndDelete(id)
                res.status(200).json({message: 'Task excluída com sucesso!'})
            } catch (error) {
                res.status(404).json({message: 'A task não foi encontrada', error: error})
            }
        }
    )