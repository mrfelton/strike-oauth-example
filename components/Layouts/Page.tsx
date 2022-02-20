import type { FC } from 'react'
import { Container } from '@mui/material'
import { Footer } from './Footer'
import { Header } from './Header'

export const Page: FC = ({ children }) => {
  return (
    <>
        <Header />
        <Container fixed>
          {children}
        </Container>
        <Footer/>
    </>
  )
}
