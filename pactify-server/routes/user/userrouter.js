// Router for users schema
import express from "express";
import cookieParser from "cookie-parser";
// auth functions from auth.js
import { userAuth, getUserData, updateUserName, updateUserEmail, deleteUser, getUserContracts } from "./user.js";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /users.
const router = express.Router();

router.use(cookieParser());

router.use(userAuth); //call userAuth as middleware

router.get("/getUserData", getUserData);

router.patch("/updateUserName", updateUserName);

router.get("/getUserContracts", getUserContracts);

router.patch("/updateUserEmail", updateUserEmail);

router.delete("/deleteUser", deleteUser);

export default router;