import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { createClient } from '@supabase/supabase-js';
import { ProductList } from './ProductList';


const Products = () => {

  const [products, setProducts] = useState([]); // State to store fetched products
  const [error, setError] = useState(null); // State to handle errors

  const supabaseUrl='https://ryrdplzvxnzdxrwuydul.supabase.co';
  const supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5cmRwbHp2eG56ZHhyd3V5ZHVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzMTIzODMsImV4cCI6MjA1MDg4ODM4M30.2_8lQr-N3MgB6KAPMw58IkE1p1HkVOwNaacziTuqVIE'
  const supabase = createClient(supabaseUrl, supabaseKey);

  // Function to fetch products from Supabase
  
  const fetchProducts = async () => {

    const { data, error } = await supabase.from('HeadPhones').select('*');
    console.log(data); // Logging fetched products
    if (error) {
      setError(error.message);
      console.log(error);
    } else {
      setProducts(data); // Update state with the fetched data
      console.log(data); // Log the products
    }

  };

  // Fetch products when the component loads
  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <div className='h-fit w-full bg-[#212121] flex flex-col justify-center items-center'>
      <h1 className='font-sans font-semibold text-[#898989] text-[25px]'>
        Grab a pair for <span className='bg-gradient-to-r from-orange-700 to-orange-400 text-transparent bg-clip-text'>yourself</span>
      </h1>
      <div className='h-fit w-full flex flex-wrap justify-center'>
        {products.map((product, key) => (
          <ProductCard key={key} data={product} />
        ))}
      </div>
    </div>
  );
};




export default Products;