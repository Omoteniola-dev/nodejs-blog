const express = require("express");
const dbSetup = require("./src/config");
const app = express();
const PORT = 5000;

dbSetup();

app.use(express.json());

app.get("/", (req, res) => {
    return res.status(200).json({ message: "Welcome to my blog"});
})


require("./src/routes/index.routes.js")(app);
app.listen((PORT), () => console.log(`Server is running on port ${PORT}`));