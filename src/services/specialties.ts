import api from '@/services/api'
import { AxiosResponse } from 'axios'

//juntando os tipos de paginação global + tipo de especialidades
type SpecialtiesType = PaginationType & {
  content: {
    id: number
    name: string
    enabled: boolean
    createdAt: string
    updatedAt: string
    createdBy: string | null
    updatedBy: string | null
    active: boolean
  }[]
}

export const getAllSpeacialties = async () => {
  try {
    //pegando o token que está salvo no localStorage
    const token = localStorage.getItem('token')
    const res: AxiosResponse<SpecialtiesType> = await api.get('/specialties', {
      //passando token do localStorage no body
      headers: { Authorization: `Bearer ${token}` }
    })
    return res.data.content
  } catch (error) {
    console.error(error)
  }
}
