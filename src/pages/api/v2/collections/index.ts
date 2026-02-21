import { NextApiRequest, NextApiResponse } from 'next'
import { requireMemberId } from '../../../../lib/api-utils'
import { prisma } from '../../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const memberId = Number(req.query.memberId)
    if (!memberId) return res.status(400).json({ error: 'memberId required' })

    const collections = await prisma.memberArtworkCollection.findMany({
      where: { member_id: memberId },
      include: {
        artwork: {
          include: {
            creator: { select: { id: true, name: true } },
            exhibition_artworks: { select: { exhibition_id: true } },
            member_artwork_collections: {
              where: { member_id: memberId },
              select: { id: true },
            },
          },
        },
      },
    })

    const result = collections.map(c => ({
      id: c.artwork.id,
      name: c.artwork.name,
      title: c.artwork.name,
      featureImageUrl: c.artwork.featured_image,
      imageUrls: c.artwork.images ?? [],
      audioUrl: c.artwork.speech,
      description: c.artwork.description,
      creator: c.artwork.creator,
      material: c.artwork.material,
      sizing: c.artwork.size,
      years: c.artwork.years,
      saved: (c.artwork.member_artwork_collections?.length ?? 0) > 0,
      exhibitionIds: c.artwork.exhibition_artworks.map(ea => ea.exhibition_id),
    }))

    return res.json(result)
  }

  if (req.method === 'POST') {
    const memberId = requireMemberId(req, res)
    if (!memberId) return

    const artworkId = Number(req.body.artworkId)
    if (!artworkId) return res.status(400).json({ error: 'artworkId required' })

    const record = await prisma.memberArtworkCollection.create({
      data: { member_id: memberId, artwork_id: artworkId },
    })
    return res.json({ id: record.id })
  }

  if (req.method === 'DELETE') {
    const memberId = requireMemberId(req, res)
    if (!memberId) return

    const artworkId = Number(req.body.artworkId)
    if (!artworkId) return res.status(400).json({ error: 'artworkId required' })

    await prisma.memberArtworkCollection.deleteMany({
      where: { member_id: memberId, artwork_id: artworkId },
    })
    return res.json({ success: true })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
