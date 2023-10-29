import Axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import React, { useContext, useEffect, useState } from 'react'
import { handleError } from '../helpers'
import { UserRole } from '../types/general'

type AuthContextProps = {
  isAuthenticating: boolean
  isAuthenticated: boolean
  currentUserRole: UserRole
  currentMemberId: number | null
  authToken: string | null
  currentMember: { name: string | null; email: string | null; username: string | null; avatarUrl: string | null } | null
  register?: (data: { name: string; email: string; password: string }) => Promise<void>
  login?: (data: { account: string; password: string }) => Promise<void>
  logout?: () => Promise<void>
}
type PayloadProps = {
  sub: string
  memberId: number
  name: string | null
  email: string | null
  username: string | null
  avatarUrl: string | null
  role: UserRole
  exp: number
}

const defaultAuthContext: AuthContextProps = {
  isAuthenticating: true,
  isAuthenticated: false,
  currentUserRole: 'anonymous',
  currentMemberId: null,
  authToken: null,
  currentMember: null,
}

const AuthContext = React.createContext<AuthContextProps>(defaultAuthContext)

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isAuthenticating, setIsAuthenticating] = useState(defaultAuthContext.isAuthenticating)
  const [authToken, setAuthToken] = useState<string | null>(null)

  const payload: PayloadProps | null = authToken ? (jwtDecode(authToken) as any) : null

  // refresh token if expired or unauthenticated
  useEffect(() => {
    if (payload === null || payload.exp * 1000 < Date.now()) {
      setIsAuthenticating(true)
      Axios.post('/api/v1/auth/refresh-token', {}, { withCredentials: true })
        .then(({ data: { code, message, result } }) => {
          code === 'SUCCESS' ? setAuthToken(result.authToken) : setAuthToken(null)
        })
        .catch((error: Error) => {
          setAuthToken(null)
          handleError(error)
        })
        .finally(() => setIsAuthenticating(false))
    } else {
      setIsAuthenticating(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(payload)])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticating,
        isAuthenticated: Boolean(authToken),
        currentUserRole: (payload && payload.role) || 'anonymous',
        currentMemberId: payload && parseInt(payload.sub),
        authToken,
        currentMember: payload && {
          name: payload.name,
          email: payload.email,
          username: payload.username,
          avatarUrl: payload.avatarUrl,
        },
        register: async ({ name, email, password }) =>
          Axios.post(
            '/api/v1/auth/register',
            {
              name,
              email,
              password,
            },
            { withCredentials: true },
          ).then(({ data: { code, message, result } }) => {
            if (code === 'SUCCESS') {
              setAuthToken(result.authToken)
            } else {
              setAuthToken(null)
              throw new Error(code)
            }
          }),
        login: async ({ account, password }) =>
          Axios.post('/api/v1/auth/general-login', { account, password }, { withCredentials: true }).then(
            ({ data: { code, result } }) => {
              if (code !== 'SUCCESS') {
                setAuthToken(null)
                throw new Error(code)
              } else if (result === null) {
                window.location.assign(`/check-email?email=${account}&type=reset-password`)
              } else {
                setAuthToken(result.authToken)
              }
            },
          ),
        logout: async () =>
          Axios.post('/api/v1/auth/logout', {}, { withCredentials: true }).then(({ data: { code, result } }) => {
            if (code === 'SUCCESS') {
              setAuthToken(null)
            } else {
              throw new Error(code)
            }
          }),
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
