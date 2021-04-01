import React, { Children } from 'react'
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';


export const theme = {
    dark: {
        background: '#F8F8F8',
        color: '#121212',
        tint: 'rgba(247 247 247 / 80%)',
        accent: '#fefefe',
        blurBack: 'rgb(29 31 71 / 61%)',
        blur: 'rgba(65, 82, 101, 0.48)'
    },
    light: {
        background: '#001321',
        color: '#fefefe',
        tint: 'rgb(0 16 29 / 60%)',
        accent: '#121212',
        blurBack: '#4ca5da66',
        blur: 'rgba(255, 255, 255, 0.59)',
    }
};

export const ThemeContext = React.createContext({
    themed: {},
    setThemed: () => { }
});

export const GlobalStyle = createGlobalStyle`
        html,
        body,#__next {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif; 
          background:${(props) => props.theme === theme.light ? ' linear-gradient(70.18deg, #F60452 0%, #FD635A 52.85%, #F63B67 99.98%)' : ' linear-gradient(70.18deg, #FF4D6B 0%, #772BA0 49.22%, #143793 100%)'};
          background-image:url(${(props) => props.theme === theme.light ? 'https://handmirror.app/images/big-sur-wallpaper-dark.jpg': 'https://handmirror.app/images/big-sur-wallpaper-light.jpg'});
          background-size:cover;
          scroll-behavior: smooth;
        } 
        * {
          box-sizing: border-box;
        }
        
        ::-webkit-scrollbar {
            width: 14px;
            height: 14px
        }
        ::-webkit-scrollbar-track {
            background-color: transparent
        }
        ::-webkit-scrollbar-thumb,::-webkit-scrollbar-track {
            border: 4px solid transparent;
            background-clip: padding-box;
            border-radius: 8px
        }
        ::-webkit-scrollbar-thumb {
            background-color: ${(props) => props.theme.accent}
        }
        ::-webkit-scrollbar-button {
            display: none;
            width: 0;
            height: 0
        }
        ::-webkit-scrollbar-corner {
            background-color: transparent
        }
        a{
            text-decoration:none;
            color:inherit;
        }
        
        main {
          padding: 5rem 0;
          flex: 1; 
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        .title a {
          color: palegreen;
          text-decoration: none;
        }
        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 2rem;
          color:${(props) => props.theme.accent};
        }
 
        .description {
          line-height: 1.5;
          font-size: 1.2rem;
        }
        pre{
            overflow:auto;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 1024px;
          margin-top: 3rem;
        }
        .project-card {
          padding: 10px;
          width: 100%;
          border: 1px solid #121212;
          margin: 10px;
          transition: 0.31s ease-in-out;
          border-radius: 5px;
        }
        .project-card:hover {
          border: 1px solid #fff;
          transition: 0.31s ease-in-out;
        }
        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: palegreen;
          border-color: palegreen;
        }
        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        .logo {
          height: 1em;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
        #__next{
          position:absolute;
          height:100%;
          width:100%;
        }
`;

export const ThemedButton = () => (
    <ThemeContext.Consumer>
        {({ themed, setThemed }) => (
            <>
                <Button
                    onClick={() => {
                        themed === theme.light
                            ? localStorage.setItem('theme', 'dark')
                            : localStorage.setItem('theme', 'light');
                        setThemed(themed === theme.light ? theme.dark : theme.light);
                    }}
                >
                    {themed === theme.light ? 'light' : 'dark'}
                </Button>
            </>
        )}
    </ThemeContext.Consumer>
);
const Button = styled.button`
  background: inherit;
  outline: none;
  border: none;
  color: ${(props) => props.theme.color};
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.1s ease-in-out;
`;

export const ThemeWrapper = ({ children }) => {
    const [themed, setThemed] = React.useState(theme.dark);
    return (
        <ThemeContext.Provider value={{ themed, setThemed }}>
            <ThemeProvider theme={themed}> 
                <GlobalStyle />
                <DefaultSeo {...SEO} />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
} 