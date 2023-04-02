import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'

import UI from './UI'

import { authOptions } from '@/pages/api/auth/[...nextauth]'

const WatchId = async ({ params }: { params: { slug: string } }) => {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/auth')

  const movieId = params.slug

  return <UI movieId={movieId} />
}

export default WatchId
