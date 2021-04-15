import { Request } from "express";

export interface ITask {
    id?: number
    text: string
    completed: boolean
}

export interface IRequest extends Request {
    params: {
        id: string
    }
    body: ITask
}

export type ErrorMessage = {
    message: string
    type: string | null
}

export type DBValidateError = {
    message: string
    errors?: ErrorMessage[]
    statusCode: number
}