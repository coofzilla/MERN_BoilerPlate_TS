import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { mongoURI } from "./config/dev";

const app = express();

(async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("CONNECTED TO MONGODB");
  } catch (err) {
    console.log("ERROR CONNECTING", err);
  }
})();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

app.listen(4000, () => {
  console.log("LISTENING ON 4000");
});
