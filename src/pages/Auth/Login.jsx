import React, { useState } from 'react'
import supabase from '../../helper/supabaseClient'
import { Link, useNavigate } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import bannerimg1 from '../../assets/image/banner-deep-dive-online.jpg'
import bannerimg2 from '../../assets/image/banner-meet.jpg'

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [enable, setEnable] = useState(false)

    // Animations
    const handleNavigate = () => {
        setTimeout(() => {
          navigate('/auth/signup');
        }, 400); // match the animation duration
      };

    const handleSumit = async (e) => {
        e.preventDefault()
        setMessage('')
        setEnable(true)

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            })

            if (error) {
                setMessage(error.message)
                return
            } else if (data) {
                setMessage('Login success!')
                navigate('/dashboard')
                return null
            }

            setEmail('')
            setPassword('')
        } catch (error) {
            setMessage(error.message)
        } finally {
            setEnable(false)
        }
    }

    const handleForgotPassword = async () => {
        if (!email) {
            setMessage('Please enter your email address first.')
            return
        }

        setEnable(true)
        setMessage('')

        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo:
                'https://cardly-front-end.vercel.app/auth/forgotpassword', // Replace with your actual reset page
        })

        if (error) {
            setMessage(error.message)
        } else {
            setMessage('Password reset email sent. Please check your inbox.')
        }

        setEnable(false)
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
                        <div className=" flex justify-around items-center ">
                            <h1
                                class="text-[25px] sm:text-[35px]  font-bold md:pl-7 uppercase cursor-pointer"
                                onClick={() => navigate('/')}
                            >
                                Cardly
                            </h1>
                            <div className="flex mr-5 ml-auto">
                                <button
                                    onClick={handleNavigate}
                                    className="text-[15px] sm:text-[19.2px] bg-regal-blue text-white rounded-[5px] px-10 py-2 font-semibold  hover:bg-regal-blue-light transition duration-300 no-underline "
                                >
                                    Sign up
                                </button>
                            </div>
                        </div>
                    </nav>

                    <div className="h-screen flex items-center justify-center bg-[#B3EBF2] relative z-0">
                        <div className="bg-white rounded-xl shadow-lg flex flex-col sm:flex-row overflow-hidden max-w-2xl w-full mb-20 items-center mx-4">
                            <div className=" w-full md:w-1/2 p-8 flex flex-col justify-center">
                                <h2 className="text-2xl  font-medium text-center px-2 py-2">
                                    Login to{' '}
                                    <span className="font-bold uppercase">
                                        Cardly
                                    </span>
                                </h2>

                                {message && (
                                    <div className="text-center text-sm text-red-500 mt-2">
                                        {message}
                                    </div>
                                )}
                                <br />

                                <form
                                    onSubmit={handleSumit}
                                    className="flex flex-col gap-4"
                                >
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        autoComplete="email"
                                        className="bg-blue-50 px-4 py-3 rounded-md outline-none focus:ring-1 focus:ring-regal-blue"
                                    />

                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        autoComplete="current-password"
                                        className="bg-blue-50 px-4 py-3 rounded-md outline-none focus:ring-1 focus:ring-regal-blue"
                                    />

                                    <button
                                        type="button"
                                        onClick={handleForgotPassword}
                                        className="text-sm text-gray-500 hover:underline  text-center"
                                    >
                                        Forgot Password?
                                    </button>

                                    <button
                                        disabled={enable}
                                        className=" bg-regal-blue text-white py-3 rounded-md hover:bg-gray-700 transition duration-200"
                                    >
                                        Log in
                                    </button>

                                    <div className=" text-center text-gray-500 text-sm ">
                                        {' '}
                                        Don't have an account?{' '}
                                        <Link onClick={handleNavigate}>
                                            Signup
                                        </Link>
                                    </div>
                                </form>
                            </div>

                            {/* Images */}

                            <div className="w-1/2 p-8 hidden flex-col gap-4 items-center justify-center sm:flex">
                                <img
                                    src={bannerimg1}
                                    alt="Study"
                                    className=" rounded-3xl border-2 "
                                />

                                <img
                                    src={bannerimg2}
                                    alt="Study"
                                    className="  rounded-3xl border-2 "
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    )
}
