import UserModle from "../../DB/models/user.model.js"
import { asyncHandler } from "../../Utlis/asyncHandle.js"

export const updateUser=asyncHandler(async(req,res,next)=>{
    const{id}=req.params
    const user=await UserModle.findOneAndUpdate({_id:id},{$set:{...req.body}})
    if(!user)return next(new Error("User not founded!!",{cause:404}))
    return res
        .status(200)
        .json({message:"User Update Successfully"})
})

export const deleteUser=asyncHandler(async(req,res,next)=>{
    const{id}=req.params
    const user=await UserModle.findOneAndDelete({_id:id})
    if(!user)return next(new Error("User not Founded!!"))
    return res
        .status(200)
        .json({message:"User Deleted Successfully"})
})

export const getAllUser=asyncHandler(async(req,res,next)=>{
    const user=await UserModle.find()
    if(!user)return next(new Error("Not Found Users"))
    return res
        .status(200)
        .json({message:"All Users",user})
})

export const getUserById=asyncHandler(async(req,res,next)=>{
    const {id}=req.params
    const user=await UserModle.findById(id)
    if(!user)return next(new Error("User Not Founded!!",{cause:404}))
    return res
        .status(200)
        .json({message:"User Found Successfully",user})
})