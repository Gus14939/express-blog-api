const { app } = require("./server.js")

const PORT =  process.env.PORT || 3100;

app.listen(PORT, () => {
    console.log("Server sucessfully started!")
})