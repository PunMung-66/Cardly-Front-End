import React from 'react'

export default function AddingInput({ question, answer, hint, index='' }) {
    return (
        <div className="w-full flex flex-col items-center justify-center rounded-lg bg-white gap-4">
            <h2 className=" flex justify-between items-center w-full border border-b-4 border-regal-sky text-base font-semibold p-4">
                {index}
                <i className="fa-solid fa-trash text-lg px-3 py-1 rounded-full border "></i>
            </h2>

            <div className="flex flex-col items-center justify-center gap-6 w-full  p-7">
                <div className="w-full flex flex-col items-start justify-center">
                    <input
                        type="text"
                        placeholder="Enter Question"
                        className=" text-regal-blue font-medium py-2 w-full mb-4 focus:outline-none duration-200 shadow-[0px_2px_0px_0px_#f0f4ff] focus:shadow-[0px_3px_0px_0px_#f0f4ff] focus:bg-white"
                    />
                    <p className="text-sm font-semibold uppercase text-regal-sky">
                        Question
                    </p>
                </div>
                <div className="w-full flex flex-col items-start justify-center">
                    <input
                        type="text"
                        placeholder="Enter Answer"
                        className=" text-regal-blue font-medium py-2 w-full mb-4 focus:outline-none duration-200 shadow-[0px_2px_0px_0px_#f0f4ff] focus:shadow-[0px_3px_0px_0px_#f0f4ff] focus:bg-white"
                    />
                    <p className="text-sm font-semibold uppercase text-regal-sky">
                        Answer
                    </p>
                </div>
                <div className="w-full flex flex-col items-start justify-center">
                    <input
                        type="text"
                        placeholder="Enter Hint"
                        className=" text-regal-blue font-medium py-2 w-full mb-4 focus:outline-none duration-200 shadow-[0px_2px_0px_0px_#f0f4ff] focus:shadow-[0px_3px_0px_0px_#f0f4ff] focus:bg-white"
                    />
                    <p className="text-sm font-semibold uppercase text-regal-sky">
                        Hint
                    </p>
                </div>
            </div>
        </div>
    )
}
