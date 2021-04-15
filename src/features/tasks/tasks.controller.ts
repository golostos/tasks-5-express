import { ITask } from "./task.types"
import Task from "./tasks.model"

export const GetAllTasks = async () => {
    return Task.findAll()
}

export const CreateNewTask = async (newTask: ITask) => {
    return Task.create(newTask)
}