import mongoose, { Schema } from "mongoose"

const UserSchema=new Schema(
    {
       
        first_name:{
            type:String,
            required:true,
            trim:true,
            minlength:[3,"First name must be at least 3 characters long"],
            maxlength:[20,"First name must be at most 3 characters long"]
         },
          last_name:{
            type:String,
            required:true,
            trim:true,
            minlength:[3,"Last name must be at least 3 characters long"],
            maxlength:[20,"Last name must be at most 3 characters long"]
         },
         email:{
            type:String,
            required:true,
            lowercase:true,
            tirm:true,
            unique:true
         },
         password:{
            type:String,
            required:true
         },
         gender:{
            type:String,
            enum:{
                values:["male","female"],
                message:"gender must be male or female"
            },
            default:"male"
         },
         confirm_email:Date
    },
    {
        timestamps:true
    }
)

const UserModle=mongoose.models.users||mongoose.model("users",UserSchema)
export default UserModle