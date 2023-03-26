import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'

import UI from './UI'

import { authOptions } from '@/pages/api/auth/[...nextauth]'

const Profiles = async () => {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/auth')

  return <UI />
}

export default Profiles
