import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPage() {
    return (
        <>
            <div className="">Home</div>
            <Link to="/auth/signup">Signup</Link>
            <br />
            <Link to="/auth/login">Login</Link>
        </>
    )
}
