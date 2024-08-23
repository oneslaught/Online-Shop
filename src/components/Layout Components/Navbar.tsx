import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logoIcon from "../../assets/Reusable Images/logo_icon.png?as=webp";
import logoText from "../../assets/Reusable Images/logo_text.png?as=webp";
import * as styles from "../../styles/navbar.module.css";
import DisableDefaultDrag from "../../utils/DisableDefaultDrag";
import SidebarData from "./SIdebarData";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomePageClick = () => {
    if (location.pathname === "/") {
      window.scrollTo(0, 0);
    } else {
      navigate("/");
    }
  };

  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const toggleSubRoutes = (index: number): void => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const [sidebar, setSidebar] = useState(false);
  const changeSidebarVisibility = () => {
    setSidebar(!sidebar);
  };

  const dragRef = DisableDefaultDrag<HTMLDivElement>();

  const menuItems = [
    { text: "Outdoor" },
    { text: "Living" },
    { text: "Dining" },
    { text: "Bedroom" },
    { text: "Office" },
    { text: "Bathroom" },
  ];

  return (
    <Box className={styles.navbar_container} ref={dragRef}>
      <AppBar className={styles.navbar}>
        <Toolbar className={styles.toolbar}>
          {/* sidebar */}
          <IconButton aria-haspopup="true" aria-label="show more" color="inherit" disableRipple onClick={changeSidebarVisibility}>
            <MenuRoundedIcon className={`${styles.icon} ${styles.menu_icon}`} />
          </IconButton>
          {sidebar && <div className={styles.overlay} onClick={changeSidebarVisibility}></div>}
          <nav className={sidebar ? `${styles.nav_menu} ${styles.active}` : styles.nav_menu}>
            <ul className={styles.nav_menu_items}>
              <div className={styles.close_icon_container}>
                <img aria-label="sidebar logo text" className={styles.logo_text} onClick={handleHomePageClick} src={logoText} />
                <CloseIcon className={styles.close_icon} onClick={changeSidebarVisibility} />
              </div>
              {SidebarData.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <React.Fragment key={index}>
                    <li
                      className={styles[item.name]}
                      onClick={() => {
                        toggleSubRoutes(index);
                        if (!item.subRoutes || item.subRoutes.length === 0) {
                          changeSidebarVisibility();
                        }
                      }}
                    >
                      <Link to={item.path}>
                        {item.icon}
                        <span className={styles.title}>{item.title}</span>
                        {item.subRoutes && item.subRoutes.length > 0 && (
                          <motion.div
                            animate={{ rotate: isActive ? 180 : 0 }}
                            className={styles.expand_container}
                            initial={{ rotate: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ExpandMoreRoundedIcon />
                          </motion.div>
                        )}
                      </Link>
                    </li>
                    {isActive && item.subRoutes && (
                      <ul className={styles.sub_menu}>
                        {item.subRoutes.map((subItem, subIndex) => (
                          <motion.li
                            className={styles[subItem.name]}
                            initial={{ x: 0 }}
                            key={subIndex}
                            whileHover={{ transition: { duration: 0.2 }, x: 8 }}
                          >
                            <Link onClick={changeSidebarVisibility} to={subItem.path}>
                              <motion.span className={styles.sub_title} whileHover={{ color: "rgb(5, 134, 134)" }}>
                                {subItem.title}
                              </motion.span>
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </React.Fragment>
                );
              })}
            </ul>
            <div className={styles.login_container} onClick={changeSidebarVisibility}>
              <Link to="#">
                <LoginOutlinedIcon className={styles.login_icon} />
                <span className={styles.title}>Login</span>
              </Link>
            </div>
          </nav>

          {/* logo */}
          <Box className={styles.logo_container}>
            <motion.img
              animate={{ opacity: 1, scale: 1 }}
              className={styles.logo_icon}
              drag
              dragConstraints={{ bottom: 0, left: 0, right: 0, top: 0 }}
              dragElastic={0.015}
              initial={{ opacity: 0, scale: 0.4 }}
              src={logoIcon}
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
            <motion.img className={styles.logo_text} onClick={handleHomePageClick} src={logoText} />
          </Box>

          {/* list / links */}
          <Box className={styles.list_container}>
            <List component={Stack} direction="row">
              {menuItems.map((item) => (
                <ListItem className={styles.list_item} key={item.text}>
                  <ListItemText className={styles.list_text} disableTypography primary={item.text} />
                  <ListItemIcon className={styles.list_icon}>
                    <ExpandMoreIcon />
                  </ListItemIcon>
                </ListItem>
              ))}
            </List>
          </Box>

          {/* icons */}
          <Box className={styles.icons_container}>
            <IconButton aria-label="search" className={styles.icon} color="inherit" disableRipple size="large">
              <SearchIcon className={`${styles.search_icon}`} />
              <Box className={`${styles.search_label}`} component="span">
                Search
              </Box>
            </IconButton>
            <IconButton aria-label="shopping badge" color="inherit" disableRipple>
              <ShoppingBagIcon className={`${styles.icon} ${styles.cart_icon}`} />
            </IconButton>
            <IconButton aria-haspopup="true" aria-label="account of current user" color="inherit" disableRipple edge="end">
              <PersonIcon className={`${styles.icon} ${styles.profile_icon}`} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
