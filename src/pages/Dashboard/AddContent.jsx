import { useState } from 'react'
import Container from '../../components/Container'
import AddingInput from '../../components/AddingInput'

export default function AddContent() {
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
            {
                question: '',
                answer: '',
                hint: '',
            },
        ],
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
                            ></input>
                        </div>
                        <div className=" flex w-full">
                            <i className="fa-solid fa-tags flex items-center bg-white py-2 px-3 border rounded-l-lg shadow-md hover:bg-gray-200 active:bg-gray-300 border-gray-200 text-xl"></i>
                            <input
                                className="w-full border border-gray-200 p-2  rounded-r-lg shadow-md focus:outline-none focus:ring-2 focus:regal-blue"
                                placeholder="Enter Category"
                            ></input>
                        </div>
                    </div>

                    <div className="flex  w-full md:w-5/6">
                        <i className="fa-solid fa-subtitles flex items-center bg-white py-2 px-3 border rounded-l-lg shadow-md hover:bg-gray-200 active:bg-gray-300 border-gray-200 text-xl"></i>
                        <textarea
                            className="w-full border border-gray-200 p-2  rounded-r-lg shadow-md focus:outline-none focus:ring-2 focus:regal-blue"
                            placeholder="Enter Description . . . ."
                        ></textarea>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-10 mb-4 w-full md:w-5/6">
                        <AddingInput
                            Question="Question"
                            Answer="Answer"
                            Hint="Hint"
                            index={1}
                        />
                        <AddingInput
                            Question="Question"
                            Answer="Answer"
                            Hint="Hint"
                            index={2}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 w-full md:w-5/6 ">
                        <button className=" bg-regal-blue w-full text-white px-4 py-2 rounded-md hover:bg-regal-blue-light transition duration-200 active:bg-regal-blue-dark self-center">
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
