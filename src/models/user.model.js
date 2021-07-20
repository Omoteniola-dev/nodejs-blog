const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    socials: {
        twitter: {
            url: { type: String }
        },
        instagram: {
            url: { type: String }
        },
        facebook: {
            url: { type: String }
        }
    },
    picture: {
        url: {
            type: String
            }
        },
    about: {
        type: String
    },
    password: {
        type: String
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;