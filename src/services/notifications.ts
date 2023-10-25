import { AxiosResponse } from 'axios'
import api from './api'

type FormatData = PaginationType & {
  content: {
    id: number
    title: string
    message: string
    type?: string
  }[]
}

export const getAllNotifications = async () => {
  try {
    const token = localStorage.getItem('token')
    const res: AxiosResponse<FormatData> = await api.get('/notifications', {
      headers: { Authorization: `Bearer ${token}` }
    })
    return res.data
  } catch (error) {
    console.log(error + 'erro em notificações')
  }
}
export const putNotifications = async ({}: FormatData) => {
  try {
    const token = localStorage.getItem('token')
    const res: AxiosResponse<FormatData> = await api.put(
      `/notifications/${''}`,
      { id, title, message },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return res.data.content
  } catch (error) {
    console.error()
  }
}
