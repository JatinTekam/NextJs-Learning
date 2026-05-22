import React from 'react'


const Hero = () => {
  return (
    <div className='w-250 h-screen flex flex-col m-auto  mt-2 items-center text-center justify-center'>
      <h1 className='text-6xl font-bold mb-20'>The React Framework for the Web</h1>
      <p className='text-xl w-170 leading-normal ' style={{color:"rgb(136, 136, 136)"}}>Used by some of the {"world's"} largest companies, Next.js enables you to create <span className='text-white'>high-quality web applications</span> with the power of React components.</p>
      <div className='mt-14 mb-6'>
        <button className='mr-6 bg-white text-black px-4 py-3 rounded-lg cursor-pointer'>Get Started</button>
        <button className='px-4 py-3 rounded-xl cursor-pointer border border-gray-500'>Learn Next.js</button>
      </div>
        <p style={{color:"rgb(136, 136, 136)"}}>~ npx create-next-app@latest</p>
    </div>
  )
}

export default Hero
