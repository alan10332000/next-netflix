'use client'
import Image from 'next/image'
import { useState, useCallback } from 'react'

import Input from '@/components/Input'

const Auth = () => {
  const [variant, setVariant] = useState('signIn')

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => (currentVariant === 'signIn' ? 'signUp' : 'signIn'))
    setEmail('')
    setName('')
    setPassword('')
  }, [])

  return (
    <div className="relative h-full w-full bg-[url('/img/hero.jpg')] bg-cover bg-fixed bg-no-repeat">
      <div className="h-full w-full bg-black md:bg-black/50">
        <nav className="px-12 py-5">
          <Image className="h-12" src="/img/logo.png" width={180} height={48} alt="Logo" />
        </nav>

        <div className="container mx-auto">
          <div className="mx-auto mt-2 w-full rounded-md bg-black/50 py-16 px-[5%] md:max-w-md">
            <h2 className="mb-8 text-4xl font-bold text-white">{variant === 'signIn' ? 'Sign In' : 'Sign Up'}</h2>

            <div className="flex flex-col gap-4">
              {variant === 'signUp' && (
                <Input
                  id="name"
                  type="text"
                  label="Username"
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
              )}
              <Input
                id="email"
                type="email"
                label="Email or phone number"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
              <Input
                id="password"
                type="password"
                label="Password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              />
            </div>

            <button className="mt-10 w-full rounded-md bg-red-600 py-3 font-bold text-white transition hover:bg-red-700">
              {variant === 'signIn' ? 'Sign In' : 'Sign up'}
            </button>

            <p className="mt-12 text-neutral-500">
              {variant === 'signIn' ? 'New to Netflix?' : 'Already have an account?'}
              {''}
              <span onClick={toggleVariant} className="ml-1 cursor-pointer text-white hover:underline">
                {variant === 'signIn' ? 'Sign up now' : 'Sign In'}
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
