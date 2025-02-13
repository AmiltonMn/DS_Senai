import { Express } from 'express';
import express from 'express'
import person from './person.ts'
import usuarios from './challenge.ts'

export default function (app: Express) {
    app
        .use(express.json())
        .use('/person', person)
        .use('/usuarios', usuarios)
}