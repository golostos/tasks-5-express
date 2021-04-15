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
    // @ts-ignore
    if (newTaskFromDB.statusCode) {
        // @ts-ignore
        res.status(newTaskFromDB.statusCode).send(newTaskFromDB)
    } else {
        res.status(201).send(newTaskFromDB)
    }
})