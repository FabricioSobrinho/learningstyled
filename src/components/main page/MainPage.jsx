import styled from "styled-components"

import LeftMainPage from "./main page components/LeftMainPage"
import RightMainPage from "./main page components/RightMainPage"

const MainContainer = styled.section`
  display: flex;
  height: 85vh;
  width: 100%;
  margin-top: 15vh;
  padding: 0 4rem;

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`

const MainPage = () => {
  return (
    <MainContainer>
      <LeftMainPage />
      <RightMainPage />
    </MainContainer>
  )
}

export default MainPage
