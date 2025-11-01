import UserModle from "../../DB/models/user.model.js"
import {asyncHandler} from "../../Utlis/asyncHandle.js"


export const signUp=asyncHandler(async(req,res,next)=>{
    const{first_name,last_name,email,password,gender}=req.body
    const user=await UserModle.findOne({email})
    if(user)return next(new Error("User already exists!!",{cause:409}))
    const createUser=await UserModle.create({
        first_name,last_name,email,password,gender
    })
    return res
        .status(201)
        .json({message:"User Created Successfully",createUser})
})

export const login=asyncHandler(async(req,res,next)=>{
    const{email,password}=req.body
    const user=await UserModle.findOne({email:email,password:password})
    if(!user)return next(new Error("Valide Email or Password"))
    return res
        .status(200)
        .json({message:"login Successfully",user})
})