import api from '@/services/api'
import Header from '@/components/ui/header/header'
import Menu from '@/components/ui/menu/menu'
import SectionContent from '@/components/ui/sectionContent/sectionContent'
import {
  StyleTable,
  Container,
  AreaIcons,
  ModalStyleEdit,
  BackgroundModal,
  ButtonAddItem,
  SearchArea
} from '@/assets/styles/global-styles'
import { getAllSpeacialties } from '@/services/specialties'
import { useEffect, useState } from 'react'
import EditIcon from '@/components/ui/icons/editIcon'
import DeleteIcon from '@/components/ui/icons/deleteIcon'
import LookIcon from '@/components/ui/icons/lookIcon'
import SearchIcon from '@/components/ui/icons/searchIcon'
import FilterIcon from '@/components/ui/icons/filterIcon'

type SpecialtiesObj = {
  id: number
  name: string
  enabled: boolean
}

const SpecialtiesPage = () => {
  const [specialties, setSpecialties] = useState<SpecialtiesObj[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [confirmModal, setConfirmModal] = useState(false)
  const [specialty, setSpecialty] = useState<SpecialtiesObj[]>([])
  const [editData, setEditData] = useState()

  //useEffect para carregar a informação quando o componente atualizar
  useEffect(() => {
    const fetchSpecialties = async () => {
      const res = await getAllSpeacialties()
      //agora passando o res para dentro do objeto para renderiza-lo
      const specialtiesFormatted = res?.map(({ id, enabled, name }) => ({
        id,
        enabled,
        name
      }))
      //caso o retorno seja undefined o retorno será um array vazio
      setSpecialties(specialtiesFormatted ?? [])
    }
    fetchSpecialties()
  }, [])

  const actionModal = () => {
    setIsOpen(!isOpen)
  }
  console.log(specialties)
  const dataUpdated = {
    id: ''
    //name: ''
  }
  //const [dataUpdated, setDataUpdated] = useState<string>()
  //axios put used to update datas
  const updateSpecialties = async () => {
    try {
      if (specialty) {
        console.log('its working')
        await api.put(`/specialties/`, {
          name: `${specialty} novo`
        })
      }
      console.log(`new info: ${specialty}`)
    } catch (error) {}
  }
  const otherActionModal = () => {
    setConfirmModal(!false)
  }
  const deleteData = async () => {
    setConfirmModal(!false)
    try {
      await api.delete('/specialties/')
    } catch (error) {}
  }

  return (
    <main className="container">
      <Menu />
      <SectionContent>
        <Header />
        <h2>Especialidades</h2>
        <Container>
          <div>
            <nav
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '10px'
              }}
            >
              <SearchArea>
                <div style={{ display: 'flex' }}>
                  <input type="search" />
                  <div>
                    <SearchIcon />
                  </div>
                </div>
                <div>
                  <FilterIcon />
                </div>
              </SearchArea>
              <ButtonAddItem>
                <p>+ Nova especialidade</p>
              </ButtonAddItem>
            </nav>
          </div>
          <div>
            <StyleTable>
              <tbody>
                <tr>
                  <th>Nome especialidade</th>
                  <th>Situação</th>
                  <th>Ações</th>
                </tr>

                {specialties.map(specialty =>
                  specialty ? (
                    <tr key={specialty.id}>
                      <td>{specialty.name}</td>
                      <td>
                        {specialty.enabled === true ? 'Ativo' : 'Inativo'}
                      </td>
                      <td>
                        <AreaIcons>
                          <div
                            onClick={() => {}}
                            className="area-action-buttons"
                          >
                            <LookIcon />
                          </div>
                          <div
                            onClick={actionModal}
                            className="area-action-buttons"
                          >
                            <EditIcon />
                          </div>
                          <div
                            onClick={deleteData}
                            className="area-action-buttons"
                          >
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
                )}
              </tbody>
            </StyleTable>
          </div>
        </Container>
      </SectionContent>
      {isOpen && (
        <BackgroundModal>
          <ModalStyleEdit>
            <div>
              <span onClick={actionModal} className="close-modal-txt">
                <p>fechar [X]</p>
              </span>
              <h3>Editar especialidade</h3>
              <div className="area-elements-modal">
                <small>Especialidade</small>
                <input
                  type="text"
                  value={specialty}
                  placeholder={'example:'}
                  onChange={event => setSpecialty(event.target.value)}
                />
                <div>
                  <label>Situação? </label>
                  <input type="checkbox" name="status" id="" />
                </div>
                <div>
                  <button onClick={updateSpecialties}>Salvar alterações</button>
                  <button onClick={actionModal}>Cancelar</button>
                </div>
              </div>
            </div>
          </ModalStyleEdit>
        </BackgroundModal>
      )}
      {confirmModal && (
        <BackgroundModal>
          <ModalStyleEdit>
            <div>
              <span onClick={otherActionModal} className="close-modal-txt">
                <p>fechar [X]</p>
              </span>
              <h3>Deseja realmente excluir este item?</h3>
              <div>
                <button onClick={deleteData}>Confirmar</button>
                <button onClick={otherActionModal}>Cancelar</button>
              </div>
            </div>
          </ModalStyleEdit>
        </BackgroundModal>
      )}
    </main>
  )
}
export default SpecialtiesPage
