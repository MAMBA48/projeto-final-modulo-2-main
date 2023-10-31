import api from '@/services/api'
import Header from '@/components/ui/header/header'
import Menu from '@/components/ui/menu/menu'
import SectionContent from '@/components/ui/sectionContent/sectionContent'
import {
  StyleTable,
  Container,
  AreaIcons,
  ModalStyle,
  BackgroundModal,
  ButtonAddItem,
  SearchArea,
  ButtonSearchArea,
  FilterArea
} from '@/assets/styles/global-styles'
import { getAllSpeacialties } from '@/services/specialties'
import { useEffect, useState } from 'react'
import EditIcon from '@/components/ui/icons/editIcon'
import DeleteIcon from '@/components/ui/icons/deleteIcon'
import LookIcon from '@/components/ui/icons/lookIcon'
import SearchIcon from '@/components/ui/icons/searchIcon'
import FilterIcon from '@/components/ui/icons/filterIcon'
import { useNavigate, useParams } from 'react-router-dom'

type SpecialtiesObj = {
  id?: number
  name: string
  enabled: boolean
}

const SpecialtiesPage = () => {
  //const params = useParams(`/specialties/:id`)
  //destruct dos parametros
  const { id } = useParams()
  const [specialties, setSpecialties] = useState<SpecialtiesObj[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [confirmModal, setConfirmModal] = useState(false)
  const [specialty, setSpecialty] = useState<string>('')
  const [editData, setEditData] = useState<string>('')
  const navigate = useNavigate()
  const moveTo = () => {
    navigate('/newspeciality')
  }
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

  //passar os dados novos aqui para introdduzir no body
  //const [dataUpdated, setDataUpdated] = useState<string>()
  //axios put used to update datas
  const updateSpecialties = async () => {
    try {
      if (editData) {
        console.log('its working')
        await api.put(`/specialties/${id}`, {
          name: `${editData} novo`
        })
      }
      console.log(`new info: ${editData}`)
    } catch (error) {}
  }
  const otherActionModal = () => {
    setConfirmModal(!false)
  }
  const deleteData = async () => {
    setConfirmModal(!false)
    try {
      await api.delete(`/specialties/${id}`)
    } catch (error) {
      console.error(error)
    }
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
              <div style={{ display: 'flex' }}>
                <SearchArea>
                  <div style={{ display: 'flex' }}>
                    <input
                      id="input-search"
                      type="search"
                      className="input-search"
                      placeholder="Pesquise uma palavra-chave"
                    />
                    <ButtonSearchArea>
                      <div>
                        <SearchIcon />
                      </div>
                    </ButtonSearchArea>
                  </div>
                </SearchArea>
                <FilterArea>
                  <div onClick={() => {}}>
                    <FilterIcon />
                  </div>
                </FilterArea>
              </div>
              <ButtonAddItem onClick={moveTo}>
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
          <ModalStyle>
            <div>
              <span onClick={actionModal} className="close-modal-txt">
                <p>fechar [X]</p>
              </span>
              <h3>Editar especialidade</h3>
              <div className="area-elements-modal">
                <small>Especialidade</small>
                <input
                  type="text"
                  value={editData}
                  placeholder={'example:'}
                  onChange={event => setEditData(event.target.value)}
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
          </ModalStyle>
        </BackgroundModal>
      )}
      {confirmModal && (
        <BackgroundModal>
          <ModalStyle>
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
          </ModalStyle>
        </BackgroundModal>
      )}
    </main>
  )
}
export default SpecialtiesPage
