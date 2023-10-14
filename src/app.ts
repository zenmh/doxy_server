import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { routes } from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

const app: Application = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Routes
app.use("/api/v1", routes);

// Global Error Handler
app.use(globalErrorHandler);

// Test Route
app.use((req: Request, res: Response) => {
  res.json("Doc Savvy On Fire 🔥 💧 🔥");
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Not Found !!",
    errorMessages: [{ path: req.originalUrl, message: "Api Not Found !!" }],
  });

  next();
});

export default app;
