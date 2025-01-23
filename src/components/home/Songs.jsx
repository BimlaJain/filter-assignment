import React, { useState } from 'react';
import { SONGS_LIST } from '../../utils/helper';

const Songs = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [showCrossIcon, setShowCrossIcon] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setImageUrl(URL.createObjectURL(file));
        setShowCrossIcon(true);
    };

    const handleAddPlaceClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleRemoveImage = () => {
        setSelectedFile(null);
        setImageUrl(null);
        setShowCrossIcon(false);
    };

    return (
        <div className='lg:pt-14 pt-5'>
            <div className='container'>
                <h2 className='font-semibold lg:text-5xl md:text-4xl text-3xl text-black xl:-mb-4'>Songs</h2>
                <div className="md:flex justify-between items-center pb-[45px]">
                    <div className='lg:w-8/12 md:w-7/12 w-full max-lg:overflow-x-auto'>
                        <div className='overflow-x-auto whitespace-nowrap'>
                            <table className='w-full'>
                                <thead>
                                    <tr className='pb-[33px]'>
                                        <th></th>
                                        <th className='font-semibold sm:text-sm text-xs text-black text-left sm:w-6/12 w-5/12 pb-[33px] '>Song</th>
                                        <th className='font-semibold sm:text-sm text-xs text-black text-left pb-[33px]'>Release Date</th>
                                        <th className='font-semibold sm:text-sm text-xs text-black pb-[33px] text-right'>Times Played</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {SONGS_LIST.map((song, index) => (
                                        <tr key={index} className=''>
                                            <td className='text-lightzblack sm:text-sm text-xs lg:pb-[44px] pb-7 '>{String(index + 1).padStart(2, '0')}</td>
                                            <td className='font-semibold sm:text-sm text-xs text-black lg:pb-[44px] pb-7'>{song.title}</td>
                                            <td className='text-lightBlack font-normal sm:text-xs text-[10px] lg:pb-[44px] pb-7'>Nov 4, 2023</td>
                                            <td className='text-lightBlack font-normal sm:text-xs text-[10px] text-right lg:pb-[44px] pb-7'>{song.timesPlayed}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='relative lg:w-[300px] lg:h-[600px] md:w-[250px] md:h-[460px] w-full h-[300px]'>
                        {imageUrl ? (
                            <>
                                <img src={imageUrl} alt="Selected" className='w-full h-full object-cover rounded-[20px]' />
                                {showCrossIcon && (
                                    <div
                                        className='absolute top-2 right-2 text-white bg-black rounded-full cursor-pointer flex items-center justify-center'
                                        style={{ width: '24px', height: '24px' }}
                                        onClick={handleRemoveImage}
                                    >
                                        <span style={{ fontSize: '18px', lineHeight: '24px' }}>×</span>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className='w-full h-full bg-blue text-sm font-normal text-center text-white rounded-[20px] flex items-center justify-center cursor-pointer' onClick={handleAddPlaceClick}>
                                Add Place
                            </div>
                        )}
                    </div>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default Songs;