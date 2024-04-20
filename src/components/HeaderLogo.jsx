import Image from 'next/image'
import HeaderContact from './HeaderContact'

export default function HeaderLogo() {
  return (
   <div className="flex justify-center">
     <div className='container max-w-7xl flex flex-col justify-center py-2 items-center'>
        <Image 
          src={"/aptech-computer-training-dubai.svg"} 
          width={700} height={65.77} 
          className='object-fill'
        />
        <HeaderContact />
    </div>
   </div>
  )
}
