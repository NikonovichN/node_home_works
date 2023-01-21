import "reflect-metadata"; // We need this in order to use @Decorators

import config from "./config";

import express from "express";

async function startServer() {
  const app = express();

  app
    .listen(config.port, () => {
      console.log(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit(1);
    });
}

startServer();
