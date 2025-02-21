import express, { Request, Response, Router } from "express";
import Task from "../models/Task.ts";
import { dayjs } from '../lib/dayjs.ts'

class TaskController {

    static async CreateTask (req: Request, res: Response) {
        const { title, description, completed } = req.body

        try {
            if (!title) {
                res.status(204).json({message: "Erro de envio dos dados!"})
            }

            let date = dayjs(Date.now()).format('L')
            console.log(date)

            let newtask = new Task({title, description, completed, createdAt: date})
            newtask.save()
            res.status(200).json({message: `Nova task criada com sucesso!`, task: {newtask}})
        } catch (error) {
            res.status(500).json({message: `Ocorreu algum erro, por favor tente novamente`, error: error})
        }
    }

    static async GetTasks (req: Request, res: Response) {
        try {
            let tasks = await Task.find()
            console.log(tasks)
            res.status(200).json({message: 'Aqui estão as tasks', tasks: tasks})
            console.log('Deu boa 2')
        } catch (error) {
            console.log(error)
            res.status(404).json({message: 'As tasks não foram encontradas', error: error})
        }
    }

    static GetTaskById (req: Request, res: Response) {

        const { id } = req.params

        try {
            let task = Task.findById(id)
            res.status(200).json({message: 'Aqui esta a task', task: task})
        } catch (error) {
            res.status(404).json({message: 'A task não foi encontrada', error: error})
        }
    }

    static AttTask (req: Request, res: Response) {
        const { id } = req.params
        const { title, description, completed } = req.body

        try {
            let task = Task.findByIdAndUpdate(id, { title, description, completed, updateAt: Date.now() }, { new: true })
            res.status(200).json({message: 'A task foi atualizada com sucesso!', task: task})
        } catch (error) {
            res.status(404).json({message: 'A task não foi encontrada', error: error})
        }
    }

    static DeleteTask (req: Request, res: Response) {
        const { id } = req.params

        try {
            Task.findByIdAndDelete(id)
            res.status(200).json({message: 'Task excluída com sucesso!'})
        } catch (error) {
            res.status(404).json({message: 'A task não foi encontrada', error: error})
        }
    }
}

export default TaskController;