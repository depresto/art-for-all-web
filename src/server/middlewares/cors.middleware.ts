import cors, { CorsOptions } from 'cors'

const corsOptions: CorsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    // TODO: check the origin in the app
    callback(null, true)
  },
}
const corsMiddleware = cors(corsOptions)

export default corsMiddleware
