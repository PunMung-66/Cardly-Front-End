import { useEffect, useState } from 'react'
import CardList from '../../components/Cardcomponent/CardList'
import Searchbar from '../../components/Searchbar'
import RecentCardList from '../../components/Cardcomponent/RecentCardList'
import Container from '../../components/Container'
import Loading from '../Loading'
import { API } from '../../config/Config'

export default function Home() {
    const [cardData, setCardData] = useState([])
    const [recentcardData, setRecentCardData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchFlashcards = async () => {
            setLoading(true)
            console.log('Fetching flashcards...')

            try {
                const homepageRes = await fetch(`${API}/api/cover/homepage`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

                if (homepageRes.ok) {
                    const homepageData = await homepageRes.json()
                    console.log('Homepage flashcards fetched:', homepageData)
                    setCardData(homepageData)
                } else {
                    console.error(
                        'Failed to fetch homepage flashcards:',
                        homepageRes.statusText
                    )
                }

                const recentRes = await fetch(`${API}/api/cover/recently`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

                if (recentRes.ok) {
                    const recentData = await recentRes.json()
                    console.log('Recent flashcards fetched:', recentData)
                    setRecentCardData(recentData)
                } else {
                    console.error(
                        'Failed to fetch recent flashcards:',
                        recentRes.statusText
                    )
                }
            } catch (error) {
                console.error('Error while fetching flashcards:', error)
            } finally {
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
                        title="Recently Added"
                        icon="fa-solid fa-mountain-sun"
                        icon_color="text-green-500"
                    >
                        <RecentCardList
                            recentcardsData={recentcardData}
                        />
                    </Container>
                    {/* Popular Section */}
                    {cardData.length > 4 && (
                        <Container
                            title="Popular Cards"
                            icon="fa-solid fa-fire"
                            icon_color="text-red-500"
                        >
                            <CardList cardData={cardData.slice(0, 4)} />
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
