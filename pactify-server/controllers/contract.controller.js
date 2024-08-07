import Contract from '../models/Contract.js';
import mongoose from 'mongoose';


export const getcontracts = async (req, res, next) => {
  try {
    // Fetch all contracts
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;

    // Ensure userId is properly formatted and valid

    console.log(req.query.userId);
    // Query contracts by userId
    const contracts = await Contract.find({'userId' : new mongoose.Types.ObjectId(req.query.userId)})
      .skip(startIndex)
      .limit(limit);

    // Respond with the contracts
    console.log(contracts);
    res.status(200).json({ contracts });

  } catch (error) {
    console.error('Error fetching contracts:', error);
    res.status(500).json({ message: error.message });
  }
};