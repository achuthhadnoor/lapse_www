import React from 'react'
import styled from 'styled-components'
import { AppIcon, BatteryIcon, CheckIcon, ChevronRight, CommandIcon, ListIcon, MoreIcon, OptionIcon, SearchIcon, WifiIcon } from '../icons';

export default function App({ setTheme, theme }) {
    const [selectedFormat, setSelectedFormat] = React.useState('mp4')
    const [selectedQuality, setSelectedQuality] = React.useState('Auto')
    const [selectedFramerate, setSelectedFramerat] = React.useState('30')
    return (<>
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
                    <li style={{ paddingLeft: '20px' }}>
                        <span>Start recording</span>
                        <a style={{  display:'flex',alignItems: 'center' }}>
                            <OptionIcon /> {''} <CommandIcon /> {''} <span>L</span>
                        </a>
                    </li>
                    <Submenu style={{ paddingLeft: '20px' }}>
                        <div style={{ flex: 1, display: 'flex' }}>
                            <span style={{ flex: 1 }}>Export format</span>
                            <ChevronRight style={{ padding: '0px' }} />
                        </div>
                        <Sul>
                            <li>
                                <i style={{ opacity: selectedFormat === 'mp4' ? 1 : 0 }}><CheckIcon /></i>
                                <span style={{ paddingLeft: '5px' }}>mp4</span>
                            </li>
                            <li>
                                <i style={{ opacity: selectedFormat === 'mkv' ? 1 : 0 }}><CheckIcon /></i>
                                <span style={{ paddingLeft: '5px' }}>mkv</span>
                            </li>
                            <li>
                                <i style={{ opacity: selectedFormat === 'webm' ? 1 : 0 }}><CheckIcon /></i>
                                <span style={{ paddingLeft: '5px' }}>webm</span>
                            </li>
                            <li>
                                <i style={{ opacity: selectedFormat === 'avi' ? 1 : 0 }}><CheckIcon /></i>
                                <span style={{ paddingLeft: '5px' }}>avi</span>
                            </li>
                        </Sul>

                    </Submenu>
                    <Submenu style={{ paddingLeft: '20px' }}>
                        <div style={{ flex: 1, display: 'flex' }}>
                            <span style={{ flex: 1 }}>Quality</span>
                            <ChevronRight style={{ padding: '0px' }} />
                        </div>
                        <Sul>
                            <li>
                                <i style={{ opacity: selectedQuality === 'Auto' ? 1 : 0 }}><CheckIcon /></i>
                                <span style={{ paddingLeft: '5px' }}>Auto</span>
                            </li>
                            <li>
                                <i style={{ opacity: selectedQuality === '8k' ? 1 : 0 }}><CheckIcon /></i>
                                <span style={{ paddingLeft: '5px' }}>8k</span>
                            </li>
                            <li>
                                <i style={{ opacity: selectedQuality === '4k' ? 1 : 0 }}><CheckIcon /></i>
                                <span style={{ paddingLeft: '5px' }}>4k</span>
                            </li>
                            <li>
                                <i style={{ opacity: selectedQuality === '1080p' ? 1 : 0 }}><CheckIcon /></i>
                                <span style={{ paddingLeft: '5px' }}>1080p</span>
                            </li>
                            <li>
                                <i style={{ opacity: selectedQuality === '720p' ? 1 : 0 }}><CheckIcon /></i>
                                <span style={{ paddingLeft: '5px' }}>720p</span>
                            </li>
                            <li>
                                <i style={{ opacity: selectedQuality === '480p' ? 1 : 0 }}><CheckIcon /></i>
                                <span style={{ paddingLeft: '5px' }}>480p</span>
                            </li>
                            <li>
                                <i style={{ opacity: selectedQuality === '360p' ? 1 : 0 }}><CheckIcon /></i>
                                <span style={{ paddingLeft: '5px' }}>360p</span>
                            </li>
                            <li>
                                <i style={{ opacity: selectedQuality === '240p' ? 1 : 0 }}><CheckIcon /></i>
                                <span style={{ paddingLeft: '5px' }}>240p</span>
                            </li>
                            <li>
                                <i style={{ opacity: selectedQuality === '144p' ? 1 : 0 }}><CheckIcon /></i>
                                <span style={{ paddingLeft: '5px' }}>144p</span>
                            </li>
                        </Sul>

                    </Submenu>
                    <Submenu style={{ paddingLeft: '20px' }}>
                        <div style={{ flex: 1, display: 'flex' }}>
                            <span style={{ flex: 1 }}>Speed (framerate)</span>
                            <ChevronRight style={{ padding: '0px' }} />
                        </div>
                        <Sul>
                            <li>
                                <i style={{ opacity: selectedFramerate === '12' ? 1 : 0 }}><CheckIcon /></i>
                                <span style={{ paddingLeft: '5px' }}>12</span>
                            </li>
                            <li>
                                <i style={{ opacity: selectedFramerate === '24' ? 1 : 0 }}><CheckIcon /></i>
                                <span style={{ paddingLeft: '5px' }}>24</span>
                            </li>
                            <li>
                                <i style={{ opacity: selectedFramerate === '30' ? 1 : 0 }}><CheckIcon /></i>
                                <span style={{ paddingLeft: '5px' }}>30</span>
                            </li>
                            <li>
                                <i style={{ opacity: selectedFramerate === '60' ? 1 : 0 }}><CheckIcon /></i>
                                <span style={{ paddingLeft: '5px' }}>60</span>
                            </li>
                        </Sul>

                    </Submenu>
                    <hr style={{ border: '1px solid #1f1f1f' }} />
                    <li><CheckIcon />
                        <span>Reset</span>
                    </li>
                    <li style={{ paddingLeft: '20px' }}>
                        <span>Auto launch</span>
                    </li>
                    <hr style={{ border: '1px solid #1f1f1f' }} />
                    <li style={{ paddingLeft: '20px' }}>
                        <span>About Lapse</span>
                    </li>
                    <li style={{ paddingLeft: '20px' }}>
                        <span>Quit lapse</span>
                        <a style={{  display:'flex',alignItems: 'center' }}>
                            <CommandIcon /> <OptionIcon /> <span>L</span>
                        </a>
                    </li>
                </UL>
            </Options>
        </Wrapper>
    </>
    )
};


