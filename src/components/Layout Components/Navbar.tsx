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
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import { motion } from "framer-motion";
import React, { MouseEvent, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import dinningSet from "../../assets/Home Page Images/on sale img/dining_table_set.jpg?as=webp";
import logoIcon from "../../assets/Reusable Images/logo_icon.png?as=webp";
import logoText from "../../assets/Reusable Images/logo_text.png?as=webp";
import * as styles from "../../styles/layout styles/navbar.module.css";
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

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<null | number>(null);

  const handleMouseEnter = (event: MouseEvent<HTMLElement>, index: number): void => {
    setAnchorEl(event.currentTarget);
    setOpenSubmenu(index);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setOpenSubmenu(null);
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
    {
      submenu: [
        { imgSrc: dinningSet, text: "Patio Furniture" },
        { imgSrc: dinningSet, text: "Outdoor Lighting" },
        { imgSrc: dinningSet, text: "Garden Decor" },
        { text: "Grills & Outdoor Cooking" },
        { text: "Outdoor Rugs" },
      ],
      text: "Outdoor",
    },
    {
      submenu: [
        { imgSrc: dinningSet, text: "Sofas" },
        { imgSrc: dinningSet, text: "Coffee Tables" },
        { imgSrc: dinningSet, text: "TV Stands" },
        { text: "Accent Chairs" },
        { text: "Bookcases" },
      ],
      text: "Living",
    },
    {
      submenu: [
        { imgSrc: dinningSet, text: "Dining Tables" },
        { imgSrc: dinningSet, text: "Dining Chairs" },
        { imgSrc: dinningSet, text: "Bar Stools" },
        { text: "Buffets & Sideboards" },
        { text: "Dining Sets" },
      ],
      text: "Dining",
    },
    {
      submenu: [
        { imgSrc: dinningSet, text: "All Bedroom" },
        { imgSrc: dinningSet, text: "Beds & Bedframes" },
        { imgSrc: dinningSet, text: "Nightstands & Bedside Tables" },
        { text: "Dressers & Chest of Drawers" },
        { text: "Bedroom Benches" },
        { text: "Bedding" },
        { text: "Bedroom Sets" },
        { text: "Small Bedroom Furniture" },
        { text: "Bedroom Inspiration" },
      ],
      text: "Bedroom",
    },
    {
      submenu: [
        { imgSrc: dinningSet, text: "Desks" },
        { imgSrc: dinningSet, text: "Office Chairs" },
        { imgSrc: dinningSet, text: "Bookcases" },
        { text: "File Cabinets" },
        { text: "Office Decor" },
      ],
      text: "Office",
    },
    {
      submenu: [
        { imgSrc: dinningSet, text: "Bathroom Vanities" },
        { imgSrc: dinningSet, text: "Mirrors" },
        { imgSrc: dinningSet, text: "Bathroom Storage" },
        { text: "Shower Curtains" },
        { text: "Bath Rugs & Mats" },
      ],
      text: "Bathroom",
    },
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
                      <Link className={`${item.title === "Sale" ? styles.sale_link : ""}`} to={item.path}>
                        {item.title === "Sale" ? <span className={styles.sale}>{item.icon}</span> : item.icon}
                        <span className={`${styles.title} ${item.title === "Sale" ? styles.sale : ""}`}>{item.title}</span>
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
              {menuItems.map((item, index) => (
                <ListItem
                  aria-haspopup="true"
                  className={styles.list_item}
                  key={item.text}
                  onMouseEnter={(e) => {
                    handleMouseEnter(e, index);
                  }}
                  onMouseLeave={handleMouseLeave}
                >
                  <ListItemText className={styles.list_text} disableTypography primary={item.text} />
                  {item.submenu.length > 0 && <ExpandMoreIcon className={styles.list_icon} />}
                  {item.submenu.length > 0 && (
                    <Menu
                      MenuListProps={{
                        onMouseEnter: () => {
                          setOpenSubmenu(index);
                        },
                        onMouseLeave: handleMouseLeave,
                      }}
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        horizontal: "left",
                        vertical: "bottom",
                      }}
                      onClose={handleMouseLeave}
                      open={openSubmenu === index}
                      sx={{
                        maxHeight: "260px",
                        width: "100vw",
                      }}
                      transformOrigin={{
                        horizontal: "left",
                        vertical: "top",
                      }}
                    >
                      <Box className={styles.dropdown_container}>
                        {item.submenu.map((subItem) => (
                          <MenuItem key={subItem.text} onClick={handleMouseLeave}>
                            <Box alignItems="center" display="flex">
                              <ListItemText>{subItem.text}</ListItemText>
                              {subItem.imgSrc && <img alt={subItem.text} className={styles.dropdown_image} src={subItem.imgSrc} />}
                            </Box>
                          </MenuItem>
                        ))}
                      </Box>
                    </Menu>
                  )}
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
