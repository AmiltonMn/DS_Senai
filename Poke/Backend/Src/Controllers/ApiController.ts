import express, { Request, Response, Router } from "express";
import ApiService from "../Services/ApiService";

class ApiController {

    static async GetPokemon(req: Request, res: Response) : Promise<any> {
        const { id } = req.params

        try {
            let data = await ApiService.GetPokemon(+id)
            console.log(data)
            res.status(200).json({message: "Pokémon data gotten successfully!", pokemon: data})
        } catch (error) {
            console.log(`An error has occurred: ${error}`)
        }
    }
}

export default ApiController;