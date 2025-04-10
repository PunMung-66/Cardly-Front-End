import React from 'react'

export default function Searchbar() {
    return (
        <>
            {/* Search Bar */}
            <div className="flex items-center sm:justify-center w-full gap-5">
                <div className=" md:w-1/2 lg:w-1/2 xl:w-1/3 flex ">
                    <i className="fa-solid fa-magnifying-glass bg-white py-2 px-3 border rounded-l-lg shadow-md hover:bg-gray-200 active:bg-gray-300 border-gray-200 text-xl"></i>
                    <input
                        className="w-full border border-gray-200 p-2  rounded-r-lg shadow-md focus:outline-none focus:ring-2 focus:regal-blue"
                        placeholder="Search for a card..."
                    ></input>
                </div>
            </div>
        </>
    )
}
