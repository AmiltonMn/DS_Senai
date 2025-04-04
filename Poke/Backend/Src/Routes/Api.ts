import express from 'express'
import ApiController from '../Controllers/ApiController'

const router = express.Router()

router.get('/:name', ApiController.GetPokemon)
router.get('/', ApiController.GetAllPokemon)
router.post('/setPokemon', ApiController.SetAll)

export default router;