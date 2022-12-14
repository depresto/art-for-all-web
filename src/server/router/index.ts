import nc from 'next-connect'
import authRouter from './auth'

const router = nc()
router.get('/', (req, res) => {
  return res.end('Current endpoint: /v1')
})
router.use('/auth', authRouter)

export default router
