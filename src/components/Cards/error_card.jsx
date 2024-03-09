import { Box, Typography } from '@mui/material'
import React from 'react'
import typography from '../../assets/theme/base/typography'
import errorImage from '../../assets/images/erorr.svg';

const CardError = ({ errorMessage }) => {
        return (
                <Box sx={{ justifyContent: 'center', width: '100%' }}>
                        <Box sx={{ display: 'flex' }}>
                                <img src={errorImage} />
                                <Box sx={{ p: 2 }} />
                                <Typography typography={typography.body1}>{errorMessage}</Typography>
                        </Box>

                </Box>
        )
}

export default CardError
