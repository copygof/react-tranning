import React, { ReactNode, useEffect, useMemo, useReducer } from 'react'
import AuthManager from '../config/AuthManager'

const AuthContext = React.createContext({
  isLoading: true,
  isSignout: false,
  userToken: null,
  signIn: () => {},
  signOut: () => {},
})

type AuthProviderProps = {
  children: ReactNode
}

function AuthProvider(props: AuthProviderProps) {
  const [state, dispatch] = useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          }
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          }
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          }
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  )

  useEffect(() => {
    const bootstrapAsync = async () => {
      const userToken = await AuthManager.getAccessTokenAsync()
      setTimeout(() => {
        dispatch({ type: 'RESTORE_TOKEN', token: userToken })
      }, 450)
    }

    bootstrapAsync()
  }, [])

  const authContext = useMemo(
    () => ({
      signIn: async () => {
        const userToken = await AuthManager.signInAsync()
        dispatch({ type: 'SIGN_IN', token: userToken })
      },
      signOut: async () => {
        await AuthManager.signOutAsync()
        dispatch({ type: 'SIGN_OUT' })
      },
    }),
    [],
  )

  return (
    <AuthContext.Provider
      value={{
        ...state,
        ...authContext,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
