import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'

import Billboard from './components/Billboard'
import Navbar from './components/Navbar'
import ShowMovieList from './ShowMovieList'

import { authOptions } from '@/pages/api/auth/[...nextauth]'

const Home = async () => {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/auth')

  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <ShowMovieList />
      </div>
    </>
  )
}

export default Home
