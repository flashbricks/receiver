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

app.post('/', (req, res) => {
    console.log(req.body);

    robot.keyToggle("alt", "down")
    robot.keyToggle("tab", "down")
    robot.keyToggle("tab", "up")
    robot.keyToggle("alt", "up")

    res.status(200).json({ message: `Success` })
});

app.listen(PORT, () => {
    console.log(`App Listening On Port ${PORT}`);
});