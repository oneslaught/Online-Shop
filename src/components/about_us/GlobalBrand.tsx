import React from "react";
import { Link } from "react-router-dom";

import * as styles from "../../styles/about_us_styles/global_brand.module.css";

export default function GlobalBrand() {
  return (
    <div className={styles.container}>
      <svg className={styles.svg_globe} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <g data-name="13-Globe">
          <circle cx="45" cy="9" r="2" style={{ fill: "#96272e" }} />
          <path d="M34 51v4h-4v-4.09c.66.06 1.33.09 2 .09z" style={{ fill: "#8394b2" }} />
          <path
            d="M30 50.91A24.995 24.995 0 0 1 32 1h3v4h-3a21 21 0 0 0 0 42h3v4h-3c-.67 0-1.34-.03-2-.09zM46 59h2a2.006 2.006 0 0 1 2 2v2H14v-2a2.006 2.006 0 0 1 2-2h30z"
            style={{ fill: "#c1cfe8" }}
          />
          <path d="M46 55v4H18v-4h28z" style={{ fill: "#4989f4" }} />
          <path
            d="M28 31a2.006 2.006 0 0 1 2 2 2.015 2.015 0 0 1-2 2h-.5a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 1-1.5 1.5H20l-.02.02A17.072 17.072 0 0 1 15.74 31h5.21a2.907 2.907 0 0 1 .85 1.93 1.208 1.208 0 0 0 2.4 0 2.907 2.907 0 0 1 .85-1.93zM30 17a2.006 2.006 0 0 1 2 2 2.015 2.015 0 0 1-2 2H15.74a17.072 17.072 0 0 1 4.24-7.02L20 14h6.5a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 0 1.5 1.5zM48.52 22H40a2.006 2.006 0 0 1-2-2 2.015 2.015 0 0 1 2-2h3.37A1.8 1.8 0 0 0 45 19a1.772 1.772 0 0 0 1.77-1.42A16.514 16.514 0 0 1 48.52 22zM40 26h9a16.927 16.927 0 0 1-4.98 12.02L44 38h-9a2.015 2.015 0 0 1-2-2 2.006 2.006 0 0 1 2-2h6a2.015 2.015 0 0 0 2-2 2.006 2.006 0 0 0-2-2h-1a2.015 2.015 0 0 1-2-2 2.006 2.006 0 0 1 2-2z"
            style={{ fill: "#01c25a" }}
          />
          <path
            d="M15.74 21H30a2.015 2.015 0 0 0 2-2 2.006 2.006 0 0 0-2-2h-.5a1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 0-1.5-1.5H20l-.02-.02a17 17 0 0 1 19.41-3.29c1.04 2.53 3.81 3.81 3.81 6.6a1.58 1.58 0 0 0 .17.71H40a2.015 2.015 0 0 0-2 2 2.006 2.006 0 0 0 2 2h8.52a16.472 16.472 0 0 1 .48 4h-9a2.006 2.006 0 0 0-2 2 2.015 2.015 0 0 0 2 2h1a2.006 2.006 0 0 1 2 2 2.015 2.015 0 0 1-2 2h-6a2.006 2.006 0 0 0-2 2 2.015 2.015 0 0 0 2 2h9l.02.02a17 17 0 0 1-24.04 0L20 38h4.5a1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 1 1.5-1.5h.5a2.015 2.015 0 0 0 2-2 2.006 2.006 0 0 0-2-2h-2.95c.82-.97 1.95-1.84 1.95-3.43A3.8 3.8 0 0 0 23 24a3.8 3.8 0 0 0-4 3.57c0 1.59 1.13 2.46 1.95 3.43h-5.21a17.262 17.262 0 0 1 0-10z"
            style={{ fill: "#4989f4" }}
          />
          <path
            d="M43.37 18a1.58 1.58 0 0 1-.17-.71c0-2.79-2.77-4.07-3.81-6.6A5.1 5.1 0 0 1 39 8.71a6.007 6.007 0 0 1 12 0c0 4-4.2 5.15-4.2 8.58a1.358 1.358 0 0 1-.03.29A1.772 1.772 0 0 1 45 19a1.8 1.8 0 0 1-1.63-1zM47 9a2 2 0 1 0-2 2 2.006 2.006 0 0 0 2-2zM20.95 31c-.82-.97-1.95-1.84-1.95-3.43A3.8 3.8 0 0 1 23 24a3.8 3.8 0 0 1 4 3.57c0 1.59-1.13 2.46-1.95 3.43a2.907 2.907 0 0 0-.85 1.93 1.208 1.208 0 0 1-2.4 0 2.907 2.907 0 0 0-.85-1.93z"
            style={{ fill: "#e63b47" }}
          />
          <path d="M18 55v4h28v-2H23a2 2 0 0 1-2-2h-3z" style={{ fill: "#3f76d4" }} />
          <path
            d="M48 61H18a1 1 0 0 1 0-2h-2a2.006 2.006 0 0 0-2 2v2h36v-2a1.973 1.973 0 0 0-.278-1A1.993 1.993 0 0 1 48 61zM14 42.318a1.994 1.994 0 0 1-1.566-.754 25 25 0 0 1 0-31.129 2 2 0 0 1 3.129 2.492 21 21 0 0 0 0 26.145A2 2 0 0 1 14 42.318z"
            style={{ fill: "#8394b2" }}
          />
          <path d="M32 51c-.67 0-1.34-.03-2-.09V55h1v-2a1 1 0 0 1 1-1h2v-1z" style={{ fill: "#5c6979" }} />
          <path d="M45 6a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 5a2 2 0 1 1 2-2 2.006 2.006 0 0 1-2 2z" style={{ fill: "#b32e37" }} />
          <circle cx="23" cy="27" r="1" style={{ fill: "#96272e" }} />
          <path
            d="M32 43c-.338 0-.667-.031-1-.05v4c.334.015.662.05 1 .05h1v-4.05c-.333.019-.662.05-1 .05zM31 5.05v4c.333-.019.662-.05 1-.05s.667.037 1 .057V5h-1c-.338 0-.666.035-1 .05z"
            style={{ fill: "#5c6979" }}
          />
          <path
            d="M24.5 38a1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 1 1.5-1.5h.5a1.951 1.951 0 0 0 1.243-.449A17.058 17.058 0 0 1 25.051 31a2.907 2.907 0 0 0-.85 1.93 1.208 1.208 0 0 1-2.4 0A2.907 2.907 0 0 0 20.95 31h-5.21a17.072 17.072 0 0 0 4.24 7.02L20 38zM21 20a16.926 16.926 0 0 1 1.11-6H20l-.02-.02A17.072 17.072 0 0 0 15.74 21h5.31c-.019-.333-.05-.662-.05-1zM33.026 36.257A2 2 0 0 0 35 38h9l.02.02a17.074 17.074 0 0 0 2.609-3.392 16.931 16.931 0 0 1-13.6 1.629z"
            style={{ fill: "#019144" }}
          />
          <path
            d="M35 38a2 2 0 0 1-1.974-1.743 16.883 16.883 0 0 1-3.783-1.706A1.951 1.951 0 0 1 28 35h-.5a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 1-1.5 1.5H20l-.02.02a17 17 0 0 0 24.04 0L44 38zM22.11 14a16.775 16.775 0 0 1 1.262-2.629 17.074 17.074 0 0 0-3.392 2.609L20 14zM19 27.57a3.6 3.6 0 0 1 2.557-3.321A17.037 17.037 0 0 1 21.05 21h-5.31a17.262 17.262 0 0 0 0 10h5.21c-.82-.97-1.95-1.84-1.95-3.43z"
            style={{ fill: "#335fab" }}
          />
          <path
            d="M41.37 20A1.8 1.8 0 0 0 43 21a1.772 1.772 0 0 0 1.77-1.42 1.358 1.358 0 0 0 .03-.29c0-.109.016-.21.024-.315A1.782 1.782 0 0 1 43.37 18h-2.389a3.93 3.93 0 0 1 .219 1.29 1.58 1.58 0 0 0 .17.71z"
            style={{ fill: "#019144" }}
          />
          <path
            d="M37.39 12.69c.865 2.1 2.922 3.347 3.591 5.31h2.389a1.58 1.58 0 0 1-.17-.71c0-2.79-2.77-4.07-3.81-6.6a16.5 16.5 0 0 0-2.306-.89 5.4 5.4 0 0 0-.084.91 5.1 5.1 0 0 0 .39 1.98z"
            style={{ fill: "#335fab" }}
          />
          <path
            d="M21.8 32.93a2.907 2.907 0 0 0-.85-1.93h-2.595a11.32 11.32 0 0 0 1.595 2 2.907 2.907 0 0 1 .85 1.93 1.208 1.208 0 0 0 2.4 0 2.345 2.345 0 0 1 .231-1.008A1.3 1.3 0 0 1 23 34a1.143 1.143 0 0 1-1.2-1.07z"
            style={{ fill: "#017336" }}
          />
          <path
            d="M19 27.57a3.093 3.093 0 0 1 .033-.374A3.34 3.34 0 0 0 18 29.57a3.049 3.049 0 0 0 .355 1.43h2.595c-.82-.97-1.95-1.84-1.95-3.43z"
            style={{ fill: "#1f3b6e" }}
          />
        </g>
      </svg>
      <div className={styles.text_container}>
        <h3 className={styles.heading}>Easy to Find</h3>
        <p className={styles.des}>
          <Link to="/">Loxavi</Link> is a global furniture leader committed to making stylish and functional interiors accessible to
          everyone. Today, we are proud to have opened more than 120 branches around the world. Our stores are already successfully
          operating in countries such as Spain, where there are 20 branches, and Germany, where our customers can find 15{" "}
          <Link to="/">Loxavi</Link> stores. We are also growing strongly in the US, with 30 stores nationwide, and in Australia, where we
          recently opened our 10th branch.
        </p>
        <p className={styles.des}>
          <Link to="/">Loxavi</Link> is easy to find in many different parts of the world, whether in busy cities or cozy suburbs. Our goal
          in this area is to make furniture shopping easy and convenient, regardless of your location. We will continue to expand our
          presence so that you can always find your nearest store and create the home of your dreams.
        </p>
      </div>
    </div>
  );
}
