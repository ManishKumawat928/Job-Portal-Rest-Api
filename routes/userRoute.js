import express from "express";
import { updateUserController } from "../controllers/userController.js";
import userAuth from "../middlewares/authMiddleware.js";
// router
const router = express.Router();

// routes
// get users

// update user
router.put("/update-user", userAuth, updateUserController);

export default router;
