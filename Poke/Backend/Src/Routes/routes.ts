import { Express } from 'express';
import express from 'express'
import ApiRoutes from './Api.ts'
import UserRoutes from './User.ts'

export default function (app: Express) {
    app
        .use(express.json())
        .use('/api', ApiRoutes)
        .use('/user', UserRoutes)
}