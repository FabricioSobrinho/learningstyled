//import dependencies
import { createGlobalStyle } from "styled-components"
//import images
import Image from "./images/bgimage.jpg"
import ImageLogo from "./images/logoImage.svg"
//import components
import NavBar from "./components/navbar/NavBar"
import LeftNavBar from "./components/navbar/navbar components/LeftNavbar"
import RightNavbar from "./components/navbar/navbar components/RightNavbar"

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
  z-index: -1;
  font-size: 1.6rem;
  height: 100vh;
  background-image: url(${Image});
  background-size: 100% 93%;
  background-repeat: no-repeat;
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
    </>
  )
}

export default App
