import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'

import User from '../User'

import { authOptions } from '@/pages/api/auth/[...nextauth]'

const Profiles = async () => {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/auth')

  return (
    <div className="container mx-auto">
      <User />
    </div>
  )
}

export default Profiles
