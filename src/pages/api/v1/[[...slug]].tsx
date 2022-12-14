import nc from 'next-connect'
import { createSessionMiddleware } from '../../../server/middlewares/auth.middleware'
import corsMiddleware from '../../../server/middlewares/cors.middleware'
import jwtMiddleware from '../../../server/middlewares/jwt.middleware'
import router from '../../../server/router'

const sessionMiddleware = createSessionMiddleware()

const handler = nc().use(corsMiddleware).use(sessionMiddleware).use(jwtMiddleware).use('/api/v1', router)

export const config = {
  api: {
    externalResolver: true,
  },
}
export default handler
