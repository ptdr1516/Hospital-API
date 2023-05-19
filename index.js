const express = require("express");
const app = express();
const port = 8000;


//read requests
app.use(express.urlencoded({ extended: true }));

//use express router
app.use("/", require("./routes"));

app.listen(port, function (error) {
    if (error) {
        console.log("Error :", error);
    } else {
        console.log(`Server is running on port: ${port}`);
    }
});
