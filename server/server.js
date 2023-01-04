// const app = require("./index");
// const { connectDB } = require("./config/db");
// const port = process.env.PORT || 5001;
// connectDB();
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}.`)
// });

const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
const { errorHandler } = require("./middleware/errorHandler");
const { connectDB } = require("./config/db");
const { rou } = require("./routes");
const http = require("http");
const { default: mongoose } = require("mongoose");


const app = express();
app.use(cors());
dotenv.config({ path: './.env' });
app.use(express.json());


app.use("/api/v1/", rou);
app.get("/", (req, res) => {
  res.send("Hello Vercel!!!");
});
app.use(errorHandler);

const port = process.env.PORT || 5001;
const server = http.createServer(app);

mongoose.connect(process.env.ATLAS_URI).then(() => {
  console.log("Mongodb connected");
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}).catch((err) => {
  console.log({ err });
  process.exit(1);
});
// connectDB();

// server.listen(port, () => {
//   console.log(`Example app listening on port ${port}.`)
// });

// module.exports = app;
