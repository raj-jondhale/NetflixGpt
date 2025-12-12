import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants.jsx';
const GptSearch = () => {
    return (
        <div>
            <div className='absolute -z-10'>
                <img
                    src={BG_URL}
                    alt="hero-image"

                />
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch