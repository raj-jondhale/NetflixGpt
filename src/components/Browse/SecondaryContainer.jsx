import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import { ShimmerRow } from '../Common/Shimmer'

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)
    if (!movies.nowPlayingMovies) {
        return (
            <div className='bg-black'>
                <div className='mt-0 md:-mt-30 relative z-20 pl-4 md:pl-12'>
                    <ShimmerRow title={"Now Playing"} />
                    <ShimmerRow title={"Popular"} />
                    <ShimmerRow title={"Top Rated"} />
                    <ShimmerRow title={"Upcoming Movies"} />
                </div>
            </div>
        )
    }

    return (
        <div className='bg-black'>
            <div className='mt-0 md:-mt-30 relative z-20 pl-4 md:pl-12'>
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Popular"} movies={movies.popularMovies} />
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer