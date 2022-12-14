import { RequestHandler } from 'express'
import { expressjwt as jwt } from 'express-jwt'

const jwtMiddleware: RequestHandler = async (req, res, next) => {
  return jwt({
    secret: process.env.HASURA_JWT_SECRET ?? '',
    algorithms: ['HS256'],
  }).unless({
    path: [
      '/v1/auth/logout',
      '/v1/auth/register',
      '/v1/auth/general-login',
      '/v1/auth/social-login',
      '/v1/auth/refresh-token',
      '/v1/auth/forgot-password',
    ],
  })(req, res, next)
}

export default jwtMiddleware
