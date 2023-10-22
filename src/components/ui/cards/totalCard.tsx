import axios from 'axios'
import styled from 'styled-components'
import { MyUserIcon } from './cardUser'
import { useEffect, useState } from 'react'

export const MyCardBox = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-around;
  align-items: center;
  height: 90px;
  width: 200px;
  border: 1px solid #000;
`
export const MyCardDetail = styled.div`
  display: flex;
  flex-direction: column;
`

const CardTotal = ({ icon, doctor, total }: dashboardTypeData) => {
  return (
    <MyCardBox key={'index'}>
      <span>
        <MyUserIcon>
          <img src={icon} alt="" />
        </MyUserIcon>
      </span>
      <MyCardDetail>
        <small>{doctor}</small>
        <b>{total}</b>
      </MyCardDetail>
    </MyCardBox>
  )
}
export default CardTotal
