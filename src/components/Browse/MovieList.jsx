import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    if (!movies?.length) return null;

    return (
        <div className='px-6 '>
            <h1 className='text-lg md:text-2xl py-2 text-white'>{title}</h1>
            <div className='flex overflow-x-auto no-scrollbar gap-2 p-2  '>

                <div className='flex'>
                    {movies.map(movie => <MovieCard key={movie.id} posterPath={movie?.poster_path} />)}

                </div>
            </div>

        </div>
    )
}

export default MovieList