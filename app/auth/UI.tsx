'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useState, useCallback } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import Input from './Input'

const UI = () => {
  const router = useRouter()

  const [variant, setVariant] = useState('signIn')
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  })

  const toggleVariant = useCallback(() => {
    if (variant === 'signIn') setVariant('signUp')
    else setVariant('signIn')
  }, [variant])

  const onSubmit: SubmitHandler<FieldValues> = useCallback(
    async (data) => {
      setIsLoading(true)

      try {
        if (variant === 'signUp') {
          const signUpCallback = await fetch('/api/signUp', {
            method: 'POST',
            body: JSON.stringify({ ...data }),
          })
          const status = signUpCallback.status
          const res = await signUpCallback.json()
          if (status === 422) return toast.error(res.error)
        }

        const signInCallback = await signIn('credentials', {
          ...data,
          redirect: false,
          callbackUrl: '/',
        })
        console.log('onSubmit signInCallback', signInCallback)

        if (signInCallback?.error) return toast.error('Invalid credentials!')

        if (signInCallback?.ok) {
          toast.success('Logged in!')
          router.push('/profiles')
        }
      } catch (error) {
        toast.error('Something went wrong!')
      } finally {
        setIsLoading(false)
      }
    },
    [variant, router]
  )

  return (
    <div className="relative h-full w-full bg-[url('/img/hero.jpg')] bg-cover bg-fixed bg-no-repeat">
      <div className="h-full w-full bg-black md:bg-black/50">
        <nav className="px-12 py-5">
          <Image className="h-12" src="/img/logo.png" width={180} height={48} alt="Logo" />
        </nav>

        <div className="container mx-auto">
          <div className="mx-auto mt-2 w-full rounded-md bg-black/50 py-16 px-[5%] md:max-w-md">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <h2 className="mb-8 text-4xl font-bold text-white">{variant === 'signIn' ? 'Sign In' : 'Sign Up'}</h2>
              <div className="flex flex-col gap-4">
                {variant === 'signUp' && (
                  <>
                    <Input
                      id="name"
                      type="text"
                      label="Username"
                      autoComplete="name"
                      required
                      register={register}
                      errors={errors}
                      disabled={isLoading}
                    />
                    {errors?.name && <div className="text-rose-500">Please enter a name.</div>}
                  </>
                )}
                <Input
                  id="email"
                  type="email"
                  label="Email"
                  autoComplete="email"
                  pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g}
                  required
                  register={register}
                  errors={errors}
                  disabled={isLoading}
                />
                {errors?.email && <div className="text-rose-500">Please enter a valid email format.</div>}
                <Input
                  id="password"
                  type="password"
                  label="Password"
                  autoComplete={variant === 'signUp' ? 'new-password' : 'current-password'}
                  pattern={/^.{6,}$/}
                  required
                  register={register}
                  errors={errors}
                  disabled={isLoading}
                />
                {errors?.password && (
                  <div className="text-rose-500">Please enter a password with at least 6 characters.</div>
                )}
              </div>

              <button
                className="mt-10 w-full rounded-md bg-red-600 py-3 font-bold text-white transition hover:bg-red-700"
                type="submit"
                disabled={isLoading}
              >
                {variant === 'signIn' ? 'Sign In' : 'Sign Up'}
              </button>
            </form>

            <div className="mt-8 flex flex-row items-center justify-center gap-4">
              <div
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white transition hover:opacity-80"
                onClick={() => signIn('google', { callbackUrl: '/profiles' })}
              >
                <FcGoogle size={32} />
              </div>
              <div
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white transition hover:opacity-80"
                onClick={() => signIn('github', { callbackUrl: '/profiles' })}
              >
                <FaGithub size={32} />
              </div>
            </div>

            <p className="mt-12 text-neutral-500">
              {variant === 'signIn' ? 'New to Netflix?' : 'Already have an account?'}{' '}
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

export default UI
