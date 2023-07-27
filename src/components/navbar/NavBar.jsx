import styled from 'styled-components'

const NavBar = styled.div`
position: fixed;
display: flex;
align-items: flex-end;
top: 0;
height: 8rem;
width: 93%;
backdrop-filter: blur(10px);

@media (max-width: 950px) {
    padding: 0 1.3rem;
}
`

export default NavBar