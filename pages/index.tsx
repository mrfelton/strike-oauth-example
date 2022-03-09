import { useEffect } from "react";
import type { NextPage, GetServerSideProps } from 'next'
import { useSession, signIn, signOut } from "next-auth/react"
import { Box, Button, Card, CardHeader, CardContent, Stack, Typography } from '@mui/material'
import { Page } from '../components'
import { AccountData } from '../components'
import { getInvoices } from './api/invoices'
import { PageResults, Invoice } from 'lib/strike-api'

export interface Data {
  invoices: PageResults<Invoice>
}

const Home: NextPage<Data> = ({ invoices }) => {
  const { data: session } = useSession()

  useEffect(() => {
    if (session?.error === "RefreshAccessTokenError") {
      signIn(); // Force sign in to hopefully resolve error
    }
  }, [session]);

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
                  <AccountData invoices={invoices} />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const invoices = await getInvoices(context.req);
  return { props: { invoices } }
}
