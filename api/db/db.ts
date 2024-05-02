import mongoose from "mongoose";

export const todoSchema = new mongoose.Schema({
    title: String,
    description: String
})

export const Todo = mongoose.model('Todo', todoSchema)

