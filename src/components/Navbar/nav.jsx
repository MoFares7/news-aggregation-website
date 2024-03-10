import React from 'react';
import {
        Box,
        AppBar,
        Toolbar,
        Typography,
        IconButton,
        Drawer,
        List,
        ListItem,
        ListItemText,
        useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import colors from '../../assets/theme/base/colors';
import MDTypography from '../../items/MDTypography';
import typography from '../../assets/theme/base/typography';

const Navbar = () => {
        const [drawerOpen, setDrawerOpen] = React.useState(false);
        const isMobile = useMediaQuery('(max-width:600px)');
        const location = useLocation();

        const toggleDrawer = (open) => (event) => {
                if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                        return;
                }
                setDrawerOpen(open);
        };

        return (
                <div>
                        <AppBar position="static" sx={{ backgroundColor: colors.primary.main }}>
                                <Toolbar>
                                        {isMobile ? (
                                                <IconButton
                                                        size="large"
                                                        edge="start"
                                                        color="inherit"
                                                        aria-label="menu"
                                                        onClick={toggleDrawer(true)}
                                                >
                                                        <MenuIcon />
                                                </IconButton>
                                        ) : (
                                                <>
                                                        <Typography typography={typography.d6} sx={{ flexGrow: 1 }}>
                                                                New Aggregation Website
                                                        </Typography>
                                                       
                                                        <Box
                                                                sx={{
                                                                        borderBottom: location.pathname === '/' ? '2px solid blue' : 'none',
                                                                        marginRight: '16px',
                                                                        paddingBottom: '2px',
                                                                }}
                                                        >
                                                                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                                        <MDTypography typography={typography.body2}>Home</MDTypography>
                                                                </Link>
                                                        </Box>
                                                        <Box
                                                                sx={{
                                                                        borderBottom: location.pathname === '/elec-news' ? '2px solid blue' : 'none',
                                                                        marginRight: '16px',
                                                                        paddingBottom: '2px',
                                                                }}
                                                        >
                                                                <Link to="/elec-news" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                                        <MDTypography typography={typography.body2}>Technology</MDTypography>
                                                                </Link>
                                                        </Box>
                                                        <Box
                                                                sx={{
                                                                        borderBottom: location.pathname === '/edu-news' ? '2px solid blue' : 'none',
                                                                        marginRight: '16px',
                                                                        paddingBottom: '2px',
                                                                }}
                                                        >
                                                                <Link to="/edu-news" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                                        <MDTypography typography={typography.body2}>Education</MDTypography>
                                                                </Link>
                                                        </Box>

                                                </>
                                        )}
                                </Toolbar>
                        </AppBar>

                        {isMobile && (
                                <Drawer sx={{ backgroundColor: colors.primary.main }} anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                                        <List>
                                                <ListItem button component={Link} to="/" selected={location.pathname === '/'}>
                                                        <ListItemText primary="Home" />
                                                </ListItem>
                                                <ListItem button component={Link} to="/elec-news" selected={location.pathname === '/elec-news'}>
                                                        <ListItemText primary="Technology " />
                                                </ListItem>
                                                <ListItem button component={Link} to='/edu-news' selected={location.pathname === '/edu-news'}>
                                                        <ListItemText primary="Education " />
                                                </ListItem>
                                              

                                        </List>
                                </Drawer>
                        )}
                </div>
        );
};

export default Navbar;
