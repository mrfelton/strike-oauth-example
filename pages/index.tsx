import type { NextPage } from 'next'
import { useSession, signIn, signOut } from "next-auth/react"
import { Box, Button, Card, CardHeader, CardContent, Stack, Typography } from '@mui/material'
import { Page } from '../components'

const Home: NextPage = () => {
  const { data: session } = useSession()

  return (
    <Page>
      <Card variant="outlined" sx={{ borderRadius: 4 }}>
        <CardHeader title="Strike" subheader="OAuth Example"/>
        <CardContent sx={{ p: 2, display: 'flex' }}>
          <Box>
            <Stack>

              {!session && (
                <Button variant="outlined" onClick={() => signIn('strike')}>Login with Strike</Button>
              )}

              {session && (
                <>
                  <Typography sx={{ mb: 3 }}>Signed in as {session.user?.name ?? session.user?.email}</Typography>
                  <Button variant="outlined" onClick={() => signOut()}>Sign out</Button>
                </>
              )}

            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Page>
  )
}

export default Home
