import express from 'express';
import { getcontracts } from '../controllers/contract.controller.js';

const router = express.Router();

router.get('/getcontracts', getcontracts)

export default router;