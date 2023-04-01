import Image from 'next/image'
import { signOut } from 'next-auth/react'

import useCurrentUser from '@/hooks/useCurrentUser'
import UserAvatarBlue from '@/public/img/default-user-blue.png'

interface AccountMenuProps {
  visible?: boolean
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data: currentUser } = useCurrentUser()

  if (!visible) {
    return null
  }

  return (
    <div className="absolute top-14 right-0 flex w-56 flex-col border-2 border-gray-800 bg-black py-5">
      <div className="flex flex-col gap-3">
        <div className="group/item flex w-full flex-row items-center gap-3 px-3">
          <Image
            className="h-max w-max select-none rounded-md"
            src={UserAvatarBlue}
            width={32}
            height={32}
            alt="user-avatar"
          />
          <p className="text-sm text-white group-hover/item:underline">{currentUser?.name}</p>
        </div>
      </div>
      <hr className="my-4 h-px border-0 bg-gray-600" />
      <div onClick={() => signOut()} className="px-3 text-center text-sm text-white hover:underline">
        Sign out of Netflix
      </div>
    </div>
  )
}

export default AccountMenu
