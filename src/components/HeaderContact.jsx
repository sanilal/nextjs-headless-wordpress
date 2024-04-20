import Link from "next/link";
import { BsTelephone , BsClock  } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";



export default function HeaderContact() {
  return (
    <div className="flex justify-center items-center gap-3 pt-2">
      <Link 
        href="tel:971543903209"
        className="flex items-center gap-1"
      >
        <BsTelephone  />
        <span>+971 54 390 3209</span>
      </Link>
      <Link
      href="mailto:enquiry@aptech.ae"
      className="flex items-center gap-1"
      >
      <AiOutlineMail />
      enquiry@aptech.ae
      </Link>
      <div className="flex items-center gap-1" >
      <BsClock />
      9 AM to 9 PM

      </div>
      
    </div>
  )
}
