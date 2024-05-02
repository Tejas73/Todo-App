import express from 'express'
import { Todo } from '../db/db'
import { z } from 'zod'

const router = express.Router();

// const todos = z.union([
//     z.object({
//         title: z.string(),
//         description: z.string()
//     }),
//     z.string() // Allow a string as well
// ]);


router.get('/getTodos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        console.error('Error fetching todos:', error);
        res.status(500).json({ error: 'Error fetching todos' });
    }
});

router.post("/createTodo", async (req, res) => {
    console.log("createTodo is here")
    const title = req.body.title
    const description = req.body.description

    try {
        if (title !== null && description !== null) {

            const newTodo = new Todo({
                title: title,
                description: description
                // title: todos.parse(title),
                // description: todos.parse(description)
            })
            await newTodo.save()
            console.log(newTodo)
        }
        return res.json("Todo created successfully")

    } catch (error) {
        console.error("Error in creating todo: ", error)
    }
})

router.delete("/deleteTodo/:_id", async (req, res) => {
    const { _id } = req.params;

    try {
        const removedTodo = await Todo.findByIdAndDelete(_id);

        if (!removedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        return res.json({ message: "Todo deleted successfully" });
    } catch (error) {
        console.error("Error deleting todo: ", error);
        return res.status(500).json({ message: "Error deleting todo" });
    }
});

router.put("/updateTodo/:_id", async (req, res) => {
    const { _id } = req.params
    try {
        const title = req.body.title
        const description = req.body.description

        const updated = await Todo.findByIdAndUpdate(_id, { $set: { title: title, description: description } }, { new: true })
        return res.json({ message: "Todo updated successfully", updated })
    } catch (error) {
        console.error("Error in updating todo: ", error)
    }
})

export default router;