import mongoose from "mongoose";

const noteSchema= mongoose.Schema(
    {
        title:{type:String,required:true},
        description:{type:String},
        email:{type:String,required:true},
        phone:{type:Number,default:null},
        date: { type: Date, required: true },
        creator:{type:String,required:true},
        createdAt:{
            type: Date,
            default: new Date()
        }
    },
    {
        collection: "note"
    }
)

export default mongoose.model("Notes",noteSchema);
