import { Sequelize } from "sequelize";

//Configure the Connection
const connection = new Sequelize(process.env.SQL_URI, 
    {
        logging: false, 
        retry: {
            match:[/Deadlock/i],
            max:3,
            backoffBase:1000,
            backoffExponent:1.5,
        }
    })
export default connection