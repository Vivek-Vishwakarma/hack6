const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(cors());
mongoose
  .connect("mongodb://localhost:27017/hack6", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected"))
  .catch((err) => {
    console.log(err);
  });

app.use("/data", require("./routes/dataRoute.js"));

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
