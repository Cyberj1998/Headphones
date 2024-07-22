import React, { useDebugValue } from "react";
import customer1 from './Assets/customer-1.jpg'
import customer2 from './Assets/customer-2.jpg'
import start from './Assets/start.png'
import { motion } from "framer-motion";


const variants = {
    hidden:{opacity: 0},
    visible:{opacity: 1}
}

function Opinions () {
    return(
        <div id="opinions_section" className="h-[90vh] w-full bg-[#212121] flex flex-col justify-center items-center">
            <h1 className="text-[30px] text-[#898989] font-sans font-semibold">What Our <span className="bg-gradient-to-r from-orange-700 to-orange-400 text-transparent bg-clip-text">Customers</span> Say</h1>
            <p className="font-sans font-semibold text-[#898989] md:text-[15px] text-[10px] pl-[10px] pr-[10px] w-[50%] text-center">Hear genuine stories from our satisfied customers about the exeptional experiences with us</p>
            <div className="h-[50%] md:w-[50%] sm:w-[90%] flex flex-row justify-center items-center">
                <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{
                   delay: 6,
                   ease: "easeInOut",
                   duration: 0.5
                }}
                viewport={
                   {amount: 0}
                } 
                className="h-[100%] w-[50%] flex flex-col justify-center items-center">
                    <img src={customer1} className="md:h-[100px] h-[70px] md:w-[100px] w-[70px] rounded-full" alt="customer" />
                    <p className="font-sans font-semibold text-[#898989] md:text-[12px] text-[10px] pl-[10px] pr-[10px] w-[90%]">I absolutely love my new headphones! The sound quality is amazing and they are so comfortable to wear for long periods of time. Definitely worth the purchase!</p>
                    <p className="flex flex-row"><img src={start} className="h-[20px] w-[20px] mr-[10px]" alt="start" />4.5</p>
                    <h1 className="text-[#898989] font-sans font-semibold">Maia Moore</h1>
                </motion.div>
                <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{
                   delay: 7,
                   ease: "easeInOut",
                   duration: 0.5
                }}
                viewport={
                   {amount: 0}
                }
                className="h-[100%] w-[50%] flex flex-col justify-center items-center">
                    <img src={customer2} className="md:h-[100px] h-[70px] md:w-[100px] w-[70px] rounded-full" alt="customer" />
                    <p className="font-sans font-semibold text-[#898989] md:text-[12px] text-[10px] pl-[10px] pr-[10px] w-[90%]">These headphones exceeded my expectations! The noise cancellation feature works like a charm and the battery life is impressive. I couldn't be happier with my purchase."</p>
                    <p className="flex flex-row"><img src={start} className="h-[20px] w-[20px] mr-[10px]" alt="start" />4.9</p>
                    <h1 className="text-[#898989] font-sans font-semibold">Marc Goddard</h1>
                </motion.div>
            </div>        
        </div>
    )
}


export default Opinions