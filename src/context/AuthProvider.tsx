import { createContext, useState, PropsWithChildren, useContext } from 'react'
import User from '../entities/User'

interface IAuthContext {
    currentUser?: User,
    users: User[]
    logIn: (email: string, password: string) => void
    addUser: (user: User) => void
}

const AuthContext = createContext<IAuthContext | undefined>(undefined)

export const useAuth = () => {
    return useContext(AuthContext)
}

export function AuthProvider({ children }: PropsWithChildren) {
    const [currentUser, setCurrentUser] = useState<User>()
    const [users, setUsers] = useState<User[]>([ new User('andres@gmail.com', 'andreschido') ])

    const logIn = (email: string, password: string) => {
        const user = users.find(user => user.email === email && user.password === password)
        if (user) return setCurrentUser(user)
        console.log('User not found')
    }

    const addUser = (newUser: User) => {
        const {email, password} = newUser
        const index = users.findIndex(user => user.email === email && user.password === password)
        if (index !== -1) return setUsers(prevState => [...prevState, newUser])
    }

    const value: IAuthContext = {
        currentUser,
        users,
        logIn,
        addUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}