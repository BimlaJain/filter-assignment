import React, { useState } from 'react'
import CustomButton from '../../common/CustomButton'
import { Search } from '../../utils/icons'

const Header = () => {
    const handleSubmit = (e) => (
        e.preventDefault()
    )
    return (
        <div className='max-w-[1160px] mx-auto px-4'>
            <div className='w-full flex items-center justify-between shadow-[0px_10px_10px_0px] shadow-lightGray rounded-[20px] pl-[38px] pr-3 py-[10px] gap-4 max-md:px-3'>
                <a href="#logo"><img src="../assets/images/png/logo.png" alt="logo" className='md:h-[26.42px] ' /></a>
                <form onSubmit={handleSubmit} className='border border-gray max-w-[650px] max-md:hidden max-xl:max-w-[500px] max-lg:max-w-[300px] w-full rounded-full flex items-center pr-[7px] overflow-hidden'>
                    <input type="text" placeholder='What do you feel like listening to right now ?' className='w-[95%] px-[30px] pt-[13px] pb-[14px] outline-none !text-lightBlack placeholder:text-lightBlack' />
                    <CustomButton icon={<Search myClass="transition-all duration-300 group-hover:fill-black" />} myClass="group flex items-center justify-center hover:!bg-white !rounded-full py-[10.34px] px-[10.34px] !bg-customBlack" />
                </form>
                <CustomButton icon={<Search myClass="transition-all duration-300 group-hover:fill-black" />} myClass="flex group hover:!bg-white items-center md:hidden justify-center !rounded-full !py-[10.34px] !px-[10.34px] !bg-customBlack" />
                <div className='flex items-center gap-5 max-sm:gap-2'>
                    <CustomButton text="Login" myClass="!border-none text-customBlack !font-normal hover:bg-black px-[25px] py-[9px]  hover:text-white transition-all duration-500" />
                    <CustomButton text="Sign Up" myClass="!bg-customBlack px-[26px] py-[9.5px] text-white !border-none hover:!bg-transparent hover:text-black transition-all duration-500" />
                </div>
            </div>
        </div>
    )
}

export default Header