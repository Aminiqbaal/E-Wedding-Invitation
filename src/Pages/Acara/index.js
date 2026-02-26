import React, { useEffect } from 'react'
import hiasan1 from '../../Img/hiasan-1.png'
import akad from '../../Img/akad.png'
import resepsi from '../../Img/resepsi.png'
import bgakad from '../../Img/compress/cover-akad.webp'
import bgresepsi from '../../Img/compress/cover-resepsi.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocation } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Acara() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className='my-16'>
        <div className='flex justify-center mb-8'>
          <img src={hiasan1} data-aos="fade-up" alt='hiasan1' className='w-[80px]' />
        </div>
        <h1 data-aos="fade-up" className='text-center text-4xl font-semibold custom-font-3 mx-4 mb-16 text-[#413327]'>Waktu & Lokasi <br /> Acara</h1>
        <div className='flex justify-center mb-8 mx-4'>
          <div id="acara" className='grid grid-cols-1 md:grid-cols-2 gap-16'>
            <div data-aos="fade-up" className='rounded-2xl relative bg-akad' style={{ backgroundImage: `url(${bgakad})` }}>
              <div className='absolute rounded-2xl w-full h-full bg-black/50'></div>
              <div className='relative py-16 px-8'>
                <center>
                  <img src={akad} className='w-[50px] mb-8' alt='akad' />
                </center>
                <h1 className='text-white font-bold text-5xl custom-font-2 mb-4 text-center'>Akad Nikah</h1>
                <center>
                  <div className='w-24 rounded-lg h-1 bg-white mb-4'></div>
                </center>
                <h1 className='text-white text-center font-normal arial mb-8'>RABU <br /> 11 JANUARI 2026 <br /> PUKUL 08.00 WIB - SELESAI</h1>
                <center>
                  <div className='w-24 rounded-lg h-1 bg-white mb-4'></div>
                </center>
                <h1 className='text-center text-white mb-8'><b>• Kediaman Mempelai Wanita •</b> <br />Dsn. Gempol RT001/RW005 Ds. Gedangan <br/> Kec. Sukodadi, Kab. Lamongan, Jawa Timur</h1>
              </div>
            </div>
            <div data-aos="fade-up" className='rounded-2xl relative bg-resepsi' style={{ backgroundImage: `url(${bgresepsi})` }}>
              <div className='absolute rounded-2xl w-full h-full bg-black/50'></div>
              <div className='relative py-16 px-8'>
                <center>
                  <img src={resepsi} className='w-[50px] mb-8' alt='resepsi' />
                </center>
                <h1 className='text-white font-bold text-5xl custom-font-2 mb-4 text-center'>Resepsi</h1>
                <center>
                  <div className='w-24 rounded-lg h-1 bg-white mb-4'></div>
                </center>
                <h1 className='text-white text-center font-normal arial mb-8'>KAMIS <br /> 12 JANUARI 2026 <br /> PUKUL 08.00 WIB - SELESAI</h1>
                <center>
                  <div className='w-24 rounded-lg h-1 bg-white mb-4'></div>
                </center>
                <h1 className='text-center text-white mb-8'><b>• Kediaman Mempelai Wanita •</b> <br />Dsn. Gempol RT001/RW005 Ds. Gedangan<br/> Kec. Sukodadi, Kab. Lamongan, Jawa Timur</h1>
              </div>
            </div>
          </div>
        </div>
        <center>
          {/* Lokasi */}
          <div data-aos="fade-up" className='max-w-4xl mx-6 rounded-xl'>
            <div className="mapouter mb-8">
              <div className="gmap_canvas">
                <iframe 
                  title='maps' 
                  className="gmap_iframe rounded-xl shadow-lg" 
                  width="100%" 
                  height="400px" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight="0" 
                  marginWidth="0" 
                  /* Gunakan URL format embed q= (query) + output=embed */
                  src="https://maps.google.com/maps?q=Masjid%20Darussalam%20Gempol%20Gedangan%20Sukodadi%20Lamongan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>
            </div>
            <center>
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                /* Link navigasi untuk tombol (Link yang Anda berikan) */
                href="https://maps.app.goo.gl/uX3L5q6pLpC8hRBe9" 
                className="text-white text-md bg-[#413327] hover:bg-[#31261d] font-bold rounded-xl px-5 py-3.5 mr-2 mb-2 inline-block"
              >
                <FontAwesomeIcon icon={faMapLocation} /> Lihat Lokasi
              </a>
            </center>
          </div>
        </center>
      </div>
    </>
  )
}
