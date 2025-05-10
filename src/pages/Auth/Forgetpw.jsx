import { useState } from 'react'
import Container from '../../components/Container'
import Divider from '../../components/Divider'
import supabase from '../../helper/supabaseClient'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Forgetpw() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()

    const handleCheckSamePassword = () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return true
        }
        setPassword('')
        setConfirmPassword('')
        return false
    }

    const handleUpdatePassword = async (e) => {
        e.preventDefault()
        const { error } = await supabase.auth.updateUser({
            password: password,
        })
        if (error) {
            alert(error.message)
            return
        }
        alert('Password reset successfully')
        setPassword('')
        setConfirmPassword('')
    }

    const handleNavigate = () => {
        setTimeout(() => {
            navigate('/auth/login')
        }, 400) // match the animation duration
    }

    return (
        <>
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="h-screen overflow-hidden font-poppins text-regal-blue"
                >
                    {/* Header */}
                    <nav className="shadow-md p-4 relative z-10">
                        <div className=" flex justify-between items-center ">
                            <h1
                                class="text-[25px] sm:text-[35px]  font-bold md:pl-7 text-regal-blue uppercase cursor-pointer"
                                onClick={() => navigate('/')}
                            >
                                Cardly
                            </h1>
                            <div className="flex mr-5 ml-auto">
                                <button
                                    onClick={handleNavigate}
                                    className=" text-[15px] sm:text-[19.2px] bg-regal-blue text-white rounded-[5px] px-10 py-2 font-semibold  hover:bg-regal-blue-light transition duration-300 no-underline sm:mx-5"
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </nav>
                    <div className="w-full h-screen flex flex-col items-center justify-center bg-regal-sky p-5 ">
                        <div className="flex flex-col  w-full sm:w-2/3 p-5  sm:p-10 bg-white rounded-lg shadow-md  ">
                            <form className="flex flex-col  w-full justify-center gap-10">
                                <div className="flex flex-col  w-full justify-center gap-10">
                                    <div className="w-full  flex flex-col gap-5">
                                        <h1 className="text-xl font-bold">
                                            Password :{' '}
                                        </h1>
                                        <div className="flex">
                                            <i className="fa-solid fa-key-skeleton bg-white py-2 px-3 border rounded-l-lg shadow-md hover:bg-gray-200 active:bg-gray-300 border-gray-200 text-xl"></i>
                                            <input
                                                required
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                                type="password"
                                                placeholder="Enter your Password"
                                                className="w-full border border-gray-200 p-2  rounded-r-lg shadow-md focus:outline-none focus:ring-2 focus:regal-blue"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col gap-5">
                                        <h1 className="text-xl font-bold">
                                            Confirm Password :{' '}
                                        </h1>
                                        <div className="flex">
                                            <i className="fa-solid fa-key-skeleton bg-white py-2 px-3 border rounded-l-lg shadow-md hover:bg-gray-200 active:bg-gray-300 border-gray-200 text-xl"></i>
                                            <input
                                                required
                                                value={confirmPassword}
                                                onChange={(e) =>
                                                    setConfirmPassword(
                                                        e.target.value
                                                    )
                                                }
                                                type="password"
                                                placeholder="Enter your password again"
                                                className="w-full border border-gray-200 p-2  rounded-r-lg shadow-md focus:outline-none focus:ring-2 focus:regal-blue"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="bg-regal-blue text-white p-2 rounded-md hover:bg-regal-blue-light active:bg-regal-blue-dark transition duration-300 ease-in-out"
                                    onClick={(e) => {
                                        if (
                                            handleCheckSamePassword() === false
                                        ) {
                                            handleUpdatePassword(e)
                                        }
                                    }}
                                >
                                    Reset Password
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    )
}
