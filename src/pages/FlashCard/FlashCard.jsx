import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext, use } from 'react'
import StarRating from '../../components/StarRating'
import Loading from '../Loading'
import ContainerContextUserID from '../../Context/ContainerUserID'
import { API } from '../../config/Config'

export default function FlashCard() {
    const [bookmark, setBookmark] = useState(false)
    const [rating, setRating] = useState(0)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const { userId } = useContext(ContainerContextUserID)
    const navigate = useNavigate()
    const [reload, setReload] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                // Fetch flashcards
                const response_flashcard = await fetch(
                    `${API}/api/cover/full/${id}`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                )

                if (response_flashcard.ok) {
                    const result = await response_flashcard.json()
                    setData(result)
                } else {
                    console.error(
                        'Failed to fetch flashcards:',
                        response_flashcard.statusText
                    )
                }

                // Fetch rating
                const response_rating = await fetch(
                    `${API}/api/rating/${id}/${userId}`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                )

                if (response_rating.ok) {
                    const result = await response_rating.json()
                    console.log('Rating fetched:', result)
                    setRating(result.rating)
                } else {
                    console.error(
                        'Failed to fetch rating:',
                        response_rating.statusText
                    )
                }
            } catch (error) {
                console.error('Error while fetching data:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [id, userId, reload])

    const goBack = () => {
        navigate(-1) // This goes back to the previous path
    }

    const handleRating = async () => {
        setLoading(true)
        try {
            const response = await fetch(`${API}/api/rating/${userId}/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    rating: rating,
                }),
            })
            if (response.ok) {
                console.log('Rating submitted successfully')
            } else {
                console.error('Failed to submit rating:', response.statusText)
            }
        } catch (error) {
            console.error('Error while submitting rating:', error)
        } finally {
            setReload(!reload) // Trigger a reload to fetch the updated rating
        }
    }

    return (
        <>
            {!loading ? (
                <div className="w-full h-full flex items-center justify-center gap-5  mt-12">
                    <div className=" w-full flex gap-5 flex-col lg:flex-row ">
                        <div className="w-full flex-col items-center justify-center">
                            <div className="w-full flex flex-col items-center justify-center gap-7 p-5 rounded-lg bg-white shadow-md relative">
                                {/* <i class="fa-solid fa-bookmark"></i> */}
                                <i
                                    className={`absolute text-3xl top-3 right-3 md:top-5 md:right-10 ${
                                        bookmark
                                            ? 'fa-solid fa-bookmark'
                                            : 'fa-regular fa-bookmark'
                                    }`}
                                    onClick={() => setBookmark(!bookmark)}
                                ></i>
                                <h1 className=" w-full text-3xl font-bold text-center">
                                    {data.title}
                                </h1>
                                <p className="w-full text-lg text-center">
                                    {data.description}
                                </p>
                                <div className="w-full flex items-center justify-center gap-5">
                                    <i className="fa-solid fa-circle-user text-3xl text-regal-sky-dark"></i>
                                    <p className=" line-clamp-1 text-xl font-semibold ">
                                        {data.name}
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex flex-col items-center justify-center gap-5 mt-5 p-5 rounded-lg bg-white shadow-md relative">
                                <div className="w-full flex  items-center justify-center gap-5 mt-5 p-5">
                                    <i className="fa-solid fa-star text-yellow-500 md:text-3xl flex items-center justify-center gap-3 pr-4 border-r-4">
                                        <p className=" font-poppins font-semibold text-regal-blue">
                                            {data.rating_avg
                                                ? data.rating_avg
                                                : 0}
                                        </p>
                                    </i>
                                    <StarRating
                                        initialRating={rating}
                                        maxRating={5}
                                        onChange={(value) => {
                                            setRating(value)
                                        }}
                                    />
                                </div>
                                <button
                                    className="w-full h-full flex items-center justify-center gap-5 bg-regal-blue text-white rounded-lg p-3 hover:bg-regal-blue-dark transition duration-200"
                                    onClick={() => {handleRating() }}
                                >
                                    Rate this flashcard
                                </button>
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center gap-5">
                            <button
                                className="w-full h-full lg:text-2xl flex items-center justify-center gap-5 bg-regal-blue text-white rounded-lg p-3 hover:bg-emerald-400 transition duration-200"
                                onClick={() =>
                                    navigate(`/play/flashcard/${id}`)
                                }
                            >
                                <i className="fa-solid fa-play text-3xl"></i>
                                Let's Go Review ! ! !
                            </button>
                            <button
                                className="w-full h-full lg:h-1/2 lg:text-2xl flex items-center justify-center gap-5  bg-regal-sky-dark text-white rounded-lg p-3 hover:bg-red-500 transition duration-200"
                                onClick={goBack}
                            >
                                <i className="fa-solid fa-arrow-left text-3xl"></i>
                                Back to Flashcards
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}
