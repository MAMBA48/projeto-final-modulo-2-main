import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --dark: #313131;
    --boxShadowModal: 0px 2px 8px 0.1px var(--dark)
  }

  * {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }

  *, ::after, ::before {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body, input, select, textarea {
    font-size: 1rem;
    color: var(--dark);
  }
  ul {
    display: flex;
    justify-content: left;
    list-style: none;
    flex-direction: column;
  }
  li {
    display: inline-block;
    margin-top: 10px;
    cursor: pointer;
  }

  .container {
    display: flex;
  }
  .menu-hamburguer {
    transition: all 1s;
    position: relative;
    left: -265px;
  }
  .area-action-buttons {
    display: flex;
    height: 40px;
    width: 40px;
    border-radius: 8px;

    cursor: pointer;
    justify-content: center;
    align-items: center;
    background: #fff;
    box-shadow: 0px 0px 10px 0.1px rgba(0, 0, 0, 0.15)
  }
  .close-modal-txt {
    cursor: pointer;
    top: 10px;
    right: 10px;
    position: absolute;
  }
  .area-elements-modal {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .input-search {
    all: unset;
    min-width: 330px;
    padding: 10px;
  }

`
export const SectionChildren = styled.section`
  padding: 20px;
`
export const ButtonStyle = styled.button`
  display: flex;
  margin-top: 40px;
  cursor: pointer;
  font-weight: bolder;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: none;
  color: #fff;
  background: #046639;
  height: auto;
  width: 350px;
  padding: 12px;
`
export const SearchArea = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
`
export const NewSpecialityArea = styled.div`
  display: flex;
  gap: 20px;
  max-width: 450px;
`
export const SituationArea = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
export const ToBackButtonArea = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 20px;
`
export const ButtonSearchArea = styled.div`
  display: flex;
  padding-right: 10px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`
export const FilterArea = styled.div`
  display: flex;
  margin-left: 20px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 10px;
`
export const BackgroundModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.25);
`
export const ButtonAddItem = styled.div`
  display: flex;
  cursor: pointer;
  color: #fff;
  height: 50px;
  width: 250px;
  border-radius: 16px;
  justify-content: center;
  background: #00c247;
  align-items: center;
`
export const ModalStyle = styled.span`
  height: auto;
  min-width: 450px;
  padding: 30px;
  background: #f5f5f5;
  border-radius: 20px;
  z-index: 2;
  position: relative;
`
export const AreaIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CardInfoArea = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`
export const CardArea = styled.article`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`
export const CircleIconCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
`
export const GreetingCard = styled.span`
  display: flex;
  box-sizing: border-box;
  background: #046639;
  border-radius: 10px;
  height: auto;
  width: 36%;
  flex-direction: column;
`
export const StyleTable = styled.table`
  border-radius: 16px;
  border-collapse: collapse;
  height: auto;
  width: 100%;
  background: #fff;
  th:first-child {
    border-radius: 16px 0px 0px 0px;
  }
  th:last-child {
    border-radius: 0px 16px 0px 0px;
  }
  & th {
    color: #fff;
    width: 100%;
    padding: 10px;
    background: #046639;
    border-collapse: collapse;
  }
  & td {
    height: 6px;
    padding: 4px;
    background: #f5f5f5;
    padding: 6px;
    min-width: 150px;
    width: 100%;
    border: 6px solid #fff;
    border-radius: 6px;
    margin-bottom: 2px;
  }
`
export const BackgroundImg = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  padding: 10px;
  justify-content: right;
  height: auto;
  width: auto;
  background-size: cover;
  & img {
    width: 200px;
  }
`
export const CharacterImg = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  padding-right: 15px;
  height: auto;
  width: auto;
  & img {
    width: 150px;
  }
`
export const Container = styled.main`
  margin-top: 30px;
  border-radius: 20px;
  padding: 12px;
  box-shadow: 0px 0px 10px 0.1px rgba(0, 0, 0, 0.15);
`
export const Description = styled.span`
  display: flex;
  margin-top: 6px;
  font-size: 1rem;
  gap: 10px;
  color: #fff;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  & p {
    color: #e0e0e0;
  }
`
export const StatusPainel = styled.article`
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;
`
export const StatusArea = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  row-gap: 10px;
  height: 100%;
  min-width: 50vw;
  max-width: 100%;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.15);
`
