import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {

        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },


});

const Postmessage = mongoose.model("Postmessage", postSchema);


export default Postmessage;