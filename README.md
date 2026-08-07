# 🛋️ Online-Shop "Loxavi"

This is an online furniture store concept built with React and TypeScript. Currently, most of this project consists of various React libraries, such as React Router, React Slick, Framer Motion, Material UI, and so on. "Loxavi" is **❗still in stage of development❗**, though some UI part of it is finished and can be explored - [Homepage](https://oneslaught.github.io/Online-Shop/) and [About Us](https://oneslaught.github.io/Online-Shop/about-us) page.

## 📀 Video

[Loxavi-demo.webm](https://github.com/user-attachments/assets/bae233f6-fc9d-4f16-85e6-3df6d8b6fa7d)

## 📦 Technologies used by far
### Frontend:
- `React`
- `TypeScript`
- `Material UI`
- `Framer Motion`
### Development Tools:
- `Webpack`
- `VS Code`
- `Git + GitHub`
### Deploy:
- `GitHub Pages`

## 🛒 Early Development Features

### 🏠 Home page
Here you can see an animated hero slider cycling through furniture categories, an "On Sale" product carousel with discount tags, a "New Collections" showcase, a section highlighting delivery and assembly, and a masonry style image gallery.

### 📖 About Us page
On this page there are an animated header, a drag to compare before and after slider for furniture pieces, scroll triggered feature sections with tilt effects on hover, a brand stats section, and a "Join our team" call to action.

### 🧭 Navigation
"Loxavi" has a responsive navbar with a mega menu on desktop and a collapsible sidebar on mobile, both built from a shared category data source covering Outdoor, Living, Dining, Bedroom, Office and Bathroom furniture, each with its own sub categories. Currently have only visual aspect.

### 📂 Footer
A footer with company, customer care and programs link sections, a newsletter signup form, and social media links. The same situation here as with the Navigation - no actual links, just a mockup.

### 🌠 Animations
Online-Shop by far has a variety of animations, some of them are scroll triggered and letter by letter text reveal animations, image reveal transitions and drag interactions are powered by Framer Motion throughout the site.

## 📜 What I Already Learned

While working on this project, I'm gaining new knowledge about creating interactive web pages; here are some of the things I've learned:

### 🎨 Material UI & Styled Components
Combining MUI components like `AppBar`, `Box` and `Typography` with CSS Modules and Styled Components taught me how to mix a component library with custom styling without the two getting in each other's way.

### 🎞️ Framer Motion
This library gave me insights into the world of stunning animations and pretty much endless possibilities to make your UI elements stand out.

### 📱 Responsive Design at the Component Level
Instead of relying only on CSS breakpoints, the image gallery swaps in an entirely different component, ImageGalleryMobile, once the screen gets narrow, decided in JavaScript with the useMediaQuery hook. Working this way made me realize that sometimes it makes more sense to render a structurally different component for mobile instead of forcing one layout to adapt with CSS alone.

### 🎯 Imperative Refs
Controlling the comparison slider from custom navigation icons outside of it and using sliderRef.current?.slickGoTo(), slickPrev() and slickNext() was my first real use of a ref to reach into a third party component's imperative API rather than just grabbing a DOM node with it.

*And there is more to come as the project is updated...*

## 📈 Overall Growth
This project pushed me to build a much larger, multi page application than anything I had made before, with a real focus on visual polish and animation rather than just functionality (which is yet to come). Working with a component library alongside my own styling, configuring my own build tooling gave me a much better sense of what goes into shipping a production ready frontend project. The DB part with PostgreSQL and Flyway is located in [Online-Shop-Backend](https://github.com/oneslaught/Online-Shop-Backend) repository (of course, also in "in progress" status).

## 💡 How this project can be improved?
- Build out more working pages
- Add real product detail pages instead of the current placeholder links.
- Connect the storefront to a backend or API instead of using hardcoded product data.
- Implement a working shopping cart and checkout flow.
- Add real authentication behind the Login button.
- Make the search icon actually search the product catalog.
- Add automated tests for components and utilities.

<img width="500" height="500" alt="wip" src="https://github.com/user-attachments/assets/3df1c8aa-afe1-46fa-8a5d-9e794c6813f1" />
