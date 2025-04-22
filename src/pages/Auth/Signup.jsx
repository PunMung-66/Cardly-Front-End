import { useState } from 'react'
import supabase from '../../helper/supabaseClient'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [enable, setEnable] = useState(false)
    const [displayName, setDisplayName] = useState('')

    const handleSumit = async (e) => {
        e.preventDefault()
        setMessage('')
        setEnable(true)

        try {
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        display_name: displayName,
                    },
                },
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
                <div className='flex flex-col gap-2 w-3/5'>
                    <input
                        type="text"
                        placeholder="Display Name"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        autoComplete="name"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        required
                    />
                </div>
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
