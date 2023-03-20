import { AppError } from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";
import { redisClient } from "@shared/infra/redis/client";
import { IGetRepositoryResponseDTO } from "@modules/dtos/IOctokitDTO";

interface IResponse {
  RepositoryData: IGetRepositoryResponseDTO;
  isCached: boolean;
}

export async function isRepoCached(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const repo = req.query.repo as string;

  const data = await redisClient.get(repo).catch((err) => {
    throw new AppError("redis error", err);
  });

  if (data != null) {
    return res
      .status(200)
      .send({ RepositoryData: JSON.parse(data), isCached: true } as IResponse);
  } else {
    return next();
  }
}
