import { useParams } from 'react-router-dom'

export default function FlashCard() {
    const { id } = useParams()
    return (
        <>
            <div className="w-full h-full flex items-center justify-center gap-5 ">
                <div className=" w-full flex gap-5 flex-col lg:flex-row ">
                    <div className="w-full flex flex-col items-center justify-center gap-7 p-5 rounded-lg bg-white shadow-md relative">
                        <i class=" absolute fa-regular fa-bookmark text-3xl top-3 right-3 md:top-5 md:right-10"></i>
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
                            <i class="fa-solid fa-circle-user text-3xl"> </i>
                            <p className=' line-clamp-1 '>Punnwat Mungkalarungsi</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-5">
                        <button className="w-full h-full flex items-center justify-center gap-5 bg-regal-blue text-white rounded-lg p-3 hover:bg-regal-blue-dark transition duration-200">
                            <i class="fa-solid fa-play text-3xl"></i>
                            Let's Go Review
                        </button>
                        <button className="w-full h-full flex items-center justify-center gap-5 bg-regal-blue-light text-white rounded-lg p-3 hover:bg-regal-blue-dark transition duration-200">
                            <i class="fa-solid fa-arrow-left text-3xl"></i>
                            Back to Flashcards
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
