import { isEmpty } from 'lodash'

import MovieCard from './MovieCard'

import { MovieInterface } from '@/types'

interface MovieListProps {
  data: MovieInterface[]
  title: string
}

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
  if (isEmpty(data)) {
    return null
  }

  return (
    <div className="mt-8 space-y-8 px-4 md:px-12">
      <div>
        <p className="mb-4 text-lg font-semibold text-white md:text-xl lg:text-3xl">{title}</p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
