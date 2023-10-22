import { Link } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'

export const MyCardUser = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  cursor: pointer;
  gap: 15px;
`
export const MyUserIcon = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: #046639;
`
export const MyUserBox = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`
export const MyUser = styled.span`
  display: flex;
  flex-direction: column;
`
export const Arrow = styled.p`
  transform: rotate(90deg);
  cursor: pointer;
  font-size: 1.2rem;
`
export const SpanMoreInfo = styled.span`
  display: flex;
  gap: 10px;
  height: auto;
  width: 200px;
  flex-direction: column;
  margin-top: 45px;
  margin-right: 0px;
  position: fixed;
  z-index: 1;
  background: #fff;
  box-shadow: var(--boxShadowModal);
  border-radius: 8px;
  padding: 10px;
  & a {
    text-decoration: none;
  }
`

const CardUser = () => {
  const [isOpen, setIsOpen] = useState(false)
  const moreDetails = () => {
    setIsOpen(!isOpen)
  }

  return (
    <MyCardUser>
      <MyUserIcon>ICON</MyUserIcon>
      <MyUserBox>
        <MyUser>
          <b>usuario</b>
          <small>email@teste.com</small>
        </MyUser>
        <Arrow onClick={moreDetails}>{'>'}</Arrow>
        {isOpen && (
          <SpanMoreInfo>
            <ul>
              <li>
                <Link to="/userpage">Usuario</Link>
              </li>
              <hr />
              <li>
                <Link to="/">Sair</Link>
              </li>
            </ul>
          </SpanMoreInfo>
        )}
      </MyUserBox>
    </MyCardUser>
  )
}
export default CardUser
