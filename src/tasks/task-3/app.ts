import "reflect-metadata";

import config from "./config";
import express from "express";
import loaders from "./loaders";
import { terminate } from "./utils";

async function startServer() {
  const app = express();

  await loaders({ expressApp: app });

  app
    .listen(config.port, () => {
      console.log(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
    })
    .on("error", terminate);

  process.on("uncaughtException", terminate);
}

startServer();
