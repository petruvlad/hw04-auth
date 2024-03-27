const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const usersRouter = require("./routes/users");


const app = express();
app.use(express.json());


const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Routes
app.use("/users", usersRouter);


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
