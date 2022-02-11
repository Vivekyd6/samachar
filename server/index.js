import Route from './Routes/route.js';  
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
 
import Connection from './connection/db.js'
import defaultData from './default.js';
  


const app = express();

 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/', Route);

const Port=8001;

Connection();

app.listen(Port,()=>console.log(`server is running on Port ${Port}`));

defaultData();