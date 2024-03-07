import React from 'react'
import { Avatar, Box } from '@mui/material';
import MDTypography from '../../items/MDTypography';
import typography from './../../assets/theme/base/typography';;

const HeadPages = ({title, images}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Avatar sx={{ bgcolor: 'transparent', p: 2 }} aria-label="recipe">
        <img
          style={{
            width: '120%',
            height: '120%',
            borderRadius: '50%',

          }}
          src={images}
          alt="Avatar"
        />
      </Avatar>
      <MDTypography typography={typography.h4}>
        {title}
      </MDTypography>
    </Box>
  )
}

export default HeadPages
