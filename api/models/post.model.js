import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
    userId : {
        type : String,
        required : true
    }
    , title : {
        type : String,
        required : true
    }
    , description : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true

    },
    cover : {
        type : String,
        required : true
    },
    images :{
        type : [String],
        required : false
    }
} , {
    timestamps : true
});
export default mongoose.model("Post" , postSchema)