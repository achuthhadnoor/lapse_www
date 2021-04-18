import styled from "styled-components";
import Menu from "../components/Menu";
import Video from './Video'
const Header = ({ heading, subheading }) => (
    <>
        <BackgroundColor />
        <Data>
            <Menu />
            <Heading>{heading}</Heading>
            <SubHeading>{subheading}</SubHeading>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button>Get it now</Button> <AppleIcon /> <WindowsIcon />
            </div>
            <div style={{background:"#fff",position:'relative',marginTop:'50px',borderRadius:'10px'}}>
            <Video embedId="e4kv1lyq0n"/>                
            </div>
        </Data>
    </>
)
const WindowsIcon = () => (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
            <path d="M6.6607 8.98215V14.7946L0.571411 13.9554V8.98215H6.6607ZM6.6607 2.34822V8.23215H0.571411V3.1875L6.6607 2.34822ZM15.4286 8.98215V16L7.33034 14.8839V8.98215H15.4286ZM15.4286 1.14286V8.23215H7.33034V2.25893L15.4286 1.14286Z" fill="white" />
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="16" height="16" fill="white" />
            </clipPath>
        </defs>
    </Svg>

)
const AppleIcon = () => (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/Svg">
        <path d="M12.861 4.55483C13.3623 3.95654 13.71 3.13997 13.71 2.31531C13.71 2.20212 13.7019 2.08893 13.6776 2C12.8772 2.03234 11.907 2.5336 11.3249 3.21273C10.8722 3.73017 10.4517 4.55483 10.4517 5.37948C10.4517 5.50884 10.4679 5.63012 10.4841 5.67054C10.5326 5.67863 10.6134 5.6948 10.6943 5.6948C11.4219 5.6948 12.3274 5.2097 12.861 4.55483ZM13.4351 5.86458C12.2223 5.86458 11.2441 6.6003 10.6134 6.6003C9.9424 6.6003 9.06923 5.91309 8.01819 5.91309C6.02122 5.91309 4 7.56241 4 10.667C4 12.6074 4.74381 14.6529 5.67357 15.9707C6.46589 17.0864 7.16119 18 8.15563 18C9.15008 18 9.58666 17.3451 10.8075 17.3451C12.0606 17.3451 12.3355 17.9838 13.4351 17.9838C14.5184 17.9838 15.238 16.9894 15.9171 16.0111C16.6852 14.8873 17.0005 13.7959 17.0167 13.7393C16.952 13.7231 14.8742 12.8742 14.8742 10.5053C14.8742 8.45174 16.5073 7.53007 16.5963 7.4573C15.5291 5.91309 13.8878 5.86458 13.4351 5.86458Z"
            fill="white"
            fillOpacity="0.9"
        />
    </Svg>
);

const Svg = styled.svg`
    margin:0px 10px;
`;

const Button = styled.button`
    padding:5px 10px;
    background:#fff;
    color:#131313;
    border:none;
    border-radius:5px;
`

const Data = styled.div`
    z-index: 1;
    position: relative;
    max-width:1024px;
    margin:auto;
    @media (max-width:780px){
        padding:0px 10px ;
    }
`;
const BackgroundColor = styled.div`
    position: absolute;
    height: 600px; 
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
  color:#D1DBFF;
`

export default Header;