import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://harry-photo-backend.vercel.app/api/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            //save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //update context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }

    const googleLogin = async (name, picture) => {
        setIsLoading(true)
        setError(null)

        const response = {name, picture}

        if (!response) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response) {
            //save the user to local storage
            localStorage.setItem('user', JSON.stringify(response))

            //update context
            dispatch({type: 'LOGIN', payload: response})

            setIsLoading(false)
        }
    }

    return { login, googleLogin, isLoading, error }
}