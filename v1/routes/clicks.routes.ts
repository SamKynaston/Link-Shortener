import express from "express";
import { getUserFromUserAPI } from "../middleware/user.middleware";
import { whitelist } from "../middleware/whitelist.middleware"
import { getClicksForUrl, getClickCount } from "../controller/clicks.controller";

const router = express.Router()

router.get('/:ID/clicks/get', whitelist, getUserFromUserAPI, getClicksForUrl)
router.get('/:ID/clicks/count', whitelist, getUserFromUserAPI, getClickCount)

export default router