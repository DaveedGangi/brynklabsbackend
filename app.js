const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const dotenv=require("dotenv");


const headingRoutes=require("./routes/headingRoutes");

dotenv.config();
const app=express();

app.use(cors());
app.use(express.json());
app.use(headingRoutes);


mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("MongoDb Connected")
app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})
})
.catch(err=>console.error("MongoDb Connection Failed",err))