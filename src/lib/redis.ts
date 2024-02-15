import { Redis } from "@upstash/redis"

export const redis = new Redis({
  url: "https://eu2-bright-escargot-31529.upstash.io",
  token: process.env.REDIS_KEY!,
})

