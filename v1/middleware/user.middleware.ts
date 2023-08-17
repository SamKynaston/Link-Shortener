import { Request, Response, NextFunction } from "express";
import http from "http"

const getUserFromUserAPI = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.header("Authorization")) {return res.status(400).json({message:"A token (Authorization Header) was not provided"})}
        
        let options = {
            method: 'GET',
            headers: {
                Authorization:req.header("Authorization")
            }
        }

        let data = await fetch('https://accounts.mellysoft.com/v1/users/authenticated', options)
        let json = await data.json()

        if (json["body"] == false) {return res.status(404).json({message:"Accounts Endpoint returned false"})}

        req["authUser"] = json["body"]

        if (!req["authUser"]) {return res.status(404).json({message:"User was not found."})}

        next()
    } catch (e) {
        return res.status(500).json({message:e.message})
    }
}

const userPermissions = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.header("Authorization")) {return res.status(400).json({message:"A token (Authorization Header) was not provided"})}
        
        let options = {
            method: 'GET',
            headers: {
                Authorization:req.header("Authorization")
            }
        }

        let data = await fetch(`https://accounts.mellysoft.com/v1/user/${req["authUser"]["id"]}/permissions`, options)
        let json = await data.json()

        if (json["permissions"] == false) {return res.status(404).json({message:"Accounts Endpoint returned false"})}

        req["userPermissions"] = json["permissions"]

        next()
    } catch (e) {
        return res.status(500).json({message:e.message})
    }
}

const editPermsRequired = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req["userPermissions"].includes("OP") && !req["userPermissions"].includes("MODIFY_CUSTOM_LINKS")) {return res.status(403).json({message:"You do not have permission to modify this resource."})}
        next()
    } catch (e) {
        return res.status(500).json({message:e.message})
    }
}

export {getUserFromUserAPI, userPermissions, editPermsRequired}