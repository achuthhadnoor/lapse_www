import React from 'react'
import styled from 'styled-components'
import { AppIcon } from '../icons';

export default function Content() {
    return (
        <Container>
            <Tryit />
            <main style={{
                paddingLeft: 30,
            }}>
                <AppIcon style={{ transform: 'scale(4)', color: "#fff" }} />
                <h1 style={{ color: '#fff', paddingTop: 30, fontSize: '3.3em' }}>
                    Lapse
           </h1>
                <h2 style={{ color: '#fff', fontSize: '1.2em' }}>
                    Capture your work in timelapse
           </h2>
                <p style={{ maxWidth: '500px', color: '#fff', lineHeight: '1.5', padding: '20px 0px' }}>
                    Making timelapse  videos is neverbeen easier.
                    Don’t burn your processor anymore .
                    No more rerendering ( just start and stop )
           </p>
                <div>
                    <a href={'https://gumroad.com/l/lapse_app'} target="_blank">
                    <Button>
                        <CartIcon /><span style={{ paddingLeft: '5px' }}>Get it now <strike>19.99 $</strike> 14.99$</span>
                    </Button>
                    </a>
                    <div style={{ padding: '10px', display: 'flex', alignItems: 'center', color: '#fff' }}>
                        <span style={{ padding: '10px', fontSize: '12px' }}>
                            Available for
                        </span>
                        <AppleIcon /> <WindowsIcon />
                    </div>
                    <div>Requires macOS Catalina or later,</div>
                </div>
            </main>
        </Container>
    )
};

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
        background:${props => props.theme.blurBack};
        border-radius:5px;
        box-shadow:0px 0px 2px 0px rgba(0,0,0,.4);
    }
    .inner{
        height:10px;
        width:10px;
        background:#fff;
        border-radius:5px;
    }
`;

const Container = styled.div` 
    display:flex;
    max-width:1080px;
    width:100%;
    margin:auto;
