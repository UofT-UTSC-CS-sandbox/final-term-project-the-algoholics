import mongoose from 'mongoose';
import Contract from '../models/Contract.js';

const uri = process.env.ATLAS_URI || "";
console.log('uri = %s\n', uri);

const options = {
    'bufferCommands': false
};

mongoose.connect(uri, options)
  .then(() => {
    console.log("Successfully connected to MongoDB!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export default db;