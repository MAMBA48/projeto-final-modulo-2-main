//esse componente contém a estruturação do content
import styled from 'styled-components'

const MyContent = styled.main`
  display: flex;
  height: auto;
  width: 100vw;
  flex-direction: column;
`
const MySection = styled.section`
  display: flex;
  height: auto;
  padding-left: 2%;
  padding-right: 2%;
  padding-bottom: 2%;
  flex-direction: column;
`

const SectionContent = ({ children }: any) => {
  return (
    <MyContent>
      <MySection>{children}</MySection>
    </MyContent>
  )
}
export default SectionContent
