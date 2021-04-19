import styled from "styled-components";
import Logo from "./Logo";
import Link from 'next/link'

const Menu = ()=>(
    <Nav>
        <Logo/>
        <span style={{flex:1}}/>
        <Wrapper>
        <Link href="/">Home</Link>
        <Link href="/#features">Features</Link>
        <Link href="/#install">install</Link>  
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