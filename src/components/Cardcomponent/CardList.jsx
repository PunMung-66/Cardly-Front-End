import React, { useRef } from 'react'
import Card from './Card'
import ContainerContext from '../../Context/ContainerContext'
import { useContext } from 'react'

const cardDataDefault = [
    { title: 'Card Title', description: 'Card description goes here.' },
    { title: 'Card Title', description: 'Card description goes here.' },
    { title: 'Card Title', description: 'Card description goes here.' },
]

export default function CardList({
    cardData = cardDataDefault,
    type = 'slide',
}) {
    const scrollRef = useRef(null)
    const { icon, icon_color } = useContext(ContainerContext)
    const scroll = (direction) => {
        const { current } = scrollRef
        if (current) {
            const scrollAmount = 355
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            })
        }
    }

    const renderMap = {
        list: () => (
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-3 justify-items-center lg:justify-items-start">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        description={card.description}
                        owner={card.owner}
                        icon={icon}
                        icon_color={icon_color}
                    />
                ))}
            </div>
        ),
        slide: () => (
            <div className="relative w-full ">
                {/* Arrows */}
                <div className="  absolute -left-1 top-1/2 -translate-y-1/2 h-full w-10 md:w-32 z-10 flex items-center bg-[linear-gradient(to_right,_#B3EBF2_0%,_#B3EBF2_1%,_transparent_100%)]">
                    <button
                        onClick={() => scroll('left')}
                        className="hidden md:block duration-200 opacity-50 hover:opacity-100 rounded-full border border-gray-200 w-10 h-10 bg-white shadow-md p-2"
                    >
                        {'<'}
                    </button>
                </div>
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 h-full w-5 md:w-32 z-10 flex items-center bg-[linear-gradient(to_left,_#B3EBF2_0%,_#B3EBF2_1%,_transparent_100%)]">
                    <button
                        onClick={() => scroll('right')}
                        className=" hidden md:block absolute duration-200 right-0 opacity-50 hover:opacity-100 rounded-full border border-gray-200 w-10 h-10 bg-white shadow-md p-2"
                    >
                        {'>'}
                    </button>
                </div>
                {/* Scrollable Cards */}
                <div
                    ref={scrollRef}
                    className="w-full overflow-x-auto [&::-webkit-scrollbar]:w-0"
                >
                    <div className="flex gap-2 min-w-max px-8 pb-3">
                        {cardData.map((card, index) => (
                            <Card
                                key={index}
                                title={card.title}
                                description={card.description}
                                owner={card.owner}
                                icon={icon}
                                icon_color={icon_color}
                            />
                        ))}
                    </div>
                </div>
            </div>
        ),
        // Add more layouts here if needed
    }

    const renderCards = renderMap[type] || renderMap['slide']

    return renderCards()
}
