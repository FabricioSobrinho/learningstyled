import styled from "styled-components"

import { useState, useEffect } from "react"

import imageProduct from "../../../images/productImage.png"
import imageProduct2 from "../../../images/productImage2.png"
import imageProduct3 from "../../../images/productImage3.png"

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

const RightMainPageContainer = styled.div`
  height: 100vh;
  width: 43.75%;
`

const RightMainPageStyled = styled.div`
  display: flex;
  align-items: center;
  background: #f0f8ff;
  width: 100%;
  height: 80%;
  border-radius: 5rem;
  box-shadow: 0 0.4rem 5rem #788f9c4e;
  gap: 0.2rem;

  .new-product {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    width: 9.7rem;
    margin-top: -40%;
    font-size: 1.6rem;
    background: #8a93e5;
    color: #fff;
    border-radius: 0 0.8rem 0.8rem 0;
    z-index: 9999;
  }
  @media (max-width: 850px) {
    justify-content: center;
    .new-product{
      display: none;
    }

  }
`
const CardProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85%;
  width: 62.5%;
  padding: 1rem 4rem;
  p {
    text-align: center;
    font-size: 2rem;
    color: #317189;
  }
  img {
    height: 100%;
    width: 100%;
  }
`
const Form = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 5%;

  button {
    height: 2.4rem;
    width: 2.4rem;
    background: #8a93e5;
    color: #f0f8ff;
    border: none;
    outline: none;
    cursor: pointer;
  }
  button:hover {
    background: #7e86ce;
  }
`

const RightMainPage = () => {
  const [showingProduct, setShowingProduct] = useState([])
  const [counter, setCounter] = useState(0)
  const products = [
    {
      name: "Crystal Agate Phone Grip - 18.99$",
      image: imageProduct,
    },
    {
      name: "Diamond Agate - 18.98$",
      image: imageProduct2,
    },
    {
      name: "Crystal Diamond Grip - 18.21$",
      image: imageProduct3,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % products.length)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    setShowingProduct(products[counter])
  }, [counter])

  return (
    <RightMainPageContainer>
      <RightMainPageStyled>
        <div className="new-product">New Lot</div>
        <CardProductDiv>
          <img src={showingProduct.image} />
          <p>{showingProduct.name}</p>
        </CardProductDiv>
      </RightMainPageStyled>
      <Form>
        <button
          onClick={() => {
            setCounter((prevCounter) => prevCounter === 0 ? prevCounter = 2: prevCounter - 1 % products.length
            )
          }}
        >
          {<AiOutlineArrowLeft />}
        </button>
        <button
          onClick={() => {
            setCounter((prevCounter) => (prevCounter + 1) % products.length)
          }}
        >
          {<AiOutlineArrowRight />}
        </button>
      </Form>
    </RightMainPageContainer>
  )
}

export default RightMainPage
