import React from 'react';
import { faClose, faCopy, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'flowbite-react';
import Swal from 'sweetalert2';

export default function ModalAmplop({ onClose, visible }) {
    // 1. Guard Clause untuk mencegah render jika belum visible
    if (!visible) return null;

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        Swal.fire({
            html: `Berhasil menyalin rekening: <br><b>${text}</b>`,  
            icon: 'success',
            confirmButtonColor: '#413327',
            confirmButtonText: 'OKE',
        });
    };

    const openWA = (phone) => {
        window.open(`https://api.whatsapp.com/send?phone=${phone}`, "_blank");
    };

    return (
        <Modal
            show={visible}
            onClose={onClose}
            size="4xl"
        >
            {/* 2. Gunakan div standar di dalam Modal untuk menghindari error Modal.Body undefined */}
            <div className="bg-[#413327] rounded-lg shadow-lg p-6 relative">
                {/* Tombol Close Custom */}
                <div className='flex justify-end'>
                    <button onClick={onClose} className='py-2 px-2 text-2xl text-white hover:scale-110 transition-transform'>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>

                <div className="space-y-6">
                    <div className='text-5xl custom-font-2 text-center text-white'>Berikan Amplop</div>
                    <p className='text-center font-medium text-white custom-font-3 md:text-xl'>
                        Bagi yang ingin memberikan amplop sebagai hadiah untuk pernikahan kami, silakan transfer ke rekening ya 😊
                    </p>
                    
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                        {/* Item Rekening */}
                        {[
                            { bank: 'BSI', norek: '0344863794', nama: 'Velida Apria Ningrum', wa: '6285728006013' },
                            { bank: 'MANDIRI', norek: '1780007096809', nama: 'M. Amin Iqbaal Alam', wa: '6285156964141' },
                            { bank: 'BLU (BCA)', norek: '008777453987', nama: 'M. Amin Iqbaal Alam', wa: '6285156964141' }
                        ].map((item, index) => (
                            <div key={index} className='flex flex-col bg-[#dfc4a7] rounded-lg p-4 text-center'>
                                <h1 className='font-bold text-[#413327] text-lg'>{item.bank}</h1>
                                <p className='text-[#413327] font-mono'>{item.norek}</p>
                                <p className='text-[#413327] text-xs mb-3'>{item.nama}</p>
                                <button onClick={() => copyToClipboard(item.norek)} className='py-2 bg-gray-500 rounded-md text-white hover:bg-gray-600 mb-2 text-sm'>
                                    <FontAwesomeIcon icon={faCopy} className="mr-2" /> Salin
                                </button>
                                <button onClick={() => openWA(item.wa)} className='py-2 bg-green-600 rounded-md text-white hover:bg-green-700 text-sm'>
                                    <FontAwesomeIcon icon={faMessage} className="mr-2" /> WA
                                </button>
                            </div>
                        ))}
                    </div>

                    <p className='text-center font-medium text-white custom-font-3 md:text-xl mt-4'>
                        Untuk konfirmasi pengiriman Amplop boleh ke nomor Whatsapp mempelai. Terimakasih 😊🙏
                    </p>
                </div>
            </div>
        </Modal>
    );
}