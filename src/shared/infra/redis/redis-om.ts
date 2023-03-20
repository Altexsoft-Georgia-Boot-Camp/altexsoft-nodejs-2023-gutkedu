import { cacheConfig } from "@config/redis";
import { RepoSchema } from "@modules/entities/Repo";
import { Client } from "redis-om";

export const redisOmClient = new Client();

export const createRedisOmClient = async () => {
  if (!redisOmClient.isOpen()) {
    await redisOmClient.open(cacheConfig.redis_url);
    console.log("Redis OM client is ready");
  }
};
