import React from 'react'
import styled from 'styled-components'
import { AppIcon, BatteryIcon, ChevronRight, ListIcon, MoreIcon, SearchIcon, WifiIcon } from '../icons';

export default function App() {
    return (
        <Wrapper>
            <ListIcon />
            <span style={{ marginRight: '10px' }}>Mon 28 Dec 7:57 PM</span>
            <MoreIcon />
            <BatteryIcon />
            <WifiIcon />
            <SearchIcon />
            <Options>
                <AppIcon />
                <UL>
                    <li>
                        <span>Start recording</span>
                    </li>
                    <li>
                        <Submenu >
                            <span>Export format</span>
                            <ChevronRight style={{ padding: '0px' }} />
                            <Sul>
                                <li>
                                    <span>mp4</span>
                                </li>
                                <li>
                                    <span>mkv</span>
                                </li>
                                <li>
                                    <span>avi</span>
                                </li>
                            </Sul>
                        </Submenu>
                    </li>
                    <li>
                        <span>Quality</span>
                        <ChevronRight style={{ padding: '0px' }} />
                    </li>
                    <li>
                        <span>Speed (framerate)</span>
                        <ChevronRight style={{ padding: '0px' }} />
                    </li>
                    <hr style={{ border: '1px solid #1f1f1f' }} />
                    <li>
                        <span>Reset</span>
                        <ChevronRight style={{ padding: '0px' }} />
                    </li>
                    <li>
                        <span>Auto launch</span>
                    </li>
                    <hr style={{ border: '1px solid #1f1f1f' }} />
                    <li>
                        <span>About Lapse</span>
                        <ChevronRight style={{ padding: '0px' }} />
                    </li>
                    <li>
                        <span>Quit lapse</span>
                    </li>
                </UL>
            </Options>
        </Wrapper>
    )
};


const UL = styled.ul`
    display:none;
    padding:5px 10px;
    margin:0;
    list-style:none;
    width:200px;
    text-align:left;
    li{
        display:flex;
        align-items:center;
        margin:0;
        border-radius:5px;
        padding:5px 10px;
        font-size:14px;
        user-select:none;
        span{
            flex:1;
        
        }
    }
    li:hover{
        background:#404040;
    }
    `;
const Options = styled.div`
    padding-top:5px;
    border-radius:5px;
    :hover{
        background: rgba(56, 56, 56, 0.6);
    }
    :hover ${UL}{
        display:block;
        position:absolute;
        background: rgba(30, 30, 30, 0.37);
        border: 1px solid #1F1F1D; 
        backdrop-filter: blur(10px); 
        border-radius: 4px; 
    }   
`;

const Sul = styled.ul`
    display:none;
    padding:5px 10px;
    margin:0;
    list-style:none;
    width:200px;
    text-align:left;
`;

const Submenu = styled.div`
    display:flex;
    flex:1;
    span{
        flex:1
    }
    :hover ${Sul}{
        display:block;
    }
`;

const Wrapper = styled.div`
    width:100%; 
    text-align:right;
    display:flex;
    align-items:center;
    flex-direction:row-reverse;
    background: rgba(30, 30, 30, 0.37);  
    font-size:14px;
`;