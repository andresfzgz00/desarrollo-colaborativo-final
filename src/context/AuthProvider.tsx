import { createContext, useState, useContext } from 'react'
import User from '../entities/User'
import Login from '../pages/Login'
import Routes from '../routes'

interface IAuthContext {
    currentUser?: User,
    users: User[]
    logIn?: (email: string, password: string) => void
    addUser?: (user: User) => void
}

const AuthContext = createContext<IAuthContext>({
    users: []
})

export const useAuth = () => {
    return useContext(AuthContext)
}

export function AuthProvider() {
    const [currentUser, setCurrentUser] = useState<User>()
    const [users, setUsers] = useState<User[]>([ new User('andres@gmail.com', 'andreschido') ])

    const logIn = (email: string, password: string) => {
        const user = users.find(user => user.email === email && user.password === password)
        console.log(currentUser)
        if (user) return setCurrentUser(user)
        console.log('User not found')
    }

    const addUser = (newUser: User) => {
        const {email, password} = newUser
        const index = users.findIndex(user => user.email === email && user.password === password)
        if (index !== -1) return setUsers(prevState => [...prevState, newUser])
    }

    const value = {
        currentUser,
        users,
        logIn,
        addUser
    }

    return (
        <AuthContext.Provider value={value} >
           <div>{currentUser ? <Routes /> : <Login />}</div>
        </AuthContext.Provider>
    )
}