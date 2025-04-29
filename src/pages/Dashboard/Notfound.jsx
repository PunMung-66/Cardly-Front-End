import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Notfound() {

    const navigate = useNavigate() 

    const handleNavigate = () => {
        navigate('/', { replace: true })
    }

    return (

        <div className="flex flex-col items-center justify-center h-screen bg-[#B3EBF2] text-regal-blue font-poppins">
            
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-lg text-center mb-2">
                Oops! The page you are looking for does not exist.
            </p>
            <button onClick={handleNavigate} className="text-lg text-blue-500 hover:underline">
                Go back to Home
            </button>

        </div>
    )
}
