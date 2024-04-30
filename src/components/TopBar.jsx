"use client"
import { useEffect, useState } from 'react';
import AddressLeft from "./AddressLeft";
import AddressRight from "./AddressRight";
import TopMarque from "./TopMarque";

export default function TopBar() {
  const [siteData, setSiteData] = useState(null);

  async function fetchSiteSettings() {
    try {
      const response = await fetch('http://aptechwp.webhostingdubai.net/wp-json/wp/v2/pages/6584/');
      if (!response.ok) {
        throw new Error('Failed to fetch site settings');
      }
      const data = await response.json();
      // Handle the data here
      setSiteData(data);
    } catch (error) {
      console.error('Error fetching site settings:', error);
    }
  }

  useEffect(() => {
    fetchSiteSettings();
  }, []);

  return (
    <div className='bg-black text-white flex justify-center'>
      <div className='container max-w-7xl flex justify-between py-2'>
        {siteData && siteData.acf && ( // Check if siteData and siteData.acf are not null
          <>
            <AddressLeft address={siteData.acf.dubai_location} map={siteData.acf.dubai_location_map}  />
            <TopMarque margue={siteData.acf.margue} />
            <AddressRight address={siteData.acf.sharjah_location} map={siteData.acf.sharjah_location_map} />
          </>
        )}
      </div>
    </div>
  );
}
