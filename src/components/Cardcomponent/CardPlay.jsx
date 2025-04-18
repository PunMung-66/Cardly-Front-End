import React from 'react'
import FlipCard from './FlipCard'

export default function CardPlay({ front, back }) {
    const layoutfont = (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-4 bg-white rounded-xl shadow-md">
            <h1 className="text-2xl font-bold text-center">Question ?</h1>
            {front}
        </div>
    )

    const layoutback = (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-4 bg-white rounded-xl shadow-md">
            <h1 className="text-2xl font-bold text-center">Answer:</h1>
            {back}
        </div>
    )
    return (
        <>
            <div className="w-full h-screen flex items-center justify-center">
                <FlipCard
                    front={layoutfont}
                    back={layoutback}
                    flipOn="click"
                    type="play"
                />
            </div>
        </>
    )
}
