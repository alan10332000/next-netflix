import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'

import UI from './UI'

import { authOptions } from '@/pages/api/auth/[...nextauth]'

const Auth = async () => {
  const session = await getServerSession(authOptions)
  if (session) redirect('/')

  return <UI />
}

export default Auth
