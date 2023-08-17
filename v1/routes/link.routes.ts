import express from "express";
import { redirectLink } from "../controller/links.controller";
import { displayHealth } from "../controller/default.controller";

const router = express.Router()

router.get('/', displayHealth)
router.get('/:ID', redirectLink)

export default router