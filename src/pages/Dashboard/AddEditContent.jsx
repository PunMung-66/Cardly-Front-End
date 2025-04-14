import { useEffect, useState } from 'react'
import Container from '../../components/Container'
import AddingInput from '../../components/AddingInput'

export default function AddEditContent() {
    const [flashcards, setFlashcards] = useState({
        title: '',
        category: '',
        description: '',
        questions: [
            {
                question: '',
                answer: '',
                hint: '',
            },
        ],
    })

    const handleChange = (index, field, value) => {
        const updated = { ...flashcards }
        updated.questions[index][field] = value
        setFlashcards(updated)
    }

    const handleDelete = (index) => {
        const updated = { ...flashcards }
        updated.questions = updated.questions.filter((_, i) => i !== index)
        setFlashcards(updated)
    }

    const addQuestion = () => {
        setFlashcards((prev) => ({
            ...prev,
            questions: [
                ...prev.questions,
                { question: '', answer: '', hint: '' },
            ],
        }))
    }

    useEffect(() => {
        console.log(flashcards)
    })

    return (
        <div className=" flex flex-col items-center  gap-10 ">
            <Container title="Add Flashcard" icon="fa-solid fa-square-plus">
                <form className="flex flex-col items-center justify-center gap-4 w-full">
                    <div className="flex flex-col lg:flex-row w-full md:w-5/6 gap-5">
                        <div className=" flex w-full">
                            <i className="fa-solid fa-heading flex items-center bg-white py-2 px-3 border rounded-l-lg shadow-md hover:bg-gray-200 active:bg-gray-300 border-gray-200 text-xl"></i>
                            <input
                                className="w-full border border-gray-200 p-2  rounded-r-lg shadow-md focus:outline-none focus:ring-2 focus:regal-blue"
                                placeholder="Enter Title"
                                value={flashcards.title}
                                onChange={(e) =>
                                    setFlashcards((prev) => ({
                                        ...prev,
                                        title: e.target.value,
                                    }))
                                }
                            ></input>
                        </div>
                        <div className=" flex w-full">
                            <i className="fa-solid fa-tags flex items-center bg-white py-2 px-3 border rounded-l-lg shadow-md hover:bg-gray-200 active:bg-gray-300 border-gray-200 text-xl"></i>
                            <input
                                className="w-full border border-gray-200 p-2  rounded-r-lg shadow-md focus:outline-none focus:ring-2 focus:regal-blue"
                                placeholder="Enter Category"
                                value={flashcards.category}
                                onChange={(e) =>
                                    setFlashcards((prev) => ({
                                        ...prev,
                                        category: e.target.value,
                                    }))
                                }
                            ></input>
                        </div>
                    </div>

                    <div className="flex  w-full md:w-5/6">
                        <i className="fa-solid fa-subtitles flex items-center bg-white py-2 px-3 border rounded-l-lg shadow-md hover:bg-gray-200 active:bg-gray-300 border-gray-200 text-xl"></i>
                        <textarea
                            className="w-full border border-gray-200 p-2  rounded-r-lg shadow-md focus:outline-none focus:ring-2 focus:regal-blue"
                            placeholder="Enter Description . . . ."
                            value={flashcards.description}
                            onChange={(e) =>
                                setFlashcards((prev) => ({
                                    ...prev,
                                    description: e.target.value,
                                }))
                            }
                        ></textarea>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-10 mb-4 w-full md:w-5/6">
                        {flashcards.questions.map((q, i) => (
                            <AddingInput
                                key={i}
                                index={i}
                                question={q.question}
                                answer={q.answer}
                                hint={q.hint}
                                handleChange={handleChange}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 w-full md:w-5/6 ">
                        <button
                            className=" bg-regal-blue w-full text-white px-4 py-2 rounded-md hover:bg-regal-blue-light transition duration-200 active:bg-regal-blue-dark self-center"
                            onClick={(e) => {
                                e.preventDefault()
                                addQuestion()
                            }}
                        >
                            Add Question
                        </button>
                        <button className=" bg-regal-blue-darkest text-white px-4 py-2 rounded-md hover:bg-regal-blue-light transition duration-200 w-full active:bg-regal-blue-dark self-center">
                            Save Flashcard
                        </button>
                    </div>
                </form>
            </Container>
        </div>
    )
}
