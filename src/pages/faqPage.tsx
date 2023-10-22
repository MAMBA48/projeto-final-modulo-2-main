import api from '@/services/api'
import Header from '@/components/ui/header/header'
import Menu from '@/components/ui/menu/menu'
import SectionContent from '@/components/ui/sectionContent/sectionContent'
import Table from '@/components/ui/table/table'
import { useEffect } from 'react'

const FaqPage = () => {
  const getQuestions = async () => {
    try {
      const token = localStorage.getItem('token')
      const res = await api.get('/questions', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(token)
      console.log(res.data)
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
        <h2>FAQ (Perguntas Frequentes)</h2>
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
              <p>+ Novo FAQ</p>
            </div>
          </div>
        </div>
        <Table />
      </SectionContent>
    </main>
  )
}
export default FaqPage
