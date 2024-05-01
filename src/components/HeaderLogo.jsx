"use client"
import Image from 'next/image'
import HeaderContact from './HeaderContact'
import { useEffect, useState } from 'react'

export default function HeaderLogo() {
  const [siteData, setSiteData] = useState(null)

  async function fetchSiteSettings(){
    try{
      const response = await fetch("http://aptechwp.webhostingdubai.net/wp-json/wp/v2/pages/6584/")
      if (!response.ok) {
        throw new Error("Failed to fetch site settings");
      }
      const data = await response.json();
      console.log(data)

      setSiteData(data);
    }
    catch(error) {
      console.error('Error fetching site settings:', error);
    }
  }
useEffect(()=>{
  fetchSiteSettings()
}, [])

  return (
   <div className="flex justify-center">
     <div className='container max-w-7xl flex flex-col justify-center py-2 items-center'>
     {siteData && siteData.acf && (
       <>
        <a href='/'><Image 
          src={siteData.acf.header_logo} 
          width={700} height={65.77} 
          className='object-fill'
        /></a>
        <HeaderContact headeremail={siteData.acf.header_email} headertel={siteData.acf.header_tel} working={siteData.acf.working_hours} />
       </>
     )}
    </div>
   </div>
  )
}
