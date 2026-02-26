import { faClose, faCopy, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal } from 'flowbite-react'
import React from 'react'
import Swal from 'sweetalert2'

export default function modalKado({ visible, onClose }) {

    const copyalamat = (txt) => {
        navigator.clipboard.writeText(txt);
        Swal.fire({
            text: 'Berhasil Salin Alamat!',
            icon: 'success',
            confirmButtonColor: '#413327',
            confirmButtonText: 'OKE',
          })
    }

    // Fungsi wapria dengan auto-chat
    const wapria = (alamat) => {
        const pesan = `Assalamualaikum Wr. Wb.\nSaya ingin konfirmasi apakah alamat ${alamat} nya sesuai? \nDikarenakan ingin mengirimkan kado pernikahan dan bisa kapan?`;
        window.open(`https://api.whatsapp.com/send?phone=6285156964141&text=${encodeURIComponent(pesan)}`, "_blank" );
    }

    const wawanita = (alamat) => {
        const pesan = `Assalamualaikum Wr. Wb.\nSaya ingin konfirmasi apakah alamat ${alamat} nya sesuai? \nDikarenakan ingin mengirimkan kado pernikahan dan bisa kapan?`;
        window.open(`https://api.whatsapp.com/send?phone=6285816771524&text=${encodeURIComponent(pesan)}`, "_blank" );
    }

    return (
        <React.Fragment>
            <Modal
                show={visible}
                onClose={onClose}
                position="center"
                size="7xl"
            >
                <Modal.Body className='bg-[#413327] rounded-lg border-0 shadow-lg px-6 md:px-12 py-8'>
                    <div className='flex justify-end'>
                        <button onClick={onClose} className='py-3 px-2 duration-300 text-2xl hover:scale-110 font-bold text-white'>
                            <FontAwesomeIcon icon={faClose} />
                        </button>
                    </div>
                    <div className="space-y-8">
                        <div className='text-5xl custom-font-2 text-center text-white'>Kirim Kado</div>
                        
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-4 px-4'>
                            
                            {/* Alamat 1 (Gresik) */}
                            <div className='flex flex-col'>
                                <div className='bg-[#dfc4a7] rounded-lg py-6 px-6 mb-3 flex-grow flex items-center justify-center min-h-[140px]'>
                                    <h1 className='text-center font-medium text-[#413327] text-lg lg:text-xl'>
                                        Jl. Intan 1/19 Perum PPS (Pondok Permata Suci), Ds. Suci, RT.03/01,
                                        Kec. Manyar, Kab. Gresik, Jawa Timur
                                    </h1>
                                </div>
                                <button 
                                    onClick={() => copyalamat('Jl. Intan 1/19 Perum PPS, Ds. Suci, RT.03/01, Kec. Manyar, Kab. Gresik, Jawa Timur')} 
                                    className='py-3 bg-gray-500 rounded-lg w-full mb-2 text-white hover:bg-gray-700 transition-colors font-semibold'
                                >
                                    <FontAwesomeIcon icon={faCopy} className="mr-2" />
                                    Salin Alamat (Gresik)
                                </button>
                                <button 
                                    onClick={() => wapria('Jl. Intan 1/19 Perum PPS, Gresik')} 
                                    className='py-3 bg-green-600 rounded-lg w-full mb-4 text-white hover:bg-green-700 transition-colors font-semibold'
                                >
                                    <FontAwesomeIcon icon={faMessage} className="mr-2" />
                                    Konfirmasi via Whatsapp
                                </button>
                            </div>

                            {/* Alamat 2 (Lamongan) */}
                            <div className='flex flex-col'>
                                <div className='bg-[#dfc4a7] rounded-lg py-6 px-6 mb-3 flex-grow flex items-center justify-center min-h-[140px]'>
                                    <h1 className='text-center font-medium text-[#413327] text-lg lg:text-xl'>
                                        Dsn. Gempol RT001/RW005 Ds. Gedangan Kec. Sukodadi Kab. Lamongan
                                    </h1>
                                </div>
                                <button 
                                    onClick={() => copyalamat('Dsn. Gempol RT001/RW005 Ds. Gedangan Kec. Sukodadi Kab. Lamongan, Jawa Timur')} 
                                    className='py-3 bg-gray-500 rounded-lg w-full mb-2 text-white hover:bg-gray-700 transition-colors font-semibold'
                                >
                                    <FontAwesomeIcon icon={faCopy} className="mr-2" />
                                    Salin Alamat (Lamongan)
                                </button>
                                <button 
                                    onClick={() => wawanita('Dsn. Gempol RT001/RW005 Ds. Gedangan Kec. Sukodadi Kab. Lamongan, Jawa Timur')} 
                                    className='py-3 bg-green-600 rounded-lg w-full mb-4 text-white hover:bg-green-700 transition-colors font-semibold'
                                >
                                    <FontAwesomeIcon icon={faMessage} className="mr-2" />
                                    Konfirmasi via Whatsapp
                                </button>
                            </div>

                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}