import { useEffect, useState } from 'react'
import CardList from '../../components/Cardcomponent/CardList'
import Searchbar from '../../components/Searchbar'
import RecentCardList from '../../components/Cardcomponent/RecentCardList'
import Container from '../../components/Container'
import Loading from '../Loading'
import { API } from '../../config/Config'

export default function Home() {
    const [cardData, setCardData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const fetchFlashcards = async () => {
            console.log('Fetching flashcards...')

            try {
                const response = await fetch(`${API}/api/cover/homepage`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

                if (response.ok) {
                    const result = await response.json()
                    console.log('Flashcards fetched:', result)
                    setCardData(result)
                    setLoading(false)
                } else {
                    console.error(
                        'Failed to fetch flashcards:',
                        response.statusText
                    )
                    setLoading(false)
                }
            } catch (error) {
                console.error('Error while fetching flashcards:', error)
                setLoading(false)
            }
        }

        fetchFlashcards()
    }, [])

    return (
        <>
            {!loading ? (
                <div className=" flex flex-col items-center gap-5 ">
                    {/* Search Bar */}
                    <Searchbar />
                    {/* Recent Section */}
                    <Container
                        title="Recently Viewed"
                        icon="fa-solid fa-mountain-sun"
                        icon_color="text-green-500"
                    >
                        <RecentCardList
                            recentcardsData={cardData.slice(0, 4)}
                        />
                    </Container>
                    {/* Popular Section */}
                    {cardData.length > 4 && (
                        <Container
                            title="Popular Cards"
                            icon="fa-solid fa-fire"
                            icon_color="text-red-500"
                        >
                            <CardList cardData={cardData.slice(4)} />
                        </Container>
                    )}
                    {cardData.length > 4 && (
                        <Container
                            title=" Flashcards"
                            icon="fa-regular fa-cards-blank"
                            // <i class="fa-regular fa-cards-blank"></i>
                        >
                            <CardList
                                cardData={cardData.slice(4)}
                                type="list"
                            />
                        </Container>
                    )}
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}
