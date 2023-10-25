import Header from '@/components/ui/header/header'
import SectionContent from '@/components/ui/sectionContent/sectionContent'
import Menu from '@/components/ui/menu/menu'
import ToBackIcon from '@/components/ui/icons/tobackbuttonIcon'
import {
  BackgroundModal,
  ButtonStyle,
  Container,
  ModalStyle,
  NewSpecialityArea,
  SectionChildren,
  SituationArea,
  ToBackButtonArea
} from '@/assets/styles/global-styles'
import { useNavigate } from 'react-router-dom'
import { FieldSet } from './loginPage'
import { FormEvent, useState } from 'react'

const NewSpecialtiesPage = () => {
  const [actionModal, setActionModal] = useState(false)
  const navigate = useNavigate()
  const moveTo = () => {
    navigate('/specialties')
  }

  const saveNewSpeciality = (e: FormEvent) => {
    setActionModal(!actionModal)
    e.preventDefault()
    setTimeout(() => {
      setActionModal(actionModal)
    }, 3000)
  }
  return (
    <main className="container">
      <Menu />
      <SectionContent>
        <Header />
        <ToBackButtonArea>
          <div onClick={moveTo}>
            <ToBackIcon />
          </div>
          <h2> Nova Especialidade</h2>
        </ToBackButtonArea>
        <Container>
          <SectionChildren>
            <h2>Dados da Especialidade</h2>
            <NewSpecialityArea>
              <FieldSet>
                <legend>Nome</legend>
                <input type="text" placeholder="ex: nome especialidade" />
              </FieldSet>
              <div>
                <small>Situação</small>
                <SituationArea>
                  <input
                    className="input-speciality-name"
                    type="checkbox"
                    name="situation"
                    id=""
                  />
                  <p>status</p>
                </SituationArea>
              </div>
            </NewSpecialityArea>
            <ButtonStyle onClick={saveNewSpeciality}>Salvar</ButtonStyle>
          </SectionChildren>
        </Container>
      </SectionContent>
      {actionModal && (
        <BackgroundModal>
          <ModalStyle>
            <div>
              <div>
                <span>Carregamento...</span>
              </div>
              <h2>Especialidade salva com sucesso!</h2>
            </div>
          </ModalStyle>
        </BackgroundModal>
      )}
    </main>
  )
}
export default NewSpecialtiesPage
