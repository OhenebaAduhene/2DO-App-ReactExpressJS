import mongoose from "mongoose";
import Task from "../model/task.js";

export const getAllTask = async (req, res) => {
    try {
        const tasks = await Task.find()

        res.status(200).json(tasks)

    } catch (err) {
        res.status(404).json({ 'Error': err.message })
    }
}

export const createTask = async (req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()

        res.status(201).json(task)

    } catch (err) {
        res.status(409).json({ 'Error': err.message })
    }
}

export const deleteTask = async (req, res) => {
    const task_id = req.params.id
    try {
        await Task.findByIdAndDelete(task_id)

        res.status(200).json({ 'Msg': 'Task deleted successfully' })

    } catch (err) {
        res.status(409).json({ 'Error': err.message })
    }
}

export const updateTask = async (req, res) => {
    const task_id = req.params.id

    try {
        await Task.findOneAndUpdate(task_id, req.body).then(res.json({"msg" : "task updated successfully"})).catch(err => res.json({ 'Error': err.message }))

    } catch (err) {
        res.status(409).json({ 'Error': err.message })
    }
}