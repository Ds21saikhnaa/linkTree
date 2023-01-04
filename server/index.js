// const express = require("express");
// const cors = require('cors');
// const dotenv = require("dotenv");
// // const { connectDB } = require("./config/db");
// const { userRouter } = require("./routes/userRoute");
// const { linkRouter } = require("./routes/linkRoute");
// const { errorHandler } = require("./middleware/errorHandler");
// const { connectDB } = require("./config/db");


// const app = express();
// app.use(cors());
// dotenv.config({ path: './.env' });
// app.use(express.json());
// const port = process.env.PORT || 5001;

// connectDB();

// app.use("/api/v1/", userRouter);
// app.use("/api/v1/", linkRouter);
// app.get("/", (req, res) => {
//   res.send("Hello Vercel!!!");
// });

// app.use(errorHandler);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}.`)
// });

// module.exports = app;