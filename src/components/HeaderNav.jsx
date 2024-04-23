import Link from "next/link";
import { IoIosSearch, IoIosClose } from "react-icons/io";
import Dropdown from "./Dropdown";
import { useState } from "react";


export default function HeaderNav() {
  const [searchVisible, setSearchVisible] = useState(false)
  const showSearchField =  () => setSearchVisible(!searchVisible);
 //console.log(searchVisible);
  return (
    <div className='flex flex-col justify-center items-center mx-auto absolute w-full z-50'>
      <div className="flex justify-between container max-w-7xl bg-very-dark-blue text-white py-2 px-4">
        <div className="flex grow gap-6">
          <Link href="/">Home</Link>
          <Link href="/">About Us</Link>
          <Dropdown />
          <Link href="/">Corporate</Link>
          <Link href="/">Summer Courses</Link>
          <Link href="/">Contact</Link>
          
        </div>
        <div className="">
         {
          searchVisible ? (
            <IoIosClose className="text-fire-engine-red cursor-pointer text-2xl font-semibold" onClick={showSearchField} />
          ):(
            <IoIosSearch className="text-black-coral cursor-pointer text-2xl font-semibold" onClick={showSearchField} />
          )
         }
       
        </div>
    </div>
    <div className={`flex relative justify-between container max-w-7xl ${searchVisible ? '' : 'hidden'}`}>
      <input type="text" className="bg-gray82 focus:outline-none w-full text-white py-4 px-4" />
      <button className="focus:outline-none absolute text-black font-semibold z-50 right-0 top-0 text-2xl bg-white hover:bg-fire-engine-red py-4 px-4 hover:text-white"><IoIosSearch /></button>
    </div>

    </div>
  )
}
