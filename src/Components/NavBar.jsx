import React from "react";
import logo from './Assets/logo.png'
import glass from './Assets/search.png'
import burger from './Assets/burgerMenu.png'              
import cart from './Assets/cart.png'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../Store/ReduxCart";

function NavBar ({quantity}) {
    const[totalQuantity,setTotalQuantity]=useState(0)
    const carts = useSelector(store => store.cart.items)
    const dispatch = useDispatch()

    useEffect(()=>{
        let total = 0
        carts.forEach(item => total += item.quantity)
        setTotalQuantity(total)
    },[carts])

    const handleSoppingCart = () => {
        dispatch(toggleStatusTab())
    }
    return(
        <div id="nav_bar" className="h-[50px] w-full fixed flex justify-between items-center bg-[#212121] z-10">
            <img id="logo" className="ml-[5px] md:ml-10 md:h-[50px] md:w-[50px] h-[25px] w-[25px]" src={logo} alt="logo" />
            <div id="search_container" className="flex flex-row justify-center items-center absolute w-full">
                <input id="input_search" className="text-[#898989] md:text-[15px] text-[10px] border-l border-b border-black w-[200px] md:w-[400px] bg-[transparent]" type="text" placeholder="search for your ideal model" />
                <img id="glass" src={glass} className="md:h-[30px] h-[25px] md:w-[30px] w-[25px] cursor-pointer" alt="search-icon" />
            </div>
            <img id="burger" src={burger} className="md:hidden flex h-[30px] w-[30px] cursor-pointer mr-[10px]" alt="burger" />
            <ul className="md:flex hidden justify-center items-center font-sans font-semibold cursor-pointer mr-[10px]">
                <li className="mr-[10px] text-[10px] md:text-[15px] text-orange-500 cursor-pointer z-10">START</li>
                <li className="mr-[10px] text-[10px] md:text-[15px] text-[#989898] cursor-pointer z-10">Products</li>
                <li className="mr-[10px] text-[10px] md:text-[15px] text-[#989898] cursor-pointer z-10">Contact</li>
                <img src={cart} className="cursor-pointer h-[20px] w-[20px] z-10" onClick={handleSoppingCart} />
            </ul>
        </div>
    )
}

export default NavBar