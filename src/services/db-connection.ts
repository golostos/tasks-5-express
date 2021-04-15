import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('tasks_5', 'tasks_5_user', 'user12345', {
    dialect: 'mysql'
});

(async function () {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        console.log('Successful connection to the DB');        
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
})()