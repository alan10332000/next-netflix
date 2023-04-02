'use client'
import MovieList from './components/MovieList'

import useFavorites from '@/hooks/useFavorites'
import useMovieList from '@/hooks/useMovieList'

const ShowMovieList = () => {
  const { data: movies = [] } = useMovieList()
  const { data: favorites = [] } = useFavorites()

  return (
    <>
      <MovieList title="Trending Now" data={movies} />
      <MovieList title="My List" data={favorites} />
    </>
  )
}

export default ShowMovieList
