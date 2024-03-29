import { Box, Typography } from '@mui/material'
import React from 'react'
import typography from '../../assets/theme/base/typography'
import errorImage from '../../assets/images/erorr.svg';

const CardError = ({ errorMessage }) => {
        return (
                <Box sx={{ textAlign: 'center', display: 'block', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <img src={errorImage} width={'40%'} />
                        <Typography typography={typography.body1} >{errorMessage}</Typography>
                </Box>
        )
}
export default CardError
