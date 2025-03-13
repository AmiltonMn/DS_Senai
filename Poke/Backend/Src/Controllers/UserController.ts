import express, { Request, Response, Router } from "express";
import UserService from "../Services/UserService";

class UserController {

    static async CatchPokemon(req: Request, res: Response) : Promise<any> {
        const { id } = req.params

        try {
            let data = await UserService.CatchPokemon(+id)
            res.status(200).json({message: "Pokémon data gotten successfully!", captured: data})
        } catch (error) {
            console.log(`An error has occurred: ${error}`)
        }
    }
}

export default UserController;