import mongoose from 'mongoose';
const { Schema } = mongoose;

const ConversationSchema = new Schema({
    id :{
        type : String,
        required : true,
        uniquie : true
    },
    senderId : {
        type : String,
        required : true
    },
    receiverId : {
        type : String,
        required : true
    },
    lastMessage : { 
            type : String,
            required : false

        }

} , {
    timestamps : true
});
export default mongoose.model("Conversation" , ConversationSchema)