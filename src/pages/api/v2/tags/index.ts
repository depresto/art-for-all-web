import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  const type = req.query.type as string | undefined

  const tags = await prisma.tag.findMany({
    where: type ? { type } : {},
    select: { id: true, name: true },
  })

  return res.json(tags)
}
