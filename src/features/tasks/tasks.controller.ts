import { ITask } from "./task.types"
import Task from "./tasks.model"

export const GetAllTasks = async () => {
    return Task.findAll()
}

export const CreateNewTask = async (newTask: ITask) => {
    let result
    try {
        result = await Task.create(newTask)
    } catch (error) {
        console.error(error);
        result = {
            message: 'Dublicate entity',
            statusCode: 409
        }
    }
    return result
}