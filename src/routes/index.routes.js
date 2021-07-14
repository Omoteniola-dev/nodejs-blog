const authRoutes = require("./auth.routes");
const postRoutes = require("./post.routes");

module.exports = (app) => {
    app.use(authRoutes);
    app.use(postRoutes);
};