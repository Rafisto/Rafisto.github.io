import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppTheme } from './layout/theme/appTheme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { GlobalStateProvider } from './hooks/GlobalStateProvider'
import { HashRoutes } from './layout/general/hashRoutes'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStateProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={AppTheme}>
          <CssBaseline />
          <RouterProvider router={HashRoutes} />
        </ThemeProvider>
      </QueryClientProvider>
    </GlobalStateProvider>
  </React.StrictMode >,
)
