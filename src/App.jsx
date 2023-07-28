//import dependencies
import { createGlobalStyle } from "styled-components"

//import images
import Image from "./images/bgimage.jpg"
import ImageLogo from "./images/logoImage.svg"

//import pages and components
import NavBar from "./components/navbar/NavBar"
import LeftNavBar from "./components/navbar/navbar components/LeftNavbar"
import RightNavbar from "./components/navbar/navbar components/RightNavbar"

import MainPage from "./components/main page/MainPage"

//global styles of application
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
  height: 100vh;
  font-size: 1.6rem;
  background-image: url(${Image});
  background-size: 100% 93%;
  background-repeat: no-repeat;
  overflow-y: hidden; // remover isso !!!!!!!!!!!
}
@media (max-width: 850px) {
  html {
   font-size: 50%;
  }
} 
`

function App() {
  return (
    <>
      <GlobalStyle />
      {/* Start of Navbar */}
      <NavBar>
        <LeftNavBar>
          <img src={ImageLogo} alt="Logo enterprise" />
        </LeftNavBar>
        <RightNavbar />
      </NavBar>
      {/* Start of main page */}
      <MainPage />
    </>
  )
}

export default App
