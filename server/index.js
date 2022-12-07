const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
// const { connectDB } = require("./config/db");
const { userRouter } = require("./routes/userRoute");
const { linkRouter } = require("./routes/linkRoute");
const { errorHandler } = require("./middleware/errorHandler");


const app = express();
app.use(cors());
dotenv.config({ path: './config/config.env' });
app.use(express.json());

app.use("/api/v1/", userRouter);
app.use("/api/v1/", linkRouter);
app.get("/", (req, res) => {
  res.send("Hello Vercel!!!");
});
app.use(errorHandler);

module.exports = app;