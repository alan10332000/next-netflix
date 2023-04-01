'use client'
import useCurrentUser from '@/hooks/useCurrentUser'

const User = () => {
  const { data: user } = useCurrentUser()

  return <div className="text-4xl text-white">Logged in as: {user?.name}</div>
}

export default User
