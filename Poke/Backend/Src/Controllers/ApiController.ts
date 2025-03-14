import express, { Request, Response, Router } from "express";
import ApiService from "../Services/ApiService";

class ApiController {

    static async GetPokemon(req: Request, res: Response) : Promise<any> {
        const { name } = req.params

        try {
            let data = await ApiService.GetPokemon(name)
            console.log(data)
            res.status(200).json({pokemon: data})
        } catch (error) {
            console.log(`An error has occurred: ${error}`)
        }
    }

    static async GetAllPokemon(req: Request, res: Response) : Promise<any> {

        try {
            let data = await ApiService.GetAll()
            res.status(200).json({pokemon: data})
        } catch (error) {
            console.log(`An erro has occurred: ${error}`)
        }
    }
}

export default ApiController;