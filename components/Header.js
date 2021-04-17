import styled from "styled-components";
import Menu from "../components/Menu";

const Header = ({heading,subheading})=>(
    <>
    <BackgroundColor />
      <Data>
        <Menu />
        <Heading>{heading}</Heading>
        <SubHeading>{subheading}</SubHeading>
      </Data>
    </>
)

const Data = styled.div`
    z-index:9;
    max-width:1024px;
    margin:auto;
    @media (max-width:780px){
        padding:0px 10px ;
    }
`;
const BackgroundColor = styled.div`
    z-index:-1;
    position: absolute;
    max-height: 600px;
    height: 60%;
    background: #28285C;
    width: 100%;
    /* clip-path:polygon(0% 0%,100% 0%,100% 50%,-10% 105%,75% 100%,50% 100%,0% 100%) */
`;

const Heading = styled.h1`
  font-size:3.2rem;
  margin-top:5rem;
  max-width:500px;
`

const SubHeading = styled.p`
  margin:2rem 0rem;
  max-width:500px;
  line-height:1.5rem;
  font-size:1.1rem; 
`

export default Header;