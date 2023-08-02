import styled from 'styled-components'

const NavBar = styled.div`
position: fixed;
display: flex;
align-items: flex-end;
top: 0;
height: 8rem;
width: 100%;
backdrop-filter: blur(10px);
padding: 0 4rem;
z-index: 9999;

@media (max-width: 1000px) {
    padding: 0 1.3rem;
}
`

export default NavBar