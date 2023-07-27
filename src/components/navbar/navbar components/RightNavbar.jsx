import { styled } from "styled-components"
import { BsHandbagFill } from "react-icons/bs"

const RightNavbarStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 55%;
  width: 50%;
  margin-left: 5%;
  color: #f0f8ff;

  li {
    display: inline;
    list-style: none;
    margin: 3rem;
  }
  a {
    text-decoration: none;
    color: #f0f8ff;
  }
  .cart-buys {
    display: flex;
    width: 20%;
  }
  .cart-buys > svg {
    height: 3rem;
    width: 3rem;
    cursor: pointer;
  }
  .cart-buys > div {
    display: flex;
    align-items: center;
    margin-top: 7.5%;
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
      <div>
        <ul>
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>Shop</li>
          </a>
          <a href="#">
            <li>About US</li>
          </a>
          <a href="#">
            <li>Help</li>
          </a>
        </ul>
      </div>

      <div className="cart-buys">
        <CircleDiv>10</CircleDiv>
        <BsHandbagFill />
      </div>
    </RightNavbarStyled>
  )
}
export default RightNavbar
