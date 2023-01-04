const mongoose = require("mongoose");
const connectDB = async () => {
  // const conn = await mongoose.connect(process.env.ATLAS_URI, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });
  const conn = await mongoose.connect(process.env.ATLAS_URI);
  console.log(`MongoDB холбогдлоо : ${conn.connection.host}`);
}
module.exports = { connectDB };