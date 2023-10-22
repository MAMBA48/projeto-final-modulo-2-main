import { StyleTable } from '@/assets/styles/global-styles'

const Table = () => {
  return (
    <>
      <StyleTable>
        <tbody>
          <tr>
            <th>Usuário</th>
            <th>E-mail</th>
            <th>WhatsApp</th>
            <th>Tipo de usuário</th>
          </tr>
          <tr>
            <td>Marcelo Antonio</td>
            <td>teste@teste.com</td>
            <td>11 95658-8956</td>
            <td>Médico</td>
          </tr>
        </tbody>
      </StyleTable>
    </>
  )
}
export default Table
