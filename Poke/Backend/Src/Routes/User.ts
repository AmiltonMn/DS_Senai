import express from 'express'
import UserController from '../Controllers/UserController'

const router = express.Router()

router.get('/:id', UserController.CatchPokemon)

export default router;