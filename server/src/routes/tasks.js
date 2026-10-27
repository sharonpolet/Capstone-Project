import express from 'express';
import Model from '../models/task.js';
const router = express.Router();
router.get('/', async (req,res,next)=>{try{const limit=Math.min(Math.max(Number(req.query.limit)||100,1),500);res.json(await Model.find().sort({createdAt:-1}).limit(limit).lean())}catch(e){next(e)}});
router.post('/', async (req,res,next)=>{try{const record=await Model.create(req.body);res.status(201).json(record)}catch(e){next(e)}});
router.delete('/:id', async (req,res,next)=>{try{if(!/^[0-9a-fA-F]{24}$/.test(req.params.id))return res.status(400).json({message:'Invalid record ID.'});const record=await Model.findByIdAndDelete(req.params.id);if(!record)return res.status(404).json({message:'Record not found.'});res.json({message:'Record deleted.'})}catch(e){next(e)}});
export default router;
