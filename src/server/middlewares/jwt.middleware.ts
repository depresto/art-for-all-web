import { RequestHandler } from 'express'
import { expressjwt as jwt } from 'express-jwt'

const jwtMiddleware: RequestHandler = async (req, res, next) => {
  return jwt({
    secret: process.env.HASURA_JWT_SECRET ?? '',
    algorithms: ['HS256'],
  }).unless({
    path: [
      '/api/v1/auth/logout',
      '/api/v1/auth/register',
      '/api/v1/auth/general-login',
      '/api/v1/auth/social-login',
      '/api/v1/auth/refresh-token',
      '/api/v1/auth/forgot-password',
    ],
  })(req, res, next)
}

export default jwtMiddleware
