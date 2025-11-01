import mongoose from "mongoose"

const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/blogApp")
        console.log("Database Connect Successfully")
    } catch (error) {
        console.log("Database Connection Error",error.message)
    }
}

export default connectDB