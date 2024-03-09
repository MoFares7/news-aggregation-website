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

export default function NewsCards({ avatar, image, author, title, createdAt, description }) {
        const [expanded, setExpanded] = React.useState(false);

        const handleExpandClick = () => {
                setExpanded(!expanded);
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
                                        xxl: 520,
                                },
                                height: expanded ? 'auto' : 550,

                                display: "flex",
                                flexDirection: "column",
                                boxShadow: "none",
                                overflow: "visible",
                                borderRadius: borders.borderRadius.lg,
                                backgroundColor: colors.primary.main,
                                color: colors.white.main,
                                ml: 2,
                                boxSizing: 'border-box',
                        }}
                >
                        <CardMedia
                                component="img"
                                height="150"
                                image={image}
                                alt="new-img"
                                sx={{
                                        borderRadius: [0, 0, 0, borders.borderRadius.lg],
                                        overflow: 'hidden',
                                }}
                        />

                        <CardHeader
                                avatar={
                                        <Avatar sx={{ bgcolor: "transparent" }} aria-label="recipe">
                                                <img src={avatar} alt="Avatar" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
                                        </Avatar>
                                }
                                title={
                                        <Typography typography={typography.title}>
                                                {title}
                                        </Typography>
                                }
                                subheader={
                                        <Typography variant="body2" color="white">
                                                {createdAt}
                                        </Typography>
                                }
                        />

                        <CardContent>
                                <Typography typography={typography.body2} >
                                        {description}
                                </Typography>
                        </CardContent>
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
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                        <Typography paragraph>Description:</Typography>
                                        <Typography color="white">
                                                {description}
                                        </Typography>
                                </CardContent>
                        </Collapse>
                </Card>
        );
}
