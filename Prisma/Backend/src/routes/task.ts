import express from "express";
import TaskController from "../controllers/TaskController.ts";

const router = express.Router()

router.post('/new', TaskController.CreateTask)

router.get('', TaskController.GetTasks)
router.get('/:id', TaskController.GetTaskById)

router.put('/att/:id', TaskController.AttTask)

router.delete('/del/:id', TaskController.DeleteTask)

export default router