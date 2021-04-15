import { Model, DataTypes, Optional } from "sequelize";
import { ITask } from "./task.types";
import { sequelize } from "../../services/db-connection";

interface ITaskCreationAttributes extends Optional<ITask, "id"> { }

export default class Task extends Model<ITask, ITaskCreationAttributes> implements ITask {
    id!: number;
    text!: string;
    completed!: boolean;
}

Task.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, { modelName: 'Task', sequelize })