'use client'
import { signOut } from 'next-auth/react'

const ButtonLogout = () => {
  return (
    <button className="rounded bg-white p-2" onClick={() => signOut()}>
      Logout
    </button>
  )
}

export default ButtonLogout
