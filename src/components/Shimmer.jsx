import React from 'react'

export const ShimmerCard = () => (
    <div className="w-44 aspect-[2/3] mr-3 rounded-md bg-shimmer animate-shimmer" />
);

export const ShimmerRow = ({ title = "Loading", count = 8 }) => (
    <div className="px-6">
        <h1 className="text-2xl py-2 text-white opacity-60">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
            <div className="flex">
                {Array.from({ length: count }).map((_, i) => (
                    <ShimmerCard key={i} />
                ))}
            </div>
        </div>
    </div>
);

export const ShimmerGrid = ({ rows = 2, countPerRow = 6 }) => (
    <div className="p-4 m-4 bg-black/70">
        {Array.from({ length: rows }).map((_, r) => (
            <div key={r} className="mb-4">
                <ShimmerRow title="Fetching suggestions" count={countPerRow} />
            </div>
        ))}
    </div>
);

export const ShimmerHero = () => (
    <div className="relative w-full h-[70vh] bg-gradient-to-b from-black/20 to-black/60">
        <div className="absolute inset-0 bg-shimmer animate-shimmer opacity-60" />
        <div className="absolute bottom-12 left-12 right-12">
            <div className="h-9 w-2/5 mb-4 rounded-md bg-white/10" />
            <div className="h-4 w-3/5 mb-2 rounded-md bg-white/8" />
            <div className="h-4 w-2/5 mb-2 rounded-md bg-white/8" />
            <div className="h-10 w-36 mt-6 rounded-md bg-white/12" />
        </div>
    </div>
);

export const ShimmerVideo = () => (
    <div className="relative w-screen h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
        <div className="absolute inset-0 bg-shimmer animate-shimmer opacity-50" />
    </div>
);

export default ShimmerRow
