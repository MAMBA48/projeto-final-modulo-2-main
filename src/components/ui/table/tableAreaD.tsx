import { Container } from '@/assets/styles/global-styles'
import styled from 'styled-components'
import Table from './table'

const TableAreaStyle = styled.aside`
  display: flex;
  width: 100%;
  margin-top: 20px;
  gap: 10px;
  flex-direction: column;
`
export const InformationArea = styled.span`
  display: flex;
  margin-top: 6px;
  margin-bottom: 20px;
  justify-content: space-between;
`

const TableArea = () => {
  return (
    <TableAreaStyle>
      <Container>
        <InformationArea>
          <b>Últimos usuários cadastrados</b>
          <p>Ver tudo {'>'}</p>
        </InformationArea>
        <Table />
      </Container>
    </TableAreaStyle>
  )
}

export default TableArea
