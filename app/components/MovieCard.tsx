import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { PlayIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

import FavoriteButton from './FavoriteButton'

import useInfoModalStore from '@/hooks/useInfoModalStore'
import { MovieInterface } from '@/types'

interface MovieCardProps {
  data: MovieInterface
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const router = useRouter()
  const { openModal } = useInfoModalStore()

  const redirectToWatch = useCallback(() => router.push(`/watch/${data.id}`), [router, data.id])

  return (
    <div className="group relative col-span-1 h-[12vw] bg-zinc-900">
      <Image
        src={data.thumbnailUrl}
        layout="fill"
        alt="movie"
        className="duration pointer-events-none h-[12vw] w-full cursor-pointer rounded-md object-cover shadow-xl transition delay-300 group-hover:opacity-90 sm:group-hover:opacity-0"
        onClick={redirectToWatch}
      />
      <div className="invisible absolute top-0 z-10 w-full scale-0 opacity-0 transition delay-300 duration-300 group-hover:translate-y-[-6vw] group-hover:translate-x-[2vw] group-hover:scale-110 group-hover:opacity-100 sm:visible">
        <div className="relative h-[12vw] w-full">
          <Image
            onClick={redirectToWatch}
            src={data.thumbnailUrl}
            layout="fill"
            alt="movie"
            className="duration cursor-pointer rounded-t-md object-cover shadow-xl transition"
          />
        </div>
        <div className="absolute z-10 w-full rounded-b-md bg-zinc-800 p-2 shadow-md transition lg:p-4">
          <div className="flex flex-row items-center gap-3">
            <div
              onClick={redirectToWatch}
              className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white transition hover:bg-neutral-300 lg:h-10 lg:w-10"
            >
              <PlayIcon className="w-4 text-black lg:w-6" />
            </div>
            <FavoriteButton movieId={data.id} />
            <div
              onClick={() => openModal(data?.id)}
              className="group/item ml-auto flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-white transition hover:border-neutral-300 lg:h-10 lg:w-10"
            >
              <ChevronDownIcon className="w-4 text-white group-hover/item:text-neutral-300 lg:w-6" />
            </div>
          </div>
          <p className="mt-4 font-semibold text-green-400">
            New <span className="text-white">2023</span>
          </p>
          <div className="mt-4 flex flex-row items-center gap-2">
            <p className="text-[10px] text-white lg:text-sm">{data.duration}</p>
          </div>
          <div className="mt-4 flex flex-row items-center gap-2 text-[8px] text-white lg:text-sm">
            <p>{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
