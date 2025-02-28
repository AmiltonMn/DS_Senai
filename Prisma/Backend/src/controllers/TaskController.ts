import express, { Request, Response, Router } from "express";
import { Prisma } from "../lib/Prisma.ts";
import { dayjs } from '../lib/dayjs.ts'

class TaskController {

    static async CreateTask (req: Request, res: Response) : Promise<any> {
        const { title, description, completed } = req.body

        try {
            if (!title || !description) {
                res.status(204).json({message: "Erro de envio dos dados!"})
            }

            let date = dayjs(Date.now()).format('L')
            console.log(date)

            let task = await Prisma.task.create({
                data: { 
                    Title: title,
                    Description: description, 
                    Completed: completed, 
                    UpdateAt: null
                },
            });

        } catch (error) {
            res.status(500).json({message: `Ocorreu algum erro, por favor tente novamente`, error: error})
        }
    }

    static async GetTasks (req: Request, res: Response) : Promise<any> {
        try {
            let tasks = await Prisma.task.findMany()
            console.log(tasks)
            res.status(200).json({message: 'Aqui estão as tasks', tasks: tasks})
            console.log('Deu boa 2')
        } catch (error) {
            console.log(error)
            res.status(404).json({message: 'As tasks não foram encontradas', error: error})
        }
    }

    static async GetTaskById (req: Request, res: Response) : Promise<any> {

        const { id } = req.params

        try {
            let task = await Prisma.task.findUnique(
                {
                    where: {
                        IdTask: +id // ? Aqui o "+" transforma o nosso "id" em um number
                    }
                }
            )
            res.status(200).json({message: 'Aqui esta a task', task: task})
        } catch (error) {
            res.status(404).json({message: 'A task não foi encontrada', error: error})
        }
    }

    static async AttTask (req: Request, res: Response) : Promise<any> {
        const { id } = req.params
        const { title, description, completed } = req.body

        try {

            let task = await Prisma.task.update({
                where: {
                    IdTask : +id
                },
                data: {
                    Title: title,
                    Description: description,
                    Completed: completed,
                    UpdateAt: Date.now().toString()
                }
            })

            res.status(200).json({message: 'A task foi atualizada com sucesso!', task: task})
        } catch (error) {
            res.status(404).json({message: 'A task não foi encontrada', error: error})
        }
    }

    static DeleteTask (req: Request, res: Response) {
        const { id } = req.params

        try {
            Prisma.task.delete({
                where: {
                    IdTask: +id
                }
            })
            res.status(200).json({message: 'Task excluída com sucesso!'})
        } catch (error) {
            res.status(404).json({message: 'A task não foi encontrada', error: error})
        }
    }
}

export default TaskController;