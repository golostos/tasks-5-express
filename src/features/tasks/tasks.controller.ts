import { ValidationError } from "sequelize"
import { DBValidateError, ITask } from "./task.types"
import Task from "./tasks.model"

export const GetAllTasks = async () => {
    return Task.findAll()
}

// Указываем, что асинхронная функция возвращает кортеж, который оформлен стандартным способом
// для NodeJS. Первый параметр ошибка, а второй если ошибки нет - сами данные.
export const CreateNewTask = async (newTask: ITask): Promise<[DBValidateError | null, Task | null]> => {
    try {
        return [null, await Task.create(newTask)]
    } catch (error) {
        console.error(error);
        // Проверяем, является ли ошибка валидационной ошибкой sequelize
        if (error instanceof ValidationError) {
            return [{
                message: error.message,
                errors: error.errors.map(({type, message}) => ({type, message})),
                statusCode: 409
            }, null]
        } else {
            return [{
                message: error.message,
                statusCode: 500
            }, null]
        }
    }
}