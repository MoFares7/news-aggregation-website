import React from 'react'
import MDTypography from '../../items/MDTypography'
import { Box } from '@mui/material'
import typography from './../../assets/theme/base/typography';

const HeadLineTitle = ({ title }) => {
        return (
                <Box>
                        <MDTypography typography={typography.h4}>
                                {title}
                        </MDTypography>
                </Box>
        )
}

export default HeadLineTitle
