import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  cursor: pointer;
  font-weight: bolder;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: none;
  color: #fff;
  background: #046639;
  height: auto;
  width: 100%;
  padding: 12px;
`

type ButtonLoginType = {
  onClick?: () => void
}

export const loginValidation = (e: FormEvent) => {
  e.preventDefault()
  const navigate = useNavigate()
  navigate('/dashboard')
}

export const ButtonLogin = ({ onClick }: ButtonLoginType) => {
  return <Button onClick={onClick}>Entrar</Button>
}
