/* eslint-disable camelcase */
/* eslint-disable react/react-in-jsx-scope */
import { createContext, useEffect, useReducer } from 'react'
import { whoIamService, loginService, createAccount } from './../services/auth.service'

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
}

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload
    console.log(isAuthenticated)
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user
    }
  },
  LOGIN: (state, action) => {
    const { user } = action.payload
    return {
      ...state,
      isAuthenticated: true,
      user
    }
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null
  }),
  REGISTERED: (state, action) => {
    const { user } = action.payload
    return {
      ...state,
      isAuthenticated: true,
      user
    }
  },
  UPDATE_USER: (state, action) => {
    const { user } = action.payload
    return {
      ...state,
      user
    }
  }
}

const reducer = (state, action) => (handlers[action.type]
  ? handlers[action.type](state, action)
  : state)

export const AuthContext = createContext({
  ...initialState,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  registerAccount: () => Promise.resolve()
})

export const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { children } = props

  useEffect(() => {
    const initialize = async () => {
      try {
        const token = window.localStorage.getItem('TOKEN_ATEMPORAL')

        if (token) {
          try {
            const user = await whoIamService(token)
            dispatch({
              type: 'INITIALIZE',
              payload: {
                isAuthenticated: true,
                user: { ...user }
              }
            })
          } catch (error) {
            console.log(error)
            dispatch({
              type: 'INITIALIZE',
              payload: {
                isAuthenticated: false,
                user: null
              }
            })
            window.localStorage.removeItem('TOKEN_ATEMPORAL')
          }
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null
            }
          })
        }
      } catch (err) {
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null
          }
        })
        window.localStorage.removeItem('TOKEN_ATEMPORAL')
      }
    }
    initialize()
  }, [])

  const login = async (credentials) => {
    const { token } = await loginService(credentials)
    const user = await whoIamService(token)
    localStorage.setItem('TOKEN_ATEMPORAL', token)
    dispatch({
      type: 'LOGIN',
      payload: {
        user
      }
    })
  }

  const registerAccount = async (account) => {
    const { token } = await createAccount(account)
    const user = await whoIamService(token)
    localStorage.setItem('TOKEN_ATEMPORAL', token)
    console.log(user)
    dispatch({
      type: 'REGISTERED',
      payload: {
        user: { ...user }
      }
    })
  }

  const logout = async () => {
    localStorage.removeItem('TOKEN_ATEMPORAL')
    dispatch({ type: 'LOGOUT' })
  }

  const updateUserContext = async () => {
    const user = await whoIamService(localStorage.getItem('TOKEN_ATEMPORAL'))
    dispatch({
      type: 'UPDATE_USER',
      payload: {
        user
      }
    })
  }

  const values = {
    ...state,
    login,
    logout,
    updateUserContext,
    registerAccount
  }

  return (
    <AuthContext.Provider
      value={values}
    >
      {children}
    </AuthContext.Provider>
  )
}
