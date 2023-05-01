import mongoose from 'mongoose';
const { Schema } = mongoose;

const MessageSchema = new Schema({
    conversationId :{
        type : String,
        required : true
    },
    senderId : {
        type : String,
        required : true
    },
    desc : {
        type : String,
        required : true
    }
} , {
    timestamps : true
});
export default mongoose.model("Message" , MessageSchema)