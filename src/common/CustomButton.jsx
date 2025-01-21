import React from 'react'

const CustomButton = ({ myClass, text, icon, customOnClick }) => {
    return (
        <button onClick={customOnClick} className={`${myClass} border border-black rounded-[9px] text-nowrap font-medium text-sm leading-6 max-sm:px-3 max-sm:py-2 transition-all duration-300 max-sm:text-xs`}>{text}{icon}</button>
    )
}

export default CustomButton