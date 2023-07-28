import styled from "styled-components"

import LeftMainPage from "./main page components/LeftMainPage"
import RightMainPage from "./main page components/RightMainPage"

const MainContainer = styled.section`
display: flex;
  height: 85vh;
  width: 100%;
  margin-top: 15vh;
  padding: 0 4rem;
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
