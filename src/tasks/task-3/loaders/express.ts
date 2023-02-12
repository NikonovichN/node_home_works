import express from "express";
import morgan from "morgan";
import winston from "winston";
import expressWinston from "express-winston";
import routes, { morganFormat } from "../api";

export default ({ app }: { app: express.Application }) => {
  app.get("/status", (req, res) => {
    res.status(200).end();
  });

  app.head("/status", (req, res) => {
    res.status(200).end();
  });

  // Transforms the raw string of req.body into json
  app.use(express.json());

  app.use("", routes());

  // loggers
  app.use(
    expressWinston.errorLogger({
      transports: [new winston.transports.Console({})],
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
      ),
    })
  );

  app.use(morgan(morganFormat));

  // Error handling
  app.use((err, req, res, next) => {
    res.status(500).send("Something broke!");
  });
};
