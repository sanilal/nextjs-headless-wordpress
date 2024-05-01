export default function TopMarque({margue}) {
  return (
    <div className='overflow-x-hidden m-auto flex flex-auto w-full mx-16'>
       <div className='animate-marquee whitespace-nowrap items-center text-lg'>
      {margue} <span className="w-32 inline-flex"></span> {margue} <span className="w-32 inline-flex"></span> {margue} <span className="w-32 inline-flex"></span>{margue} <span className="w-32 inline-flex"></span>
      </div>
      </div>
  )
}
