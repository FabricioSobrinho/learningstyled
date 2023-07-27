import { createGlobalStyle } from "styled-components"

import Image from "./images/bgimage.jpg"
import ImageLogo from "./images/logoImage.svg"

import NavBar from "./components/navbar/NavBar"
import LeftNavBar from "./components/navbar/navbar components/LeftNavbar"
import RightNavbar from "./components/navbar/navbar components/RightNavbar"
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif, arial;
}
html {
  font-size: 62.5%;
}
body {
  z-index: -1;
  font-size: 1.6rem;
  height: 100vh;
  background-image: url(${Image});
  background-size: 100% 93%;
  background-repeat: no-repeat;
}

`

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar>
        <LeftNavBar>
          <img src={ImageLogo} alt="Logo enterprise" />
        </LeftNavBar> 
        <RightNavbar>


        </RightNavbar>
      </NavBar>
    </>
  )
}

export default App
