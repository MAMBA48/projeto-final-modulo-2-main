import { AreaIcons, StyleTable } from '@/assets/styles/global-styles'
import Header from '@/components/ui/header/header'
import DeleteIcon from '@/components/ui/icons/deleteIcon'
import EditIcon from '@/components/ui/icons/editIcon'
import LookIcon from '@/components/ui/icons/lookIcon'
import Menu from '@/components/ui/menu/menu'
import SectionContent from '@/components/ui/sectionContent/sectionContent'
import Table from '@/components/ui/table/table'
import api from '@/services/api'
import { useEffect, useState } from 'react'

const PlansPage = () => {
  const [data, setData] = useState<PlansTypeData[]>([])
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

        <StyleTable>
          <tbody>
            <tr>
              <th>Valor</th>
              <th>Preço promocional</th>
              <th>Situação</th>
              <th>Ações</th>
            </tr>
            {/**
             * data.map(plan =>
              plan ? (
                <tr key={plan.id}>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <AreaIcons>
                      <div onClick={() => {}} className="area-action-buttons">
                        <LookIcon />
                      </div>
                      <div onClick={() => {}} className="area-action-buttons">
                        <EditIcon />
                      </div>
                      <div onClick={() => {}} className="area-action-buttons">
                        <DeleteIcon />
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
            )
             */}
          </tbody>
        </StyleTable>
      </SectionContent>
    </main>
  )
}
export default PlansPage
