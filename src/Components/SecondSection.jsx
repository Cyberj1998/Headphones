import React, { useState } from "react";
import { useEffect } from "react";
import { motion } from 'framer-motion'
import headphonesInfo from './Headphones.json';
import model1 from './Assets/favorite-2.png';
import model2 from './Assets/favorite-3.png';
import model3 from './Assets/favorite-4.png';
import model from './Assets/home-img.png';
import earplug from './Assets/EarBuds-6.png';
import earplug2 from './Assets/EarBuds-5.png';
import earplug3 from './Assets/EarBuds-4.png';
import speaker from './Assets/portatil2.png';
import speaker2 from './Assets/portatil1.png';
import speaker3 from './Assets/portatil3.png';
import earplugsHero from './Assets/EarBuds.png';
import cart from './Assets/cart.png'

const variants = {
    hidden:{opacity: 0},
    visible:{opacity: 1}
}

function SecondSection ({setCartProduct,setCartCategory,setQuantity,headphone,setHeadphones,earplugs,setEarplugs,speakers,setSpeakers}) {


    const newArray = []
    function displayHeadphones () {
        setHeadphones(true)
        setEarplugs(false)
        setSpeakers(false)
    }
    function displayEarplugs () {
        setHeadphones(false)
        setEarplugs(true)
        setSpeakers(false)
    }
    function displaySpeakers () {
        setHeadphones(false)
        setEarplugs(false)
        setSpeakers(true)
    }

    function setHeadphoneType () {
        setCartCategory(headphone ? prevCategory=>[...prevCategory,'headphones'] : earplugs ? prevCategory=>[...prevCategory,'inEarHeadphones'] : speakers ? prevCategory=>[...prevCategory,'bluetoothSpeakers'] : '' )
    }

    function setProductNumber (e) {
        setCartProduct(prevProduct=>[...prevProduct,e])
    }

    function handleClick (e) {
        setHeadphoneType()
        setProductNumber(e)
        setQuantity((prevQuantity) => prevQuantity + 1)
    }
    //-----------------function to add items to the cart
    return(
        <div id="second_section" className="overflow-overflowh h-[90vh] w-full flex justify-center items-center flex-col bg-[#212121]">
            <h1 id="choose_headphones" className="text-[30px] text-[#898989] font-sans font-semibold">See more <span className="bg-gradient-to-r from-orange-700 to-orange-400 text-transparent bg-clip-text">Details</span></h1>
            <div id="categories" className="h-[100px] w-[90%] flex justify-center items-center border border-orange-500 bg-[#252525] rounded-[20px]">
                <img id="headphones_category" onClick={displayHeadphones} className="md:h-[90px] h-[60px] md:w-[90px] w-[60px] cursor-pointer rounded-[10px] m-[10px]" src={model} alt="headphones category" />
                <img id="earplugs_category" onClick={displayEarplugs} className="md:h-[90px] h-[60px] md:w-[90px] w-[60px] cursor-pointer rounded-[10px] m-[10px]" src={earplug} alt="earplugs category" />
                <img id="portable_speakers_category" onClick={displaySpeakers} className="md:h-[90px] h-[60px] md:w-[90px] w-[60px] cursor-pointer rounded-[10px] m-[10px]" src={speaker} alt="portable speakers category" />
            </div>
            <div id="slider" className="h-[70%] w-[90%] rounded-[10px] flex justify-center items-center">
                <div id="headphones_panel" className="h-[350px] w-[90%] flex md:flex-row flex-col justify-center items-center transition-[1s]">
                    <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                       delay: 3,
                       ease: "easeInOut",
                       duration: 0.5
                    }}
                    viewport={
                       {amount: 0}
                    }
                     className="flex justify-center items-center md:h-[300px] h-[500px] md:w-[300px] w-full">
                        <div id='info_panel' className="md:h-[300px] h-[100px] md:w-[300px] w-full bg-transparent z-10 backdrop-blur-[5px] rounded-[5px] flex flex-col justify-between items-center opacity-0 hover:opacity-[1] cursor-pointer transition-[1s]">
                            <h1 id="model_name" className="font-sans font-semibold text-orange-500 md:text-[20px] text-[10px]">{headphone ? headphonesInfo.headphones[0].name: earplugs ? headphonesInfo.inEarHeadphones[0].name: speakers ? headphonesInfo.bluetoothSpeakers[0].name: headphonesInfo.headphones[0].name}</h1>
                            <p id="price" className="font-sans font-semibold text-[#fff] md:text-[15px] text-[10px] pl-[10px] pr-[10px]">{headphone ? headphonesInfo.headphones[0].price: earplugs ? headphonesInfo.inEarHeadphones[0].price: speakers ? headphonesInfo.bluetoothSpeakers[0].price: headphonesInfo.headphones[0].price}</p>
                            <p id="model_description" className="font-sans font-semibold text-[#fff] md:text-[15px] text-[10px] pl-[10px] pr-[10px]">{headphone ? headphonesInfo.headphones[0].description: earplugs ? headphonesInfo.inEarHeadphones[0].description: speakers ? headphonesInfo.bluetoothSpeakers[0].description: headphonesInfo.headphones[0].description}</p>
                        </div>
                        <img id="headphone_pair" className="md:h-[300px] h-[100px] md:w-[300px] w-[100px] md:m-[50px] m-[15px] cursor-pointer absolute" src={headphone ? model1: earplugs ? earplugsHero: speakers ? speaker: model1} alt="headphone pair" />
                    </motion.div>
                    <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                       delay: 4,
                       ease: "easeInOut",
                       duration: 0.5
                    }}
                    viewport={
                       {amount: 0}
                    }
                     className="flex justify-center items-center md:h-[300px] h-[500px] md:w-[300px] w-full">
                        <div id="info" className="md:h-[300px] h-[100px] md:w-[300px] w-full bg-transparent z-10 backdrop-blur-[5px] rounded-[5px] flex flex-col justify-between items-center opacity-0 hover:opacity-[1] cursor-pointer transition-[1s]">
                            <h1 id="model_name" className="font-sans font-semibold text-orange-500 md:text-[20px] text-[10px]">{headphone ? headphonesInfo.headphones[1].name: earplugs ? headphonesInfo.inEarHeadphones[1].name: speakers ? headphonesInfo.bluetoothSpeakers[1].name: headphonesInfo.headphones[1].name}</h1>
                            <p id="price" className="font-sans font-semibold text-[#fff] md:text-[15px] text-[10px] pl-[10px] pr-[10px]">{headphone ? headphonesInfo.headphones[1].price: earplugs ? headphonesInfo.inEarHeadphones[1].price: speakers ? headphonesInfo.bluetoothSpeakers[1].price: headphonesInfo.headphones[1].price}</p>
                            <p id="model_description" className="font-sans font-semibold text-[#fff] md:text-[15px] text-[10px] pl-[10px] pr-[10px]">{headphone ? headphonesInfo.headphones[1].description: earplugs ? headphonesInfo.inEarHeadphones[1].description: speakers ? headphonesInfo.bluetoothSpeakers[1].description: headphonesInfo.headphones[1].description}</p>
                        </div>
                        <img id="headphone_pair" className="md:h-[300px] h-[100px] md:w-[300px] w-[100px] md:m-[50px] m-[15px] cursor-pointer absolute" src={headphone ? model2: earplugs ? earplug2: speakers ? speaker2: model2} alt="headphone pair" />
                    </motion.div>
                    <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                       delay: 5,
                       ease: "easeInOut",
                       duration: 0.5
                    }}
                    viewport={
                       {amount: 0}
                    }
                     className="flex justify-center items-center md:h-[300px] h-[500px] md:w-[300px] w-full">
                        <div id="info" className="md:h-[300px] h-[100px] md:w-[300px] w-full bg-transparent z-10 backdrop-blur-[5px] rounded-[5px] flex flex-col justify-between items-center opacity-0 hover:opacity-[1] cursor-pointer transition-[1s]">
                            <h1 id="model_name" className="font-sans font-semibold text-orange-500 md:text-[20px] text-[10px]">{headphone ? headphonesInfo.headphones[2].name: earplugs ? headphonesInfo.inEarHeadphones[2].name: speakers ? headphonesInfo.bluetoothSpeakers[2].name: headphonesInfo.headphones[2].name}</h1>
                            <p id="price" className="font-sans font-semibold text-[#fff] md:text-[15px] text-[10px] pl-[10px] pr-[10px]">{headphone ? headphonesInfo.headphones[2].price: earplugs ? headphonesInfo.inEarHeadphones[2].price: speakers ? headphonesInfo.bluetoothSpeakers[2].price: headphonesInfo.headphones[2].price}</p>
                            <p id="model_description" className="font-sans font-semibold text-[#fff] md:text-[15px] text-[10px] pl-[10px] pr-[10px]">{headphone ? headphonesInfo.headphones[2].description: earplugs ? headphonesInfo.inEarHeadphones[2].description: speakers ? headphonesInfo.bluetoothSpeakers[2].description: headphonesInfo.headphones[2].description}</p>
                        </div>
                        <img id="headphone_pair" className="md:h-[300px] h-[100px] md:w-[300px] w-[100px] md:m-[50px] m-[15px] cursor-pointer absolute" src={headphone ? model3: earplugs ? earplug3: speakers ? speaker3: model3} alt="headphone pair" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}


export default SecondSection