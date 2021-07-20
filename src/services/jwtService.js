const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
const expiry = Number(process.env.EXPIRY);

exports.createToken = (user) => {
    try {
        let token = jwt.sign({
            username: user.username,
            firstName: user.firstname,
            lastName: user.lastname
        }, secret, {expiresIn: expiry});
        return token
    } catch (err) {
        if(err) throw err;
        return null;
    }
}

exports.decodeToken = (token) => {
    try {
        let decodedToken = jwt.verify(token, secret);
        return decodedToken;
    } catch (err) {
        if(err) throw err;
        return null;
    }
}