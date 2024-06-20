const { app } = require("./server.js");
const { databaseConnect } = require("./utils/database.js");

const PORT =  process.env.PORT || 3001;
// Connect to DB as soon as index.js runs. NOT recommended
// databaseConnect();

app.listen(PORT, () => {
    console.log("Server sucessfully started!")
    // after server succefully starts, connect to the database
    databaseConnect();
})