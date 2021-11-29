import express, { Router } from "express";
import protect from "../middleware/isAdmin.js";
import { pubs } from "../controllers/pubControllers.js";
import { verifyAccessToken } from "../utils/token.js";

const router = Router();

router.get("/", verifyAccessToken, pubs.getPubs);
router.get("/:id", verifyAccessToken, pubs.getPub);
router.post("/", verifyAccessToken, pubs.savePub);
router.patch("/:id/edit", verifyAccessToken, protect, pubs.editPub);
router.delete("/:id", verifyAccessToken, protect, pubs.deletePub);
// router.post("/:postId/comments", verifyAccessToken, pubs.addComment);

export default router;
