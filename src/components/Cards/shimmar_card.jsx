import React from 'react';
import {
        Card,
        CardMedia,
        CardHeader,
        CardContent,
        CardActions,
        Collapse,
        Avatar,
        Typography,
        Skeleton,
} from '@mui/material';
import colors from '../../assets/theme/base/colors';

const ShimmerCard = ({ width }) => {
        return (
                <Card
                        sx={{
                                width: { width },
                                backgroundColor: colors.secondary.main,
                                '@media (max-width: 600px)': {
                                        width: '100%', // Adjust the width for smaller screens
                                },
                        }}
                >
                        <Skeleton variant="rectangular" height={150} />
                        <CardHeader
                                avatar={<Skeleton variant="circular" width={40} height={40} />}
                                title={
                                        <Typography variant="h5">
                                                <Skeleton />
                                        </Typography>
                                }
                                subheader={
                                        <Typography variant="body2">
                                                <Skeleton />
                                        </Typography>
                                }
                        />
                        <CardContent>
                                <Typography variant="body2">
                                        <Skeleton count={3} />
                                </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                                <Skeleton variant="rectangular" width={40} height={40} />
                        </CardActions>
                        <Collapse in timeout="auto" unmountOnExit>
                                <CardContent>
                                        <Typography paragraph>
                                                <Skeleton count={3} />
                                        </Typography>
                                </CardContent>
                        </Collapse>
                </Card>
        );
};

export default ShimmerCard;
