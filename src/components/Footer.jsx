import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='w-full bg-black pt-10'>
      <div className='flex justify-between container max-w-7xl mx-auto py-6'>
        <div className="">
            <h2 className='text-white text-2xl uppercase mb-4'>Our Courses</h2>
        </div>
        <div className="text-white">
            <h2 className='text-white text-2xl uppercase mb-4'>Contact Us</h2>
            <div className="flex gap-2">
              <FaMapMarkerAlt /><span>Address 702, Al Tawhidi II <br />
Near Sharaf DG Metro Station Exit 1, <br />
Bur Dubai, Dubai, UAE <br />

</span>

            </div>
            <div className="flex gap-2">
            <a href="#" className="text-white hover:text-fire-engine-red flex gap-2"><FaPhoneAlt />Phone +971 5 564 48331</a>
            </div>
            <div className="flex gap-2">
              <FaMapMarkerAlt /><span>M3, HSBC Bank Buillding, <br />
King Faisal Street, <br />
Sharjah, UAE

</span>
            </div>
            <div className="flex gap-2">
            <a href="#" className="text-white hover:text-fire-engine-red flex gap-2"><FaPhoneAlt />Phone +971 5 564 48331</a>
            </div>
            <div className="flex gap-2">
              <FaEnvelope /><span>info@mycompany.com</span>
            </div>
        </div>
    </div>
    </div>
    
  )
}
