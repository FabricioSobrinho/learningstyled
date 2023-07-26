import { createGlobalStyle, styled } from "styled-components"
import Image from './images/bgimage.png'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  z-index: -1;
  font-size: 1.6rem;
  height: 100vh;
}
`
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Button>Botao</Button>
      <img src={Image} alt="Background image"/>
    </>
  )
}

export default App
