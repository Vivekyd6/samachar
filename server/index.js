import express from 'express';
 
import Connection from './connection/db.js'
import defaultData from './default.js';
const app=express();

const Port=8000;

Connection();

app.listen(Port,()=>console.log(`server is running on Port ${Port}`));

defaultData();