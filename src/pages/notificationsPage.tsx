import { StyleTable } from '@/assets/styles/global-styles'
import Header from '@/components/ui/header/header'
import Menu from '@/components/ui/menu/menu'
import SectionContent from '@/components/ui/sectionContent/sectionContent'
import { getAllNotifications } from '@/services/notifications'
import { useEffect, useState } from 'react'

type NotificationsDataType = {
  id: number
  title: string
}

const NotificationsPage = () => {
  const [notifications, setNotifications] =
    useState<NotificationsDataType | null>()
  useEffect(() => {
    const fetchNotifications = async () => {
      const res = await getAllNotifications()
      const notificationFormatted = res?.map(({ id, title }) => ({ id, title }))
      setNotifications(notificationFormatted ?? [])
    }
    fetchNotifications()
  }, [])
  return (
    <main className="container">
      <Menu />
      <SectionContent>
        <Header />
        <h2>Notificações</h2>
        <div>
          <div>
            <h3>Contratantes | Médicos</h3>
          </div>
          <div>
            <div>
              <div>filtro de pesquisa</div>
              <div>search | filter</div>
            </div>
            <div>
              <p>+ Nova notificação</p>
            </div>
          </div>
        </div>
        <StyleTable>
          <tbody>
            <tr>
              <th>Titulo</th>
              <th>Data de envio</th>
              <th>Ações</th>
            </tr>

            {/**specialties.map(specialty =>
              specialty ? (
                <tr key={specialty.id}>
                  <td>{specialty.name}</td>
                  <td>{specialty.enabled === true ? 'Ativo' : 'Inativo'}</td>
                  <td>SEE | EDIT | DEL</td>
                </tr>
              ) : (
                <tr>
                  <td>loading...</td>
                  <td>loading...</td>
                  <td>loading...</td>
                </tr>
              )
            ) */}
          </tbody>
        </StyleTable>
      </SectionContent>
    </main>
  )
}
export default NotificationsPage
