import { useDispatch, useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { ShimmerVideo } from './Shimmer'


const VideoBackground = ({ movieId }) => {

    const trailerVideo = useSelector(store => store.movies?.trailerVideo)
    useMovieTrailer(movieId);

    if (!trailerVideo?.key) {
        return <ShimmerVideo />
    }

    return (
        <div className='w-screen h-screen overflow-x-hidden'>
            <iframe
                className='w-screen h-screen aspect-video overflow-x-hidden'
                src={'https://www.youtube.com/embed/' + trailerVideo.key + '?&autoplay=0&mute=1&controls=0&rel=0&modestbranding=1&showinfo=0&disablekb=1&iv_load_policy=3&fs=0&loop=1&playlist=' + trailerVideo.key}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
        </div>
    )
}

export default VideoBackground