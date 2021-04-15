import { Router } from "express";
import { IRequest } from "./task.types";
import { CreateNewTask, GetAllTasks } from "./tasks.controller";

export const tasksRouter = Router()

tasksRouter.get('/api/tasks', async (req, res) => {
    const tasks = await GetAllTasks()
    res.send(tasks)
})

tasksRouter.post('/api/task', async (req: IRequest, res) => {
    const newTask = req.body
    const [error, newTaskFromDB] = await CreateNewTask(newTask)
    if (error) res.status(error.statusCode).send({
        errors: error.errors, 
        message: error.message
    })
    else res.status(201).send(newTaskFromDB)
})