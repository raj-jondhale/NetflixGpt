import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../Browse/MovieList';
import { ShimmerGrid } from '../Common/Shimmer';

const GptMovieSuggestions = () => {
    const gpt = useSelector(store => store.gpt);
    const { movieResults, movieNames, isLoading } = gpt;
    if (isLoading) return <ShimmerGrid rows={2} countPerRow={6} />;
    if (!movieNames) return null;
    return (
        <div className='p-4 m-4 bg-black/70 text-white'>
            <div>
                {movieNames.map((movieName, index) => <MovieList key={movieName} title={movieName} movies={movieResults[index]} />)}

            </div>
        </div>
    )
}

export default GptMovieSuggestions