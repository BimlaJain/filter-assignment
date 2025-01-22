import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import CustomButton from '../../common/CustomButton';
import { ALPHABET_LIST } from '../../utils/helper';
import { DownArrow } from '../../utils/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const Lyrics = () => {
  const [text, setText] = useState("HIT ME HARD AND SOFT");
  const [alphaText, setAlphaText] = useState();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref to manage dropdown outside click
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const currentDomain = params.get('value');
  const currentLetter = params.get('letter');

  // Store the state in localStorage or sessionStorage on change
  useEffect(() => {
    if (currentDomain && currentLetter) {
      // Update text and alphaText based on query params
      const savedText = `HIT ME HARD AND ${currentDomain.toUpperCase()}`;
      const savedAlphaText = currentLetter.toUpperCase();
      setText(savedText);
      setAlphaText(savedAlphaText);

      // Store in localStorage
      localStorage.setItem('currentDomain', currentDomain);
      localStorage.setItem('currentLetter', currentLetter);
      localStorage.setItem('text', savedText);
      localStorage.setItem('alphaText', savedAlphaText);
    } else {
      // If no params in URL, get values from localStorage
      const storedDomain = localStorage.getItem('currentDomain');
      const storedLetter = localStorage.getItem('currentLetter');
      const storedText = localStorage.getItem('text');
      const storedAlphaText = localStorage.getItem('alphaText');

      if (storedDomain && storedLetter) {
        setText(storedText || "HIT ME HARD AND SOFT");
        setAlphaText(storedAlphaText || '');
      }
    }
  }, [currentDomain, currentLetter]);

  const handleDomainChange = (newDomain) => {
    navigate(`?value=${newDomain}`);
    setText(`HIT ME HARD AND ${newDomain.toUpperCase()}`);
    // Store in localStorage
    localStorage.setItem('currentDomain', newDomain);
    localStorage.setItem('text', `HIT ME HARD AND ${newDomain.toUpperCase()}`);
  };

  const handleChange = (newText) => {
    navigate(`?value=${currentDomain}&letter=${newText.toLowerCase()}`);
    setAlphaText(`${newText.toUpperCase()}`);
    // Store in localStorage
    localStorage.setItem('currentLetter', newText.toLowerCase());
    localStorage.setItem('alphaText', newText.toUpperCase());
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='pt-[10px] pb-10'>
      <Header />
      <div className='max-w-[1160px] mx-auto px-4'>
        <div className='flex items-center gap-[15px] pt-[17px] max-xl:overflow-x-auto pb-2'>
          <div className='flex items-center gap-[5px]'>
            <CustomButton
              customOnClick={() => handleDomainChange("all")}
              myClass={`!text-xs px-[13.48px] py-[5.84px] hover:!bg-customBlack hover:text-white ${currentDomain === "all" ? "bg-customBlack text-white" : "text-customBlack"}`}
              text="All"
            />
            <CustomButton
              customOnClick={() => handleDomainChange("pop")}
              myClass={`!text-xs py-[5.84px] px-[11.37px] hover:!bg-customBlack hover:text-white ${currentDomain === "pop" ? "bg-customBlack text-white" : "text-customBlack"}`}
              text="Pop"
            />
            <CustomButton
              customOnClick={() => handleDomainChange("rock")}
              myClass={`!text-xs py-[5.84px] px-[11.8px] hover:!bg-customBlack hover:text-white ${currentDomain === "rock" ? "bg-customBlack text-white" : "text-customBlack"}`}
              text="Rock"
            />
            {/* More button with dropdown */}
            <div ref={dropdownRef} className="relative">
              <CustomButton
                customOnClick={toggleDropdown}
                myClass={`!text-xs py-[5.84px] px-[9.2px] hover:!bg-customBlack hover:text-white group flex items-center gap-[5px] ${currentDomain === "more" ? "bg-customBlack text-white" : "text-customBlack"}`}
                text="More"
                icon={<DownArrow myClass="group-hover:stroke-white transition-all duration-300" />}
              />
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute px-4  left-0 mt-2 flex-col  bg-white text-black rounded-md shadow-lg z-10">
                  <CustomButton
                    customOnClick={() => {
                      handleDomainChange("option1");
                      setIsDropdownOpen(false);
                    }}
                    myClass="text-xs px-3  hover:bg-customBlack hover:text-white !border-none"
                    text="Option A"
                  />
                  <CustomButton
                    customOnClick={() => {
                      handleDomainChange("option2");
                      setIsDropdownOpen(false);
                    }}
                    myClass="text-xs px-3 hover:bg-customBlack hover:text-white !border-none"
                    text="Option B"
                  />
                  <CustomButton
                    customOnClick={() => {
                      handleDomainChange("option3");
                      setIsDropdownOpen(false);
                    }}
                    myClass="text-xs px-3 !text-center  hover:bg-customBlack hover:text-white !border-none"
                    text="Option C"
                  />
                </div>
              )}
            </div>
          </div>
          <div className='flex items-center gap-[2px]'>
            {ALPHABET_LIST.map(letter => (
              <CustomButton
                key={letter}
                customOnClick={() => handleChange(letter)}
                myClass={`!text-xs py-[5.84px] px-[11.37px] hover:!bg-customBlack hover:text-white !rounded-full !border-none ${currentLetter === letter.toLowerCase() ? "bg-customBlack text-white" : "text-customBlack"}`}
                text={letter}
              />
            ))}
          </div>
        </div>
        <div className='bg-customBlack rounded-[22px] flex pl-12 pr-[43px] justify-between pt-[38px] mt-[35px] relative pb-[43px] max-sm:flex-wrap max-sm:pt-4 max-sm:px-5 max-sm:pb-20'>
          <h1 className='font-montserrat xl:text-5xl leading-custom-2xl text-white font-bold md:text-4xl max-sm:text-center text-2xl'>{text}</h1>
          <img src="../assets/images/png/girl-hero.png" alt="hero" className='size-[261px] max-lg:size-48 max-sm:mx-auto max-sm:mt-4 pointer-events-none' />
          <div className='absolute flex items-center gap-[26px] -bottom-16 max-lg:-bottom-10 max-sm:-bottom-6'>
            <img src="../assets/images/png/girl-dp.png" alt="profile" className='size-[206px] max-lg:size-32 max-sm:size-20 pointer-events-none' />
            <div>
              <p className='font-semibold text-custom-3xl max-lg:text-2xl leading-[42px] text-white max-sm:text-lg'>Billie Eilish {alphaText}</p>
              <p className='font-montserrat font-medium text-base leading-5 text-white/70 pt-[5px] max-lg:pt-0 pb-[21px] max-sm:text-sm'>Released May 17, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lyrics;
