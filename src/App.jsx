// import React from 'react'
// import {BrowserRouter,Route, Routes} from 'react-router-dom'
// import Navbar from './Components/Navbar/Navbar'
// import Shop from './Pages/Shop'
// import Cart from './Pages/Cart'
// import Product from './Pages/Product'
// import ShopCategory from './Pages/ShopCategory'
// import Footer from './Components/Footer/Footer'
// import men_banner from './Components/Assets/banner_mens.png'
// import women_banner from './Components/Assets/banner_women.png'
// import kid_banner from './Components/Assets/banner_kids.png'
// import Login from './Pages/Login'; 
// import SignUp from './Pages/SignUp'


// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <Navbar></Navbar>

//         <Routes>
//         <Route path='/' element={<Shop/>} />

//           <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>} />
//           <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>} />
//           <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>} />
//           <Route path='/product' element={<Product/>} />
//           <Route path='/productId' element={<Product />} />

//           <Route path='/Cart' element={<Cart/>} />

//           <Route path='/SignUp' element={<SignUp/>} />
//           <Route path="/login" element={<Login />} />

        
//         </Routes>
//         <Footer></Footer>
//       </BrowserRouter>
      
//     </div>
//   )
// }

// export default App







// 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111





// import React from "react";
// import Navbar from "./Components/Navbar/Navbar";
// import {
//   BrowserRouter,
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import "./App.css";
// import Shop from "./Pages/Shop";
// import ShopCategory from "./Pages/ShopCategory";
// import Product from "./Pages/Product";
// import Cart from "./Pages/Cart";
// import LoginSignup from "./Pages/LoginSignup";
// import men_banner from "./Components/Assets/banner_mens.png";
// import women_banner from "./Components/Assets/banner_women.png";
// import kids_banner from "./Components/Assets/banner_kids.png";
// import Footer from "./Components/Footer/Footer";

// let router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Shop></Shop>,
//     children: [
//       {
//         path: "/mens",
//         element: (
//           <ShopCategory banner={men_banner} category="men"></ShopCategory>
//         ),
//       },
//       {
//         path: "/womens",
//         element: (
//           <ShopCategory banner={women_banner} category="women"></ShopCategory>
//         ),
//       },
//       {
//         path: "/kids",
//         element: (
//           <ShopCategory banner={kids_banner} category="kid"></ShopCategory>
//         ),
//       },
//       {
//         path: "/product",
//         element: <Product></Product>,
//       },
//       {
//         path: "/productId",
//         element: <Product></Product>,
//       },
//       {
//         path: "/cart",
//         element: <Cart></Cart>,
//       },
//       {
//         path: "/login",
//         element: <LoginSignup></LoginSignup>,
//       },
//     ],
//   },
//   {
//     path: "/cart",
//     element: <Cart></Cart>,
//   },
// ]);

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar></Navbar>
//       </BrowserRouter>

//       <RouterProvider router={router}></RouterProvider>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default App;

import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";
import Footer from "./Components/Footer/Footer";
import Login from './Pages/Login'; 
import SignUp from './Pages/SignUp'


// ✅ Creating a Layout Component
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* This renders the matched route */}
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // ✅ Wrap everything inside Layout
    children: [
      { path: "/", element: <Shop /> },
      {
        path: "/mens",
        element: <ShopCategory banner={men_banner} category="men" />,
      },
      {
        path: "/womens",
        element: <ShopCategory banner={women_banner} category="women" />,
      },
      {
        path: "/kids",
        element: <ShopCategory banner={kids_banner} category="kid" />,
      },
      { path: "/product/:productId", element: <Product /> }, // ✅ Correct dynamic route
      { path: "/cart", element: <Cart /> },
      { path: "/login", element: <Login /> },
      { path: "/SignUp", element: <SignUp/>},
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />; // ✅ Removed unnecessary <BrowserRouter>
};

export default App;











