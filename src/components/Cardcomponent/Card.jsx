import React from 'react'
import getRandomColor from '../../functions/RandomColor'
import FlipCard from './FlipCard'

const Card = ({
    title = 'title',
    description = 'description',
    owner = 'Owner Name',
    icon = 'fa-solid fa-card-diamond',
    icon_color = 'text-regal-blue',
    type = 'slide',
}) => {
    const front = (
        <div className="bg-white shadow-md rounded-lg p-4  flex-shrink-0 flex flex-col justify-between gap-4 cursor-pointer">
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between w-full gap-2">
                    <h3 className="text-sm font-semibold truncate">{title}</h3>
                    <i className={` text-md ${icon + ' ' + icon_color}`}></i>
                </div>
                <p className="text-gray-600 text-[14px] truncate">
                    {description}
                </p>
            </div>
            <div className="flex items-center w-full gap-2">
                <div
                    style={{ backgroundColor: getRandomColor() }}
                    className={` border border-gray-200 text-sm rounded-full w-7 h-7 flex items-center justify-center text-white font-semibold `}
                >
                    {owner[0].toUpperCase()}
                </div>
                <p className="text-sm truncate">{owner}</p>
            </div>
        </div>
    )

    const back = (
        <div className="bg-blue-900 text-white px-6 py-4 w-full flex flex-col items-center justify-center text-center rounded-xl">
            <h3 className="text-xl font-bold mb-2 line-clamp-1">{title}</h3>
            <p className="text-sm text-blue-100 mb-4 line-clamp-2">
                {description}
            </p>
        </div>
    )

    return (
        <FlipCard
            front={front}
            back={back}
            flipOn="hover"
            type={type}
        />
    )
}

export default Card
