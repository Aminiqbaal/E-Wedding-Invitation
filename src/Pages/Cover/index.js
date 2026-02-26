import { faEnvelopeOpen, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { nama_pasangan } from '../../Constants/global'
import db from '../../Constants/firebase'
import { doc, getDoc } from 'firebase/firestore'
import hiasan1 from '../../Img/hiasan-1.png'

export default function Cover({ transformUp, onClick }) {
  const [receiverName, setReceiverName] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const to = params.get('to')

    if (!to) return

    // const fetchReceiver = async () => {
    //   try {
    //     const docRef = doc(db, 'receiver-invitation', to.toLowerCase())
    //     const docSnap = await getDoc(docRef)

    //     if (docSnap.exists()) {
    //       const data = docSnap.data()
    //       const namaTamu = data.nama
    //       // Mengambil field Keterangan dan kelamin (case sensitive sesuai Firestore)
    //       const keterangan = data.Keterangan ? data.Keterangan.toLowerCase() : ''
    //       const gender = data.kelamin ? data.kelamin.toLowerCase() : ''

    //       let sapaan = ""

    //       // Logika Role Sapaan
    //       if (keterangan === 'kang') {
    //         sapaan = `Kang ${namaTamu}`
    //       } else if (keterangan === 'ning') {
    //         sapaan = `Ning ${namaTamu}`
    //       } else if (keterangan === 'bpk') {
    //         sapaan = `Bpk. ${namaTamu}`
    //       } else if (keterangan === 'ibu') {
    //         sapaan = `Ibu ${namaTamu}`
    //       } else if (keterangan === 'sdr') {
    //         sapaan = `Saudara. ${namaTamu}`
    //       } else if (keterangan === 'sdri') {
    //         sapaan = `Saudari ${namaTamu}`
    //       } 
    //       // Fallback jika Keterangan kosong, gunakan jenis kelamin
    //       else if (gender.includes('laki')) {
    //         sapaan = `Bpk. ${namaTamu}`
    //       } else if (gender.includes('perempuan')) {
    //         sapaan = `Ibu ${namaTamu}`
    //       } else {
    //         sapaan = namaTamu
    //       }

    //       setReceiverName(sapaan)
    //     } else {
    //       // Jika ID tidak ada di DB, tampilkan nama dari URL sebagai fallback
    //       setReceiverName(to.replace(/-/g, ' '))
    //     }
    //   } catch (error) {
    //     console.error('Error Firestore:', error)
    //   }
    // }
    const fetchReceiver = async () => {
      try {
        const docRef = doc(db, 'receiver-invitation', to.toLowerCase());
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const namaTamu = data.nama;
          
          // Ambil data field dan ubah ke huruf kecil
          const kelData = (data.kelamin || data.Kelamin || "").toLowerCase();
          const ketData = (data.keterangan || data.Keterangan || "").toLowerCase();
          
          const hasUmur = data.hasOwnProperty('umur') && data.umur !== null && data.umur !== '';
          const umur = hasUmur ? parseInt(data.umur) : null;

          // Definisi Kata Kunci Kelamin
          const isPria = ['lk', 'laki', 'pria'].some(key => kelData.includes(key)) || ['lk', 'kang', 'bpk'].includes(ketData);
          const isWanita = ['pr', 'perempuan', 'wanita', 'wn'].some(key => kelData.includes(key)) || ['pr', 'ning', 'ibu'].includes(ketData);

          let sapaan = "";

          // 1. PRIORITAS UTAMA: PRIA
          if (isPria) {
            if (umur !== null && umur > 30) {
              sapaan = `Bpk. ${namaTamu}`;
            } else {
              // Jika keterangan 'kang', panggil Kang, selain itu Saudara
              sapaan = (ketData === 'kang') ? `Kang ${namaTamu}` : `Saudara ${namaTamu}`;
            }
          } 
          // 2. PRIORITAS KEDUA: WANITA
          else if (isWanita) {
            if (umur !== null && umur > 30) {
              sapaan = `Ibu ${namaTamu}`;
            } else {
              // Jika keterangan 'ning', panggil Ning, selain itu Saudari
              sapaan = (ketData === 'ning') ? `Ning ${namaTamu}` : `Saudari ${namaTamu}`;
            }
          } 
          // 3. FALLBACK
          else {
            sapaan = namaTamu;
          }

          setReceiverName(sapaan);
        } else {
          setReceiverName(to.replace(/-/g, ' '));
        }
      } catch (error) {
        console.error('Error Firestore:', error);
      }
    };
    fetchReceiver()
  }, [])

  return (
    <div className={`fixed w-full h-full z-20 ${transformUp ? 'translate-y-[-100%] opacity-0' : ''} duration-700`}>
      <div className='absolute bg-[#dfc4a7] w-full h-full'></div>

      <div className='relative w-full h-full flex flex-col'>
        <div className='flex-grow flex items-center justify-center'>
          <div className='text-center'>
            <img src={hiasan1} alt='hiasan' className='w-[100px] mx-auto mb-8' />

            <div className='text-[#413327] custom-font-2 font-semibold text-5xl mb-4'>
              {nama_pasangan}
            </div>

            <div className='text-[#413327] font-bold text-lg mb-4'>
              Kepada Yth. <br/>
              <span className="text-2xl block mt-2">{receiverName || "Tamu Undangan"}</span>
            </div>

            <p className='text-[#413327] text-sm md:text-lg mb-6 mx-8 max-w-md'>
              Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk Berhadir Di Acara Pernikahan Kami.
            </p>

            <button
              type="button"
              onClick={onClick}
              className="text-white text-md bg-[#413327] hover:bg-[#31261d] font-bold rounded-xl px-5 py-3.5 shadow-lg active:scale-95 transition-transform"
            >
              <FontAwesomeIcon icon={faEnvelopeOpen} className="mr-2" /> Buka Undangan
            </button>
          </div>
        </div>

        <div className='w-full bg-[#333333]/10 p-4 custom-font-4 text-[#413327] text-center text-sm'>
          Created <FontAwesomeIcon icon={faHeart} className="text-red-500"/> by <a rel="noopener noreferrer" href='https://situdio.vercel.app/' target="_blank" className='font-bold border-b-[1px] border-[#413327]'>situdio.id</a>
        </div>
      </div>
    </div>
  )
}