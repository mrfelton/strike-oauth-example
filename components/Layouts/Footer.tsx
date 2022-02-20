import { Box, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <Box sx={{ m: 4, position: "fixed", bottom: 0}}>
      <Typography variant="body2" color="face.tertiary">
        © 2022 Strike
      </Typography>
    </Box>
  )
}
