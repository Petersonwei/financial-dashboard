import { ReactNode } from 'react'
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material'
import { ThemeToggle } from './ThemeToggle'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            Financial Dashboard
          </Typography>
          <ThemeToggle />
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 4 }}>
        {children}
      </Container>
    </Box>
  )
}

