import React from 'react'

interface LogoProps {
    src: string,
    onClick: () => void,
}

const XPLogo = (props: LogoProps) => (
    <img style={{ cursor: 'pointer' }} src={props.src} alt='logo' onClick={props.onClick} />
)

export default XPLogo
