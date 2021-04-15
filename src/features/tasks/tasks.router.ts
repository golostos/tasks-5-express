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
    const newTaskFromDB = await CreateNewTask(newTask)
    res.status(201).send(newTaskFromDB)
})