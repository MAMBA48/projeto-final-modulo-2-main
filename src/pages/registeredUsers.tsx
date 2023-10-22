import { useEffect, useState } from 'react'
import Header from '@/components/ui/header/header'
import Menu from '@/components/ui/menu/menu'
import SectionContent from '@/components/ui/sectionContent/sectionContent'
import Table from '@/components/ui/table/table'
import axios from 'axios'
import api from '@/services/api'

const RegistedUsersPage = () => {
  return (
    <main className="container">
      <Menu />
      <SectionContent>
        <Header />
        <h2>Usúarios cadastrados</h2>
        <div>Todos</div>
        <div>
          filtro
          <p>total de usuarios</p>
        </div>
        <Table />
      </SectionContent>
    </main>
  )
}
export default RegistedUsersPage
