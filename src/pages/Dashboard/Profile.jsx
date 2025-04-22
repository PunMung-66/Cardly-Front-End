import { useState } from 'react'
import Container from '../../components/Container'
import Divider from '../../components/Divider'
import supabase from '../../helper/supabaseClient'

export default function Profile() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleCheckSamePassword = () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return true
        }
        setPassword('')
        setConfirmPassword('')
        return false
    }

    const handleUpdateName = async (e) => {
        e.preventDefault()
        const { error } = await supabase.auth.updateUser({
            data: { display_name: userName },
        })
        if (error) {
            alert(error.message)
            return
        }
        alert('User name updated successfully')
        setUserName('')
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
        alert('Password updated successfully')
        setPassword('')
        setConfirmPassword('')
    }

    return (
        <>
            <Container
                title="User's Profile"
                icon=" text-xl fa-solid fa-circle-user"
            >
                <div className="flex flex-col gap-10 w-full lg:w-2/3 p-5 sm:p-10 bg-white rounded-lg shadow-md mt-10">
                    <div className="flex flex-col sm:flex-row  w-full justify-center gap-10 ">
                        <form className="w-full  flex flex-col gap-5">
                            <h1 className="text-xl font-bold">User Name : </h1>
                            <div className="flex">
                                <i className="fa-solid fa-input-text bg-white py-2 px-3 border rounded-l-lg shadow-md hover:bg-gray-200 active:bg-gray-300 border-gray-200 text-xl"></i>
                                <input
                                    required
                                    value={userName}
                                    onChange={(e) =>
                                        setUserName(e.target.value)
                                    }
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full border border-gray-200 p-2  rounded-r-lg shadow-md focus:outline-none focus:ring-2 focus:regal-blue"
                                />
                            </div>
                            <button
                                className=" bg-regal-blue text-white p-2 rounded-md hover:bg-regal-blue-light active:bg-regal-blue-dark transition duration-300 ease-in-out"
                                onClick={(e) => {
                                    handleUpdateName(e)
                                }}
                            >
                                Update Name
                            </button>
                        </form>
                    </div>
                    <Divider />
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
                                            setConfirmPassword(e.target.value)
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
                                if (handleCheckSamePassword() === false) {
                                    handleUpdatePassword(e)
                                }
                            }}
                        >
                            Reset Password
                        </button>
                    </form>
                </div>
            </Container>
        </>
    )
}
