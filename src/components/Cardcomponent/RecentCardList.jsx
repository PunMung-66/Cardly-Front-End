import React from 'react'
import LottieWithPreloader from '../LottieWithPreloader'
import RecentCard from './RecentCard'

const recentcardsData_Default = [
    {
        record_id: 'r001',
        title: 'Introducing SmartHome AI',
        description:
            'Explore how artificial intelligence transforms modern homes with automation and energy efficiency.',
        name: 'Alice Johnson',
    },
    {
        record_id: 'r002',
        title: 'Drone Programming Workshop',
        description:
            'Hands-on experience flying and coding drones in real-time simulations and challenges.',
        name: 'Ben Carter',
    },
    {
        record_id: 'r003',
        title: 'IoT in Everyday Life',
        description:
            'Learn how IoT devices connect and share data to make smarter cities and homes.',
        name: 'Chloe Zhang',
    },
    {
        record_id: 'r004',
        title: 'AI for Beginners',
        description:
            'A step-by-step guide to understanding how artificial intelligence works and its real-world applications.',
        name: 'David Lee',
    },
]

export default function RecentCardList({
    recentcardsData = recentcardsData_Default,
}) {
    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex flex-col lg:flex-row justify-center items-center w-full">
                <LottieWithPreloader
                    gif_URL={
                        'https://lottie.host/embed/e3e7f9ef-14cf-4c17-b07f-57d65566c6eb/VozEBlTWgn.lottie'
                    }
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5 w-full">
                    {recentcardsData.map((card, index) => (
                        <RecentCard
                            key={index}
                            record_id={card.record_id}
                            title={card.title}
                            description={card.description}
                            owner={card.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
