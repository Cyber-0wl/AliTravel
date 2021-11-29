import express, { Router } from "express";
import { userSignIn, userSignUp } from "../controllers/userController.js";

const router = Router();

router.post("/sign-in", userSignIn);
router.post("/sign-up", userSignUp);

export default router;
