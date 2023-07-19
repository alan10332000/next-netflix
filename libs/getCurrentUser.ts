import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'

import prismaDB from '@/libs/prismaDB'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export async function getSession(req: NextApiRequest, res: NextApiResponse) {
  return await getServerSession(req, res, authOptions)
}

export default async function getCurrentUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = await getSession(req, res)

    if (!session?.user?.email) return null

    const currentUser = await prismaDB.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    })

    if (!currentUser) return null

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString() || null,
    }
  } catch (error: any) {
    return null
  }
}
