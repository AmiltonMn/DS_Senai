import { Express } from 'express';
import express from 'express'
import taskRoutes from './task.ts'
import AuthRoutes from './auth.ts';

export default function (app: Express) {
    app
        .use(express.json())
        .use('/tasks', taskRoutes)
        .use('/api/auth', AuthRoutes)
}