import { Box } from '@mui/material'
import React from 'react'

const Appbar = ({ children }) => {
        return (
                <Box sx={{ pt: 2, pl: 5, pr: 5 }}>
                        {children}
                </Box>
        )
}

export default Appbar
