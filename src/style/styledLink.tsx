import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const LinkStyle = { marginBlock: "5pt", color: "white", textDecoration: "none", display: 'flex', alignItems: 'center' }

interface StyledLinkProps {
    name: string | JSX.Element | React.ReactNode;
    link: string;
    icon: JSX.Element;
}

const styledLink = ({ name, link, icon }: StyledLinkProps) => {
    return (
        <Link to={link} style={LinkStyle}>
            {icon}<Typography sx={{ display: "inline" }}>&nbsp;{name}</Typography>
        </Link>
    )
}

export default styledLink