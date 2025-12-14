// Shimmer for Video Background Only
export const ShimmerVideo = () => {
    return (
        <div className='w-screen overflow-x-hidden'>
            <div className='w-screen md:h-screen aspect-video bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 animate-shimmer bg-size-200%_100% overflow-x-hidden relative'>
                {/* Pulse effect overlay for video loading */}
                <div className='absolute inset-0 bg-linear-to-b from-transparent via-gray-800/20 to-transparent animate-pulse'></div>
            </div>
        </div>
    );
};

// Shimmer for Hero/Main Video Section
export const ShimmerHero = () => {
    return (
        <div className='pt-[35%] bg-black md:pt-0'>
            {/* Video Background Shimmer */}
            <div className='w-screen md:h-screen aspect-video bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 animate-shimmer bg-size-200%_100%'>
                {/* Video Title Overlay Shimmer */}
                <div className='w-screen md:h-screen aspect-video pt-[15%] md:pt-[10%] px-6 md:px-20 absolute bg-linear-to-r from-black'>
                    {/* Title Shimmer */}
                    <div className='h-8 md:h-12 w-3/4 md:w-2/5 bg-gray-700 rounded mb-4 animate-pulse'></div>

                    {/* Overview Shimmer */}
                    <div className='hidden md:block py-6 w-2/4 space-y-2'>
                        <div className='h-4 bg-gray-700 rounded animate-pulse'></div>
                        <div className='h-4 bg-gray-700 rounded w-5/6 animate-pulse'></div>
                        <div className='h-4 bg-gray-700 rounded w-4/6 animate-pulse'></div>
                    </div>

                    {/* Buttons Shimmer */}
                    <div className='my-4 md:m-0 flex gap-2'>
                        <div className='h-8 md:h-12 w-24 md:w-32 bg-gray-400 rounded-lg animate-pulse'></div>
                        <div className='hidden md:block h-12 w-40 bg-gray-600 rounded-lg animate-pulse'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Shimmer for Movie List Row
export const ShimmerRow = ({ title }) => {
    return (
        <div className='px-6 mb-4'>
            {/* Title Shimmer */}
            <div className='py-2'>
                {title ? (
                    <h1 className='text-lg md:text-2xl text-white'>{title}</h1>
                ) : (
                    <div className='h-6 md:h-8 w-40 bg-gray-700 rounded animate-pulse'></div>
                )}
            </div>

            {/* Movie Cards Row Shimmer */}
            <div className='flex overflow-x-scroll no-scrollbar'>
                <div className='flex'>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((card) => (
                        <div key={card} className='w-36 md:w-44 pr-4'>
                            <div className='aspect-2/3 bg-linear-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer bg-size-200%_100% rounded'></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Shimmer Grid for GPT Search Results
export const ShimmerGrid = ({ rows = 3, countPerRow = 6 }) => {
    return (
        <div className='p-4 m-4 bg-black/70'>
            {[...Array(rows)].map((_, rowIndex) => (
                <div key={rowIndex} className='px-6 mb-6'>
                    {/* Section Title Shimmer */}
                    <div className='h-6 md:h-8 w-48 bg-gray-700 rounded mb-3 animate-pulse'></div>

                    {/* Movie Cards Grid/Row Shimmer */}
                    <div className='flex overflow-x-scroll no-scrollbar'>
                        <div className='flex'>
                            {[...Array(countPerRow)].map((_, cardIndex) => (
                                <div key={cardIndex} className='w-36 md:w-44 pr-4'>
                                    <div className='aspect-2/3 bg-linear-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer bg-size-200%_100% rounded'></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Full Page Shimmer (if needed for initial load)
const Shimmer = () => {
    return (
        <div className='bg-black min-h-screen'>
            <ShimmerHero />
            <div className='mt-0 md:-mt-30 relative z-20 pl-4 md:pl-12'>
                <ShimmerRow />
                <ShimmerRow />
                <ShimmerRow />
                <ShimmerRow />
            </div>
        </div>
    );
};

export default Shimmer;