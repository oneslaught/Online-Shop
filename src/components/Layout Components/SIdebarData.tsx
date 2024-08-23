import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import ChairAltOutlinedIcon from "@mui/icons-material/ChairAltOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import DeckOutlinedIcon from "@mui/icons-material/DeckOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";
import TableRestaurantOutlinedIcon from "@mui/icons-material/TableRestaurantOutlined";
import React from "react";

export const SidebarData = [
  {
    icon: <HomeOutlinedIcon />,
    name: "nav_text",
    path: "/",
    title: "Home",
  },
  {
    icon: <AutoAwesomeOutlinedIcon />,
    name: "nav_text",
    path: "/about-us",
    title: "New",
  },
  {
    icon: <LoyaltyOutlinedIcon />,
    name: "nav_text",
    path: "/",
    title: "Sale",
  },
  {
    icon: <DeckOutlinedIcon />,
    name: "nav_text",
    path: "/",
    subRoutes: [
      {
        icon: <DeckOutlinedIcon />,
        name: "nav_text",
        path: "/",
        title: "Dining Chairs",
      },
      {
        icon: <DeckOutlinedIcon />,
        name: "nav_text",
        path: "/",
        title: "Dining Tables",
      },
      {
        icon: <DeckOutlinedIcon />,
        name: "nav_text",
        path: "/",
        title: "Coffee Tables",
      },
    ],
    title: "Outdoor",
  },
  {
    icon: <ChairOutlinedIcon />,
    name: "nav_text",
    path: "/",
    subRoutes: [
      {
        icon: <DeckOutlinedIcon />,
        name: "nav_text",
        path: "/",
        title: "Sofas & Sectionals",
      },
      {
        icon: <DeckOutlinedIcon />,
        name: "nav_text",
        path: "/",
        title: "Shelving & Bookcases",
      },
      {
        icon: <DeckOutlinedIcon />,
        name: "nav_text",
        path: "/",
        title: "Accent Chairs",
      },
    ],
    title: "Living",
  },
  {
    icon: <TableRestaurantOutlinedIcon />,
    name: "nav_text",
    path: "/",
    subRoutes: [
      {
        icon: <DeckOutlinedIcon />,
        name: "nav_text",
        path: "/",
        title: "Dining Tables",
      },
      {
        icon: <DeckOutlinedIcon />,
        name: "nav_text",
        path: "/",
        title: "Dining Chairs",
      },
      {
        icon: <DeckOutlinedIcon />,
        name: "nav_text",
        path: "/",
        title: "Trays",
      },
    ],
    title: "Dining",
  },
  {
    icon: <KingBedOutlinedIcon />,
    name: "nav_text",
    path: "/",
    subRoutes: [
      {
        icon: <DeckOutlinedIcon />,
        name: "nav_text",
        path: "/",
        title: "Beds",
      },
      {
        icon: <DeckOutlinedIcon />,
        name: "nav_text",
        path: "/",
        title: "Mattrasses",
      },
      {
        icon: <DeckOutlinedIcon />,
        name: "nav_text",
        path: "/",
        title: "Nightstands",
      },
    ],
    title: "Bedroom",
  },
  {
    icon: <ChairAltOutlinedIcon />,
    name: "nav_text",
    path: "/",
    subRoutes: [
      {
        icon: <DeckOutlinedIcon />,
        name: "nav_text",
        path: "/",
        title: "Chairs",
      },
      {
        icon: <DeckOutlinedIcon />,
        name: "nav_text",
        path: "/",
        title: "Desks",
      },
      {
        icon: <DeckOutlinedIcon />,
        name: "nav_text",
        path: "/",
        title: "Wall Shelves",
      },
    ],
    title: "Office",
  },
  {
    icon: <BathtubOutlinedIcon />,
    name: "nav_text",
    path: "/",
    subRoutes: [
      {
        icon: <DeckOutlinedIcon />,
        name: "nav_text",
        path: "/",
        title: "Bathtubs",
      },
      {
        icon: <DeckOutlinedIcon />,
        name: "nav_text",
        path: "/",
        title: "Rugs",
      },
    ],
    title: "Bathroom",
  },
  {
    icon: <LoginOutlinedIcon />,
    name: "nav_text",
    path: "/",
    title: "Login",
  },
];

export default SidebarData;
