"use client"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import Image from 'next/image'
import HeaderNav from './HeaderNav'

export default function HomeSlider() {
  const fadeImages = [
    "/learn-machine-learning.webp",
    "/it-training-in-dubai.webp",
    "/summer-course-banner-1.jpg",
]
const zoomInProperties = {
  scale:1, // how large image can transform
  duration:5000, // image change duration
  transitionDuration:300, // transition per image duration
  infinity:true, //loop the transition infinity

  //icons
  prevArrow:(
      <div className="ml-10 top-40 md:top-72">
          <IoIosArrowDropleftCircle className="h-8 w-8 text-white cursor-pointer" />
      </div>
  ),
  nextArrow:(
      <div className="mr-10 top-40 md:top-72">
          <IoIosArrowDroprightCircle className="h-8 w-8 text-white cursor-pointer" />
      </div>
  ),
}
  return (
    <div className='flex flex-col relative'>
        <HeaderNav />
        <div className="w-full h-auto relative z-0">
        <Fade >
            {fadeImages.map((each, index) => (
                <div key={index} className="each-fade flex justify-center md:items-center items-start w-screen h-auto relative">  
                <Image className="w-screen object-fill" src={each} width={1920} height={766} />
                <h1 className="absolute md:top-60 top-24 -inset-x-1/4 text-center z-10 md:text-6xl text-4xl bold text-white transrobotics">Welcome</h1>
                <p className="absolute md:top-70 top-36 -inset-x-1/4 text-center z-10 md:text-4xl text-2xl bold text-white">Welcome</p>
                </div>
            ))}
        </Fade>
    </div>
    </div>
  )
}
