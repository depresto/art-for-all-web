import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  const exhibitions = await prisma.exhibition.findMany({
    orderBy: { created_at: 'desc' },
    include: {
      _count: { select: { exhibition_artworks: true } },
    },
  })

  const result = exhibitions.map(e => ({
    id: e.id,
    name: e.name,
    featuredImage: e.featured_image,
    artworkCount: e._count.exhibition_artworks,
  }))

  return res.json(result)
}
