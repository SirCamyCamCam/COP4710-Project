import express from 'express';


import {getEvent} from '../controller/event.js';
const router = express.Router()

router.get('/',getEvent);
//router.post('/',createEvent);

export default router;