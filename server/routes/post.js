import express, { Router } from "express";
import protect from "../middleware/isAdmin.js";
import { posts } from "../controllers/postControllers.js";
import { verifyAccessToken } from "../utils/token.js";

const router = Router();

router.get("/", posts.getPosts);
router.get("/:id", verifyAccessToken, posts.getPost);
router.post("/", verifyAccessToken, posts.savePosts);
router.patch("/:id/edit", verifyAccessToken, protect, posts.editPost);
router.delete("/:id", verifyAccessToken, protect, posts.deletePost);
router.post("/:postId/comments", verifyAccessToken, posts.addComment);

export default router;
