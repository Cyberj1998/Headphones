import React from 'react';
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { ProductList } from './ProductList';


const Products = () => {
  return (
    <div className='h-fit w-full bg-[#212121] flex flex-col justify-center items-center'>
      <h1 className='font-sans font-semibold text-[#898989] text-[25px]'>Grab a pair for <span className='bg-gradient-to-r from-orange-700 to-orange-400 text-transparent bg-clip-text'>yourself</span></h1>
      <div className='h-fit w-full flex flex-wrap justify-center'>
        {ProductList.map((product, key) =>
            <ProductCard key={key} data={product} /> 
        )}
      </div>
    </div>
  )
}


export default Products
