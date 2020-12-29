import React from 'react'
import { Logo } from '../icons'

export default function Header() {
    return (
        <Header>
        <div style={{display:'flex',alignItems:'center'}}>
           <Logo/> <span style={{fontSize:'24px'}}>Lapse</span>
        </div>
        </Header>
    )
};