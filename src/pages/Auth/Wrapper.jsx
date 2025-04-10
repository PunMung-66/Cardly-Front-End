import { useState, useEffect } from 'react'
import supabase from '../../helper/supabaseClient'
import { Navigate } from 'react-router-dom'

function Wrapper({ children }) {
    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getSession = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession()

            //  !!null === false
            setAuthenticated(!!session)
            setLoading(false)
        }

        getSession()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    } else if (authenticated) {
        return <>{children}</>
    } else {
        return <Navigate to="/auth/login" />
    }
}

export default Wrapper
