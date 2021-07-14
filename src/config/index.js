const mongoose = require("mongoose");

//database setup
const dbSetup = () => {
    mongoose
        .connect("mongodb://localhost:27017", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .then(() => {
            console.log("Connected to the database successfully!");
        })
        .catch((err) => {
            console.log("Cannot connect to the database!", err);
            process.exit;
        });
};
        


module.exports = dbSetup;