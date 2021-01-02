import styled from 'styled-components' 
import Footer from './../components/Footer'
import Content from './../components/Content'
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return <>
  <Content/>
  <Footer/>
  </>
}
