import React from 'react';
import { Box, CardMedia, Divider } from '@mui/material';
import colors from '../../assets/theme/base/colors';
import borders from '../../assets/theme/base/borders';
import MDTypography from '../../items/MDTypography';
import typography from '../../assets/theme/base/typography';

const SpecializedCardNews = ({ image, title, description, content, createdAt }) => {
        return (
                <Box>
                        <Box sx={{ display: 'flex' }}>
                                <Box sx={{ width: '30%', justifyContent: 'center' }}>
                                        <CardMedia
                                                component="img"
                                                height="194"
                                                image={image}
                                                alt="new-img"
                                                sx={{ borderRadius: borders.borderRadius.lg }}
                                        />
                                        <MDTypography typography={typography.h5}>{title}</MDTypography>
                                        <MDTypography typography={typography.caption}>
                                                {createdAt}
                                        </MDTypography>
                                </Box>
                                <Divider
                                        sx={{ m: 2 }}
                                        orientation="vertical"
                                        flexItem
                                        color={colors.white.main}
                                />
                                <Box sx={{ width: '70%' }}>
                                        <MDTypography typography={typography.h5}>Description</MDTypography>
                                        <Box sx={{ p: 0.5 }} />
                                        <MDTypography typography={typography.body2}>
                                                {description}
                                        </MDTypography>
                                        <Box sx={{ p: 2 }} />
                                        <MDTypography typography={typography.h5}>Content</MDTypography>
                                        <Box sx={{ p: 0.5 }} />
                                        <MDTypography typography={typography.body2}>
                                                {content}
                                        </MDTypography>
                                </Box>

                        </Box>
                        <Divider color={colors.grey[400]} sx={{ mt: 5, mb: 5 }} />

                </Box>

        )
}

export default SpecializedCardNews
