import { useState } from 'react'
import supabase from '../../helper/supabaseClient'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Signup() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [enable, setEnable] = useState(false)
    // const [loading, setLoading] = useState(false)

    // Animations
    const pageVariants = {
        initial: {initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 } },
    };

    const handleNavigate = () => {
        setTimeout(() => {
          navigate('/auth/login');
        }, 400); // match the animation duration
      };


    const handleSumit = async (e) => {
        e.preventDefault()
        setMessage('')
        setEnable(true)

        try {
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
            })

            if (data) {
                setMessage('Check your email for confirmation!')
            }

            if (error) {
                setMessage(error.message)
            }
            setEmail('')
            setPassword('')
        } catch (error) {
            setMessage(error.message)
        } finally {
            setEnable(false)
        }
    }

    return (
        <>
            <AnimatePresence mode="wait">
                <motion.div
                    initial= {{ opacity: 0, y: 20 }}
                    animate= {{ opacity: 1, y: 0 }}
                    exit= {{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4}}
                    className='h-screen overflow-hidden font-poppins'
                    >
                    
                        {/* Header */}
                        <nav className="shadow-md p-4 relative z-10" >
                            <div className=' flex justify-between items-center '>
                                <h1 class="text-[35px] text-2xl font-bold pl-7 text-regal-blue-darkest uppercase">Cardly</h1>
                                <div className='flex mr-5 ml-auto'>
                                    <button  onClick={handleNavigate} className="bg-regal-blue-darkest text-white rounded-[5px] p-2 font-semibold text-[1.2rem] hover:bg-regal-blue-light transition duration-300 no-underline mx-5">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </nav>  
                                    
                    
                        <div className="h-screen flex items-center justify-center bg-[#B3EBF2] relative z-0">
                            <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden max-w-2xl w-full mb-20">
                                <div className="w-full md:w-1/2 p-8">
                                    <h2 className="text-2xl text-regal-blue-darkest font-medium text-center px-2 py-2">
                                        Sign up to <span className="font-bold uppercase">Cardly</span>
                                    </h2>
                    
                                    {message && <div className = "text-center text-sm text-red-500 mt-2">{message}</div>}
                                    <br />
                    
                                    <form onSubmit={handleSumit} className="flex flex-col gap-4">

                                        <input
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            autoComplete="email"
                                            className="bg-blue-50 px-4 py-3 rounded-md outline-none"
                                        />  

                                        <input
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            autoComplete="current-password"
                                            className="bg-blue-50 px-4 py-3 rounded-md outline-none"
                                        />
                    
                                        <button disabled={enable} className="bg-gray-900 text-white py-3 rounded-md hover:bg-gray-700 transition duration-200">
                                            Continue
                                        </button>
                                            
                                            
                                        <div className="text-center text-gray-500 text-sm mb-2">
                                            {' '} Already have an account? {' '}
                                            <Link onClick={handleNavigate}>Login</Link>
                                        </div>
                                    </form>
                                </div>
                    
                                {/* Images */}
                    
                                <div className="w-full md:w-1/2 p-8 flex flex-col gap-4 items-center justify-center">
                                    <img
                                        src=""
                                        alt="Study"
                                        className="rounded-l border-4 border-gray-700"
                                    />
                    
                                    <img
                                        src=""
                                        alt="Study"
                                        className="rounded-l border-4 border-gray-700"
                                    />
                                    
                                </div>
                            </div>
                        </div>
                </motion.div>
            </AnimatePresence>
        </>
    )
}

