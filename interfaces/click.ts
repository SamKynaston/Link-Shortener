import { DataTypes, Model, Optional } from "sequelize"

export interface IClick {
    urlID:Number;
    id:Number;
    clientIP:String;
    clientUserAgent:String;
    createdAt?:Date;
    updatedAt?:Date;
    deletedAt?:Date;
}

export interface IClickInput extends Optional<IClick, 'id'> {}
export interface IClickOutput extends Required<IClick> {}
