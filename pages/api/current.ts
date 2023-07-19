import { NextApiRequest, NextApiResponse } from 'next'

import getCurrentUser from '@/libs/getCurrentUser'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end()
    }

    const currentUser = await getCurrentUser(req, res)

    return res.status(200).json(currentUser)
  } catch (error) {
    console.log('error', error)
    return res.status(500).end()
  }
}
