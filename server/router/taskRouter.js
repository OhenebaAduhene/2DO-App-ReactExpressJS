import express from 'express'
import  { createTask, deleteTask, getAllTask, updateTask } from '../controller/taskController.js'


const router = express()

router.get('/', getAllTask)
router.post('/', createTask)
router.delete('/:id', deleteTask)
router.patch('/:id', updateTask)

export default router

