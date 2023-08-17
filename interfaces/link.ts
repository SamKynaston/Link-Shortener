/*
    __  __                 _                 _  _  _  _
   |  \/  | __ _  _ _  ___| |_   _ __   ___ | || || || |
   | |\/| |/ _` || '_|(_-/|   \ | '  \ / -_)| || | \_. |
   |_|  |_|\__/_||_|  /__/|_||_||_|_|_|\___||_||_| |__/
      MADE BY MELLY SOFTWARE. ALL RIGHTS PRESERVED.
*/

import { DataTypes, Model, Optional } from "sequelize"

export interface IShortenedLink {
    id:Number;
    urlCode:String;
    originLink:String;
    authorID:Number;
    createdAt?:Date;
    updatedAt?:Date;
    deletedAt?:Date;
}

export interface IShortenedLinkInput extends Optional<IShortenedLink, 'id'> {}
export interface IShortenedOutput extends Required<IShortenedLink> {}
