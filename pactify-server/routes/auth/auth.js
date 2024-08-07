import User from "../../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config.js";
import dotenv from 'dotenv';
import process from 'process';
import { S3Client, PutObjectCommand} from '@aws-sdk/client-s3';
import path from 'path';

const JWT_SECRET =
    "934a9c82fb55edf39a8fd98fa2f0686e9ab8819fadc064d31f623fbd26349a26a85af0"; // secret string
 

dotenv.config({path:  '../../config.env'});



async function createFolder(Bucket, Key) {
  const client = new S3Client({
        region: process.env.AWS_REGION,
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        }
    });
   Key += '/';
  const command = new PutObjectCommand({ Bucket, Key, ACL: 'private' });
  return client.send(command);
}




async function deleteFolder(Bucket, Key) {
  const client = new S3Client();
  const command = new DeleteObjectCommand({ Bucket, Key });
  return client.send(command);
}

 

const register = async (req, res, next) => {
    try{
        const { email, password, firstName, lastName } = req.body;
        if (password.length < 6) {
            return res
                .status(400)
                .json({ message: "Password less than 6 characters." });
        }
        if (await User.exists({ email: email })) {
            return res.status(400).json({ message: "Email already in use!" });
        }
        const hash = await bcrypt.hash(password, 10)
        const user =  await User.create({
            email,
            password: hash,
            firstName,
            lastName,
        });
        //creates a folder with user id as key in AWS s3
        await createFolder(process.env.AWS_BUCKET_NAME, user._id.toString());

        res.status(200).json({
            message: "User successfully created",
            user,
        });
            
        }catch(error){
                res.status(400).json({
                message: "User not successful created",
                error: error.message,
            });
    }
};
   

const login = async (req, res, next) => {
    const { email, password } = req.body;
    // Check if email and password is provided
    if (!email || !password) {
        return res.status(400).json({
            message: "Email or password missing",
        });
    }
    // Try to find user in database
    try {
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({
                message: "Login failed, incorrect credentials",
                error: "User not found",
            });
        } else {
            // comparing given password with hashed password
            bcrypt.compare(password, user.password).then((result) => {
                if (result) {
                    const maxAge = 3 * 60 * 60;
                    // generate JSON web token and return as a cookie
                    const token = jwt.sign(
                        { id: user._id },
                        JWT_SECRET,
                        {
                            expiresIn: maxAge, // 3hrs in sec
                        }
                    );

                    res.status(200).json({
                        message: "User successfully logged in",
                        user: user._id,
                        token: token,
                    });
                } else {
                    res.status(400).json({ 
                        message: "Login failed, incorrect credentials",
                        error: "Password not found"
                     });
                }
            });
        }
    } catch (error) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        });
    }
};

export { register, login };
