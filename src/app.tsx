import React from 'react'
import { Box } from '@mui/material'
import Header from './layout/components/header/header'
import Footer from './layout/components/footer/footer'
import './App.css';

type AppProps = {
    children: React.ReactNode
}

const App = ({ children }: AppProps) => {
    return (
        <React.Fragment>
            <div style={{ overflowX: "hidden" }}>
                <img className="jumbomove" src="jumbo.png" alt="Home" style={{ zIndex: "-1", pointerEvents: "none", position: "fixed", objectFit: "cover", height: "100vh", width: "120%", objectPosition: "0 100%" }} />
                <Header />
                <Box sx={{ marginTop: "85px" }}>
                    {children}
                </Box>
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default App