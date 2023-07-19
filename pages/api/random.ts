import { NextApiRequest, NextApiResponse } from 'next'

import getCurrentUser from '@/libs/getCurrentUser'
import prismaDB from '@/libs/prismaDB'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end()
    }

    await getCurrentUser(req, res)

    const moviesCount = await prismaDB.movie.count()
    const randomIndex = Math.floor(Math.random() * moviesCount)

    const randomMovies = await prismaDB.movie.findMany({
      take: 1,
      skip: randomIndex,
    })

    return res.status(200).json(randomMovies[0])
  } catch (error) {
    console.log('error', error)
    return res.status(500).end()
  }
}
