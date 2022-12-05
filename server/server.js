const app = require("./index");
const { connectDB } = require("./config/db");
const port = process.env.PORT || 5001;
connectDB();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}.`)
});
