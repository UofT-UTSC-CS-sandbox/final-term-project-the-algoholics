// Express server connection initialization

import express from "express";
import cors from "cors";
import authRouter from "./routes/auth/authroute.js";
import userRouter from "./routes/user/userrouter.js"
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import contractRouters from './routes/contract.route.js';
import axios from 'axios';
import homeRoutes from './routes/homeRoutes.js';
import chatGPTRouter from './routes/chatGPTRoutes.js';
import db from './db/connection.js'
import process from 'process';
import uploadFile from './routes/uploadFile.js';



axios.defaults.withCredentials = true;
dotenv.config();
const PORT = process.env.PORT || 5050;
const app = express();
const corsOptions = {
    origin: `http://localhost:3000`,
    credentials: true, // Enable cookies to be sent with requests
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser()); // parse cookie to authenticate user

app.use("/api/auth", authRouter); // assign the "auth" router to any path that begins with /api/auth

app.use("/api/user/", userRouter);

app.use("/api/chatGPT", chatGPTRouter);

app.use("/api/contracts", contractRouters);

app.use("/api/uploadFile", uploadFile);

app.use('/', homeRoutes);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: "Something went wrong, please try again later" });
});

// start the Express server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

