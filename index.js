const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

app.use("*", (_, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => {
    console.log("listening on port " + port);
});

// console.log("alive");
// console.log(__dirname);
// console.log(__filename);
// console.log(process.env.USERNAME);
// console.log(process.env.PORT);
// console.log(dotenv);
// console.log(dotenv.PORT);
// console.log(process.env.FOOD);
