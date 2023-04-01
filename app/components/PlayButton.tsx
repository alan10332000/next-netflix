import { PlayIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'

interface PlayButtonProps {
  movieId: string
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className="flex w-auto flex-row items-center rounded-md bg-white py-1 px-2 text-xs font-semibold transition hover:bg-neutral-300 md:py-2 md:px-4 lg:text-lg"
    >
      <PlayIcon className="mr-1 w-4 text-black md:w-7" />
      Play
    </button>
  )
}

export default PlayButton
