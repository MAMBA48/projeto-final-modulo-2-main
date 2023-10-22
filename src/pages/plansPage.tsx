import Header from '@/components/ui/header/header'
import Menu from '@/components/ui/menu/menu'
import SectionContent from '@/components/ui/sectionContent/sectionContent'
import Table from '@/components/ui/table/table'
import api from '@/services/api'
import { useEffect, useState } from 'react'

const PlansPage = () => {
  const [data, setData] = useState<plansTypeData>()
  const token = localStorage.getItem(`token`)
  const getPlans = async () => {
    try {
      const requestApi = await api.get(`/plans`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      const res = requestApi.data
      setData(res)
      console.log(res)
    } catch (error) {}
  }

  useEffect(() => {
    getPlans()
  }, [])

  return (
    <main className="container">
      <Menu />
      <SectionContent>
        <Header />

        <div></div>
        <Table />
      </SectionContent>
    </main>
  )
}
export default PlansPage
