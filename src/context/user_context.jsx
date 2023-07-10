import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0()

  const [myUser, setMyUser] = useState(null)

  useEffect(() => {
    if (isAuthenticated) {
      setMyUser(user)
    } else {
      setMyUser(false)
    }
    // console.log(`user : ${user}`)
    // console.log(`isAuthenticated : ${isAuthenticated}`)
    // console.log(`isLoading : ${isLoading}`)
  }, [isAuthenticated])

  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}
