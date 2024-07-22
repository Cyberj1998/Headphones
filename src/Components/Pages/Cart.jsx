import React from "react";
import headphonesInfo from '../Headphones.json'
//--------import headphones
import headphone1 from '../Assets/favorite-2.png'
import headphone2 from '../Assets/favorite-3.png'
import headphone3 from '../Assets/favorite-4.png'
//---------import earplugs
import earplug1 from '../Assets/EarBuds.png'
import earplug2 from '../Assets/EarBuds-5.png'
import earplug3 from '../Assets/EarBuds-4.png'
//-------import speakers
import speaker1 from '../Assets/portatil2.png'
import speaker2 from '../Assets/portatil1.png'
import speaker3 from '../Assets/portatil3.png'
import { useEffect } from "react";


function Cart ({cartProduct,cartCategory,quantity}) {

    /*
    useEffect(()=>{
        console.log(cartCategory)
        console.log(cartProduct)
    },[])*/

    const newArray = Array.from({ length:quantity }, (_, index) => index)


    return(
        <div id="cart_container" className="h-[100vh] w-full bg-[#212121] flex justify-center items-center">
            <div id="products_container" className="border border-orange-500 bg-[#252525] h-[80%] w-[80%] rounded-[10px] flex flex-col justify-start items-center overflow-scroll">
                {
                    quantity !== 0 ?
                    newArray.map((item, index) => (
                        <>
                        <div id="product" className="border h-[20%] w-[90%] flex flex-row justify-center items-center rounded-[10px] m-[5px]">
                            <div id="preview_container" className="h-[100%] w-[25%] flex flex-col justify-around items-center text-center">
                                <h3 id="preview" className="text-[#898989] text-[15px] font-sans font-semibold">Preview</h3>
                                <img src={earplug1} className="h-[50px] w-[50px]" alt="product preview" />
                            </div>
                            <div id="product_name_container" className="h-[100%] w-[25%] flex flex-col justify-around items-center text-center">
                                <h3 id="product_name" className="text-[#898989] text-[15px] font-sans font-semibold">Product</h3>
                                <h3 id="name" className="text-[#898989] text-[15px] font-sans font-semibold bg-gradient-to-r from-orange-700 to-orange-400 text-transparent bg-clip-text">{headphonesInfo.cartCategory[item][cartProduct[item]].name}</h3>
                            </div>
                            <div id="price_container" className="h-[100%] w-[25%] flex flex-col justify-around items-center text-center">
                                <h3 id="price_title" className="text-[#898989] text-[15px] font-sans font-semibold">Price</h3>
                                <h3 id="price" className="text-[#898989] text-[15px] font-sans font-semibold">{headphonesInfo.cartCategory[item][cartProduct[item]].name}</h3>
                            </div>
                            <div id="check_out_container" className="h-[100%] w-[25%] flex flex-col justify-around items-center text-center">
                                <button id="check_out_button" className="text-[#fff] font-sans font-semibold md:text-[15px] text-[10px] bg-orange-500 h-[30px] md:w-[100px] w-[50px] rounded-[10px] cursor-pointer">Checkout</button>
                            </div>
                        </div>
                        </>
                    ))
                    :
                    <h1 className="font-sans font-semibold text-[#898989]">No Products in the cart yet</h1>
                }
            </div>
        </div>
    )
}



export default Cart