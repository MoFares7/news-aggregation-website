import React, { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link, useLocation } from "react-router-dom";
import borders from './../../assets/theme/base/borders';
import colors from "../../assets/theme/base/colors";
import MDTypography from "../../items/MDTypography";
import { CastForEducationOutlined, CircleTwoTone, ComputerOutlined, LogoutOutlined, NewspaperOutlined } from "@mui/icons-material";

const Sidebar = ({ collapseSidebar }) => {
        const location = useLocation();
        const [hoveredItem, setHoveredItem] = useState(null);
        const [selectedTab, setSelectedTab] = useState("");

        const handleItemClick = (tab) => {
                collapseSidebar();
                setSelectedTab(tab);
        };

        const handleMouseEnter = (item) => {
                setHoveredItem(item);
        };

        const handleMouseLeave = () => {
                setHoveredItem(null);
        };

        const isTabSelected = (tab) => tab === selectedTab || location.pathname === tab;

        return (
                <ProSidebar
                        breakPoint="sm"
                        transitionDuration={800}
                        backgroundColor={colors.secondary}
                        rtl={false}
                        style={{
                                position: 'fixed',
                                top: '0',
                                bottom: '0',
                                height: "calc(100vh - 20px)",
                                borderRadius: borders.borderRadius.xxl,
                                marginTop: "10px",
                                marginBottom: "10px",
                               
                        }}
                >
                        <Menu>
                                <MenuItem
                                        icon={<MenuOutlinedIcon />}
                                        onClick={() => handleItemClick("Test")}
                                        style={{
                                                textAlign: "center",
                                                backgroundColor: colors.transparent.main,
                                        }}
                                >
                                        <MDTypography
                                                component={Link}
                                                to="/"
                                                color="#ffff00"
                                                style={{
                                                        textDecoration: "none",
                                                        display: "block",
                                                        padding: "10px",
                                                }}
                                        >
                                                News App
                                        </MDTypography>
                                </MenuItem>

                                <MenuItem
                                        icon={<HomeOutlinedIcon />}
                                        style={{
                                                borderRadius: borders.borderRadius.md,
                                                backgroundColor: isTabSelected("/") || hoveredItem === "/" ? colors.error.focus : colors.transparent.main,
                                        }}
                                        onMouseEnter={() => handleMouseEnter("/")}
                                        onMouseLeave={handleMouseLeave}
                                >
                                        <Link
                                                to="/"
                                                style={{
                                                        textDecoration: "none",
                                                        color: colors.white.main,
                                                        display: "block",
                                                        padding: "10px",
                                                }}
                                        >
                                                Home
                                        </Link>
                                </MenuItem>

                                <MenuItem
                                        icon={<ComputerOutlined />}
                                        style={{
                                                borderRadius: borders.borderRadius.md,
                                                backgroundColor: isTabSelected("/elec-news") || hoveredItem === "/elec-news" ? colors.error.focus : colors.transparent.main,
                                        }}
                                        onMouseEnter={() => handleMouseEnter("/elec-news")}
                                        onMouseLeave={handleMouseLeave}
                                >
                                        <Link
                                                to="/elec-news"
                                                style={{
                                                        textDecoration: "none",
                                                        color: colors.white.main,
                                                        display: "block",
                                                        padding: "10px",
                                                }}
                                        >
                                                Technology News
                                        </Link>
                                </MenuItem>

                                <MenuItem
                                        icon={<CastForEducationOutlined />}
                                        style={{
                                                borderRadius: borders.borderRadius.md,
                                                backgroundColor: isTabSelected("/edu-news") || hoveredItem === "/edu-news" ? colors.error.focus : colors.transparent.main,
                                        }}
                                        onMouseEnter={() => handleMouseEnter("/edu-news")}
                                        onMouseLeave={handleMouseLeave}
                                >
                                        <Link
                                                to="/edu-news"
                                                style={{
                                                        textDecoration: "none",
                                                        color: colors.white.main,
                                                        display: "block",
                                                        padding: "10px",
                                                }}
                                        >
                                                Education News
                                        </Link>
                                </MenuItem>

                                <MenuItem
                                        icon={<NewspaperOutlined />}
                                        style={{
                                                borderRadius: borders.borderRadius.md,
                                                backgroundColor: isTabSelected("/BBC-news") || hoveredItem === "/BBC-news" ? colors.error.focus : colors.transparent.main,
                                        }}
                                        onMouseEnter={() => handleMouseEnter("/BBC-news")}
                                        onMouseLeave={handleMouseLeave}
                                >
                                        <Link
                                                to="/BBC-news"
                                                style={{
                                                        textDecoration: "none",
                                                        color: colors.white.main,
                                                        display: "block",
                                                        padding: "10px",
                                                }}
                                        >
                                                BBC News
                                        </Link>
                                </MenuItem>

                                <MenuItem
                                        icon={<CircleTwoTone />}
                                        style={{
                                                borderRadius: borders.borderRadius.md,
                                                backgroundColor: isTabSelected("/newyork-news") || hoveredItem === "/newyork-news" ? colors.error.focus : colors.transparent.main,
                                        }}
                                        onMouseEnter={() => handleMouseEnter("/newyork-news")}
                                        onMouseLeave={handleMouseLeave}
                                >
                                        <Link
                                                to="/newyork-news"
                                                style={{
                                                        textDecoration: "none",
                                                        color: colors.white.main,
                                                        display: "block",
                                                        padding: "10px",
                                                }}
                                        >
                                                Newyork News
                                        </Link>
                                </MenuItem>

                                <MenuItem
                                        icon={<LogoutOutlined />}
                                        style={{
                                                borderRadius: borders.borderRadius.md,
                                                backgroundColor: isTabSelected("/logout") || hoveredItem === "/logout" ? colors.error.focus : colors.transparent.main,
                                        }}
                                        onMouseEnter={() => handleMouseEnter("/logout")}
                                        onMouseLeave={handleMouseLeave}
                                >
                                        <Link
                                                to="/login"
                                                style={{
                                                        textDecoration: "none",
                                                        color: colors.white.main,
                                                        display: "block",
                                                        padding: "10px",
                                                }}
                                        >
                                                Logout
                                        </Link>
                                </MenuItem>
                        </Menu>
                </ProSidebar>
        );
};

export default Sidebar;
