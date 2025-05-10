import { useState, useEffect, useContext } from 'react'
import Container from '../../components/Container'
import CardList from '../../components/Cardcomponent/CardList'
import Searchbar from '../../components/Searchbar'
import ContainerContextUserID from '../../Context/ContainerUserID'
import { API } from '../../config/Config'
import Loading from '../Loading'


export default function MyFlashCards() {
    const [loading, setLoading] = useState(true)
    const { userId } = useContext(ContainerContextUserID)
    const [cardData, setCardData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(
                    `${API}/api/cover/myflashcard/${userId}`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                )
                if (response.ok) {
                    const result = await response.json()
                    console.log('My Flashcards data:', result)
                    setCardData(result.records)
                } else {
                    console.error(
                        'Failed to fetch My Flashcards data:',
                        response.statusText
                    )
                }
            } catch (error) {
                console.error('Error fetching My Flashcards data:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="w-full flex flex-col gap-10">
                    <Searchbar />
                    <Container
                        title="My Flashcards"
                        icon="fa-solid fa-database"
                        // <i class="fa-solid fa-database"></i>
                        icon_color="text-[#F79B72]"
                    >
                        {/* <i class="fa-solid fa-flask-vial"></i> */}
                        <CardList
                            cardData={cardData}
                            icon="fa-solid fa-flask-vial"
                            icon_color="text-[#F79B72]"
                            type="list"
                        />
                    </Container>
                </div>
            )}
        </>
    )
}
