import mongoose, { Schema } from "mongoose";

const TaskTodo = new Schema({
    title: {
        type: String,
        required: true
    },
    content: String
}, {timestamps: true})

const Task = mongoose.model('Task', TaskTodo)

export default Task