import React from 'react'
import CardList from '../../components/Cardcomponent/CardList'
import Searchbar from '../../components/Searchbar'
import RecentCardList from '../../components/Cardcomponent/RecentCardList'
import Container from '../../components/Container'

const cardData = [
    {
        record_id: "r001",
        title: 'Building Your First Website',
        description:
            'Learn how to create a responsive website using HTML, CSS, and JavaScript.',
        owner: 'Emily Davis',
    },
    {
        record_id: "r002",
        title: 'Getting Started with Python',
        description:
            'A beginner-friendly introduction to Python programming with practical examples.',
        owner: 'Liam Nguyen',
    },
    {
        record_id: "r003",
        title: 'Understanding Cloud Computing',
        description:
            'Discover the basics of cloud services and how businesses use them to scale.',
        owner: 'Sophia Kim',
    },
    {
        record_id: "r004",
        title: 'Mastering Data Visualization',
        description:
            'Visualize complex data using modern libraries like D3.js and Chart.js.',
        owner: 'Jackson Miller',
    },
    {
        record_id: "r005",
        title: 'Cybersecurity Essentials',
        description:
            'Learn the fundamental practices to protect digital assets and stay safe online.',
        owner: 'Olivia Martinez',
    },
]

export default function Home() {
    return (
        <div className=" flex flex-col items-center gap-10 ">
            {/* Search Bar */}
            <Searchbar />
            {/* Recent Section */}
            {/* <Subheader
        title="Recently Viewed"
        icon="fa-solid fa-mountain-sun"
        icon_color="text-green-500"
      /> */}
            <Container
                title="Recently Viewed"
                icon="fa-solid fa-mountain-sun"
                icon_color="text-green-500"
            >
                <RecentCardList 
                    recentcardsData={cardData}
                />
            </Container>
            {/* Popular Section */}
            <Container
                title="Popular Cards"
                icon="fa-solid fa-fire"
                icon_color="text-red-500"
            >
                <CardList cardData={cardData} />
            </Container>
        </div>
    )
}
