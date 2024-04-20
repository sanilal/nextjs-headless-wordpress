import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import Dropdown from "./Dropdown";

export default function HeaderNav() {
  return (
    <div className='flex justify-between'>
        <div className="flex grow">
          <Link href="/">Home</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Courses
            <Dropdown />
          </Link>
        </div>
        <div className="">
        <IoIosSearch />
        </div>

    </div>
  )
}
