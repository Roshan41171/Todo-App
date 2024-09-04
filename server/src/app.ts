import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const CORS_ORIGIN1 = "http://localhost:3000";
const CORS_ORIGIN2 = "http://192.168.3.147:3000";

app.use(bodyParser.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [CORS_ORIGIN1, CORS_ORIGIN2],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

import todoRouter from "./routes/todo.route";
app.use("/todo", todoRouter);

app.use("/health", (_, res) => {
  return res.json({ message: "Backend is up and healthy." });
});

export default app;
