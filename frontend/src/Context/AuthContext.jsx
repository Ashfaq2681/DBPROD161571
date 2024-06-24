import { createContext, useEffect, useReducer } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload, notify: `User has logged in`}
        case 'LOGOUT':
            return { user: null, plan: null, notify: `User has logged out` }
        case 'PLAN':
            return { user: state.user , plan: action.payload.plan}
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        plan: null,
        notify: []
    })
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))

        if (user) {
            dispatch({type: 'LOGIN', payload: user})
        }
    },[])

    console.log("AuthContext state:", state);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}