import express from 'express';
import { getNews } from '../controller/controller.js';



const route = express.Router();

route.get('/news',getNews);

export default route;