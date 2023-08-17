import { DataTypes, Model, Optional } from "sequelize"
import connection from "../connection"
import { IClickInput, IClick } from "../../interfaces/click";

class Click extends Model<IClick, IClickInput> implements IClick {
    public urlID: number;
    public id: number;
    public clientIP:string;
    public clientUserAgent:string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Click.init({
    urlID: {
        type: DataTypes.INTEGER
    },

    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },

    clientIP: {
        type:DataTypes.STRING,
        allowNull:false
    },
    
    clientUserAgent: {
        type:DataTypes.STRING,
        allowNull:false
    },
}, {timestamps:true, sequelize:connection, paranoid:true})

export default Click