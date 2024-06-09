import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    sender : {type : mongoose.Schema.Types.ObjectId, ref : 'User', required : true},
    recipient : {type : mongoose.Schema.Types.ObjectId, ref : 'User', required : true},
    text : {type : String, required : true},
}, {timestamps : true})

export const Message = mongoose.model('Message', messageSchema);