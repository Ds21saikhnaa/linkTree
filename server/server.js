const express = require("express");
const cors = require('cors');
// const mongoose = require('mongoose');
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const { userRouter } = require("./routes/userRoute");
const { errorHandler } = require("./middleware/errorHandler");


const app = express();
const port = process.env.PORT || 5001;
dotenv.config({path: './config/config.env'});
connectDB();
app.use(express.json());
app.use(cors());

app.use("/api/v1/",userRouter);
app.use(errorHandler);


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}.`)
});
