import React from 'react'
import styled from 'styled-components'

export const AppIcon = () => (
    <IconWrapper>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.53203 4H19C19.5523 4 20 4.44772 20 5V18.5572C20 19.1888 19.4218 19.6622 18.8026 19.5375L8.0466 17.3719C7.66422 17.2949 7.36151 17.0026 7.27117 16.6231L4.55922 5.2316C4.40962 4.60323 4.8861 4 5.53203 4Z" stroke="currentColor" strokeWidth="2" />
        </svg>
    </IconWrapper>
);

export const SearchIcon = () => (
    <IconWrapper>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 20L15 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </IconWrapper>
);

export const WifiIcon = () => (
    <IconWrapper>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.96436 12.2944C8.64574 10.9771 10.7648 10.2558 12.953 10.2558C15.1413 10.2558 17.2603 10.9771 18.9417 12.2944" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.91895 9.45392C6.40494 7.39273 9.60502 6.25548 12.9189 6.25548C16.2329 6.25548 19.433 7.39273 21.9189 9.45392" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.9668 15.1429C10.8304 14.5658 11.8635 14.2558 12.9228 14.2558C13.9822 14.2558 15.0153 14.5658 15.8789 15.1429" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.9189 18.2555H12.9275" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </IconWrapper>
);

export const ListIcon = () => (
    <IconWrapper>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 6H3.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 12H3.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 18H3.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    </IconWrapper>
)
export const MoreIcon = () => (
    <IconWrapper>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    </IconWrapper>
)

export const ChevronRight = (props) => (
    <IconWrapper {...props}>
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.32178 12.3058L10.3218 8.30581L6.32178 4.30581" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </IconWrapper>
)

export const BatteryIcon = () => (
    <IconWrapper>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <path d="M17.6807 6.40192H3.68066C2.57609 6.40192 1.68066 7.29735 1.68066 8.40192V16.4019C1.68066 17.5065 2.57609 18.4019 3.68066 18.4019H17.6807C18.7852 18.4019 19.6807 17.5065 19.6807 16.4019V8.40192C19.6807 7.29735 18.7852 6.40192 17.6807 6.40192Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23.6807 13.4019V11.4019" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="24" height="24" fill="white" transform="translate(0.680664 0.401917)" />
                </clipPath>
            </defs>
        </svg>

    </IconWrapper>
)

export const CheckIcon = () => (
    <>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3332 4L5.99984 11.3333L2.6665 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    </>
)

export const OptionIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.3335 4H6.66683L10.6668 12H13.3335M9.3335 4H13.3335" stroke="currentColor" />
    </svg>

)

export const CommandIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C11.4696 2 10.9609 2.21071 10.5858 2.58579C10.2107 2.96086 10 3.46957 10 4V12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10H4C3.46957 10 2.96086 10.2107 2.58579 10.5858C2.21071 10.9609 2 11.4696 2 12C2 12.5304 2.21071 13.0391 2.58579 13.4142C2.96086 13.7893 3.46957 14 4 14C4.53043 14 5.03914 13.7893 5.41421 13.4142C5.78929 13.0391 6 12.5304 6 12V4C6 3.46957 5.78929 2.96086 5.41421 2.58579C5.03914 2.21071 4.53043 2 4 2C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4C2 4.53043 2.21071 5.03914 2.58579 5.41421C2.96086 5.78929 3.46957 6 4 6H12C12.5304 6 13.0391 5.78929 13.4142 5.41421C13.7893 5.03914 14 4.53043 14 4C14 3.46957 13.7893 2.96086 13.4142 2.58579C13.0391 2.21071 12.5304 2 12 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export const Logo = () => (
    <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.6073 14.4816C14.4577 13.8532 14.9341 13.25 15.5801 13.25H59.75C60.3023 13.25 60.75 13.6977 60.75 14.25V58.6429C60.75 59.2745 60.1718 59.7479 59.5526 59.6233L24.2595 52.5173C23.8771 52.4403 23.5744 52.148 23.4841 51.7685L14.6073 14.4816Z" stroke="url(#paint0_linear)" strokeWidth="8" />
        <defs>
            <linearGradient id="paint0_linear" x1="9.25" y1="38.6323" x2="64.75" y2="38.6323" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2FFE9A" />
                <stop offset="1" stopColor="#6FD4FF" />
            </linearGradient>
        </defs>
    </svg>

)

const IconWrapper = styled.i`
    padding:0px 10px;
`;