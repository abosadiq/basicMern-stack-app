import express from "express";
import { connectToDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

import cors from "cors";
connectToDB();
const app = express();

app.use(cors());
const PORT = 9500;
app.use(express.json());

app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
