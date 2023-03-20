import "reflect-metadata";
import "express-async-errors";
import express, { Response, Request, NextFunction } from "express";
import helmet from "helmet";

import "@shared/container";
import { router } from "@shared/infra/http/routes/index";
import { AppError } from "@shared/errors/AppError";
import { redisClient } from "@shared/infra/redis/client";
import { createRedisOmClient } from "../redis/redis-om";

redisClient.connect();

createRedisOmClient();

const app = express();

app.use(express.json());

app.use(helmet());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
