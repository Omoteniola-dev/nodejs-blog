const express = require("express");
const dbSetup = require("./src/config");
const app = express();
const PORT = 5000;

dbSetup();

app.use(express.json());

app.get("/", () => {
    return res.status(200).json({ message: "Welcome to my blog"});
})

const routes = require("./src/routes/index.routes.js");
routes(app);
app.listen((PORT), () => console.log(`Server is running on port ${PORT}`));