import express from "express";
import { getUserFromUserAPI, userPermissions,editPermsRequired } from "../middleware/user.middleware";
import { whitelist } from "../middleware/whitelist.middleware"
import { createLink, editLink, deleteLink } from "../controller/links.controller";
import { validateUrlMiddleware } from "../middleware/link.middleware";

const router = express.Router()

router.post('/create', whitelist, validateUrlMiddleware, getUserFromUserAPI, userPermissions, editPermsRequired, createLink)
router.patch('/update', whitelist, validateUrlMiddleware, getUserFromUserAPI, userPermissions, editPermsRequired, editLink)
router.delete('/delete', whitelist, getUserFromUserAPI, userPermissions, editPermsRequired, deleteLink)

export default router