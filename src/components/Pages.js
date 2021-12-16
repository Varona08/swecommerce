import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Inicio } from "./Inicio";
import { ListProducts } from "./Products/index";
import { ProductoDetalles } from "./Products/ProductoDetalles";

export const Pages = () => {
    return (  
      <section>
        <Routes>
          <Route path= "/" element={<Inicio />} />   
          <Route path= "/productos" element={<ListProducts />} />   
          <Route path= "/producto/:id" element={<ProductoDetalles />} />     
        </Routes>
      </section>
    );
  }