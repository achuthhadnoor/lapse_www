import styled from "styled-components"
import { AppPreview } from "../components/AppPreview";

export const Page = ({Children})=>{
    return(
        <Wrapper>
            <AppPreview/>
            {Children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    html,body,#__next{
        padding:0;
        margin:0;
        background:blue;
        height:100vh;
        width:100vw;
    }
`;