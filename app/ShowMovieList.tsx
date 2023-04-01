'use client'
import MovieList from './components/MovieList'

import useMovieList from '@/hooks/useMovieList'

const ShowMovieList = () => {
  const { data: movies = [] } = useMovieList()

  return <MovieList title="Trending Now" data={movies} />
}

export default ShowMovieList
