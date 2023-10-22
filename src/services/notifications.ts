import api from './api'

export const getAllNotifications = async () => {
  try {
    const token = localStorage.getItem('token')
    const res = await api.get('/notifications', {
      headers: { Authorization: `Bearer ${token}` }
    })
    return res.data
  } catch (error) {
    console.log(error + 'erro em notificações')
  }
}
