import React from 'react'
import { useState, useEffect } from 'react'
import { ProductList } from './ProductList'
import { useDispatch } from 'react-redux'
import { changeQuantity } from '../Store/ReduxCart'

const CartItem = (props) => {
    const {productId, quantity} = props.data
    const[detail,setDetail]=useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
        const findDetail = ProductList.filter(product => product.id === productId)[0]
        setDetail(findDetail)
    },[productId])
    console.log(detail)
    const handleMinusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1
        }))
    }
    const handlePlusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
        }))
    }
  return (
    <div className='flex justify-between items-center bg-[#323232] text-[#898989] p-2 b-2 gap-5 rounded-md'>
        <img src={detail.image} className='w-12' />
        <h3>{detail.name}</h3>
        <p>${detail.price * quantity}$</p>
        <div className='w-20 flex justify-between'>
            <button className='bg-gray-200 rounded-full w-6 h-6 text-black flex justify-center items-center' onClick={handleMinusQuantity}>-</button>
            <span>{quantity}</span>
            <button className='bg-gray-200 rounded-full w-6 h-6 text-black' onClick={handlePlusQuantity}>+</button>
        </div>
    </div>
  )
}

export default CartItem
