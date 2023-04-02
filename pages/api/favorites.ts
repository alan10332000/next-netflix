import { NextApiRequest, NextApiResponse } from 'next'

import prismaDB from '@/libs/prismaDB'
import serverAuth from '@/libs/serverAuth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end()
    }

    const { currentUser } = await serverAuth(req)

    const favoritesMovies = await prismaDB.movie.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds,
        },
      },
    })

    return res.status(200).json(favoritesMovies)
  } catch (error) {
    console.log('error', error)
    return res.status(500).end()
  }
}
