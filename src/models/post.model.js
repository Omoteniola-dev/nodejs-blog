const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = Schema({
    id: {
        type: String,
    },
    title: {
        type: String
    },
    url: {
        type: String
    },
    content: {
        type: String
    },
    tags: {
        type: []
    },
    author: {
        type: String
    }
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;