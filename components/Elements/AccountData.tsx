import type { FC } from 'react'
import { Box } from '@mui/material'
import { PageResults, Invoice } from 'lib/strike-api'

export const AccountData: FC<{invoices:PageResults<Invoice>}> = ({ invoices }) => {
  return (
    <Box sx={{ my: 4 }}>
      Invoices: {JSON.stringify(invoices)}
    </Box>
  )
}
