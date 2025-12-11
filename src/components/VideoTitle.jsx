import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen h-screen aspect-video pt-[10%] px-20 absolute text-white bg-linear-to-r from-black'>
            <h1 className='text-5xl font-bold'  >{title}</h1>
            <p className='py-6 text-md w-2/4 '>{overview}</p>
            <div className=''>
                <button className=' bg-white text-black p-2 px-10 text-xl rounded-lg hover:bg-white/80 cursor-pointer '><i className="fa-solid fa-play"></i>Play</button>
                <button className=' bg-gray-500 text-white p-2 px-10 text-xl rounded-lg  mx-2 hover:cursor-pointer '><i className="fa-solid fa-info "></i> More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle