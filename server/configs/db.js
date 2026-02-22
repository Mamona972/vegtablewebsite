import mongoose from "mongoose";

const connectDB=async ()=>{
    try{
       mongoose.connection.on('connected',()=>
    console.log("Datbase connected"));
       await mongoose.connect(`${process.env.MONGODB_URI}/vegtable`)
    }catch(error){
  console.error(error.message)
    }
}

export default connectDB