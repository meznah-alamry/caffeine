require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MongoDB,
  { useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify :true },
  () => {
    console.log("mongoDb is connect");
  }
);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/user", require("./routes/user"));
app.use("/api/product", require("./routes/product"));
app.use("/api/article", require("./routes/article"));

app.listen(PORT, () => console.log(`server running in ${PORT}`));