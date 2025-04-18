import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import StarRating from '../../components/StarRating'

export default function FlashCard() {
    const [bookmark, setBookmark] = useState(false)
    const [rating, setRating] = useState(0)
    const { id } = useParams()
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1) // This goes back to the previous path
    }
    return (
        <>
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
                                Flashcard Title
                            </h1>
                            <p className="w-full text-lg text-center">
                                This is the flashcard page for card {id}
                            </p>
                            {/* <div className="w-full flex items-center justify-center gap-5 ">
                            <i class="fa-solid fa-star text-yellow-500 text-3xl flex items-center justify-center gap-3">
                                <p className=" font-poppins font-semibold text-regal-blue">3.7</p>
                            </i>
                            <i class="fa-regular fa-bookmark text-3xl"></i>
                        </div> */}
                            <div className="w-full flex items-center justify-center gap-5">
                                <i class="fa-solid fa-circle-user text-3xl">
                                    {' '}
                                </i>
                                <p className=" line-clamp-1 ">
                                    Punnwat Mungkalarungsi
                                </p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center gap-5 mt-5 p-5 rounded-lg bg-white shadow-md relative">
                            <div className="w-full flex  items-center justify-center gap-5 mt-5 p-5">
                                <i class="fa-solid fa-star text-yellow-500 md:text-3xl flex items-center justify-center gap-3 pr-4 border-r-4">
                                    <p className=" font-poppins font-semibold text-regal-blue">
                                        3.7
                                    </p>
                                </i>
                                <StarRating
                                    initialRating={5}
                                    maxRating={5}
                                    onChange={(value) => {
                                        console.log(value)
                                        setRating(value)
                                    }}
                                />
                            </div>
                            <button className="w-full h-full flex items-center justify-center gap-5 bg-regal-blue text-white rounded-lg p-3 hover:bg-regal-blue-dark transition duration-200">
                                Rate this flashcard
                            </button>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-5">
                        <button
                            className="w-full h-full lg:text-2xl flex items-center justify-center gap-5 bg-regal-blue text-white rounded-lg p-3 hover:bg-emerald-400 transition duration-200"
                            onClick={() => navigate(`/play/flashcard/${id}`)}
                        >
                            <i class="fa-solid fa-play text-3xl"></i>
                            Let's Go Review ! ! !
                        </button>
                        <button
                            className="w-full h-full lg:h-1/2 lg:text-2xl flex items-center justify-center gap-5  bg-regal-sky-dark text-white rounded-lg p-3 hover:bg-red-500 transition duration-200"
                            onClick={goBack}
                        >
                            <i class="fa-solid fa-arrow-left text-3xl"></i>
                            Back to Flashcards
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
