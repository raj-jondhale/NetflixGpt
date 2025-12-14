import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../../config/languageConstants';
import groq from '../../config/openai.jsx';
import { API_OPTIONS } from '../../config/constants.jsx';
import { addGptMovieResult, setGptLoading, clearGptResults } from '../../redux/gptSlice.jsx';


const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();
    const searchMovieTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);

        const json = await data.json();
        // console.log(json.results);
        return json.results;
    }

    const handleGptSearchClick = async () => {
        // console.log(searchText.current.value);
        dispatch(setGptLoading(true));
        dispatch(clearGptResults());
        //make an api call
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query" + searchText.current.value + "onle give me names of 5 movies, comma separated like the example result give ahead. Example Result : Gadar, Sholey, Don, Golmaal, Koi mil gaya"
        const gptResults = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: gptQuery,
                },
            ],
            model: "openai/gpt-oss-20b",
        });
        if (!gptResults) {
            {//todo error handle}
                alert("Failed to get movie recommendations. Please try again.");
                dispatch(setGptLoading(false));
                return;
            }
        }

        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
        console.log(gptMovies);
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

        const tmdbResults = await Promise.all(promiseArray);

        console.log(tmdbResults);
        dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
    }
    return (
        <div className='pt-[50%] md:pt-[10%] flex justify-center '>
            <form className='w-full md:w-1/2 bg-black  grid grid-cols-12 ' onSubmit={(e) => e.preventDefault()}>
                <input
                    ref={searchText}
                    type='text'
                    className='p-4 m-4 bg-white col-span-9'
                    placeholder={lang[langKey].gptPlaceHolder} />
                <button
                    className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3'
                    onClick={handleGptSearchClick}
                >
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar