import React, { useState } from 'react'
import supabase from '../../helper/supabaseClient'
import { Link, useNavigate } from 'react-router'

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [enable, setEnable] = useState(false)

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
                navigate('/page')
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
    return (
        <>
            <h1>Login</h1>
            {message && <div>{message}</div>}
            <br />
            <form onSubmit={handleSumit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                />
                <button disabled={enable}>Log in</button>
                <div>
                    {' '}
                    Don't have an account?{' '}
                    <Link to={'/auth/signup'}>Signup</Link>
                </div>
            </form>
        </>
    )
}
