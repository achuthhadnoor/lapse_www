import Header from '../components/Header'
import Features from '../components/Features'
import styled from 'styled-components'
export default function Home() {
  return (
    <>
      <Header
        heading="Record your screen in time-lapse"
        subheading="Recording a video for hours, and using diffrent tools to convert
        into time-lapse? This app records your screen in time-lpase
        directly"
        video
      />
      <Features />
      <Section>
        <Heading>
          Keyboard Shortcuts
        </Heading>
        <Grid>
          <Item>
            <Title>Start/pause Recording </Title>
            <Content>
              <svg width="234" height="41" viewBox="0 0 234 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="188" width="46" height="41" rx="5" fill="#363636" />
                <path d="M209.535 26.1758H217V29H206.02V11.9375H209.535V26.1758Z" fill="#9D9D9D" />
                <rect x="94" width="46" height="41" rx="5" fill="#363636" />
                <path d="M123 12C122.204 12 121.441 12.3161 120.879 12.8787C120.316 13.4413 120 14.2044 120 15V27C120 27.7956 120.316 28.5587 120.879 29.1213C121.441 29.6839 122.204 30 123 30C123.796 30 124.559 29.6839 125.121 29.1213C125.684 28.5587 126 27.7956 126 27C126 26.2044 125.684 25.4413 125.121 24.8787C124.559 24.3161 123.796 24 123 24H111C110.204 24 109.441 24.3161 108.879 24.8787C108.316 25.4413 108 26.2044 108 27C108 27.7956 108.316 28.5587 108.879 29.1213C109.441 29.6839 110.204 30 111 30C111.796 30 112.559 29.6839 113.121 29.1213C113.684 28.5587 114 27.7956 114 27V15C114 14.2044 113.684 13.4413 113.121 12.8787C112.559 12.3161 111.796 12 111 12C110.204 12 109.441 12.3161 108.879 12.8787C108.316 13.4413 108 14.2044 108 15C108 15.7956 108.316 16.5587 108.879 17.1213C109.441 17.6839 110.204 18 111 18H123C123.796 18 124.559 17.6839 125.121 17.1213C125.684 16.5587 126 15.7956 126 15C126 14.2044 125.684 13.4413 125.121 12.8787C124.559 12.3161 123.796 12 123 12Z" stroke="#9D9D9D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M70 15.75V26.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M64.75 21H75.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M164 15.75V26.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M158.75 21H169.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect width="46" height="41" rx="5" fill="#363636" />
                <path d="M12 12H19L25 29.5H33.5" stroke="#9D9D9D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M25 12H32.5" stroke="#9D9D9D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Content>
          </Item>
          <Item>
            <Title>Quit application</Title>
            <Content>
              <svg width="234" height="41" viewBox="0 0 234 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="94" width="46" height="41" rx="5" fill="#363636" />
                <path d="M109 20.5H113.5V30.5H121V20.5H125.5L117 12L109 20.5Z" stroke="#9D9D9D" />
                <rect x="188" width="46" height="41" rx="5" fill="#363636" />
                <path d="M209.535 26.1758H217V29H206.02V11.9375H209.535V26.1758Z" fill="#9D9D9D" />
                <path d="M70 14.75V25.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M64.75 20H75.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M164 14.75V25.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M158.75 20H169.25" stroke="white" strokeWidth="2" strokeLnecap="round" strokeLinejoin="round" />
                <rect width="46" height="41" rx="5" fill="#363636" />
                <path d="M12 12H19L25 29.5H33.5" stroke="#9D9D9D" strokeWidth="2" strokeLnecap="round" strokeLinejoin="round" />
                <path d="M25 12H32.5" stroke="#9D9D9D" strokeWidth="2" strokeLnecap="round" strokeLinejoin="round" />
              </svg>
            </Content>
          </Item>
        </Grid>
        <Footer>Made with <span role="img" aria-label="heart">♥️</span> by <a target="_blank" rel="noopener noreferrer" href="https://achuth.now.sh">Achuth Hadnoor</a></Footer>
      </Section>
    </>
  )
}

const Heading = styled.h1`
  font-size:3.2rem;
`;

const Section = styled.section`
  max-width:1024px;
  margin:auto;
`

const Grid = styled.div``
const Item = styled.div` margin:30px 0px ;`
const Title = styled.h2`
  padding:10px 15px;
`
const Content = styled.div``
const Footer = styled.footer`
  padding:10px;
  a{color:#eee;text-decoration:none;}
`