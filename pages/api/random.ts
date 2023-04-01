import { NextApiRequest, NextApiResponse } from 'next'

import prismaDB from '@/libs/prismaDB'
import serverAuth from '@/libs/serverAuth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end()
    }

    await serverAuth(req)

    const moviesCount = await prismaDB.movie.count()
    const randomIndex = Math.floor(Math.random() * moviesCount)

    const randomMovies = await prismaDB.movie.findMany({
      take: 1,
      skip: randomIndex,
    })

    return res.status(200).json(randomMovies[0])
  } catch (error) {
    console.log(error)

    return res.status(500).end()
  }
}
