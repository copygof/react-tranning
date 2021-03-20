import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function useAuth() {
  const authContext = useContext(AuthContext)
  return authContext
}

export default useAuth
