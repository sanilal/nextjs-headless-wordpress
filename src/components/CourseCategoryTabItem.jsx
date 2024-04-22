import { FaLaptopCode, FaPhotoVideo, FaCogs, FaBookReader  } from "react-icons/fa";


export default function CourseCategoryTabItem({title, icon}) {
  return (
    <div className="flex flex-col justify-between items-center group">
      <button className="flex flex-col justify-center items-center p-6 coursetab bg-lily-white hover:bg-white outline-none active:bg-white focus:bg-white active:text-fire-engine-red hover:text-fire-engine-red focus:text-fire-engine-red active:font-semi-bold hover:font-semi-bold focus:font-semi-bold ">
        {icon}
        {title}
      </button>
        <div className="w-0 h-0 border-l-[7px] border-l-transparent border-t-[10px] border-t-white border-r-[7px] border-l-cyan-lime border-r-transparent"></div>
    </div>
  )
}
