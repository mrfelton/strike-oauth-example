import { Box, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <Box sx={{ m: 4, position: "fixed", bottom: 0, width: 1, color: 'text.disabled' }}>
      <Typography variant="body2" align="center">
        © 2022 Strike
      </Typography>
    </Box>
  )
}
