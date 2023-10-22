import styled from 'styled-components'

type MyCardType = string[] | string | number

const MyCardSpace = styled.section`
  display: flex;
  height: auto;
  width: 100%;
  border: 1px solid #000;
`

const CardsSpace = (children: MyCardType) => {
  return (
    <MyCardSpace>
      <span>Welcome box</span>
      <aside>{children}</aside>
    </MyCardSpace>
  )
}
export default CardsSpace
