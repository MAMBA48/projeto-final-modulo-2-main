import CardTotal from '@/components/ui/cards/totalCard'
import Header from '@/components/ui/header/header'
import Menu from '@/components/ui/menu/menu'
import SectionContent from '@/components/ui/sectionContent/sectionContent'
import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import CalendarIcon from '@/components/ui/icons/calendarIcon'
import TableArea from '@/components/ui/table/tableAreaD'
import api from '@/services/api'
import {
  BackgroundImg,
  Container,
  CardArea,
  CardInfoArea,
  CharacterImg,
  CircleIconCard,
  Description,
  GreetingCard,
  StatusArea,
  StatusPainel
} from '@/assets/styles/global-styles'
import PeoplesIcon from '@/components/ui/icons/peoplesIcons'
import PeoplesSearchIcon from '@/components/ui/icons/peoplesSearchIcon'

const Dashboard = () => {
  const token = localStorage.getItem('token')
  const date = (month?: number | string) => {
    const actualDate = new Date()
    const actualMonth = actualDate.getMonth()
    switch (actualMonth) {
      case 0:
        month = 'Janeiro'
        break
      case 1:
        month = 'Feveiro'
        break
      case 2:
        month = 'Março'
        break
      case 3:
        month = 'Abril'
        break
      case 4:
        month = 'Maio'
        break
      case 5:
        month = 'Junho'
        break
      case 6:
        month = 'Julho'
        break
      case 7:
        month = 'Agosto'
        break
      case 8:
        month = 'Setembro'
        break
      case 9:
        month = 'Outubro'
        break
      case 10:
        month = 'Novembro'
        break
      case 11:
        month = 'Dezembro'
        break
    }
    return month
  }
  date()
  const actualYear = new Date().getFullYear()
  const actualDay = new Date().getDate()

  const urlLogin =
    'https://api.buscarmedicos.izap.dev/public/register/login?email=admin%40email.com&password=Teste%40123'

  //esse state armazena os dados da api dashboard
  const [data, setData] = useState<dashboardTypeData | undefined>()
  //o valor do estado define o tipo do dado por inferencia
  const [doctor, setDoctor] = useState(0)
  //o valor do estado define o tipo do dado por inferencia
  const [contractor, setContractor] = useState(0)

  const requestingDashboardDatas = async () => {
    try {
      const datasDashboard: AxiosResponse<dashboardTypeData> = await api.get(
        '/users/dashboard',
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      const getInformation = datasDashboard.data

      //armazenando toda a informação da dashboard na api
      setData(getInformation)

      //armazenando as informações sobre Doctor
      setDoctor(getInformation.doctor)
      //armazenando as informações sobre Contractor
      setContractor(getInformation.contractor)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    requestingDashboardDatas()
  }, [])

  return (
    <main className="container">
      <Menu />
      <SectionContent>
        <Header />
        <CardArea>
          <GreetingCard>
            <BackgroundImg>
              <img src="./static/images/greenBgOval.png" alt="" />
              <CharacterImg>
                <img src="./static/images/character.png" alt="" />
              </CharacterImg>
            </BackgroundImg>
            <Description>
              <div>
                <small
                  style={{
                    display: 'flex',
                    width: '76%',
                    alignItems: 'center',
                    gap: '5px',
                    background: '#0E9658',
                    padding: '8px',
                    borderRadius: '6px'
                  }}
                >
                  <CalendarIcon /> {actualDay} de {date()} de {actualYear}
                </small>
              </div>
              <div>
                <h1>Seja bem-vindo</h1>
              </div>
              <div>
                <p>
                  Neste painel você poderá administrar seu site de forma simples
                  e prática.
                </p>
              </div>
            </Description>
          </GreetingCard>
          <StatusPainel>
            <StatusArea>
              <h3>Médicos</h3>
              <aside
                style={{
                  display: 'flex',
                  gap: '20px',
                  justifyContent: 'space-between'
                }}
              >
                {/*aqui temos um ternario para renderizar as informações dos cards*/}
                {data ? (
                  <>
                    <CardInfoArea>
                      <CircleIconCard style={{ background: '#004CE8' }}>
                        <PeoplesIcon />
                      </CircleIconCard>
                      <h3>{doctor?.total}</h3>
                    </CardInfoArea>
                    <CardInfoArea>
                      <CircleIconCard style={{ background: '#00C247' }}>
                        <PeoplesIcon />
                      </CircleIconCard>
                      <h3>{doctor?.available}</h3>
                    </CardInfoArea>
                    <CardInfoArea>
                      <CircleIconCard style={{ background: '#FF3333' }}>
                        <PeoplesIcon />
                      </CircleIconCard>
                      <h3>{doctor?.unavailable}</h3>
                    </CardInfoArea>
                  </>
                ) : (
                  <p>loading...</p>
                )}
              </aside>
            </StatusArea>
            <StatusArea>
              <h3>Contratantes</h3>
              <aside
                style={{
                  display: 'flex',
                  gap: '20px',
                  justifyContent: 'space-between'
                }}
              >
                {/*aqui temos um ternario para renderizar as informações dos cards*/}
                {data ? (
                  <>
                    <CardInfoArea>
                      <CircleIconCard style={{ background: '#004CE8' }}>
                        <PeoplesSearchIcon />
                      </CircleIconCard>
                      <h3>{contractor?.total}</h3>
                    </CardInfoArea>
                    <CardInfoArea>
                      <CircleIconCard style={{ background: '#00C247' }}>
                        <PeoplesSearchIcon />
                      </CircleIconCard>
                      <h3>{contractor?.available}</h3>
                    </CardInfoArea>
                    <CardInfoArea>
                      <CircleIconCard style={{ background: '#FF3333' }}>
                        <PeoplesSearchIcon />
                      </CircleIconCard>
                      <h3>{contractor?.unavailable}</h3>
                    </CardInfoArea>
                  </>
                ) : (
                  <p>loading...</p>
                )}
              </aside>
            </StatusArea>
          </StatusPainel>
        </CardArea>

        <TableArea />
      </SectionContent>
    </main>
  )
}
export default Dashboard
