import { NextApiRequest, NextApiResponse } from 'next'

import getCurrentUser from '@/libs/getCurrentUser'
import prismaDB from '@/libs/prismaDB'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end()
    }

    await getCurrentUser(req, res)

    const { movieId } = req.query

    if (typeof movieId !== 'string') {
      throw new Error('Invalid Id')
    }

    if (!movieId) {
      throw new Error('Missing Id')
    }

    const movies = await prismaDB.movie.findUnique({
      where: {
        id: movieId,
      },
    })

    return res.status(200).json(movies)
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}
