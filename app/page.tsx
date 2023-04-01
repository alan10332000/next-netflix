import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'

import Navbar from './components/Navbar'

import { authOptions } from '@/pages/api/auth/[...nextauth]'

const Home = async () => {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/auth')

  return <Navbar />
}

export default Home
