import React from 'react'
import { motion } from 'framer-motion'
import anime from "animejs"
import girl from './Assets/girl.png'
import earbuds from './Assets/EarBuds.png'
import HandAnimation from './HandAnimation'

const variants = {
  hidden:{opacity: 0},
  visible:{opacity: 1}
}

function Hero () {
    const gridWidth = 10
    const gridHeight = 10
    const dots = []
    let index = 0

    const handleDotClick = (e) => {
      anime({
        targets: ".dot-point",
        scale: [
          { value: 1.35, easing: "easeOutSine", duration: 250 },
          { value: 1, easing: "easeInOutQuad", duration: 500 },
        ],
        translateY: [
          { value: -15, easing: "easeOutSine", duration: 250 },
          { value: 0, easing: "easeInOutQuad", duration: 500 },
        ],
        opacity: [
          { value: 1, easing: "easeOutSine", duration: 250 },
          { value: 0.5, easing: "easeInOutQuad", duration: 500 },
        ],
        delay: anime.stagger(100, {
          grid: [gridWidth, gridHeight],
          from: e.target.dataset.index,
        }),
      })
    }

    for(let i = 0; i < gridWidth; i++){
      for(let j = 0; j < gridHeight; j++){
        dots.push(
          <div onClick={handleDotClick} className='group cursor-crosshair rounded-full p-2 w-1 h-1 transition-colors hover:bg-slate-600'
          data-index={index}
          key = {`${i}-${j}`}
          >
            <div
            className='dot-point h-1 w-1 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white'
            data-index = {index}
            />
          </div>
        )
        index++
      }
    }

    return(
        <div id='hero_container' className='h-[90vh] w-full flex flex-col md:flex-row justify-center items-center'>
            <div id='left_section' className='bg-[#212121] md:h-[90vh] h-[50%] md:w-[50%] w-[100%] overflow-hidden flex justify-around items-center flex-col'>
                <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{
                   delay: 0.5,
                   ease: "easeInOut",
                   duration: 0.5
                }}
                viewport={
                   {amount: 0}
                } 
                 className='h-full w-full flex justify-around items-center flex-col'>
                  <h1 id='hero_title' className='text-[#565656] font-sans font-semibold md:text-5xl text-2xl text-center mt-[50px]'><span className='bg-gradient-to-r from-orange-700 to-orange-400 text-transparent bg-clip-text'>Dive</span> into a world of inmersive <span className='bg-gradient-to-r from-orange-700 to-orange-400 text-transparent bg-clip-text'>Sounds</span></h1>
                  <p id='hero_p' className='text-[#989898] md:text-[15px] text-[10px] font-sans font-semibold'>With our new collection of wireless headphones</p>
                  <img id='girl' src={girl} alt="girl" className='md:h-[800px] h-[150px]' />
                </motion.div>
            </div>
            <div id='right_section' className='bg-[#212121] md:h-[90vh] h-[50%] md:w-[50%] w-[100%] flex justify-center items-center flex-col'>
                <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{
                   delay: 1,
                   ease: "easeInOut",
                   duration: 0.5
                }}
                viewport={
                   {amount: 0}
                } 
                 id='grid_image_container' className='md:h-[250px] h-[200px] md:w-[250px] w-[200px] flex justify-center items-center'>
                    <img id='headphones' className='md:h-[250px] h-[150px] md:w-[250px] w-[150px] mt-[100px] ml-[-100px]' src={earbuds} alt="headphones" />
                    <div id='grid' className='md:h-[200px] h-[150px] md:w-[200px] w-[150px] absolute md:mt-[-150px] mt-[-60px] md:ml-[150px] ml-[100px] grid grid-cols-10 gap-1' style={{gridTemplateColumns: `repeat(${gridWidth}, 1fr)`}}>
                      <HandAnimation />
                      {dots}
                    </div>
                </motion.div>
                <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{
                   delay: 1,
                   ease: "easeInOut",
                   duration: 0.5
                }}
                viewport={
                   {amount: 0}
                } 
                 id='grid_slogan' className='text-[#989898] mt-[30px] font-sans font-semibold'>Fell the <span className='bg-gradient-to-r from-orange-700 to-orange-400 text-transparent bg-clip-text'>Wave</span> of every <span className='bg-gradient-to-r from-orange-700 to-orange-400 text-transparent bg-clip-text'>Beat</span></motion.div>
            </div>
        </div>
    )
}

export default Hero