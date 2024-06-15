import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";

import DisableDefaultDrag from "../DisableDefaultDrag";
import logoIcon from "../assets/logoIcon.png?as=webp";
import logoText from "../assets/logoText.png?as=webp";

export default function Navbar() {
  const dragRef = DisableDefaultDrag<HTMLDivElement>();

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
      icon: <ExpandMoreIcon />,
      text: "Outdoor",
    },
    {
      icon: <ExpandMoreIcon />,
      text: "Living",
    },
    {
      icon: <ExpandMoreIcon />,
      text: "Dining",
    },
    {
      icon: <ExpandMoreIcon />,
      text: "Bedroom",
    },
    {
      icon: <ExpandMoreIcon />,
      text: "Office",
    },
    {
      icon: <ExpandMoreIcon />,
      text: "Bathroom",
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
    <Box ref={dragRef} sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ boxShadow: "none" }}>
        <Toolbar sx={{ backgroundColor: "white", color: "#3E4143", height: "90px" }}>
          {/* logo */}
          <Box>
            <motion.img
              animate={{ opacity: 1, scale: 1 }}
              drag
              dragConstraints={{ bottom: 0, left: 0, right: 0, top: 0 }}
              dragElastic={0.015}
              initial={{ opacity: 0, scale: 0.4 }}
              src={logoIcon}
              style={{ marginRight: "20px", width: "60px" }}
              transition={{
                duration: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  damping: 5,
                  restDelta: 0.001,
                  stiffness: 100,
                  type: "spring",
                },
              }}
            />
            <motion.img src={logoText} style={{ width: "190px" }} />
          </Box>

          {/* list / links */}
          <Box sx={{ display: { xl: "flex", xs: "none" }, m: "0 auto", width: "50%" }}>
            <List component={Stack} direction="row">
              {menuItems.map((item) => (
                <ListItem
                  key={item.text}
                  sx={{
                    "&:hover": {
                      "& .MuiListItemIcon-root": {
                        color: "inherit",
                      },
                      color: "darkcyan",
                    },
                    cursor: "pointer",
                    transition: "color 200ms",
                  }}
                >
                  <ListItemText primary={item.text} primaryTypographyProps={{ sx: { fontFamily: '"Lato", sans-serif' } }} />
                  <ListItemIcon>{item.icon}</ListItemIcon>
                </ListItem>
              ))}
            </List>
          </Box>

          {/* icons */}
          <Box sx={{ display: { md: "flex", xs: "none" }, float: "right" }}>
            <Box>
              <IconButton aria-label="search" color="inherit" disableRipple size="large">
                <SearchIcon
                  sx={{
                    "&:hover": {
                      color: "darkcyan",
                    },
                    fontSize: "30px",
                    m: "0 14px",
                    transition: "color 200ms",
                  }}
                />
                <Box
                  component="span"
                  sx={{
                    "&:hover": {
                      color: "darkcyan",
                    },
                    fontSize: "16px",
                    transition: "color 200ms",
                  }}
                >
                  Search
                </Box>
              </IconButton>
            </Box>
            <IconButton aria-label="shopping badge" color="inherit" disableRipple>
              <ShoppingBagIcon
                sx={{
                  "&:hover": {
                    color: "darkcyan",
                  },
                  fontSize: "30px",
                  transition: "color 200ms",
                }}
              />
            </IconButton>
            <IconButton
              aria-controls={menuId}
              aria-haspopup="true"
              aria-label="account of current user"
              color="inherit"
              disableRipple
              edge="end"
              onClick={handleProfileMenuOpen}
              size="large"
            >
              <PersonIcon
                sx={{
                  "&:hover": {
                    color: "darkcyan",
                  },
                  fontSize: "30px",
                  transition: "color 200ms",
                }}
              />
            </IconButton>
          </Box>
          <Box sx={{ display: { md: "none", xs: "flex" } }}>
            <IconButton
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              aria-label="show more"
              color="inherit"
              disableRipple
              onClick={handleMobileMenuOpen}
              size="large"
            >
              <MoreIcon
                sx={{
                  "&:hover": {
                    color: "darkcyan",
                  },
                  transition: "color 200ms",
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
