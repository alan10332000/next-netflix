'use client'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

import PlayButton from './PlayButton'

import useBillboard from '@/hooks/useBillboard'

const Billboard: React.FC = () => {
  const { data } = useBillboard()

  return (
    <div className="relative h-[56.25vw]">
      <video
        poster={data?.thumbnailUrl}
        className="h-[56.25vw] w-full object-cover brightness-[60%] transition duration-500"
        autoPlay
        muted
        loop
        src={data?.videoUrl}
      />
      <div className="absolute top-[30%] ml-4 md:top-[40%] md:ml-16">
        <p className="h-full w-[50%] text-xl font-bold text-white drop-shadow-xl md:text-5xl lg:text-6xl">
          {data?.title}
        </p>
        <p className="mt-3 w-[90%] text-[8px] text-white drop-shadow-xl md:mt-8 md:w-[80%] md:text-lg lg:w-[50%]">
          {data?.description}
        </p>
        <div className="mt-3 flex flex-row items-center gap-3 md:mt-4">
          <PlayButton movieId={data?.id} />
          <button className="flex w-auto flex-row items-center rounded-md bg-white/30 py-1 px-2 text-xs font-semibold text-white transition hover:bg-white/20 md:py-2 md:px-4 lg:text-lg">
            <InformationCircleIcon className="mr-1 w-4 md:w-7" />
            More Info
          </button>
        </div>
      </div>
    </div>
  )
}
export default Billboard
