import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import userRouter from "./routes/user.js";

const app = express();

app.use(cors());

app.use("/user", userRouter);
app.get("/", (req, res) => {
  res.send("Hello Guys");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect("mongodb://localhost/codedamn", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
