import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import Dropdown from "./Dropdown";

export default function HeaderNav() {
  return (
    <div className='flex justify-center absolute w-full'>
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
        <IoIosSearch className="text-black-coral cursor-pointer text-lg" />
        </div>
</div>
    </div>
  )
}
