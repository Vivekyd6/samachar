import mongoose from 'mongoose';


const Connection=async()=>{
try{
    const URL = `mongodb+srv://Vivek_yd_6:VivekYadav@news-app.ymed5.mongodb.net/News-App?retryWrites=true&w=majority`
   await  mongoose.connect(URL,{useNewUrlParser: true})
   console.log('Database is successfully connected');
}catch(error){
    console.log('Eror while connecting with database',error);
}
}

export default Connection;