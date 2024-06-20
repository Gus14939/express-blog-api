const express = require("express");
const app = express();

// Allows POST requests to have JSON body content
app.use(express.json());


app.get("/", (request, response) => {
    response.json({
        message: "Hello world!"
    });
});

const blogRouter = require("./controllers/BlogRouter.js")
app.use("/blogs", blogRouter)

app.get("*", (request, response, next) => {
    response.status(404).json({
        message: "404 Page not find."
    })
})


app.use((error,erquest, response, next) => {
    response.json({
        message:"Error occured!",
        error: error.message
    });
});

module.exports = {
    app
}