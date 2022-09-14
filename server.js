const express = require("express");
const videoRoute = require("./routes/videoRoute");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");


// express app
const app = express();

//middleware
app.use(express.json());

app.use("/api/videos", videoRoute);
app.use("/api/user", userRoute)

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
