"use client"
import { useState } from 'react';
import CourseCategoryTabItem from './CourseCategoryTabItem'
import { FaLaptopCode, FaPhotoVideo, FaCogs, FaBookReader  } from "react-icons/fa";

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
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit minus vitae eaque commodi quaerat provident corporis error ut velit ipsum sapiente repudiandae, accusantium omnis illo?
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
