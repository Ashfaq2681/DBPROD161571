import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:4000/api/user/signup', {
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

    const googleSignup = async (name, picture) => {
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

    return { signup, googleSignup , isLoading, error }
}