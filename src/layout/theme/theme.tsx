import createTheme from "@mui/material/styles/createTheme";

export const AppTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: '#090909',
        },
        secondary: {
            main: '#009bff',
        },
        text: {
            primary: '#ffffff',
        },
        contrastThreshold: 4.5,
    },
    typography: {
        fontFamily: "Open Sans"
    },
    components: {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: "0",
                }
            }
        },
    }
})
