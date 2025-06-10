import React from 'react'

const Hero = () => {
  return (
    <div className='bg-cover bg-fixed bg-[url(../public/pawel-czerwinski-OY3slACa3ec-unsplash.jpg)] flex justify-center h-2/3 items-center'>

        <div className='max-h-1/4 w-1/2 text-center flex justify-center items-center'>
        <div className='grid grid-rows-3 rounded-4xl items-center justify-center p-4 w-[500px] border-2 hover:translate-1.5 shadow-2xl bg-transparent backdrop-blur-lg'>
       <h2 className='text-6xl'>Hero Section</h2>
       <p>l;aksjdfalkjsdg;laksjdgl;aksjdgl;aksjdglaksdj</p>
       <button className='p-4 bg-gray-600 m-4 shadow-md'>Click Me</button>
       </div>
       </div>

    </div>
  )
}

export default Hero