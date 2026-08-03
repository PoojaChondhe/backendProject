import mongoose ,{Schema} from "mongoose";

const userSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true

        },
         email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true

        },
         fullname:{
            type:String,
            required:true,
            
            lowercase:true,
          
            index:true

        },
        avatar:{
            type:String,
            required:true
        },
        coverImage:{
            type:String,
        },
warchHistory:{
    type:Schema.Types.ObjectId,
    ref:"video"
},
     password:{
        type:String,
        required:[true.valueOf,"passseord is required"]
     },
     refreshToken:{
        type:String,

     },
     
       

    },{timestamps:true}
)

export default mongoose.model("User", userSchema);