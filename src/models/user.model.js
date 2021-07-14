const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    socials: {
        type:{}
    },
    picture: {
        url: {
            type: String
            }
        },
    profile: {
        type: String
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;