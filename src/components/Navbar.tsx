import MoreIcon from "@mui/icons-material/MoreVert";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppBar from "@mui/material/AppBar";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import logoIcon from "../assets/logoIcon.png?as=webp";
import logoText from "../assets/logoText.png?as=webp";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<HTMLElement | null>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuItems = [
    {
      text: "Outdoor",
      icon: <ExpandMoreIcon />,
    },
    {
      text: "Living",
      icon: <ExpandMoreIcon />,
    },
    {
      text: "Dining",
      icon: <ExpandMoreIcon />,
    },
    {
      text: "Bedroom",
      icon: <ExpandMoreIcon />,
    },
    {
      text: "Office",
      icon: <ExpandMoreIcon />,
    },
    {
      text: "Bathroom",
      icon: <ExpandMoreIcon />,
    },
  ];

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "right",
        vertical: "top",
      }}
      id={menuId}
      keepMounted
      onClose={handleMenuClose}
      open={isMenuOpen}
      transformOrigin={{
        horizontal: "right",
        vertical: "top",
      }}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        horizontal: "right",
        vertical: "top",
      }}
      id={mobileMenuId}
      keepMounted
      onClose={handleMobileMenuClose}
      open={isMobileMenuOpen}
      transformOrigin={{
        horizontal: "right",
        vertical: "top",
      }}
    >
      <MenuItem>
        <IconButton aria-label="search" color="inherit" size="large">
          <SearchIcon />
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 17 new notifications" color="inherit" size="large">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          aria-label="account of current user"
          color="inherit"
          size="large"
        >
          <PersonIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ boxShadow: "none" }}>
        <Toolbar sx={{ height: "90px", backgroundColor: "white", color: "darkcyan" }}>
          {/* logo */}
          <Box>
            <motion.img
              src={logoIcon}
              style={{ width: "60px", marginRight: "20px" }}
              drag
              dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
              dragElastic={0.015}
            />
            <motion.img src={logoText} style={{ width: "190px" }} />
          </Box>

          {/* list / links */}
          <Box sx={{ m: "0 auto", width: "50%", display: { xs: "none", xl: "flex" } }}>
            <List component={Stack} direction="row">
              {menuItems.map((item) => (
                <ListItem key={item.text}>
                  <ListItemText primary={item.text}></ListItemText>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                </ListItem>
              ))}
            </List>
          </Box>

          {/* icons */}
          <Box sx={{ display: { md: "flex", xs: "none" }, float: "right" }}>
            <IconButton aria-label="search" color="inherit" size="large" disableRipple>
              <SearchIcon sx={{ fontSize: "30px" }} />
            </IconButton>
            <IconButton aria-label="shopping badge" color="inherit" disableRipple>
              <ShoppingBagIcon sx={{ fontSize: "30px" }} />
            </IconButton>
            <IconButton
              aria-controls={menuId}
              aria-haspopup="true"
              aria-label="account of current user"
              color="inherit"
              edge="end"
              onClick={handleProfileMenuOpen}
              size="large"
              disableRipple
            >
              <PersonIcon sx={{ fontSize: "30px" }} />
            </IconButton>
          </Box>
          <Box sx={{ display: { md: "none", xs: "flex" } }}>
            <IconButton
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              aria-label="show more"
              color="inherit"
              onClick={handleMobileMenuOpen}
              size="large"
              disableRipple
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
