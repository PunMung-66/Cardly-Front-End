import { useState, useEffect } from 'react'
import supabase from '../../helper/supabaseClient'
import { Navigate } from 'react-router-dom'
import ContainerContextUserID from '../../Context/ContainerUserID'

function Wrapper({ children }) {
    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    const [ userId, setUserId ] = useState('')

    useEffect(() => {
        const getSession = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession()

            if (session) {
                setAuthenticated(true)
                setUserId(session.user.id)
            } else {
                setAuthenticated(false)
            }

            setLoading(false)
        }

        getSession()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    } else if (authenticated) {
        return (
            <>
                <ContainerContextUserID.Provider value={{ userId, setUserId }}>
                    {children}
                </ContainerContextUserID.Provider>
            </>
        )
    } else {
        return <Navigate to="/auth/login" />
    }
}

export default Wrapper
