 import mongoose from "mongoose";

const helpdeskSchema = new mongoose.Schema({

name:{
type:String,
required:true
},

email:{
type:String,
required:true
},

phone:{
type:String,
required:true
},

query:{
type:String,
required:true
}

},{
timestamps:true
});

export default mongoose.model(
"Helpdesk",
helpdeskSchema
);