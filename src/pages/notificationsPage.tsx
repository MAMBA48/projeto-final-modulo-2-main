import {
  AreaIcons,
  ButtonAddItem,
  ButtonSearchArea,
  Container,
  FilterArea,
  SearchArea,
  StyleTable
} from '@/assets/styles/global-styles'
import Header from '@/components/ui/header/header'
import EditIcon from '@/components/ui/icons/editIcon'
import FilterIcon from '@/components/ui/icons/filterIcon'
import LookIcon from '@/components/ui/icons/lookIcon'
import SearchIcon from '@/components/ui/icons/searchIcon'
import Menu from '@/components/ui/menu/menu'
import SectionContent from '@/components/ui/sectionContent/sectionContent'
import { getAllNotifications, putNotifications } from '@/services/notifications'
import { useEffect, useState } from 'react'

type NotificationsType = {
  id: number
  title: string
  sendingDate?: string
  type?: string
}[]

const NotificationsPage = () => {
  //passando os dados da api ja tipados no state
  const [notifications, setNotifications] = useState<NotificationsType>()
  const fetchNotifications = async () => {
    const res = await getAllNotifications()
    setNotifications(res?.content ?? [])
  }
  useEffect(() => {
    fetchNotifications()
  }, [])
  return (
    <main className="container">
      <Menu />
      <SectionContent>
        <Header />
        <h2>Notificações</h2>
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
                <p>+ Nova notificação</p>
              </ButtonAddItem>
            </nav>
          </div>

          <StyleTable>
            <tbody>
              <tr>
                <th>Titulo</th>
                <th>Data de envio</th>
                <th>Ações</th>
              </tr>
              {/**antes de colocoar o 'notifications &&' o código estava com erros */}
              {notifications &&
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
                )}
            </tbody>
          </StyleTable>
        </Container>
      </SectionContent>
    </main>
  )
}
export default NotificationsPage
