import React from 'react'
import Container from '../components/Container'
import CardList from '../components/Cardcomponent/CardList'

const cardData = [
    {
        title: 'Building Your First Website',
        description:
            'Learn how to create a responsive website using HTML, CSS, and JavaScript.',
        owner: 'Emily Davis',
    },
    {
        title: 'Getting Started with Python',
        description:
            'A beginner-friendly introduction to Python programming with practical examples.',
        owner: 'Liam Nguyen',
    },
    {
        title: 'Understanding Cloud Computing',
        description:
            'Discover the basics of cloud services and how businesses use them to scale.',
        owner: 'Sophia Kim',
    },
    {
        title: 'Mastering Data Visualization',
        description:
            'Visualize complex data using modern libraries like D3.js and Chart.js.',
        owner: 'Jackson Miller',
    },
    {
        title: 'Cybersecurity Essentials',
        description:
            'Learn the fundamental practices to protect digital assets and stay safe online.',
        owner: 'Olivia Martinez',
    },
    {
        title: 'Understanding Cloud Computing',
        description:
            'Discover the basics of cloud services and how businesses use them to scale.',
        owner: 'Sophia Kim',
    },
    {
        title: 'Mastering Data Visualization',
        description:
            'Visualize complex data using modern libraries like D3.js and Chart.js.',
        owner: 'Jackson Miller',
    },
    {
        title: 'Cybersecurity Essentials',
        description:
            'Learn the fundamental practices to protect digital assets and stay safe online.',
        owner: 'Olivia Martinez',
    },
    {
        title: 'Understanding Cloud Computing',
        description:
            'Discover the basics of cloud services and how businesses use them to scale.',
        owner: 'Sophia Kim',
    },
    {
        title: 'Mastering Data Visualization',
        description:
            'Visualize complex data using modern libraries like D3.js and Chart.js.',
        owner: 'Jackson Miller',
    },
    {
        title: 'Cybersecurity Essentials',
        description:
            'Learn the fundamental practices to protect digital assets and stay safe online.',
        owner: 'Olivia Martinez',
    },
]

export default function Bookmarks() {
    return (
        <div className="w-full flex flex-col gap-10">
            <Container
                title="Bookmark Cards"
                icon="fa-solid fa-bookmark"
                icon_color="text-[#102E50]"
            >
                {/* <i class="fa-solid fa-bookmark"></i>*/}
                <CardList
                    cardData={cardData}
                    icon="fa-solid fa-bookmark"
                    icon_color="text-[#102E50]"
                    type="list"
                />
            </Container>
        </div>
    )
}
