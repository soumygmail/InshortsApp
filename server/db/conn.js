import mongoose from 'mongoose';
 const Connection = async() => {

    const URL = "mongodb+srv://soumya9589:3kyokzlLOu2PCjZA@cluster0.zcv0zst.mongodb.net/?retryWrites=true&w=majority";
     try{
       await
             mongoose.connect(URL);
//.then(() => console.log("connection sucessfull"))
//.catch((err) => console.log("connection is not sucessfull"))
console.log(`sERVER CONNECTED sUCESSFULLY`)

     }catch( error) {
         console.log(`Error while connecting with database , ${error}`)
     }
 }

 export default Connection;
