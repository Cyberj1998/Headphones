import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Cart from './Components/Pages/Cart'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import FirstSection from './Components/FirstSection'
import Products from './Components/Products'
import SecondSection from './Components/SecondSection'
import Opinions from './Components/Opinions'
import Footer from './Components/Footer'
import CartTab from './Components/CartTab'

function App() {
//----------set the info for the cart
  const[cartProduct,setCartProduct]=useState([])
  const[cartCategory,setCartCategory]=useState([])
  const[quantity,setQuantity]=useState(0)
//-----------set product type
  const[headphone,setHeadphones]=useState(true)
  const[earplugs,setEarplugs]=useState(false)
  const[speakers,setSpeakers]=useState(false)


  return (
    <div className="App bg-[#212121]">
      <BrowserRouter>
        <Routes>
          <Route index element={
            <>
              <NavBar quantity={quantity} setQuantity={setQuantity} />
              <Hero />
              <CartTab />
              <FirstSection />
              <Products />
              <SecondSection headphone={headphone} setHeadphones={setHeadphones} earplugs={earplugs} setEarplugs={setEarplugs} speakers={speakers} setSpeakers={setSpeakers} cartProduct={cartProduct} setCartProduct={setCartProduct} cartCategory={cartCategory} setCartCategory={setCartCategory} quantity={quantity} setQuantity={setQuantity} />
              <Opinions />
              <Footer />
            </>
          }> 
          </Route>
          <Route path='/Cart' element={
            <>
            <NavBar />
            <Cart headphone={headphone} setHeadphones={setHeadphones} earplugs={earplugs} setEarplugs={setEarplugs} speakers={speakers} setSpeakers={setSpeakers} cartProduct={cartProduct} setCartProduct={setCartProduct} cartCategory={cartCategory} setCartCategory={setCartCategory} quantity={quantity} setQuantity={setQuantity} /></>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;