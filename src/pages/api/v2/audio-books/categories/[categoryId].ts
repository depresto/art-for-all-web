import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  const categoryId = Number(req.query.categoryId)
  if (!categoryId) return res.status(400).json({ error: 'Invalid categoryId' })

  const detailed = req.query.detailed === 'true'

  const audioBookSelect = detailed
    ? {
        id: true as const,
        title: true as const,
        featured_image_url: true as const,
        description: true as const,
        content: true as const,
        duration: true as const,
        audio_url: true as const,
        track_url: true as const,
        creator_name: true as const,
        language: true as const,
        created_at: true as const,
        updated_at: true as const,
      }
    : {
        id: true as const,
        title: true as const,
        featured_image_url: true as const,
        description: true as const,
        duration: true as const,
        creator_name: true as const,
        language: true as const,
        created_at: true as const,
        updated_at: true as const,
      }

  const category = await prisma.category.findUnique({
    where: { id: categoryId },
    include: {
      audio_book_categories: {
        include: {
          audio_book: { select: audioBookSelect },
        },
      },
    },
  })

  if (!category) return res.status(404).json({ error: 'Not found' })

  return res.json({
    id: category.id,
    name: category.name,
    description: category.description,
    language: category.language,
    audioBooks: category.audio_book_categories.map(abc => {
      const ab = abc.audio_book as any
      return {
        id: ab.id,
        title: ab.title,
        featuredImageUrl: ab.featured_image_url,
        description: ab.description,
        duration: ab.duration ? Number(ab.duration) : 0,
        creatorName: ab.creator_name,
        language: ab.language,
        createdAt: ab.created_at,
        updatedAt: ab.updated_at,
        ...(detailed
          ? {
              audioUrl: ab.audio_url,
              trackUrl: ab.track_url,
              content: ab.content,
            }
          : {}),
      }
    }),
  })
}
