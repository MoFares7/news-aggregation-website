import React from 'react';
import { Box, CardMedia, Divider } from '@mui/material';
import colors from '../../assets/theme/base/colors';
import borders from '../../assets/theme/base/borders';
import MDTypography from '../../items/MDTypography';
import typography from '../../assets/theme/base/typography';
import { Link } from 'react-router-dom';

const SpecializedCardNews = ({ image, title, description, content, createdAt }) => {
        return (
                <Box>
                        <Box sx={{
                                display: 'flex', transition: 'transform 0.4s ease',
                                '&:hover': {
                                        transform: 'scale(0.97)',
                                },
                        }}>
                                <Box sx={{
                                        width: {
                                                xs: '50%',
                                                sm: '50%',
                                                md: '40%',
                                                xl: '40%',
                                        },
                                        justifyContent: 'center',
                                        transition: 'transform 0.4s ease',
                                        '&:hover': {
                                                transform: 'scale(0.97)',
                                        },
                                }}>
                                        <CardMedia
                                                component="img"
                                                height="250"
                                                image={image}
                                                alt="new-img"
                                                sx={{ borderRadius: borders.borderRadius.lg }}
                                        />
                                        <MDTypography typography={typography.h5}>{title}</MDTypography>
                                        <Box sx={{ p: 1 }} />
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
                                <Box sx={{
                                        width: {
                                                xs: '50%',
                                                sm: '50%',
                                                md: '60%',
                                                xl: '60%',
                                        },
                                }}>
                                        <MDTypography typography={typography.h5}>Description</MDTypography>
                                        <Box sx={{ p: 0.5 }} />
                                        <MDTypography typography={typography.body2}>
                                                {description}
                                        </MDTypography>
                                        <Box sx={{ p: 2 }} />
                                        <MDTypography typography={typography.h5}>Content</MDTypography>
                                        <Box sx={{ p: 0.5 }} />
                                        <Box sx={{ maxHeight: '150px', overflowY: 'auto' }}>
                                                <MDTypography typography={typography.body2}>
                                                        <Link to={content}> {content} </Link>
                                                </MDTypography>
                                        </Box>

                                </Box>
                        </Box>
                        <Divider color={colors.grey[400]} sx={{ mt: 5, mb: 5 }} />
                </Box>
        );
}

export default SpecializedCardNews
