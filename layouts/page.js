import styled, { createGlobalStyle } from "styled-components"
import { AppPreview } from "../components/AppPreview";
import {reset} from 'styled-reset'
export const Page = ({ children }) => {
    return (
        <>
        <GlobalStyles/>
            <AppPreview /> 
            {children} 
        </>
    )
}
const GlobalStyles = createGlobalStyle`
    ${reset}
    html,body,#__next{
        padding:0;
        margin:0;
        color:#eee;
        background:#222;
        height:100vh;
        width:100vw;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
    }
`
const Wrapper = styled.div`
    
`;