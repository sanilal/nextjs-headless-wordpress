import CourseCategoryTabItem from './CourseCategoryTabItem'
import { FaLaptopCode, FaPhotoVideo, FaCogs, FaBookReader  } from "react-icons/fa";

export default function CourseCategoryTabs() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h2 className='text-3xl font-bold mb-4'>Courses Offered</h2>
        <div className="flex justify-around max-w-5xl">
          <CourseCategoryTabItem title="IT Courses" icon={<FaLaptopCode />} />
          <CourseCategoryTabItem title="Multimedia Courses" icon={<FaPhotoVideo />} />
          <CourseCategoryTabItem title="Engineering Courses" icon={<FaCogs />} />
          <CourseCategoryTabItem title="Vacation Courses" icon={<FaBookReader />} />
        </div>
       
    </div>
  )
}
