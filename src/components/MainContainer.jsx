import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { ShimmerHero } from './Shimmer'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    // if (!movies) return;
    if (!movies) return <ShimmerHero />;
    const mainMovie = movies[0];
    // console.log(mainMovie);

    const { original_title, overview, id } = mainMovie;
    return (
        <div className='pt-[35%] bg-black md:pt-0'>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer