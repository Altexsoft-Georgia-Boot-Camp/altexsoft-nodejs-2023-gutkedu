import { cacheConfig } from "@config/redis";
import { createClient } from "redis";

const redisClient = createClient({
  url: cacheConfig.redis_url,
});

redisClient.on("error", (err) => console.log("Redis client error: ", err));
redisClient.on("ready", () => console.log("Redis client is ready"));

export { redisClient };
