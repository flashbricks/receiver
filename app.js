const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("json spaces", 4);

const PORT = 3000;

var robot = require("robotjs");

app.post("/", (req, res) => {
    if(typeof req.body.sku == "string" && typeof req.body.size == "string") {
        robot.typeString("asd");
        robot.typeString(req.body.sku);
        robot.typeString("f");
        robot.typeString("asq");
        robot.typeString(req.body.size);
        robot.typeString("f");
        robot.typeString("w");

        res.status(200).json({ message: `Task Started` })
    } else {
        res.status(400).json( {message: `Incorrect Params`} )
    }
});

app.post("/test", (req, res) => {
    res.status(200).json({ message: `Success` });
});

app.listen(PORT, () => {
    console.log(`App Listening On Port ${PORT}`);
});