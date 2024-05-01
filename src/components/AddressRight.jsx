import { FaMapMarkerAlt } from "react-icons/fa";
export default function AddressRight({ address, map }) {
  return (
    <div className='flex px-2 flex-grow'>
       <a href={map} target="_blank" className="flex border-l pr-2 pt-0 min-w-[140px] text-sm border-l-silver-chalice text-silver-chalice items-center hover:text-white"><FaMapMarkerAlt className="ml-2 mr-2 mt-1 text-lg" />{address}</a>
        
    </div>
  )
}
