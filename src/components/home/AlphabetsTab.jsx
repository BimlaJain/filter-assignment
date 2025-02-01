import React, { useState } from "react";

import {  useSearchParams } from "react-router-dom";
import { ALPHABET_LIST } from '../../utils/helper'

const AlphabetsTab = () => {
    const [selectedLetter, setSelectedLetter] = useState(ALPHABET_LIST[0]);
    const [searchParams, setSearchParams] = useSearchParams();
    const handleChange = (letter) => {
        const newName = letter.toUpperCase();
        setSelectedLetter(newName);
        setSearchParams({ ...searchParams, letter: letter.toLowerCase() });
    };
    return (
        <div className="border-y lg:pt-[42px] border-gray lg:pb-[37px] md:py-8 py-6 bg-off-white">
            <div className="container">
                <div className="flex items-center lg:justify-center gap-1  max-xl:overflow-x-auto">
                    {ALPHABET_LIST.map((item, index) => (
                        <p
                            onClick={() => handleChange(item)}
                            key={index}
                            className={`flex items-center cursor-pointer hover:bg-customBlack max-sm:pt-[5px] max-sm:pb-[6px] max-sm:pr-[10px] max-sm:pl-[11px] size-[30px] justify-center rounded-full transition-all duration-300 hover:text-white hover:font-medium text-black text-xs leading-custom-xl ${selectedLetter === item.toUpperCase() ? "bg-customBlack text-white hover:bg-customBlack" : ""}`}
                        >
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AlphabetsTab