import RedisStore from 'connect-redis'
import session from 'express-session'
import Redis from 'ioredis'
import ms from 'ms'

export const createRedisClient = () => {
  const redisClient = process.env.REDIS_URL ? new Redis(process.env.REDIS_URL) : null
  return redisClient
}

export const createSessionMiddleware = () => {
  const redisClient = createRedisClient()
  return session({
    secret: process.env.SESSION_SECRET || '',
    store: new RedisStore({ client: redisClient }),
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === 'development' ? 'strict' : 'none',
      secure: process.env.NODE_ENV === 'development' ? false : true,
      maxAge: ms('1 month'),
    },
    proxy: true,
  })
}
