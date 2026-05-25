import { createContext, useEffect, useMemo, useState } from 'react'

const AUTH_KEY = 'bnb_auth_user'
const AuthContext = createContext(undefined)

function safeReadUser() {
  try {
    const value = localStorage.getItem(AUTH_KEY)
    if (!value) return null
    const parsed = JSON.parse(value)
    if (!parsed || typeof parsed !== 'object' || typeof parsed.email !== 'string') {
      return null
    }
    return parsed
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(safeReadUser())
  }, [])

  const login = async (credentials) => {
    const nextUser = {
      email: credentials.email,
      name: credentials.email.split('@')[0] || 'guest',
      updatedAt: new Date().toISOString(),
    }
    localStorage.setItem(AUTH_KEY, JSON.stringify(nextUser))
    setUser(nextUser)
    return nextUser
  }

  const signup = async (payload) => {
    const nextUser = {
      email: payload.email,
      name: payload.fullName || payload.email.split('@')[0] || 'guest',
      updatedAt: new Date().toISOString(),
    }
    localStorage.setItem(AUTH_KEY, JSON.stringify(nextUser))
    setUser(nextUser)
    return nextUser
  }

  const logout = () => {
    localStorage.removeItem(AUTH_KEY)
    setUser(null)
  }

  const value = useMemo(
    () => ({ user, isAuthenticated: Boolean(user), login, signup, logout }),
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext }
