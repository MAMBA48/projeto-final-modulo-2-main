import api from './api'

export const login = async (email: string, password: string) => {
  const result = await api.post(
    `/public/register/login`,
    {},
    {
      params: {
        email,
        password
      }
    }
  )

  if (result.data.message === 'Successfully login') {
    //validando se tiver msg de sucesso, salvar token no localStorage
    localStorage.setItem('token', result.data.token)

    console.log('Token armazenado no LocalStorage')
    return true
  }
  //tratamento de erro
  return false
}
