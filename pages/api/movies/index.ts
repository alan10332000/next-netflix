import { NextApiRequest, NextApiResponse } from 'next'

import prismaDB from '@/libs/prismaDB'
import serverAuth from '@/libs/serverAuth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end()
    }

    await serverAuth(req)

    const movies = await prismaDB.movie.findMany()

    return res.status(200).json(movies)
  } catch (error) {
    console.log({ error })
    return res.status(500).end()
  }
}
