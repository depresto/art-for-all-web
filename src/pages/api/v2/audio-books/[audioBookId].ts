import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  const audioBookId = Number(req.query.audioBookId)
  if (!audioBookId) return res.status(400).json({ error: 'Invalid audioBookId' })

  const ab = await prisma.audioBook.findUnique({
    where: { id: audioBookId },
  })

  if (!ab) return res.status(404).json({ error: 'Not found' })

  return res.json({
    id: ab.id,
    title: ab.title,
    featuredImageUrl: ab.featured_image_url,
    description: ab.description,
    content: ab.content,
    duration: ab.duration ? Number(ab.duration) : 0,
    audioUrl: ab.audio_url,
    trackUrl: ab.track_url,
    creatorName: ab.creator_name,
    language: ab.language,
    createdAt: ab.created_at,
    updatedAt: ab.updated_at,
  })
}
