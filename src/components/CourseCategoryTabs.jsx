"use client"
import { useState } from 'react';
import CourseCategoryTabItem from './CourseCategoryTabItem'
import { FaLaptopCode, FaPhotoVideo, FaCogs, FaBookReader  } from "react-icons/fa";
import { CourseCard } from './CourseCard';

export default function CourseCategoryTabs() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className='flex flex-col justify-center items-center'>
        <h2 className='text-3xl font-bold mb-4'>Courses Offered</h2>
        <div className="flex justify-around max-w-5xl">
          <CourseCategoryTabItem 
            title="IT Courses" 
            icon={<FaLaptopCode />} 
            onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }} 
            data-toggle="tab" 
            role="tablist"
            
            />
          <CourseCategoryTabItem 
            title="Multimedia Courses" 
            icon={<FaPhotoVideo />}
            onClick={e => {
              e.preventDefault();
              setOpenTab(2);
            }} 
        data-toggle="tab" 
        role="tablist"
             />
          <CourseCategoryTabItem 
            title="Engineering Courses" 
            icon={<FaCogs />}
            onClick={e => {
              e.preventDefault();
              setOpenTab(3);
            }} 
        data-toggle="tab" 
        role="tablist"
            />
          <CourseCategoryTabItem 
            title="Vacation Courses" 
            icon={<FaBookReader />}
            onClick={e => {
              e.preventDefault();
              setOpenTab(4);
            }} 
            data-toggle="tab" 
            role="tablist"
            />
        </div>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <CourseCard />
                 
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <CourseCard />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <CourseCard />
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                <CourseCard />
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
