import { styled } from "styled-components"

import { BsHandbagFill } from "react-icons/bs"

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
    color: #f0f8ff;
    margin: 2.1vw;
    transition: .2s;
  }
  a:hover {
    color: #ced3d7;
  }
  .cart-buys {
    display: flex;
    justify-content: flex-end;
    width: 10%;
  }
  .cart-buys > svg {
    height: 3rem;
    width: 3rem;
    cursor: pointer;
    transition: .2s;
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
    </RightNavbarStyled>
  )
}
export default RightNavbar
