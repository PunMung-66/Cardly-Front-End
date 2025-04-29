import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import CardPlay from '../../components/Cardcomponent/CardPlay'
import { API } from '../../config/Config'

export default function PlayingPage() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [currentCardIndex, setCurrentCardIndex] = useState(0)
    const [showAnswer, setShowAnswer] = useState(false)
    const [direction, setDirection] = useState(0) // 1 = forward, -1 = back
    const [loading, setLoading] = useState(true)
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        const fetchFlashcards = async () => {
            setLoading(true)
            try {
                const response = await fetch(`${API}/api/record/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

                if (response.ok) {
                    const result = await response.json()
                    console.log('Flashcards fetched:', result)
                    setQuestions(result.questions || [])
                } else {
                    console.error(
                        'Failed to fetch flashcards:',
                        response.statusText
                    )
                }
            } catch (error) {
                console.error('Error while fetching flashcards:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchFlashcards()
    }, [id])

    const goBack = () => {
        navigate(-1)
    }

    const currentCard = questions[currentCardIndex] || {}
    const {
        question: contentfront,
        answer: contentback,
        hint: contenthint,
    } = currentCard

        const handleNextCard = () => {
            if (currentCardIndex < questions.length - 1) {
                setDirection(-1)
                setCurrentCardIndex(currentCardIndex + 1)
                setShowAnswer(false) // reset hint visibility
            } else if (currentCardIndex === questions.length - 1) {
                setDirection(1)
            }
        }

        const handlePreviousCard = () => {
            if (currentCardIndex > 0) {
                setDirection(1)
                setCurrentCardIndex(currentCardIndex - 1)
                setShowAnswer(false) // reset hint visibility
            } else if (currentCardIndex === 0) {
                setDirection(-1)
            }
        }

    return (
        <>
            {!loading && questions.length > 0 && (
                <div className="w-full h-screen flex flex-col items-center justify-center relative">
                    <button
                        className="absolute z-10 top-10 flex justify-center items-center gap-5 bg-regal-sky-dark text-white rounded-full px-4 py-3 hover:bg-red-500 transition duration-200"
                        onClick={goBack}
                    >
                        <i className="fa-solid fa-turn-down-left text-3xl"></i>
                    </button>

                    <div className="w-full md:w-fit">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentCardIndex}
                                initial={{
                                    x: direction > 0 ? 200 : -200,
                                    opacity: 0,
                                }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{
                                    x: direction > 0 ? -200 : 200,
                                    opacity: 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-full flex items-center justify-center flex-col relative p-5"
                            >
                                <CardPlay
                                    front={contentfront}
                                    back={contentback}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="absolute bottom-3 flex flex-col font-bold justify-center items-center gap-3 p-3 rounded-xl bg-slate-50 shadow-md">
                        <p>
                            {currentCardIndex + 1} / {questions.length}
                        </p>
                        <div className="flex items-center justify-center gap-5 md:gap-10">
                            <button
                                className="bg-regal-blue text-white rounded-full px-4 py-3 hover:bg-regal-sky transition duration-200"
                                onClick={handlePreviousCard}
                            >
                                <i className="fa-solid fa-turn-left text-3xl"></i>
                            </button>
                            <button
                                className="bg-amber-600 text-white rounded-full px-4 py-3 hover:bg-yellow-400 transition duration-200"
                                onClick={() => setShowAnswer(!showAnswer)}
                            >
                                <i className="fa-solid fa-face-smile-wink text-3xl"></i>
                            </button>
                            <button
                                className="bg-regal-blue text-white rounded-full px-4 py-3 hover:bg-regal-sky transition duration-200"
                                onClick={handleNextCard}
                            >
                                <i className="fa-solid fa-turn-right text-3xl"></i>
                            </button>
                        </div>
                    </div>

                    {showAnswer && (
                        <div
                            className="absolute w-full h-full flex flex-col font-bold justify-center items-center gap-3 p-3 bg-black bg-opacity-90 text-white shadow-md cursor-pointer"
                            onClick={() => setShowAnswer(false)}
                        >
                            <h1 className="text-2xl font-bold">Hint:</h1>
                            <p className="text-lg">{contenthint ? contenthint : '-'}</p>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}
