import React from 'react'
import styled from 'styled-components'
import { AppIcon, BatteryIcon, CheckIcon, ChevronRight, CommandIcon, ListIcon, MoreIcon, OptionIcon, SearchIcon, WifiIcon } from '../icons';

export default function App({ setTheme, theme }) {
    const [selectedFormat, setSelectedFormat] = React.useState('mp4')
    const [selectedQuality, setSelectedQuality] = React.useState('Auto')
    const [selectedFramerate, setSelectedFramerat] = React.useState('30')
    return (<>
        <Wrapper>
            {/* <ListIcon />
            <MoreIcon /> */}
            <span style={{ marginRight: '10px' }}>Mon 28 Dec 7:57 PM</span>
            {/* <BatteryIcon /> */}
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
            <span style={{flex:1}}/>
            {/* <span style={{padding:'0px 10px'}}>Lapse</span>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d)">
                            <path d="M12.861 4.55483C13.3623 3.95654 13.71 3.13997 13.71 2.31531C13.71 2.20212 13.7019 2.08893 13.6776 2C12.8772 2.03234 11.907 2.5336 11.3249 3.21273C10.8722 3.73017 10.4517 4.55483 10.4517 5.37948C10.4517 5.50884 10.4679 5.63012 10.4841 5.67054C10.5326 5.67863 10.6134 5.6948 10.6943 5.6948C11.4219 5.6948 12.3274 5.2097 12.861 4.55483ZM13.4351 5.86458C12.2223 5.86458 11.2441 6.6003 10.6134 6.6003C9.9424 6.6003 9.06923 5.91309 8.01819 5.91309C6.02122 5.91309 4 7.56241 4 10.667C4 12.6074 4.74381 14.6529 5.67357 15.9707C6.46589 17.0864 7.16119 18 8.15563 18C9.15008 18 9.58666 17.3451 10.8075 17.3451C12.0606 17.3451 12.3355 17.9838 13.4351 17.9838C14.5184 17.9838 15.238 16.9894 15.9171 16.0111C16.6852 14.8873 17.0005 13.7959 17.0167 13.7393C16.952 13.7231 14.8742 12.8742 14.8742 10.5053C14.8742 8.45174 16.5073 7.53007 16.5963 7.4573C15.5291 5.91309 13.8878 5.86458 13.4351 5.86458Z" fill="white" fill-opacity="0.9"></path>
                            </g>
                            <defs>
                            <filter id="filter0_d" x="0" y="0" width="21.0167" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                            <feOffset dy="2"></feOffset>
                            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                            </filter>
                            </defs>
                        </svg> */}
        </Wrapper>
    </>
    )
};


// backdrop-filter:blur(10px);
const Wrapper = styled.div`
    display: flex; 
    align-items: center;
    position: fixed;
    width: 100%;
    padding: 0 12px;
    background-color: rgba(143, 143, 143, 0.2);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(15px) saturate(130%); 
    color: rgba(255, 255, 255, 0.9); 
    z-index: 9;
    flex-direction:row-reverse;
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
