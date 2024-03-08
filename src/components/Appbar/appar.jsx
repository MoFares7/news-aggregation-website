import { Box } from '@mui/material'
import React from 'react'

const Appbar = ({ children }) => {
        return (
                <Box sx={{
                        pt: 2,
                        pl: {
                                xs: 1,
                                sm: 1,
                                md: 2,
                                lg: 4,
                                xl: 5,
                        },
                        pr: {
                                xs: 1,
                                sm: 1,
                                md: 2,
                                lg: 4,
                                xl: 5,
                        },
                }}>
                        {children}
                </Box>
        )
}

export default Appbar
