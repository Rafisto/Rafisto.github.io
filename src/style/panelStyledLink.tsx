import { Box, ListItemButton, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const LinkStyle = { marginBlock: "5pt", color: "white", textDecoration: "none", display: 'flex', alignItems: 'center' }

interface StyledLinkProps {
    name: string | JSX.Element | React.ReactNode;
    link: string;
    icon: JSX.Element;
}

const PanelStyledLink = ({ name, link, icon }: StyledLinkProps) => {
    const IconComponent = icon.type;
    return (
        <ListItemButton sx={{ width: "90%", margin: "auto", padding: "0" }}>
            <Box sx={{ margin: "auto", textAlign: "center", padding: "20px", width: "100%" }}>
                <IconComponent style={{ fontSize: "40pt" }} />
                <Typography variant="h6">{name}</Typography>
            </Box>
        </ListItemButton>
    )
}

export default PanelStyledLink