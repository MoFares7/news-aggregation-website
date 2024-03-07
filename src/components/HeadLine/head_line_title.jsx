import React from 'react'
import MDTypography from '../../items/MDTypography'
import { Box } from '@mui/material'
const HeadLineTitle = ({ title, color }) => {
        return (
                <Box>
                        <MDTypography color={color}
                                sx={{
                                        pl: 10,
                                        pr: 10,
                                        fontSize:{
                                                xs: '12px',
                                                sm: '14px',
                                                md: '18px',
                                                xl: '22px'
                                        },
                                        fontWight: 'bold'
                                }}
                        >{title}</MDTypography>
                </Box>
        )
}

export default HeadLineTitle
