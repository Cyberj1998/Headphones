import React from 'react'
import cursor from './Assets/cursor.png'

const HandAnimation = () => {
  return (
    <img src={cursor} className='h-[40px] w-[30px] absolute z-10 animate-tilt-and-fade mt-[50%] ml-[95%] max-sm:ml-[100%] filter invert brightness-0' />
  )
}

export default HandAnimation