// backdrop-filter:blur(10px);
const Wrapper = styled.div`
width:100%; 
text-align:right;
display:flex;
align-items:center;
flex-direction:row-reverse;
background: ${props=>props.theme.blurBack};
    font-size:14px;
    color:#fff
`;

const UL = styled.ul`
display:none;
padding:5px;
margin:0;
list-style:none;
width:200px;
text-align:left;
background: ${props=>props.theme.blur};
color: ${props=>props.theme.accent};
backdrop-filter:blur(10px);
    li{
        display:flex; 
        margin:0;
        border-radius:5px;
        padding:5px;
        font-size:14px;
        user-select:none;
        span{
            flex:1;
        }
    }
    li:hover{
        background: #5aa0fe;
        color:${props=>props.theme.color}
    }
    a{
        color:${props=>props.theme.tint}
    }
    `;
const Options = styled.div`
    padding-top:5px;
    border-radius:5px;
    :hover{
        background: rgba(255, 255, 255, 0.22);
    }
    :hover ${UL}{
        display:block;
        position:absolute;
        box-shadow:1px 2px 4px 0px rgba(0,0,0,.5);        
        border-radius: 4px; 
    }   
`;

const Sul = styled.ul`
    display:none;
    position:absolute;
    padding:5px;
    margin:0;
    list-style:none;
    width:auto;
    text-align:left;
    border-radius:5px; 
    `;

const Submenu = styled.li`
    display:flex;
    flex-direction:column;
    flex:1;
    span{
        flex:1
    }
    :hover ${Sul}{
        display:block;
        left:98%;
        background: ${props=>props.theme.blur};
        color: ${props=>props.theme.accent};
        border: 1px solid #1F1F1D; 
        backdrop-filter: blur(25px); 
    }
`;
