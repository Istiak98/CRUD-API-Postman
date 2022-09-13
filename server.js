const express = require("express");
const router = require("./routes/videos");
const mongoose = require("mongoose");

// express app
const app = express();

//middleware
app.use(express.json());

app.use("/videos", router);

// routes
app.get("/", (req, res) => {
  res.json({ message: "hello world!" });
});

app.post("/", (req, res) => {
  res.json({ message: "hello from post" });
});

// connect to DB
mongoose
  .connect(
    "mongodb+srv://miniYT:miniYT@cluster0.kydip.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    // listen for request
    app.listen(5000, () => {
      console.log("I on listen for port 5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
