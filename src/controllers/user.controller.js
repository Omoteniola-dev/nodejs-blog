const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { createToken, decodeToken } = require("../services/jwtService");

exports.registerUser = async(req, res) => {
    try{
        const newUser = await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            email: req.body.email,
            socials: req.body.socials,
            about: req.body.about
        });
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        newUser.password = hashedPassword;
        await newUser.save();
        
        let token = createToken(newUser);
        return res.status(200).json({ message: "New user created", token});
    }
    catch(err){
        throw err;
    }
}

exports.loginUser = (req, res) => {
    return null
};