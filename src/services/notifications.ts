import { AxiosResponse } from 'axios'
import api from './api'
import { useEffect } from 'react'

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
