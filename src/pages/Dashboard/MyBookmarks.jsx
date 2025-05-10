import Container from '../../components/Container'
import CardList from '../../components/Cardcomponent/CardList'
import { useState, useEffect, useContext } from 'react'
import ContainerContextUserID from '../../Context/ContainerUserID'
import { API } from '../../config/Config'
import Loading from '../Loading'


export default function MyBookmarks() {
    const [loading, setLoading] = useState(true)
    const { userId } = useContext(ContainerContextUserID)
    const [cardbookmark, setCardBookmark] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(`${API}/api/cover/bookmark/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

                if (response.ok) {
                    const result = await response.json()
                    console.log('Bookmark data:', result)
                    setCardBookmark(result)
                } else {
                    console.error(
                        'Failed to fetch bookmark data:',
                        response.statusText
                    )
                }
            } catch (error) {
                console.error('Error fetching bookmark data:', error)
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
                    <Container
                        title="Bookmark Cards"
                        icon="fa-solid fa-bookmark"
                        icon_color="text-[#102E50]"
                    >
                        {/* <i class="fa-solid fa-bookmark"></i>*/}
                        <CardList
                            cardData={cardbookmark}
                            icon="fa-solid fa-bookmark"
                            icon_color="text-[#102E50]"
                            type="list"
                        />
                    </Container>
                </div>
            )}
        </>
    )
}
