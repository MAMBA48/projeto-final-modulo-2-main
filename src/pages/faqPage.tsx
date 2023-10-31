import api from '@/services/api'
import Header from '@/components/ui/header/header'
import Menu from '@/components/ui/menu/menu'
import SectionContent from '@/components/ui/sectionContent/sectionContent'

import { useEffect, useState } from 'react'
import {
  ButtonAddItem,
  ButtonSearchArea,
  Container,
  FilterArea,
  SearchArea,
  StyleTable
} from '@/assets/styles/global-styles'
import SearchIcon from '@/components/ui/icons/searchIcon'
import FilterIcon from '@/components/ui/icons/filterIcon'

const FaqPage = () => {
  const [data, setData] = useState()
  const [editData, setEditData] = useState()
  const getQuestions = async () => {
    try {
      const token = localStorage.getItem('token')
      const res = await api.get('/questions', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.log(error + 'deu erro aqui no FAQ')
    }
  }

  useEffect(() => {
    getQuestions()
  }, [])
  return (
    <main className="container">
      <Menu />
      <SectionContent>
        <Header />
        <Container>
          <div>
            <nav>
              <div>MÉDICOS</div>
              <div>CONTRATANTES</div>
            </nav>
            <nav
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '10px'
              }}
            >
              <div style={{ display: 'flex' }}>
                <SearchArea>
                  <div style={{ display: 'flex' }}>
                    <input
                      id="input-search"
                      type="search"
                      className="input-search"
                      placeholder="Pesquise uma palavra-chave"
                    />
                    <ButtonSearchArea>
                      <div>
                        <SearchIcon />
                      </div>
                    </ButtonSearchArea>
                  </div>
                </SearchArea>
                <FilterArea>
                  <div onClick={() => {}}>
                    <FilterIcon />
                  </div>
                </FilterArea>
              </div>
              <ButtonAddItem>
                <p>+ Novo FAQ</p>
              </ButtonAddItem>
            </nav>
          </div>

          <StyleTable>
            <tbody>
              <tr>
                <th>Titulo</th>
                <th>Ações</th>
              </tr>
              {/**antes de colocoar o 'notifications &&' o código estava com erros */}
              {/*notifications &&
                notifications.map(data =>
                  data ? (
                    <tr key={data.id}>
                      <td>{data.title}</td>
                      <td>{data.sendingDate}</td>
                      <td>
                        <AreaIcons>
                          <div
                            onClick={() => {}}
                            className="area-action-buttons"
                          >
                            <LookIcon />
                          </div>
                          <div
                            onClick={() => putNotifications}
                            className="area-action-buttons"
                          >
                            <EditIcon />
                          </div>
                        </AreaIcons>
                      </td>
                    </tr>
                  ) : (
                    <tr>
                      <td>loading...</td>
                      <td>loading...</td>
                      <td>loading...</td>
                    </tr>
                  )
                  )*/}
            </tbody>
          </StyleTable>
        </Container>
      </SectionContent>
    </main>
  )
}
export default FaqPage
