import Link from "next/link";
import { BsTelephone , BsClock  } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";



export default function HeaderContact({headeremail, headertel, working}) {
  return (
    <div className="flex justify-center items-center gap-3 pt-2">
      <Link 
        href={`tel:${headertel}`}
        className="flex items-center gap-1 text-black font-bold text-sm"
      >
        <BsTelephone  />
        <span>{headertel}</span>
      </Link>
      <Link
      href={`mailto:${headeremail}`}
      className="flex items-center gap-1 text-black font-bold text-sm"
      >
      <AiOutlineMail />
      {headeremail}
      </Link>
      <div className="flex items-center gap-1 text-black font-bold text-sm" >
      <BsClock />
      {working}

      </div>
      
    </div>
  )
}
