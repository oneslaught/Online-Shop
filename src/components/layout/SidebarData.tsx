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

import bathroomOne from "../../assets/other_img/sidebar_data/bathroom_one.jpg?as=webp";
import bathroomTwo from "../../assets/other_img/sidebar_data/bathroom_two.jpg?as=webp";
import bedroomOne from "../../assets/other_img/sidebar_data/bedroom_one.jpg?as=webp";
import bedroomTwo from "../../assets/other_img/sidebar_data/bedroom_two.jpg?as=webp";
import diningOne from "../../assets/other_img/sidebar_data/dining_one.jpg?as=webp";
import diningTwo from "../../assets/other_img/sidebar_data/dining_two.jpg?as=webp";
import livingOne from "../../assets/other_img/sidebar_data/living_one.jpg?as=webp";
import livingTwo from "../../assets/other_img/sidebar_data/living_two.jpg?as=webp";
import officeOne from "../../assets/other_img/sidebar_data/office_one.jpg?as=webp";
import officeTwo from "../../assets/other_img/sidebar_data/office_two.jpg?as=webp";
import outdoorOne from "../../assets/other_img/sidebar_data/outdoor_one.jpg?as=webp";
import outdoorTwo from "../../assets/other_img/sidebar_data/outdoor_two.jpg?as=webp";

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
    images: [outdoorOne, outdoorTwo],
    name: "nav_link",
    path: "#",
    subRoutes: [
      { name: "sub_link", path: "/", title: "Dining Tables" },
      { name: "sub_link", path: "/", title: "Coffee Tables" },
      { name: "sub_link", path: "/", title: "Patio Furniture" },
      { name: "sub_link", path: "/", title: "Garden Decor" },
      { name: "sub_link", path: "/", title: "Grills & Outdoor Cooking" },
      { name: "sub_link", path: "/", title: "All Outdoor" },
    ],
    title: "Outdoor",
  },
  {
    icon: <LivingOutlinedIcon />,
    images: [livingOne, livingTwo],
    name: "nav_link",
    path: "#",
    subRoutes: [
      { name: "sub_link", path: "/", title: "Sofas & Sectionals" },
      { name: "sub_link", path: "/", title: "Shelving & Bookcases" },
      { name: "sub_link", path: "/", title: "Accent Chairs" },
      { name: "sub_link", path: "/", title: "TV Stands" },
      { name: "sub_link", path: "/", title: "All Living" },
    ],
    title: "Living",
  },
  {
    icon: <DiningOutlinedIcon />,
    images: [diningOne, diningTwo],
    name: "nav_link",
    path: "#",
    subRoutes: [
      { name: "sub_link", path: "/", title: "Dining Tables" },
      { name: "sub_link", path: "/", title: "Dining Chairs" },
      { name: "sub_link", path: "/", title: "Bar Carts" },
      { name: "sub_link", path: "/", title: "Buffets & Sideboards" },
      { name: "sub_link", path: "/", title: "Dining Sets" },
      { name: "sub_link", path: "/", title: "All Dining" },
    ],
    title: "Dining",
  },
  {
    icon: <BedroomParentOutlinedIcon />,
    images: [bedroomOne, bedroomTwo],
    name: "nav_link",
    path: "#",
    subRoutes: [
      { name: "sub_link", path: "/", title: "Beds & Bedframes" },
      { name: "sub_link", path: "/", title: "Mattrasses" },
      { name: "sub_link", path: "/", title: "Nightstands & Bedside Tables" },
      { name: "sub_link", path: "/", title: "Dressers & Chest of Drawers" },
      { name: "sub_link", path: "/", title: "Bedroom Benches" },
      { name: "sub_link", path: "/", title: "All Bedroom" },
    ],
    title: "Bedroom",
  },
  {
    icon: <InsertChartOutlinedIcon />,
    images: [officeOne, officeTwo],
    name: "nav_link",
    path: "#",
    subRoutes: [
      { name: "sub_link", path: "/", title: "Chairs" },
      { name: "sub_link", path: "/", title: "Desks" },
      { name: "sub_link", path: "/", title: "Wall Shelves" },
      { name: "sub_link", path: "/", title: "Bookcases & Shelving" },
      { name: "sub_link", path: "/", title: "Ottomans & Benches" },
      { name: "sub_link", path: "/", title: "All Office" },
    ],
    title: "Office",
  },
  {
    icon: <BathroomOutlinedIcon />,
    images: [bathroomOne, bathroomTwo],
    name: "nav_link",
    path: "#",
    subRoutes: [
      { name: "sub_link", path: "/", title: "Bathtubs" },
      { name: "sub_link", path: "/", title: "Showers" },
      { name: "sub_link", path: "/", title: "Sinks" },
      { name: "sub_link", path: "/", title: "Bath Rugs & Mats" },
      { name: "sub_link", path: "/", title: "Bathroom Storage" },
      { name: "sub_link", path: "/", title: "All Bathroom" },
    ],
    title: "Bathroom",
  },
];

export default SidebarData;
