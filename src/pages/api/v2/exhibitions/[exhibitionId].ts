import { NextApiRequest, NextApiResponse } from 'next'
import { getMemberIdFromRequest } from '../../../../lib/api-utils'
import { prisma } from '../../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  const exhibitionId = Number(req.query.exhibitionId)
  if (!exhibitionId) return res.status(400).json({ error: 'Invalid exhibitionId' })

  const memberId = getMemberIdFromRequest(req)

  const exhibition = await prisma.exhibition.findUnique({
    where: { id: exhibitionId },
    include: {
      exhibition_artworks: {
        orderBy: { artwork_id: 'asc' },
        include: {
          artwork: {
            include: {
              creator: { select: { id: true, name: true } },
              exhibition_artworks: { select: { exhibition_id: true } },
              member_artwork_collections: memberId ? { where: { member_id: memberId }, select: { id: true } } : false,
            },
          },
        },
      },
    },
  })

  if (!exhibition) return res.status(404).json({ error: 'Not found' })

  return res.json({
    id: exhibition.id,
    name: exhibition.name,
    featuredImage: exhibition.featured_image,
    artworkCount: exhibition.exhibition_artworks.length,
    artworks: exhibition.exhibition_artworks.map(ea => ({
      id: ea.artwork.id,
      name: ea.artwork.name,
      title: ea.artwork.name,
      featureImageUrl: ea.artwork.featured_image,
      imageUrls: ea.artwork.images ?? [],
      audioUrl: ea.artwork.speech,
      description: ea.artwork.description,
      creator: ea.artwork.creator,
      material: ea.artwork.material,
      sizing: ea.artwork.size,
      years: ea.artwork.years,
      saved: memberId ? (ea.artwork.member_artwork_collections?.length ?? 0) > 0 : false,
      exhibitionIds: ea.artwork.exhibition_artworks.map(e2 => e2.exhibition_id),
    })),
  })
}
