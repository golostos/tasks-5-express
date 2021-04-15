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