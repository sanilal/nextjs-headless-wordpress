import Image from 'next/image'
import React from 'react'
import HeaderNav from './HeaderNav'

export default function HomeSlider() {
  return (
    <div className='flex flex-col relative'>
        <HeaderNav />
        <Image src={"/learn-machine-learning.webp"} width={1903} height={700} className='object-fill' />
    </div>
  )
}
