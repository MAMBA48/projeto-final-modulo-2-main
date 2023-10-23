import { login } from '@/services/users'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonLogin } from '@/components/ui/button/buttonLogin'
import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
  background: url('/static/images/BgLogin.png');
  background-size: cover;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const LoginBox = styled.section`
  display: flex;
  background: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 40px;
  height: 600px;
  width: 500px;
`
export const SectionInput = styled.section`
  display: flex;
  gap: 30px;
  height: auto;
  flex-direction: column;
  width: 400px;
  max-width: 80%;
  & ul {
    display: flex;
    padding: 6px;
    justify-content: space-between;
    flex-direction: row;
  }
`
export const FieldSet = styled.fieldset`
  display: flex;
  border-radius: 10px;
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  & fieldset:hover {
    border: 1px solid #00c247;
  }
  & input {
    all: unset;
    padding-left: 8px;
    padding-bottom: 8px;
    border: none;
    width: 100%;
  }
`

const LoginPage = () => {
  //const navigate = useNavigate()
  //login
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const doLogin = async () => {
    //retorno booleano true or false
    console.log('antes da promise')
    const res = await login(email, password)
    console.log(res)
    //fazer o redirecionamento de tela
    //const navigate = useNavigate()
    if (res) {
      navigate('/dashboard')
    } else {
      alert('dados invalidos')
    }
  }

  return (
    <Container>
      <LoginBox>
        <SectionInput id="login-form">
          <p>Seja bem vindo!</p>
          <h1>Realize seu Login</h1>
          <FieldSet>
            <legend>E-mail</legend>
            <input
              type="text"
              placeholder="e-mail"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </FieldSet>

          <FieldSet>
            <legend>Senha</legend>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </FieldSet>

          <ul>
            <li>
              <input type="checkbox" name="remember" id="remember" />
              <b>Lembrar</b>
            </li>
            <li>Esqueci minha senha</li>
          </ul>
          <ButtonLogin onClick={doLogin}></ButtonLogin>
        </SectionInput>
      </LoginBox>
    </Container>
  )
}
export default LoginPage
