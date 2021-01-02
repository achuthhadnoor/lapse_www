import React from 'react'
import styled from 'styled-components'

export default function Content() {
    return (
        <>
            <main style={{
                paddingLeft: 20
            }}>
                <h1 style={{ color: '#fff' }}>
                    Capture your work in timelapse
           </h1>
                <p style={{ maxWidth: '500px', color: '#fff', lineHeight: '1.5', padding: '20px 0px' }}>
                    Making timelapse  videos is neverbeen easier.
                    Don’t burn your processor anymore .
                    No more rerendering ( just start and stop )
           </p>
                <Button><CartIcon /><span style={{ paddingLeft: '5px' }}>Get it now <strike>19.99 $</strike> 14.99$</span></Button>
                <ProgressWrapper>
                    <div style={{padding:'10px'}}>Only 25 licences left out of 50 before prices rise</div>
                    <div className="outer">
                        <div className="inner"></div>
                    </div>
                </ProgressWrapper>
            </main>
        </>
    )
};

const CartIcon = () => (
    <i>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 1.5L2.25 4.5V15C2.25 15.3978 2.40804 15.7794 2.68934 16.0607C2.97064 16.342 3.35218 16.5 3.75 16.5H14.25C14.6478 16.5 15.0294 16.342 15.3107 16.0607C15.592 15.7794 15.75 15.3978 15.75 15V4.5L13.5 1.5H4.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.25 4.5H15.75" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 7.5C12 8.29565 11.6839 9.05871 11.1213 9.62132C10.5587 10.1839 9.79565 10.5 9 10.5C8.20435 10.5 7.44129 10.1839 6.87868 9.62132C6.31607 9.05871 6 8.29565 6 7.5" stroke="black" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    </i>
)

const Button = styled.button`
    padding:10px;
    background:#fff;
    color:#121212;
    border:none;
    display:flex;
    align-items:center;
    border-radius:5px;
    :focus{
        outline:none;
    }
`;

const ProgressWrapper = styled.div`
    padding-top:20px;
    font-size:.7em;
    color:#fff;
    .outer{
        max-width:250px;
        width:100%;
        height:10px;
        background:${props=>props.theme.blur};
        border-radius:5px;
    }
    .inner{
        height:10px;
        width:10px;
        background:#fff;
        border-radius:5px;
    }
`;