import { FaMapMarkerAlt } from "react-icons/fa";

export default function AddressLeft({address, map}) {
  return (
    <a href={map} target="_blank" className='flex min-w-[120px] text-sm flex-grow border-r pr-2 pt-0 border-r-silver-chalice text-silver-chalice items-center hover:text-white'><FaMapMarkerAlt className="mr-2 mt-1 text-lg" />
    {address}</a>
  )
}
