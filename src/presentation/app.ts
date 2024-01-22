import express from "express";
import { Router } from "./routes/userRoutes";

const app = express();
const port = 3000;

app.use("/user", Router);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
