import cacheConfig from "@config/redis";
import { createClient } from "redis";

const client = createClient({
  url: cacheConfig.redis_url,
});

client.on("error", (err) => console.log("Redis client error: ", err));
client.on("ready", () => console.log("Redis client is ready"));

export { client };