`
const CartIcon = () => (
    <i >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 1.5L2.25 4.5V15C2.25 15.3978 2.40804 15.7794 2.68934 16.0607C2.97064 16.342 3.35218 16.5 3.75 16.5H14.25C14.6478 16.5 15.0294 16.342 15.3107 16.0607C15.592 15.7794 15.75 15.3978 15.75 15V4.5L13.5 1.5H4.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.25 4.5H15.75" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 7.5C12 8.29565 11.6839 9.05871 11.1213 9.62132C10.5587 10.1839 9.79565 10.5 9 10.5C8.20435 10.5 7.44129 10.1839 6.87868 9.62132C6.31607 9.05871 6 8.29565 6 7.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    </i>
)
const AppleIcon = () => (
    <i style={{ padding: '10px' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6445 8.31C10.9145 8.31 9.78448 7.48 8.59448 7.51C7.02448 7.53 5.58448 8.42 4.77448 9.83C3.14448 12.66 4.35448 16.84 5.94448 19.14C6.72448 20.26 7.64448 21.52 8.86448 21.48C10.0345 21.43 10.4745 20.72 11.8945 20.72C13.3045 20.72 13.7045 21.48 14.9445 21.45C16.2045 21.43 17.0045 20.31 17.7745 19.18C18.6645 17.88 19.0345 16.62 19.0545 16.55C19.0245 16.54 16.6045 15.61 16.5745 12.81C16.5545 10.47 18.4845 9.35 18.5745 9.3C17.4745 7.69 15.7845 7.51 15.1945 7.47C13.6545 7.35 12.3645 8.31 11.6445 8.31V8.31ZM14.2445 5.95C14.8945 5.17 15.3245 4.08 15.2045 3C14.2745 3.04 13.1545 3.62 12.4845 4.4C11.8845 5.09 11.3645 6.2 11.5045 7.26C12.5345 7.34 13.5945 6.73 14.2445 5.95" fill="white" />
        </svg>

    </i >
)


const WindowsIcon = () => (
    <i style={{ padding: '10px' }} fill="currentColor" ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99086 13.4732V22.192L0.856934 20.933V13.4732H9.99086ZM9.99086 3.52233V12.3482H0.856934V4.78126L9.99086 3.52233ZM23.1426 13.4732V24L10.9953 22.3259V13.4732H23.1426ZM23.1426 1.71429V12.3482H10.9953V3.3884L23.1426 1.71429Z" fill="white" />
    </svg>
    </i>
)


const Tryit = () => {
    return (
        <TryWrapper>
        <svg width="188" height="116" viewBox="0 0 188 116" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.4776 35.5543C9.82862 35.5543 18.1796 35.5543 26.5307 35.5543C34.0469 35.5543 40.273 33.4589 47.3905 31.6795C53.9781 30.0327 62.2813 27.7089 67.6134 23.3462C70.6299 20.8782 74.5176 20.6883 77.3799 17.826C81.8757 13.3303 85.9915 8.62044 90.3311 4.02563C93.8342 0.316463 89.1876 2.1148 86.0317 2.1148C85.0759 2.1148 77.3113 3.07022 80.7769 3.07022" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M90.3311 2.11481C89.5005 6.37135 89.3757 10.2462 89.3757 14.5352" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.25465 55.618C4.5797 64.4114 7.55818 69.4289 12.9425 76.1593C18.9411 83.6575 21.6042 66.2998 18.675 66.1275C17.2777 66.0453 15.6205 65.9136 14.3757 66.6052C13.4746 67.1058 11.9871 69.5999 11.9871 68.5691C11.9871 66.8199 18.7912 62.7504 20.1612 62.3589C22.5984 61.6626 22.3941 71.7844 22.9744 73.2931C23.8482 75.5649 24.4075 78.0268 24.4075 80.4587C24.4075 83.1385 24.484 80.5352 23.4521 79.5033" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M28.386 56.0486C28.386 59.6629 30.7773 62.5543 31.9813 65.8379C32.4526 67.1234 33.7481 70.9154 33.7481 69.5462" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M32.2689 53.0902C34.5462 54.7328 36.6657 56.5599 38.9047 58.2468C39.7501 58.8837 40.3121 59.1679 41.2468 59.4795C42.4939 59.8952 43.433 60.2572 44.7496 60.4862C45.2776 60.578 46.4779 61.3321 46.9581 61.1949C47.3726 61.0765 47.0601 56.1715 47.0608 56.0281C47.078 52.2673 47.8004 41.009 47.8004 44.7698" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M57.6 44.9547C59.5958 44.917 61.1132 44.5844 61.4829 42.4586C61.6016 41.7759 61.9183 40.7314 61.5651 40.0754C61.2372 39.4665 60.3637 39.1769 59.8085 38.8531C58.0502 37.8274 56.9792 38.2972 55.7921 39.6954C54.1847 41.5886 53.9062 43.4792 53.3474 45.8792C53.0233 47.2707 52.8345 49.3932 53.8096 50.5735C54.7943 51.7656 56.2956 51.7959 57.7952 51.7959C59.7678 51.7959 61.2704 51.8037 62.9621 50.6865C64.5008 49.6704 66.4751 48.5699 66.4751 46.4339" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M70.5022 61.6147C70.5798 63.3211 71.4031 65.2654 72.1663 66.7919C73.1312 68.7216 74.3638 70.8598 75.8232 72.4518C76.4203 73.1033 76.2154 70.5916 76.7887 70.3049" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M68.2834 57.3621C67.4666 59.4552 68.7199 58.6049 68.2834 57.7319" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M25.6126 48.4678C25.7114 48.2146 26.1124 46.6167 25.2428 47.4406C24.8391 47.823 24.7464 48.7454 24.9141 49.2485C25.0785 49.7417 26.3875 48.911 25.6126 48.6527" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M72.9059 52C73.1502 54.1578 74.4759 56.1672 75.4328 58.0811C76.4625 60.1404 77.3432 62.2716 78.3707 64.3265C78.8815 65.3481 80.3099 64.9089 81.2879 65.0867C82.1605 65.2453 82.789 64.4975 83.3013 63.8335C83.5821 63.4695 85.5016 61.5336 84.9243 61.2449" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M73.8304 61.4298C75.0902 59.5571 76.7102 57.7041 77.7132 55.698" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M92.9339 39.1849C91.8248 40.0514 88.7986 42.0366 89.0106 43.251C89.1876 44.2647 91.437 48.9166 92.0106 49.751C92.3187 50.1992 97.3714 48.6617 97.3714 46.3959C97.3714 44.6687 96.2593 43.0753 95.8922 41.3318C95.8016 40.901 95.464 39.2141 94.9678 39.1849C94.0666 39.1319 93.2008 39 92.2867 39C91.4708 39 93.404 39.1015 93.8584 39.3287C95.3353 40.0672 97.0367 40.3097 98.6452 40.7565C100.495 41.2703 102.317 40.4946 104.028 39.9245" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M96.9833 62.3351C97.4199 64.6737 98.7045 66.7069 99.8801 68.7449C101.849 72.1584 103.931 75.5196 106.033 78.8527C107.726 81.537 109.592 85.2466 112.392 86.9882C113.277 87.5393 115.729 85.501 116.346 85.0982C117.877 84.0996 119.192 82.776 120.096 81.1948" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M99.0172 77.8666C99.0172 74.7688 99.573 72.3185 101.75 70.1419C102.36 69.5315 106.476 65.7265 106.598 65.8482" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M115.103 61.7805C118.889 61.7805 122.795 61.5051 126.567 61.8626C129.962 62.1845 132.959 64.1057 134.846 66.9371C135.175 67.43 136.567 69.452 135.709 69.9981C135.047 70.4199 134.008 70.5466 133.264 70.8405C132.301 71.2216 131.752 70.6016 130.963 70.0187C128.543 68.2284 126.56 65.8217 125.725 62.8796C124.618 58.9835 124.313 55.0575 124.646 51.0255C124.773 49.486 125.273 46.4339 125.273 46.4339" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M129.341 43.2906C130.768 45.5267 132.608 47.7859 134.6 49.5463C136.113 50.8835 137.858 51.4959 139.9 51.1282C142.445 50.6701 144.521 48.039 145.57 45.8381C147.806 41.1484 148.125 34.9017 147.091 29.8752C146.633 27.6498 146.108 25.0152 144.235 23.5168C144.134 23.4362 143.445 22.7327 143.403 22.9826C143.322 23.4669 143.548 23.9543 143.783 24.3591C146.682 29.3515 150.333 33.9504 153.932 38.4422C158.94 44.6925 163.713 51.0792 167.984 57.8565C170.771 62.2785 173.587 66.8069 174.805 71.9601C175.527 75.0163 176.318 78.4961 174.25 81.1845C172.174 83.8833 168.581 85.0475 165.437 85.9199C160.194 87.3748 154.372 87.7754 148.981 88.3236C143.032 88.9286 137.051 88.8846 131.138 89.8952C125.455 90.8667 120.46 93.941 115.905 97.3323C112.914 99.5585 111.359 101.959 111.118 105.786C110.897 109.284 110.854 111.958 113.809 114.107" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M157.862 26.1784C157.166 24.0447 156.955 23.7918 159.122 23.7918C160.504 23.7918 161.887 23.6874 163.232 24.0238C166.734 24.8991 169.132 27.1715 170.243 30.5042C171.412 34.0107 171.578 38.0965 173.226 41.3932C173.988 42.9158 176.381 45.8465 178.149 44.0782" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M184.414 53.6247C184.585 53.0391 187.041 45.7024 186.635 45.5864C185.256 45.1926 184.513 47.6401 184.43 48.5531C184.299 49.9975 184.483 51.7239 185.309 52.9618C186.073 54.1079 186.59 51.751 186.734 51.3044C187.085 50.2114 185.929 50.8108 185.624 51.3707C185.292 51.9779 185.484 52.932 185.905 51.9839C186.324 51.0417 186.396 49.5571 186.137 48.5531C185.769 47.1203 185.318 48.6978 185.01 48.8515" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>   
        </TryWrapper>
    )
}

const TryWrapper = styled.span`
    position:absolute;
    right:12%;
`