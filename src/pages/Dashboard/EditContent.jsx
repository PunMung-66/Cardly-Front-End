import { useState, useEffect } from 'react'
import Container from '../../components/Container'
import AddingInput from '../../components/AddingInput'
import { useParams, useNavigate } from 'react-router-dom'
import { API } from '../../config/Config'
import Loading from '../Loading'

export default function EditContent() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    const [flashcards, setFlashcards] = useState({
        title: '',
        category: '',
        description: '',
        status: 'Private',
        questions: [
            {
                question: '',
                answer: '',
                hint: '',
            },
        ],
    })

    useEffect(() => {
        const fetchFlashcard = async () => {
            setLoading(true)
            try {
                const response = await fetch(`${API}/api/record/${id}`)
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                setFlashcards(data)
            } catch (error) {
                console.error('Error fetching flashcard:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchFlashcard()
    }, [])

    // use for AddingInput component
    const handleSelectChange = (event) => {
        const value = event.target.value
        setFlashcards((prev) => ({
            ...prev,
            status: value,
        }))
    }

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

    // use for Save flashcard

    const handleEdit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            console.log('Editting flashcard:', flashcards)
            const response = await fetch(`${API}/api/record/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(flashcards),
            })

            if (response.ok) {
                const result = await response.json()
                console.log('Flashcard saved:', result)
                alert('Flashcard Edited successfully!')
                navigate('/dashboard/myflashcards')
            } else {
                console.error('Failed to submit:', response.statusText)
                // alert('Something went wrong while submitting.')
            }
        } catch (error) {
            console.error('Error:', error)
            // alert('An error occurred during submission.')
        }
        setLoading(false)
    }

    return (
        <>
            {!loading ? (
                <div className=" flex flex-col items-center  gap-10 ">
                    <Container
                        title="Edit Flashcard"
                        icon="fa-solid fa-pen-to-square"
                    >
                        <form className="flex flex-col items-center justify-center gap-4 w-full"
                            onSubmit={handleEdit}>
                            <div className="flex flex-col lg:flex-row w-full md:w-5/6 gap-5">
                                <div className=" flex w-full">
                                    <i className="fa-solid fa-heading flex items-center bg-white py-2 px-3 border rounded-l-lg shadow-md hover:bg-gray-200 active:bg-gray-300 border-gray-200 text-xl"></i>
                                    {/* Enter tittle */}
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
                                        required
                                    ></input>
                                </div>
                                <div className=" flex w-full">
                                    <i className="fa-solid fa-tags flex items-center bg-white py-2 px-3 border rounded-l-lg shadow-md hover:bg-gray-200 active:bg-gray-300 border-gray-200 text-xl"></i>
                                    {/* Enter category */}
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
                                        required
                                    ></input>
                                </div>
                            </div>

                            <div className="flex  w-full md:w-5/6 ">
                                <i className="fa-solid fa-subtitles flex items-center bg-white py-2 px-3 border rounded-l-lg shadow-md hover:bg-gray-200 active:bg-gray-300 border-gray-200 text-xl"></i>
                                {/* Enter description */}
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
                                    required
                                    rows="3"
                                ></textarea>
                                <div
                                    className="flex flex-col justify-center items-start m-3 rounded-full bg-white px-4 shadow-md hover:bg-gray-200 active:bg-gray-300 border border-gray-200"
                                    onClick={() =>
                                        setFlashcards((prev) => ({
                                            ...prev,
                                            status:
                                                flashcards.status == 'Public'
                                                    ? 'Private'
                                                    : 'Public',
                                        }))
                                    }
                                >
                                    <i
                                        className={`${
                                            flashcards.status == 'Public'
                                                ? 'fa-solid fa-unlock'
                                                : 'fa-solid fa-lock'
                                        } text-3xl`}
                                    ></i>
                                </div>
                                <select
                                    value={flashcards.status}
                                    onChange={handleSelectChange}
                                    className=" appearance-none  border border-gray-200 bg-regal-blue text-white p-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:regal-blue hidden md:block"
                                >
                                    <option value="Public">Public</option>
                                    <option value="Private">Private</option>
                                </select>
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
                                    type="button"
                                    className=" bg-regal-blue w-full text-white px-4 py-2 rounded-md hover:bg-regal-blue-light transition duration-200 active:bg-regal-blue-dark self-center"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        addQuestion()
                                    }}
                                >
                                    Add Question
                                </button>
                                <button
                                    type="submit"
                                    className=" bg-regal-blue-darkest text-white px-4 py-2 rounded-md hover:bg-regal-blue-light transition duration-200 w-full active:bg-regal-blue-dark self-center"
                                >
                                    Save Flashcard
                                </button>
                            </div>
                        </form>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}
