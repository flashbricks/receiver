const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("json spaces", 4);

const PORT = 3000;
const TASK_TIMEOUT = 30000;

var robot = require("robotjs");
var running = false;

app.post("/", (req, res) => {
    if(typeof req.body.sku == "string" && typeof req.body.size == "string" && !running) {
        robot.typeString("asd");
        robot.typeString(req.body.sku);
        robot.typeString("f");
        robot.typeString("asq");
        robot.typeString(req.body.size);
        robot.typeString("f");
        robot.typeString("w");

        running = true;
        setTimeout(function() {
            robot.typeString("e");
            running = false;
        }, TASK_TIMEOUT);

        res.status(200).json({ message: `Task Started` });
    } else {
        res.status(400).json({ message: `Incorrect Params Or Bot Busy`});
    }
});

app.post("/test", (req, res) => {
    res.status(200).json({ message: `Success` });
});

app.listen(PORT, () => {
    console.log(`Server Listening On Port ${PORT}`);
});