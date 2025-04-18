import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {  AnimatePresence, motion } from 'framer-motion'
import CardPlay from '../../components/Cardcomponent/CardPlay'

export default function PlayingPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [currentCardIndex, setCurrentCardIndex] = useState(0)
    const [showAnswer, setShowAnswer] = useState(false)
    const [direction, setDirection] = useState(0) // 1 = forward, -1 = back
    const [question, setQuestion] = useState({
        questions: [
            {
                question: 'question01',
                answer: 'answer01',
                hint: 'hint01',
            },
            {
                question: 'question02',
                answer: 'answer02',
                hint: 'hint02',
            },
            {
                question: 'question03',
                answer: 'answer03',
                hint: 'hint03',
            },
            {
                question: 'question04',
                answer: 'answer04',
                hint: 'hint04',
            },
        ],
    })

    const goBack = () => {
        navigate(-1) // This goes back to the previous path
    }
    const currentCard = question.questions[currentCardIndex]

    const contentfront = currentCard.question
    const contentback = currentCard.answer
    const contenthint = currentCard.hint

    const handleNextCard = () => {
        if (currentCardIndex < question.questions.length - 1) {
            setDirection(-1)
            setCurrentCardIndex(currentCardIndex + 1)
            setShowAnswer(false) // reset hint visibility
        } else if (currentCardIndex === question.questions.length - 1) {
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
            <div className="w-full h-screen flex flex-col items-center justify-center relative">
                <button
                    className="absolute z-10 top-10 flex justify-center items-center gap-5 bg-regal-sky-dark text-white rounded-full px-4 py-3 hover:bg-red-500 transition duration-200"
                    onClick={goBack}
                >
                    {/* <i class="fa-solid fa-turn-down-left"></i> */}
                    <i className="fa-solid fa-turn-down-left  text-3xl"></i>
                </button>
                {/* <div className="w-full h-full flex items-center justify-center flex-col p-5 relative">
                    <CardPlay front={contentfront} back={contentback} />
                </div> */}
                <div className='w-full h-full'>
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
                            className="w-full h-full flex items-center justify-center flex-col  relative p-5"
                        >
                            <CardPlay front={contentfront} back={contentback} />
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className=" absolute bottom-3 flex flex-col font-bold justify-center items-center gap-3 p-3 rounded-xl bg-slate-50 shadow-md">
                    <p>
                        {currentCardIndex + 1} / {question.questions.length}
                    </p>
                    <div className="flex items-center justify-center gap-5 md:gap-10">
                        <button
                            className="bg-regal-blue text-white rounded-full px-4 py-3 hover:bg-regal-sky transition duration-200"
                            onClick={handlePreviousCard}
                        >
                            <i className="fa-solid fa-turn-left  text-3xl"></i>
                            {/* <i class="fa-solid fa-turn-right"></i> */}
                        </button>
                        <button
                            className=" bg-amber-600 text-white rounded-full px-4 py-3 hover:bg-yellow-400 transition duration-200"
                            onClick={() => setShowAnswer(!showAnswer)}
                        >
                            <i className="fa-solid fa-face-smile-wink  text-3xl"></i>
                            {/* <i class="fa-solid fa-face-smile-wink"></i> */}
                        </button>
                        <button
                            className="bg-regal-blue text-white rounded-full px-4 py-3 hover:bg-regal-sky transition duration-200"
                            onClick={handleNextCard}
                        >
                            <i className="fa-solid fa-turn-right  text-3xl"></i>
                            {/* <i class="fa-solid fa-turn-right"></i> */}
                        </button>
                    </div>
                </div>
                {/* <FlipCard /> */}
                {showAnswer && (
                    <div
                        className="absolute w-full h-full  flex flex-col font-bold justify-center items-center gap-3 p-3 bg-black bg-opacity-90 text-white shadow-md cursor-pointer"
                        onClick={() => setShowAnswer(!showAnswer)}
                    >
                        <h1 className="text-2xl font-bold">Hint: </h1>
                        <p className="text-lg">{contenthint}</p>
                    </div>
                )}
            </div>
        </>
    )
}
