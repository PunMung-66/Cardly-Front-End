import { useState } from 'react'
import supabase from '../../helper/supabaseClient'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [enable, setEnable] = useState(false)
    // const [loading, setLoading] = useState(false)

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
            <h1>Signup</h1>
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
                <button disabled={enable}>Signup</button>
                <div>
                    {' '}
                    Already have an account?{' '}
                    <Link to={'/auth/login'}>Login</Link>
                </div>
            </form>
        </>
    )
}
