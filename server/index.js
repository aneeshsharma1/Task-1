const express=require("express");
const cors = require("cors");
const bodyParser=require("body-parser")
const encoder=bodyParser.json()

const mongoose = require('mongoose');

const app=express();
// const complaint=require("./ComplaintApi")

const login=require("./login")

// const connectDB = async () => {
//     try {
//         console.log(`MongoDB started}`);
//       const conn = await mongoose.connect(`mongodb+srv://akhilkalsi12:Db9AKiKwaBC5lKGW@cluster0.7mshhxy.mongodb.net/?retryWrites=true&w=majority`
//         );
//       console.log(`MongoDB Connected: {conn.connection.host}`);
//     } catch (error) {
//       console.error(error.message);
//       process.exit(1);
//     }
//   }

// connectDB();

app.use(cors())   
app.use(express.json())
const Joi=require("joi")
// app.use("/api/complaint",complaint)
app.use("/api/login",login)



const port=process.env.port||3000
app.listen(port,()=>{console.log(`listening to port ${port}...`)})