import React from 'react'

const FeatureCard = ({title,desc}) => {
  return (
    <div className='w-90 p-2 h-50 rounded-xl cursor-pointer border border-gray-500 flex flex-col justify-center hover:bg-white hover:text-black transition-all duration-700'>
      <h2 className='text-2xl'>{title}</h2>
      <p className='text-sm' style={{color:"rgb(136, 136, 136)"}}>{desc}</p>
    </div>
  )
}

export default FeatureCard
