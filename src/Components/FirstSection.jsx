import React, { useState } from "react";
import foldedHeadphones from './Assets/about-img.png'
import specCursor from './Assets/tooltip-right.svg'
import arrow from './Assets/arrow.svg'
import { motion } from 'framer-motion'

function FirstSection () {

    const[firstSpec,setFirstSpec]=useState(false)
    const[secondSpec,setSecondSpec]=useState(false)
    const[thirdSpec,setThirdSpec]=useState(false)
    const specs1 = "Immerse yourself in your favorite music with our new headphones, featuring soft and plush cushioned cups that provide exceptional noise isolation. Feel the wave of sound with every beat as you sink into your own private musical oasis"
    const specs2 = "Take your music on the go with ease thanks to the foldable design of our headphones. Perfect for travel or daily commutes, simply collapse the headphones for compact storage and convenient transportation. Feel the wave wherever you may roam"
    const specs3 = "Designed for all-day comfort, our headphones feature a padded and adjustable headband that won't cause any discomfort during extended wear Feel the wave of music wash over you in luxurious comfort with our lightweight and ergonomic design"

    const variants = {
        hidden:{opacity: 0},
        visible:{opacity: 1}
    }

    return(
        <div id="first_section" className="h-[90vh] w-full bg-[#212121] flex md:flex-row flex-col justify-center items-center">
            <div id="container_first_section" className="h-[80%] w-[70%] flex justify-center items-center md:flex-row flex-col">
                <motion.div
                 variants={variants}
                 initial="hidden"
                 animate="visible"
                 transition={{
                    delay: 2,
                    ease: "easeInOut",
                    duration: 0.5
                 }}
                 viewport={
                    {amount: 0}
                 }
                 id="headphones_specs"
                 className="md:h-[100%] h-[50%] md:w-[50%] w-[100%] flex justify-center items-center">
                    <img id="headphone_specs" src={foldedHeadphones} className="md:h-[250px] h-[150px] md:w-[250px] w-[150px] absolute" alt="folded_headphones" />
                    <img id="spec_cursor1" onMouseOver={()=>setFirstSpec(true)} onMouseOut={()=>setFirstSpec(false)} className="absolute md:ml-[200px] ml-[150px] cursor-pointer" src={specCursor} alt="spec cursor" />
                    <img id="spec_cursor2" onMouseOver={()=>setSecondSpec(true)} onMouseOut={()=>setSecondSpec(false)} className="absolute md:ml-[-100px] ml-[-20px] md:mt-[90px] mt-[30px] cursor-pointer" src={specCursor} alt="spec cursor" />
                    <img id="spec_cursor3" onMouseOver={()=>setThirdSpec(true)} onMouseOut={()=>setThirdSpec(false)} className="absolute md:ml-[50px] md:mt-[-200px] mt-[-100px] cursor-pointer" src={specCursor} alt="spec cursor" />
                </motion.div>
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
                 id="specs_container" className="md:h-[50%] h-[100%] md:w-[50%] w-[100%] flex justify-between border border-orange-500 items-center flex-col bg-[#252525] rounded-[10px]">
                    <h2 id="specs_title" className="text-[#898989] font-sans font-semibold md:text-[25px] text-[12px]"><span className="bg-gradient-to-r from-orange-700 to-orange-400 text-transparent bg-clip-text">CHECK</span> out the new model <span className="bg-gradient-to-r from-orange-700 to-orange-400 text-transparent bg-clip-text">Specs</span></h2>
                    <p id="specs_text" className="text-[#898989] text-left font-sans font-semibold p-[10px]">{firstSpec ? specs1: secondSpec ? specs2: thirdSpec ? specs3 : "hover the headphone image to see the specs of our newest model"}</p>
                    <button id="go_shop_button" className="bg-[#454545] mt-[-10px] cursor-pointer flex flex-row justify-center items-center p-5px text-[#898989] font-sans font-semibold h-[40px] w-[100px] m-[5px] rounded-[5px]">Go <span className="bg-gradient-to-r from-orange-700 to-orange-400 text-transparent bg-clip-text">Shop</span><img src={arrow} className="m-[5px] mt-[15px]" alt="arrow" /></button>
                </motion.div>
            </div>
        </div>
    )
}

export default FirstSection