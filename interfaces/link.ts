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
