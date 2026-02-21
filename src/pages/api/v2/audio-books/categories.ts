import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  const tagName = req.query.tagName as string | undefined
  const limit = req.query.limit ? Number(req.query.limit) : undefined

  const audioBookWhere: any = {}
  if (tagName) {
    audioBookWhere.audio_book_tags = { some: { tag: { name: tagName } } }
  }

  const categories = await prisma.category.findMany({
    where: {
      type: 'audioBook',
      audio_book_categories: {
        some: { audio_book: audioBookWhere },
      },
    },
    include: {
      audio_book_categories: {
        where: { audio_book: audioBookWhere },
        ...(limit ? { take: limit } : {}),
        include: {
          audio_book: {
            select: {
              id: true,
              title: true,
              featured_image_url: true,
              description: true,
              duration: true,
              creator_name: true,
              language: true,
              created_at: true,
              updated_at: true,
            },
          },
        },
      },
    },
  })

  return res.json(
    categories.map(cat => ({
      id: cat.id,
      name: cat.name,
      description: cat.description,
      language: cat.language,
      audioBooks: cat.audio_book_categories.map(abc => ({
        id: abc.audio_book.id,
        title: abc.audio_book.title,
        featuredImageUrl: abc.audio_book.featured_image_url,
        description: abc.audio_book.description,
        duration: abc.audio_book.duration ? Number(abc.audio_book.duration) : 0,
        creatorName: abc.audio_book.creator_name,
        language: abc.audio_book.language,
        createdAt: abc.audio_book.created_at,
        updatedAt: abc.audio_book.updated_at,
      })),
    })),
  )
}
