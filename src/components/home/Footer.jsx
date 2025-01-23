import React from 'react';
import { FOOTER_DATA } from '../../utils/helper'
import { SOCIAL_LINKS } from '../../utils/helper'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='lg:pt-[67px] pt-10 bg-off-white lg:pb-[30px] pb-6'>
            <div className="container max-w-[1141px] mx-auto">
                <div className="flex max-lg:flex-wrap justify-between lg:pb-[89px] pb-10 max-lg:gap-[60px] max-md:gap-[30px]">
                    {FOOTER_DATA.map((section, index) => (
                        <div key={index}>
                            <h3 className='text-sm text-black font-semibold leading- custom-3xl lg:pb-[37px] pb-6'>
                                {section.title}
                            </h3>
                            {section.links.map((link, i) => (
                                <p key={i} className='text-sm font-normal leading-custom-3xl lg:pb-[22px] pb-4 cursor-pointer'>
                                    {link}
                                </p>
                            ))}
                        </div>
                    ))}
                    <div>
                        <h3 className='text-sm text-black font-semibold leading- custom-3xl pb-[26px]'>Follow us</h3>
                        {SOCIAL_LINKS.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target='_blank'
                                className='bg-white py-3 hover:bg-offwhite group transition-all duration-500 ease-in-out pl-[25px] pr-[14.45px] rounded-[10px] flex justify-between gap-[160px] mb-[14px]'
                            >
                                <p className='text-sm text-black font-semibold leading- custom-3xl pt-1'>
                                    {social.name}
                                </p>
                                <img
                                    className='group-hover:scale-125 transition-all duration-500 ease-in-out'
                                    src={`./assets/images/svg/${social.icon}`}
                                    alt={social.name}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className='border-b w-full border-gray'></div>
            <div className='flex md:justify-between max-w-[1141px] mx-auto lg:pt-[41px] md:pt-8 pt-6 px-4 max-sm:flex-col justify-center'>
                <p className='text-sm font-normal leading-custom-3xl max-sm:text-center'>
                    All rights reserved to Global Media Holdings Ltd. {currentYear}
                </p>
                <div className='flex gap-[41px] max-sm:justify-center max-sm:pt-4'>
                    <p className='text-sm font-normal leading-custom-3xl'>Privacy Policy</p>
                    <p className='text-sm font-normal leading-custom-3xl'>Terms of Use</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
