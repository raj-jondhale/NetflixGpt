import React from 'react'

// Base shimmer block
const Block = ({ className }) => (
    <div className={`bg-shimmer animate-shimmer ${className || ''}`}></div>
);

// Poster-shaped shimmer card used in rows
export const ShimmerCard = () => (
    <Block className="w-40 h-60 mr-3 rounded-md" />
);

// Horizontal shimmer list with a title
export const ShimmerRow = ({ title = 'Loading', count = 8 }) => (
    <div className="px-6">
        <h1 className="text-2xl py-2 text-white/60">{title}</h1>
        <div className="flex overflow-x-auto no-scrollbar">
            {Array.from({ length: count }).map((_, i) => (
                <ShimmerCard key={i} />
            ))}
        </div>
    </div>
);

// Grid of shimmer rows, useful for GPT suggestions
export const ShimmerGrid = ({ rows = 2, countPerRow = 6 }) => (
    <div className="p-4 m-4 bg-black/70">
        {Array.from({ length: rows }).map((_, r) => (
            <div key={r} className="mb-4">
                <ShimmerRow title="Fetching suggestions" count={countPerRow} />
            </div>
        ))}
    </div>
);

// Hero/banner shimmer for MainContainer
export const ShimmerHero = () => (
    <div className="relative w-full h-[65vh]">
        <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/60" />
        <div className="absolute inset-0">
            <Block className="w-full h-full opacity-60" />
        </div>
        <div className="absolute bottom-12 left-12 right-12">
            <div className="bg-white/10 h-8 w-2/5 mb-4 rounded-md" />
            <div className="bg-white/10 h-4 w-3/5 mb-2 rounded-md" />
            <div className="bg-white/10 h-4 w-2/5 mb-2 rounded-md" />
            <div className="bg-white/20 h-10 w-36 mt-6 rounded-md" />
        </div>
    </div>
);

// Full-screen shimmer overlay for video background while trailer loads
export const ShimmerVideo = () => (
    <div className="relative w-screen h-screen">
        <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/70" />
        <Block className="absolute inset-0 opacity-50" />
    </div>
);

export default ShimmerRow
