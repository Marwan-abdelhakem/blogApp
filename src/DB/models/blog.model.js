import mongoose, { Schema } from "mongoose"

const blogSchema=new Schema(
    {
        title:{
            type:String,
            required:true,
            trim:true,
            minlength:[3,"First name must be at least 3 characters long"],
            maxlength:[20,"First name must be at most 3 characters long"]
        },
        content:{
            type:String,
            required:true,
            trim:true,
            minlength:[3,"First name must be at least 3 characters long"],
            maxlength:[20,"First name must be at most 3 characters long"]
        },
        user_id:{
            type:mongoose.Schema.ObjectId,
            ref:"users",
            required:true
        }
    },
    {
        timestamps:true
    }
)

const BlogModel=mongoose.models.blogs||mongoose.model("blogs",blogSchema)
export default BlogModel