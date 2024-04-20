import AddressLeft from "./AddressLeft";
import AddressRight from "./AddressRight";
import TopMarque from "./TopMarque";

export default function TopBar() {
  return (
    <div className='bg-black text-white flex justify-center'>
        <div className='container max-w-7xl flex justify-between py-2'>
            <AddressLeft />
            <TopMarque />
            <AddressRight />
        </div>
    </div>
  )
}
