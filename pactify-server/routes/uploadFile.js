import express from 'express';
import { userAuth } from "./user/user.js"
import dotenv from 'dotenv';
import AWS from 'aws-sdk';
import Contract from '../models/Contract.js';
import mongoose from 'mongoose';

dotenv.config({path: '../config.env'});

AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const router = express.Router();

router.use(userAuth);

router.post('/', async(req, res) => {
    try{
        const {fileName, content} = req.body;    
        const folderPrefix = req.user.id;
        const s3 = new AWS.S3();
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key:`${folderPrefix}/${fileName}`,
            Body: content
        }; 
        const uploadPromise = () => {
            return new Promise((resolve, reject) => {
                s3.upload(params, (error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });
        };

        const uploadResult = await uploadPromise();
        const create = await Contract.create({
                userId: new mongoose.Types.ObjectId(folderPrefix),
                title: fileName,
                status: 'draft',
                thumbnail: 'https://via.placeholder.com/200'
        });

        res.status(200).json({ message: 'File uploaded successfully', data: uploadResult });
    } catch (error) {
        console.log('Error uploading file:', error);
        res.status(500).json({ message: 'Error uploading file', error: error.message });
    }
});


export default router;