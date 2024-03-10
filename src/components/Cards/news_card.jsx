import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import borders from '../../assets/theme/base/borders';
import colors from '../../assets/theme/base/colors';
import typography from '../../assets/theme/base/typography';
import { Box } from '@mui/material';

const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
})(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
        }),
}));

export default function NewsCards({
        avatar,
        image,
        author,
        title,
        createdAt,
        description,
}) {
        const [expanded, setExpanded] = React.useState(false);

        const handleExpandClick = () => {
                setExpanded(!expanded);
        };

        const handleImageError = (event) => {
                event.target.src = '../../assets/images/erorr.svg';
        };

        return (
                <Card
                        sx={{
                                maxWidth: {
                                        xs: 320,
                                        sm: 576,
                                        md: 768,
                                        lg: 992,
                                        xl: 600,
                                        xxl: 600,
                                },
                                height: expanded ? 'auto' : 450,
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: 'none',
                                overflow: 'visible',
                                borderRadius: borders.borderRadius.lg,
                                backgroundColor: colors.primary.main,
                                color: colors.white.main,
                                ml: 2,
                                boxSizing: 'border-box',
                                transition: 'transform 0.4s ease',
                                '&:hover': {
                                        transform: 'scale(0.97)',
                                },
                        }}
                >
                        <CardMedia
                                component="img"
                                height="150"
                                src={image}
                                alt="new-img"
                                sx={{
                                        borderRadius: [0, 0, 0, borders.borderRadius.lg],
                                        overflow: 'hidden',
                                }}
                                onError={handleImageError}
                        />

                        <CardHeader
                                avatar={
                                        <Avatar sx={{ bgcolor: 'transparent' }} aria-label="recipe">
                                                <img
                                                        src={avatar}
                                                        alt="Avatar"
                                                        style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                                                />
                                        </Avatar>
                                }
                                title={
                                        <Box
                                                sx={{
                                                        maxHeight: expanded ? 'none' : 150,
                                                }}
                                        >
                                                <Typography
                                                        typography={typography.body2}
                                                        sx={{
                                                                overflowY: 'auto',
                                                        }}
                                                >
                                                        {author}
                                                </Typography>
                                        </Box>
                                }
                                subheader={
                                        <Typography variant="body2" color="white">
                                                {createdAt}
                                        </Typography>
                                }
                        />

                        <CardContent
                                sx={{
                                        height: 100,
                                        overflowY: 'auto',
                                        maxHeight: expanded ? 'none' : 150,
                                }}
                        >
                                <Typography typography={typography.body2}>{title}</Typography>
                        </CardContent>

                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent
                                        sx={{
                                                overflowY: 'auto',
                                                overflow: 'hidden',
                                                maxHeight: 200,
                                        }}
                                >
                                        <Typography paragraph>Description:</Typography>
                                        <Typography color="white">{description}</Typography>
                                </CardContent>
                        </Collapse>

                        <CardActions disableSpacing>
                                <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                >
                                        <ExpandMoreIcon />
                                </ExpandMore>
                        </CardActions>
                </Card>
        );
}
