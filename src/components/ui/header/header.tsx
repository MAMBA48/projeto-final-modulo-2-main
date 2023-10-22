import { useState } from 'react'
import styled from 'styled-components'
import CardUser from '../cards/cardUser'

export const MyHeader = styled.header`
  display: flex;
  height: 80px;
  margin-bottom: 20px;
  box-sizing: border-box;
  justify-content: space-between;
`

const Header = () => {
  return (
    <MyHeader>
      <span
        style={{ display: 'flex', padding: '10px', alignItems: 'center' }}
      ></span>
      <CardUser />
    </MyHeader>
  )
}
export default Header
