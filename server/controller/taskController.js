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

export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`The id ${id} is not valid`);
    }
    const todo = { title, content, _id: id };
    await Task.findByIdAndUpdate(id, todo, { new: true })
    res.json(todo);
}

export const deleteTask = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`The id ${id} is not valid`);
    }
    await Task.findByIdAndDelete(id);

    res.json({ message: 'Todo deleted successfully' });
}