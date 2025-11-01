import BlogModel from "../../DB/models/blog.model.js"
import {asyncHandler} from "../../Utlis/asyncHandle.js"
import UserModle from "../../DB/models/user.model.js"


export const createBlog=asyncHandler(async(req,res,next)=>{
    const{title,content,user_id}=req.body
    const user=await UserModle.findOne({_id:user_id})
    if(!user)return next(new Error("User not Founded",{cause:404}))
    const blog=await BlogModel.create({title,content,user_id})
    return res
        .status(200)
        .json({message:"Blog Created Successfully",blog})
})

export const updateBlog=asyncHandler(async(req,res,next)=>{
    const{id}=req.params
    const{title,content,user_id}=req.body
    const user=await UserModle.findOne({_id:user_id})
    if(!user)return next(new Error("User not Founded!!"))
    const blog=await BlogModel.findById(id)
    if(!blog)return next(new Error("blog not Founded!!"))
    const userBlog=await BlogModel.findOne({user_id:user_id})
    if(!userBlog)return next(new Error("The user is not the blog owner!"))
    const update=await BlogModel.updateOne({title,content})
    return res
        .status(200)
        .json({message:"Blog Update Successfully"})
})

export const deleteBlog=asyncHandler(async(req,res,next)=>{
    const{id}=req.params
    const {user_id}=req.body
    const user=await UserModle.findOne({_id:user_id})
    if(!user)return next(new Error("User not Founded!!"))
    const userBlog=await BlogModel.findOne({user_id:user_id})
    if(!userBlog)return next(new Error("The user is not the blog owner!"))
    const blog=await BlogModel.findOneAndDelete({_id:id})
    if(!blog)return next(new Error("blog not Founded!!"))
    return res
        .status(200)
        .json({message:"Blog Deleted Successfully"})
})

export const getAllBlogs=asyncHandler(async(req,res,next)=>{
    const blogs=await BlogModel.find()
    if(!blogs)return next(new Error("Blogs not Founded!!"))
    return res
        .status(200)
        .json({message:"All Blogs",blogs})
})

export const getOneblog=asyncHandler(async(req,res,next)=>{
    const{id}=req.params
    const blog=await BlogModel.findOne({_id:id})
    if(!blog)return next(new Error("Blog not Founded!!"))
    return res
        .status(200)
        .json({message:"Get Blog Successfully",blog})

})