const express = require("express");
const { linkRouter } = require("./linkRoute");
const { userRouter } = require("./userRoute");

const rou = express();

rou.use("", userRouter);
rou.use("", linkRouter);

module.exports = { rou };