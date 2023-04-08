import { Box, Grid, Typography, ButtonGroup, Button } from '@mui/material'
import React from 'react'
import WindowWrap from '../../layout/components/window/windowWrap'

import EditNoteIcon from '@mui/icons-material/EditNote';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import DataObjectIcon from '@mui/icons-material/DataObject';
import { GifBox } from '@mui/icons-material';
import BackgroundImagePanel from './backgroundImagePanel';
import T from '../../localization/T';


const ProjectsSection = () => {
    return (
        <Box className="bmain">
            <WindowWrap name={T("jumbo.projects")} noPadding>
                <Typography variant="h3" sx={{ textAlign: "center", margin: "20px" }}>{T("jumbo.projects")}</Typography>
                <Grid container spacing={2} sx={{ padding: "10px" }}>
                    <Grid item md={4} sm={12} xs={12}>
                        <BackgroundImagePanel name={T("jumbo.articles")} icon={<NewspaperIcon />} src="banner.projects.articles.png" />
                    </Grid>
                    <Grid item md={4} sm={12} xs={12}>
                        <BackgroundImagePanel name={T("jumbo.codebase")} icon={<DataObjectIcon />} src="banner.projects.codebase.png" />
                    </Grid>
                    <Grid item md={4} sm={12} xs={12}>
                        <BackgroundImagePanel name={T("jumbo.poems")} icon={<EditNoteIcon />} src="banner.projects.poems.png" />
                    </Grid>
                </Grid>
            </WindowWrap>
        </Box>
    )
}

export default ProjectsSection