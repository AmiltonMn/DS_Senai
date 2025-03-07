import express from 'express'
import ApiController from '../Controllers/ApiController'

const router = express.Router()

router.get('/:id', ApiController.GetPokemon)

export default router;