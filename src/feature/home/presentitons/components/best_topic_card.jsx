import React from 'react';
import { Avatar, Box, Grid, Typography, Divider } from '@mui/material';
import colors from '../../../../assets/theme/base/colors';
import typography from '../../../../assets/theme/base/typography';

const BestTopicCard = ({ title, author, image, createAt }) => {
        return (

                <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Box sx={{
                                pl: '10px',
                                height: {
                                        xs: 270,
                                        md: 250,
                                        xl: 200
                                },
                                transition: 'transform 0.4s ease',
                                '&:hover': {
                                        transform: 'scale(0.97)',
                                },
                        }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', pb: 1 }}>
                                        <Avatar sx={{ bgcolor: "transparent" }} aria-label="recipe">
                                                <img src={image} alt="Avatar" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
                                        </Avatar>
                                        <Typography sx={{ pl: '10px', color: colors.grey[400] }}>{author}</Typography>
                                </Box>

                                <Box sx={{ height: 100, maxHeight: '150px', overflowY: 'auto' }}>
                                        <Typography typography={typography.title} sx={{ pt: 1, pb: 1 }}>
                                                {title}
                                        </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography variant="caption">Best Topic</Typography>
                                        <Typography variant="caption">Posted on: {createAt}</Typography>
                                </Box>
                        </Box>
                        <Divider color={colors.white.main} sx={{ mr: 1, ml: 1, mb: 1 }} />
                </Grid>
        )
}

export default BestTopicCard
