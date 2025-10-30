import express from "express";
import { createShortUrl } from "../controller/short_url.controller.js";
const router = express.Router();

router.post('/', createShortUrl);
router.post('/', createCustomShortUrl);


export default router;