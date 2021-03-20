import axios from 'axios'

class AuthService {
  login = async (userName: string, password: string) => {
    try {
      const response = await axios({
        url: '/api/login',
        method: 'POST',
        data: { userName, password },
      })
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default new AuthService()
