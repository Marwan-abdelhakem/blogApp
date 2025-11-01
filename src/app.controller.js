import connectDB from "./DB/connection.js"
import authRouter from "./Modeules/Auth/auth.controller.js"
import userRouter from "./Modeules/User/user.controller.js"
import blogRouter from "./Modeules/Blog/blog.controller.js"
const bootStrap =async(app,express)=>{
    app.use(express.json())
    await connectDB()

    app.use("/api/auth",authRouter)
    app.use("/api/user",userRouter)
    app.use("/api/blog",blogRouter)


    app.all("/*",(req,res,next)=>{
        return next(new Error("Not Found Handler!!",{cause:500}))
    })

    app.use((err,req,res,next)=>{
        const status=err.cause||500
        return res
            .status(status)
            .json({message:"Somthing went Wrong",error:err.message,stack:err.stack})
    })
}

export default bootStrap

