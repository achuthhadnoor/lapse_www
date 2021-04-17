import styled from "styled-components";
import Logo from "./Logo";

const Menu = ()=>(
    <Nav>
        <Logo/>
        <span style={{flex:1}}/>
        <Wrapper>
        <a>Home</a>
        <a>Features</a>
        <a>install</a>
        <a>Affliate</a>
        <a>Blog</a>
        </Wrapper>
    </Nav>
)
const Nav = styled.nav`
    @media (max-width:780px){
        &{
            flex-direction:column;
            text-align:right;
        }
        & a{
            text-transform:uppercase;
        }
    }
    padding-top:50px;
    display:flex; 
    a{
        padding:5px 10px;
    }
`
const Wrapper = styled.div`
    margin:10px;
    display:flex;
    flex-wrap:wrap;
`
export default  Menu;