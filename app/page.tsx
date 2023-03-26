import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'

import ButtonLogout from './ButtonLogout'
import User from './User'

import { authOptions } from '@/pages/api/auth/[...nextauth]'

const Home = async () => {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/auth')

  return (
    <div className="container mx-auto my-4 px-4 sm:px-0">
      <div className="flex justify-between">
        <h1 className="text-4xl text-white">Netflix Clone</h1>
        <ButtonLogout />
      </div>

      <User />
    </div>
  )
}

export default Home
