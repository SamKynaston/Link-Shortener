/*
    __  __                 _                 _  _  _  _
   |  \/  | __ _  _ _  ___| |_   _ __   ___ | || || || |
   | |\/| |/ _` || '_|(_-/|   \ | '  \ / -_)| || | \_. |
   |_|  |_|\__/_||_|  /__/|_||_||_|_|_|\___||_||_| |__/
      MADE BY MELLY SOFTWARE. ALL RIGHTS PRESERVED.
*/

import { DataTypes, Model, Optional } from "sequelize"
import connection from "../connection"
import { IShortenedLinkInput, IShortenedLink } from "../../interfaces/link"

class ShortenedLink extends Model<IShortenedLink, IShortenedLinkInput> implements IShortenedLink {
    public id: number;
    public urlCode:string;
    public originLink:string;
    public authorID:number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

ShortenedLink.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },

    authorID: {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    
    urlCode: {
        type:DataTypes.STRING,
        unique:"column"
    },

    originLink: {
        type:DataTypes.STRING
    },

}, {timestamps:true, sequelize:connection, paranoid:true})

export default ShortenedLink