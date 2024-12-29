import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../Store/ReduxCart'
import cart from './Assets/cart.png'

const BentoTilt = ({ children, className = '' }) => {

  const[transformStyle,setTransformStyle]=useState('')

  const itemRef = useRef()

  const handleMouseMove = (e) =>{
    if(!itemRef.current)return;

    const{ left, top, width, height } = itemRef.current.getBoundingClientRect();

    const relativeY = (e.clientX - left) /width;
    const relativeX = (e.clientY - left) /height;
    
    const tiltX = (relativeY -0.5) * 5
    const tiltY = (relativeX -0.5) * -5

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`

    setTransformStyle(newTransform)
  }

  const handleMouseLeave = (e) => {
    setTransformStyle('')
  }

  return(
    <div 
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  )
}

const ProductCard = (props) => {

    const carts = useSelector(store=>store.cart.items)
    console.log(carts)
    const {id, name, price, image } = props.data
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
    }

  return (
    <BentoTilt className='border border-orange-500 bg-[#373737] p-5 rounded-xl shadow-sm h-[250px] w-[200px] m-[10px] flex flex-col justify-center items-start'>
       <img src={image} className='w-full h-[100px] object-contain object-top drop-shadow-[0_80px_30px_#0007]' />
       <h3 className='text-1xl py-3 text-center font-sans font-semibold text-black'>{name}</h3>
       <div className='flex justify-between items-center'>
        <p>
            <span className='text-1xl py-3 text-center font-sans font-semibold m-[5px] text-[#898989]'>${price}</span>
        </p>
        <button onClick={handleAddToCart} className="font-sans font-semibold text-[#fff] text-[13px] bg-[#454545] p-[5px] rounded-[5px] flex flex-row justify-center items-center z-10 w-fit">Add To <span className="bg-gradient-to-r from-orange-700 to-orange-400 text-transparent bg-clip-text">Cart</span> <img id="cart" src={cart} className="h-[12px] w-[12px] ml-[5px]" alt="cart" /></button>
       </div>
    </BentoTilt>
  )
}

export default ProductCard
