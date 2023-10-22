//icons: https://react-icons.github.io/react-icons/icons?name=fi
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'
import { FiPieChart } from 'react-icons/fi'
import UsersIcon from '../icons/usersIcon'
import PaymentIcon from '../icons/paymentIcon'
import NotificationIcon from '../icons/notificationIcon'
import SpecialitiesIcon from '../icons/specialitiesIcon'
import DollarIcon from '../icons/dollarIcon'
import FaqIcon from '../icons/faqIcon'

export const SideList = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #046639;
  padding: 10px;
  color: #fff;
  min-height: 100vh;
  height: 100%;
  width: 320px;

  & li {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 0.7rem;
  }
  & li:hover {
    border-radius: 6px;
    background: #b4e08e;
    color: #046639;
  }
`
export const ButtonMenu = styled.p`
  display: flex;
  color: #333;
  position: absolute;
  right: -45px;
  transform: rotate(90deg);
  cursor: pointer;
  font-size: 1.5rem;
`

const Menu = () => {
  const navigate = useNavigate()
  const toDashboard = () => navigate('/dashboard')
  const toRegisteredUsers = () => navigate('/registeredusers')
  const toPlans = () => navigate('/plans')
  const toSpecialties = () => navigate('/specialties')
  const toNotifications = () => navigate('/notifications')
  const toFaq = () => navigate('/faq')

  const [style, setStyle] = useState<string>('')
  const toggleSidebar = () => {
    style === '' ? setStyle('menu-hamburguer') : setStyle('')
  }

  return (
    <SideList id="side-list" className={style}>
      <ButtonMenu onClick={toggleSidebar}>|||</ButtonMenu>
      <div className="logo">
        <img src="./src/assets/imgs/Frame.png" alt="logo" />
      </div>
      <ul>
        <li onClick={toDashboard}>
          <FiPieChart />
          Dashboard
        </li>
        <li onClick={toRegisteredUsers}>
          <UsersIcon /> Usúarios cadastrados
        </li>
        <li onClick={toPlans}>
          <DollarIcon /> Planos
        </li>
        <li onClick={() => '#'}>
          <PaymentIcon /> Pagamentos {'>'}
        </li>
        <li onClick={toSpecialties}>
          <SpecialitiesIcon /> Especialidades
        </li>
        <li onClick={toNotifications}>
          <NotificationIcon /> Notificações
        </li>
        <li onClick={toFaq}>
          <FaqIcon /> FAQ
        </li>
      </ul>
    </SideList>
  )
}
export default Menu
