import React from 'react'
import Container from '../../components/Container'
import CardList from '../../components/Cardcomponent/CardList'
import Searchbar from '../../components/Searchbar'

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
]

export default function FlashCards() {
    return (
        <div className="w-full flex flex-col gap-10">
            <Searchbar />
            <Container
                title="Science Cards"
                icon="fa-solid fa-flask-vial"
                icon_color="text-[#F5C45E]"
            >
                {/* <i class="fa-solid fa-flask-vial"></i> */}
                <CardList
                    cardData={cardData}
                    icon="fa-solid fa-flask-vial"
                    icon_color="text-[#F5C45E]"
                    type="list"
                />
            </Container>
            <Container title="Computer Cards" icon="fa-solid fa-computer">
                {/* <i class="fa-solid fa-computer"></i> */}
                <CardList
                    icon="fa-solid fa-computer"
                    cardData={cardData}
                    type="list"
                />
            </Container>
            <Container
                title="Science Cards"
                icon="fa-solid fa-flask-vial"
                icon_color="text-[#F5C45E]"
            >
                {/* <i class="fa-solid fa-flask-vial"></i> */}
                <CardList
                    cardData={cardData}
                    icon="fa-solid fa-flask-vial"
                    icon_color="text-[#F5C45E]"
                />
            </Container>
        </div>
    )
}
