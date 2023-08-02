import { styled } from "styled-components"

import { BsHandbagFill } from "react-icons/bs"
import { BiMenu } from "react-icons/bi"

const RightNavbarStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 55%;
  width: 43.75%;
  color: #f0f8ff;

  nav {
    width: 100%;
  }
  li {
    display: inline-block;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #ded9d9;
    margin: 2.1vw;
    transition: 0.2s;
  }
  a:hover {
    color: #ced3d7;
  }
  .cart-buys {
    display: flex;
    justify-content: flex-end;
  }
  .cart-buys > svg {
    height: 3rem;
    width: 3rem;
    cursor: pointer;
    transition: 0.2s;
    color: #d3d3d3;
  }
  svg:hover {
    color: #ced3d7;
  }
  .cart-buys > div {
    display: flex;
    align-items: center;
    margin-top: 20%;
  }

  @media (max-width: 775px) {
    width: 50%;

    a {
      margin: 1.5vw;
    }
  }
  @media (max-width: 550px) {
    nav {
      display: none;
    }
  }
`

const CircleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.4rem;
  width: 1.4rem;
  background: #f00;
  border-radius: 50%;
  font-size: 0.8rem;
`

const MenuMobile = styled.div`
display: none;
@media (max-width: 550px) {
  display: flex;
  font-size: 3.5rem;
  color: #d3d3d3;
  @keyframes menuAnimation {
    from {
      right: -50vw;
    }
    to {
      right: 0vw;
    }
  }
  @keyframes menuCoverAnimation {
    from {
      right: 0vw;
    }
    to {
      right: -50vw;
    }
  }
  .menu {
    position: absolute;
    top: 8rem;
    right: -50vw;
    animation: menuCoverAnimation 0.5s;
    width: 50vw;
    height: 98vh;
    background-color: #adc7ff;
    border-radius: 10px 0 10px 0;

    li {
      display: flex;
      flex-direction: column;
      place-items: center;
      margin: 3rem 0;
      border: solid 1px black;
      a {
        color: #3b3737;
      }
    }
  }

  .active {
    background-color: #adc7ff;
    animation: menuAnimation 0.5s forwards;
    position: absolute;
    top: 8rem;
    right: 0;
    border-radius: 10px 0 0 10px;
  }
}
`

const RightNavbar = () => {
  return (
    <RightNavbarStyled>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#">Shop</a>
          </li>

          <li>
            <a href="#">About US </a>
          </li>

          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </nav>

      <div className="cart-buys">
        <CircleDiv>10</CircleDiv>
        <BsHandbagFill />
      </div>

      <MenuMobile
        onClick={() => {
          let menu = document.querySelector(".menu")
          menu.classList.toggle("active")
        }}
      >
        <BiMenu />
        <div className="menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">Shop</a>
            </li>

            <li>
              <a href="#">About US </a>
            </li>

            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
      </MenuMobile>
    </RightNavbarStyled>
  )
}
export default RightNavbar
