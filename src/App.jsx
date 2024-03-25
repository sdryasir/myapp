import { useEffect, useState } from "react";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider, 
  createRoutesFromElements,
  Route
} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import RootLayout from "./pages/RootLayout";
import EditContact from "./pages/EditContact";
import Products from "./pages/Products";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/edit/:id" element={<EditContact/>}/>
        <Route path="/products" element={<Products/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
);


export default function App(){
  
  return <div>

    <RouterProvider router={router}/>
    
  </div>
}


