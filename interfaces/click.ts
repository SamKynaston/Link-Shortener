/*
    __  __                 _                 _  _  _  _
   |  \/  | __ _  _ _  ___| |_   _ __   ___ | || || || |
   | |\/| |/ _` || '_|(_-/|   \ | '  \ / -_)| || | \_. |
   |_|  |_|\__/_||_|  /__/|_||_||_|_|_|\___||_||_| |__/
      MADE BY MELLY SOFTWARE. ALL RIGHTS PRESERVED.
*/

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
