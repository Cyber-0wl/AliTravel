import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import user from "./routes/user.js";
import posts from "./routes/post.js";
import pubs from "./routes/pub.js";

import cors from "cors";

dotenv.config();
const PORT = 5000;
const app = express();
app.use(express.json());
app.use(cors());
// test
app.get("/", async (req, res) => {
  res.json({ msg: "index route" });
});
// user Sign In
// user Sign Up
app.use("/api", user);
// post
app.use("/api/posts", posts);
// pubs
app.use("/api/pub", pubs);


mongoose
  .connect(
    "mongodb+srv://AliFred:alifred@alicluster.yd32q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(PORT, (err) => {
      if (err) return;
      console.log(`Server is running on port : ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
