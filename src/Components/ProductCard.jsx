import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../Store/ReduxCart'
import cart from './Assets/cart.png'

const ProductCard = (props) => {
    const carts = useSelector(store=>store.cart.items)
    console.log(carts)
    const {id, name, price, image, slug} = props.data
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
    }

  return (
    <div className='border border-orange-500 bg-[#373737] p-5 rounded-xl shadow-sm h-[250px] w-[200px] m-[10px] flex flex-col justify-center items-start'>
       <Link to={slug}>
        <img src={image} className='w-[100px] h-[100px] object-cover object-top drop-shadow-[0_80px_30px_#0007]' />
       </Link>
       <h3 className='text-1xl py-3 text-center font-sans font-semibold text-black'>{name}</h3>
       <div className='flex justify-between items-center'>
        <p>
            <span className='text-1xl py-3 text-center font-sans font-semibold m-[5px] text-[#898989]'>{price}$</span>
        </p>
        <button onClick={handleAddToCart} className="font-sans font-semibold text-[#fff] text-[13px] bg-[#454545] p-[5px] rounded-[5px] flex flex-row justify-center items-center z-10 w-fit">Add To <span className="bg-gradient-to-r from-orange-700 to-orange-400 text-transparent bg-clip-text">Cart</span> <img id="cart" src={cart} className="h-[12px] w-[12px] ml-[5px]" alt="cart" /></button>
       </div>
    </div>
  )
}

export default ProductCard
