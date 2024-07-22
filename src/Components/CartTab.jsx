import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem'
import { toggleStatusTab } from '../Store/ReduxCart'

const CartTab = () => {

    const carts = useSelector(store => store.cart.items) 
    const statusTab = useSelector(store => store.cart.statusTab)
    const dispatch = useDispatch()
    const handleCloseTab =  () => {
      dispatch(toggleStatusTab())
    }

  return (
    <div className={`fixed top-0 right-0 bg-[#252525] shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] z-40 transform transition-transform duration-500 ${statusTab === false ? 'translate-x-full' : '' }`}>
      <h2 className='font-sans font-semibold text-[#898989]'>Shopping Cart</h2>
      <div>
        {carts.map((item, key)=>
            <CartItem key={key} data={item} />
        )}
      </div>
      <div className='grid grid-cols-2'>
        <button className='bg-[#181818] text-white font-sans font-semibold' onClick={handleCloseTab}>Close</button>
        <button className='bg-gradient-to-r from-orange-700 to-orange-400 font-sans font-semibold text-white'>Checkout</button>
      </div>
    </div>
  )
}

export default CartTab
