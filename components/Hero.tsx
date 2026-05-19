import React from 'react'
import heroImg from "@/public/jumbotron.jpg"
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      <Image src={heroImg} height={500} width={920} alt="Hero Image"  style={{ objectFit: "cover" }} className='mx-auto mt-6 rounded-xl'/>
    </div>
  )
}

export default Hero
