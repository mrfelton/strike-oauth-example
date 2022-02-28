import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { Box } from '@mui/material'

import { api } from 'lib/api.js'
export const AccountData = () => {
  const { data } = useSession()
  const [items, setItems] = useState([])

  api.init(data?.apiUrl, data?.accessToken)

  useEffect(() => {
    let isSubscribed = true

    const fetchData = async () => {
      const invoices = await api.getInvoices()
      if (isSubscribed) {
        setItems(invoices)
      }
    }

    fetchData()
      .catch(console.error)

      return () => {
        isSubscribed = false
      };
  }, [])

  return (
    <Box sx={{ my: 4 }}>
      Items: {JSON.stringify(items)}
    </Box>
  )
}
