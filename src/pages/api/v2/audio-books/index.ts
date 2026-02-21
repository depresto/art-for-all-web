import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  const tagName = req.query.tagName as string | undefined
  const categoryId = req.query.categoryId ? Number(req.query.categoryId) : undefined

  const where: any = {}
  if (tagName) {
    where.audio_book_tags = { some: { tag: { name: tagName } } }
  }
  if (categoryId) {
    where.audio_book_categories = { some: { category_id: categoryId } }
  }

  const audioBooks = await prisma.audioBook.findMany({
    where,
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
  })

  return res.json(
    audioBooks.map(ab => ({
      id: ab.id,
      title: ab.title,
      featuredImageUrl: ab.featured_image_url,
      description: ab.description,
      duration: ab.duration ? Number(ab.duration) : 0,
      creatorName: ab.creator_name,
      language: ab.language,
      createdAt: ab.created_at,
      updatedAt: ab.updated_at,
    })),
  )
}
