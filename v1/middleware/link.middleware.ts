import { Request, Response, NextFunction } from "express";
import { validateUrl } from "../util/links";

const validateUrlMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!validateUrl(req.body.originLink)) {return res.status(400).json({message:"The requested link is not valid."})}
        next()
    } catch (e) {
        return res.status(500).json({message:e.message})
    }   
}

export {validateUrlMiddleware}