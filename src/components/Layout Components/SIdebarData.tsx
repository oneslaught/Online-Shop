import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import BedroomParentOutlinedIcon from "@mui/icons-material/BedroomParentOutlined";
import DiningOutlinedIcon from "@mui/icons-material/DiningOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import LivingOutlinedIcon from "@mui/icons-material/LivingOutlined";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import React from "react";

export const SidebarData = [
  {
    icon: <HomeOutlinedIcon />,
    name: "nav_link",
    path: "/",
    title: "Home",
  },
  {
    icon: <AutoAwesomeOutlinedIcon />,
    name: "nav_link",
    path: "/",
    title: "New",
  },
  {
    icon: <LoyaltyOutlinedIcon />,
    name: "nav_link",
    path: "/",
    title: "Sale",
  },
  {
    icon: <YardOutlinedIcon />,
    name: "nav_link",
    path: "#",
    subRoutes: [
      {
        name: "sub_link",
        path: "/",
        title: "Dining Chairs",
      },
      {
        name: "sub_link",
        path: "/",
        title: "Dining Tables",
      },
      {
        name: "sub_link",
        path: "/",
        title: "Coffee Tables",
      },
    ],
    title: "Outdoor",
  },
  {
    icon: <LivingOutlinedIcon />,
    name: "nav_link",
    path: "#",
    subRoutes: [
      {
        name: "sub_link",
        path: "/",
        title: "Sofas & Sectionals",
      },
      {
        name: "sub_link",
        path: "/",
        title: "Shelving & Bookcases",
      },
      {
        name: "sub_link",
        path: "/",
        title: "Accent Chairs",
      },
    ],
    title: "Living",
  },
  {
    icon: <DiningOutlinedIcon />,
    name: "nav_link",
    path: "#",
    subRoutes: [
      {
        name: "sub_link",
        path: "/",
        title: "Dining Tables",
      },
      {
        name: "sub_link",
        path: "/",
        title: "Dining Chairs",
      },
      {
        name: "sub_link",
        path: "/",
        title: "Bar Carts",
      },
    ],
    title: "Dining",
  },
  {
    icon: <BedroomParentOutlinedIcon />,
    name: "nav_link",
    path: "#",
    subRoutes: [
      {
        name: "sub_link",
        path: "/",
        title: "Beds",
      },
      {
        name: "sub_link",
        path: "/",
        title: "Mattrasses",
      },
      {
        name: "sub_link",
        path: "/",
        title: "Nightstands",
      },
    ],
    title: "Bedroom",
  },
  {
    icon: <InsertChartOutlinedIcon />,
    name: "nav_link",
    path: "#",
    subRoutes: [
      {
        name: "sub_link",
        path: "/",
        title: "Chairs",
      },
      {
        name: "sub_link",
        path: "/",
        title: "Desks",
      },
      {
        name: "sub_link",
        path: "/",
        title: "Wall Shelves",
      },
    ],
    title: "Office",
  },
  {
    icon: <BathroomOutlinedIcon />,
    name: "nav_link",
    path: "#",
    subRoutes: [
      {
        name: "sub_link",
        path: "/",
        title: "Bathtubs",
      },
      {
        name: "sub_link",
        path: "/",
        title: "Showers",
      },
      {
        name: "sub_link",
        path: "/",
        title: "Sinks",
      },
    ],
    title: "Bathroom",
  },
];

export default SidebarData;
