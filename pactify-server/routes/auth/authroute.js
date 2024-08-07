// Router for users schema
import express from "express";

// auth functions from auth.js
import { register, login } from "./auth.js";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /users.
const router = express.Router();

// set /api/auth/register to register func in auth.js
router.route("/register").post(register);

// set /api/auth/login to login func in auth.js
router.route("/login").post(login);

export default router;