import styled from "styled-components"

const LeftMainPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 56.25%;
  height: 100%;

  .title-home {
    color: #f0f8ff;
    h4 {
      font-size: 4rem;
      font-weight: lighter;
    }
    h1 {
      font-size: 6rem;
      font-weight: lighter;
    }
  }
  .info-home {
    color: #31546d;
    padding: 4rem 0;
    width: 50%;
  }
  .form-home {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    gap: 4rem;

    button {
      height: 5.2rem;
      width: 17.5rem;
      border-radius: 1.8rem;
      border: none;
      outline: none;
      text-transform: uppercase;
      color: #31546d;
      cursor: pointer;
      transition: .2s;
    }
    button:hover {
        background: #fff;
    }
    a {
      text-decoration: none;
      color: #31546d;
      font-size: 1.6rem;
    }
    a:hover {
        color: #477495;
    }
  }
  @media (max-width: 975px) {
    .title-home {
        h1 {
            font-size: 4.5rem;
        }
    }
  }
`

const LeftMainPage = () => {
  return (
    <>
      <LeftMainPageStyled>
        <div className="title-home">
          <h4>Welcome to</h4>
          <h1>Pop Rock Crystal Shop!</h1>
        </div>
        <div className="info-home">
          <p>
            Here you will find unique phone accessories, crystals, jewelry and
            more. Free shipping inside the U.S. and our phone grips come with a
            limited warranty. Enjoy!
          </p>
        </div>
        <div className="form-home">
          <button>Shop now</button>
          <p>
            <a href="#">About Us</a>
          </p>
        </div>
      </LeftMainPageStyled>
    </>
  )
}

export default LeftMainPage
