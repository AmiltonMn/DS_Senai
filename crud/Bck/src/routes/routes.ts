import { Express } from 'express';
import express from 'express'
import taskController from './taskController.ts';

export default function (app: Express) {
    app
        .use(express.json())
        .use('/tasks', taskController)
}