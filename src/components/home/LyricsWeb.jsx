import React, { useState } from 'react'
import Header from './Header'
import CustomButton from '../../common/CustomButton'
import { ALPHABET_LIST } from '../../utils/helper'
import { DownArrow } from '../../utils/icons'
import { useNavigate } from 'react-router-dom'

const Lyrics = () => {
  const [text, setText] = useState("HIT ME HARD AND SOFT")
  const [alphaText, setAlphaText] = useState()
  const navigate = useNavigate()

  const handleDomainChange = (newDomain) => {
    navigate(`?value=${newDomain}`);
    setText(`HIT ME HARD AND ${newDomain.toUpperCase()}`)
  };
  const handleChange = (newText) => (
    setAlphaText(`${newText}`)
  )
  return (
    <div className='pt-[10px] pb-10'>
      <Header />
      <div className='max-w-[1160px] mx-auto px-4'>
        <div className='flex items-center gap-[15px] pt-[17px] max-xl:overflow-x-auto pb-2'>
          <div className='flex items-center gap-[5px]'>
            <CustomButton customOnClick={() => handleDomainChange("all")} myClass="!text-xs px-[13.48px] py-[5.84px] !bg-black text-white hover:text-black hover:!bg-transparent" text="All" />
            <CustomButton customOnClick={() => handleDomainChange("pop")} myClass="!text-xs text-customBlack py-[5.84px] px-[11.37px] hover:!bg-customBlack hover:text-white" text="Pop" />
            <CustomButton customOnClick={() => handleDomainChange("rock")} myClass="!text-xs text-customBlack py-[5.84px] px-[11.8px] hover:!bg-customBlack hover:text-white" text="Rock" />
            <CustomButton customOnClick={() => handleDomainChange("more")} myClass="!text-xs text-customBlack py-[5.84px] px-[9.2px] hover:!bg-customBlack hover:text-white group flex items-center gap-[5px]" text="More" icon={<DownArrow myClass="group-hover:stroke-white transition-all duration-300" />} />
          </div>
          <div className='flex items-center gap-[2px]'>
            {ALPHABET_LIST.map(function (item, index) {
              return <a onClick={() => handleChange(item)} key={index} href="#link" className='flex items-center hover:bg-customBlack size-[29px] justify-center rounded-full transition-all duration-300 hover:text-white hover:font-medium text-black text-xs leading-[18px]'>{item}</a>
            })}
          </div>
        </div>
        <div className='bg-customBlack rounded-[22px] flex pl-12 pr-[43px] justify-between pt-[38px] mt-[35px] relative pb-[43px] max-sm:flex-wrap max-sm:pt-4 max-sm:px-5 max-sm:pb-20'>
          <h1 className='font-montserrat xl:text-5xl leading-custom-2xl text-white font-bold md:text-4xl max-sm:text-center text-2xl'>{text}</h1>
          <img src="../assets/images/png/girl-hero.png" alt="hero" className='size-[261px] max-lg:size-48 max-sm:mx-auto max-sm:mt-4 pointer-events-none' />
          <div className='absolute flex items-center gap-[26px] -bottom-16 max-lg:-bottom-10 max-sm:-bottom-6'>
            <img src="../assets/images/png/girl-dp.png" alt="profile" className='size-[206px] max-lg:size-32 max-sm:size-20 pointer-events-none' />
            <div>
              <p className='font-semibold text-custom-3xl max-lg:text-2xl leading-[42px] text-white max-sm:text-lg'>Billie Eilish {alphaText}</p>
              <p className='font-montserrat font-medium text-base leading-5 text-white/70 pt-[5px] max-lg:pt-0 pb-[21px] max-sm:text-sm'>Relesed May 17, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lyrics