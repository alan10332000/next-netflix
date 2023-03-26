'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

import useCurrentUser from '@/hooks/useCurrentUser'
import UserAvatarBlue from '@/public/img/default-user-blue.png'
import UserAvatarGreen from '@/public/img/default-user-green.png'
import UserAvatarRed from '@/public/img/default-user-red.png'
import UserAvatarSlate from '@/public/img/default-user-slate.png'

interface UserCardProps {
  name: string
}

const images = [UserAvatarBlue, UserAvatarRed, UserAvatarSlate, UserAvatarGreen]

const UserCard: React.FC<UserCardProps> = ({ name }) => {
  const imgSrc = images[Math.floor(Math.random() * 4)]

  return (
    <div className="group mx-auto w-44 flex-row">
      <div className="flex h-44 w-44 items-center justify-center overflow-hidden rounded-md border-2 border-transparent group-hover:cursor-pointer group-hover:border-white">
        <Image
          className="h-max w-max select-none object-contain"
          src={imgSrc}
          width={200}
          height={200}
          alt="user-avatar"
        />
      </div>
      <div className="mt-4 text-center text-2xl text-gray-400 group-hover:text-white">{name}</div>
    </div>
  )
}

const UI = () => {
  const router = useRouter()
  const { data: currentUser } = useCurrentUser()

  const selectProfile = useCallback(() => {
    router.push('/')
  }, [router])

  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-center text-3xl text-white md:text-6xl">Who&apos;s watching?</h1>
        <div className="mt-10 flex items-center justify-center gap-8">
          <div onClick={() => selectProfile()}>
            <UserCard name={currentUser?.name} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UI
