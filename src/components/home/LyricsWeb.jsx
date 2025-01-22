import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Header from './Header';
import CustomButton from '../../common/CustomButton';
import { ALPHABET_LIST } from '../../utils/helper';
import { DownArrow } from '../../utils/icons';

const Hero = () => {
  const { category = "all" } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [artistName, setArtistName] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const letter = searchParams.get("letter");
    if (letter) {
      setArtistName(letter.toUpperCase());
      setSelectedLetter(letter.toUpperCase());
    } else {
      setArtistName("");
      setSelectedLetter("");
    }
  }, [searchParams]);

  const handleChange = (letter) => {
    const newName = letter.toUpperCase();
    setArtistName(newName);
    setSelectedLetter(newName);
    setSearchParams({ ...searchParams, letter: letter.toLowerCase() });
  };

  const handleTextChange = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
    navigate(`/${category.toLowerCase()}`);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="pt-[11px] pb-12 bg-off-white lg:h-screen">
      <div className="container mx-auto">
      <Header />
        <div className="flex justify-center items-center gap-[15px] pt-[17px] max-xl:overflow-x-auto pb-2">
          <div className="flex items-center gap-[5px]">
            <CustomButton
              customOnClick={() => handleTextChange("all")}
              myClass={`${selectedCategory === "all" ? "bg-customBlack text-white" : ""} !text-xs text-customBlack !px-[13.48px] max-xl:!-ml-4 !py-[5.84px] hover:!bg-customBlack hover:text-white`}
              text="All"
            />
            <CustomButton
              customOnClick={() => handleTextChange("pop")}
              myClass={`${selectedCategory === "pop" ? "bg-customBlack text-white" : ""} !text-xs text-customBlack !py-[5.84px] !px-[11.37px] hover:!bg-customBlack hover:text-white`}
              text="Pop"
            />
            <CustomButton
              customOnClick={() => handleTextChange("rock")}
              myClass={`${selectedCategory === "rock" ? "bg-customBlack text-white" : ""} !text-xs text-customBlack !py-[5.84px] !px-[11.8px] hover:!bg-customBlack hover:text-white`}
              text="Rock"
            />
            <div className="relative">
              <CustomButton
                customOnClick={toggleDropdown}
                myClass={`${selectedCategory === "music" ? "bg-customBlack text-white" : ""} !text-xs text-customBlack !py-[5.84px] !px-[11px] hover:!bg-customBlack hover:text-white group flex items-center gap-[5px]`}
                text="More"
                icon={<DownArrow classStyle={`${selectedCategory === "music" ? "stroke-white" : ""} group-hover:stroke-white transition-all duration-300`} />}
              />
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md z-10">
                  <button
                    onClick={() => handleTextChange('pop')}
                    className="text-black !py-2 !px-4 hover:bg-customBlack hover:text-white w-full text-left"
                  >
                    Pop
                  </button>
                  <button
                    onClick={() => handleTextChange('rock')}
                    className="text-black !py-2 !px-4 hover:bg-customBlack hover:text-white w-full text-left"
                  >
                    Rock
                  </button>
                  <button
                    onClick={() => handleTextChange('music')}
                    className="text-black !py-2 !px-4 hover:bg-customBlack hover:text-white w-full text-left"
                  >
                    Music
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-[2px]">
            {ALPHABET_LIST.map((item, index) => (
              <p
                onClick={() => handleChange(item)}
                key={index}
                className={`flex items-center cursor-pointer hover:bg-customBlack size-[30px] justify-center rounded-full transition-all duration-300 hover:text-white hover:font-medium text-black text-xs leading-custom-xl ${selectedLetter === item.toUpperCase() ? "bg-customBlack text-white" : ""}`} // Apply active styles
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="bg-customBlack max-w-[1140px] mx-auto rounded-[22px] flex pl-12 pr-[43px] justify-between pt-[38px] mt-[35px] relative pb-[43px] max-sm:flex-wrap max-sm:pt-4 max-sm:px-5 max-sm:pb-20">
          <h1 className="font-Montserrat leading-custom-3xl text-5xl uppercase text-white font-bold max-lg:text-4xl max-sm:text-center max-sm:text-3xl max-sm:mx-auto">
            hit me hard and {selectedCategory === "music" ? "music" : selectedCategory === "pop" ? "pop" : selectedCategory === "rock" ? "rock" : "all"}
          </h1>
          <img
            src="../assets/images/png/girl-hero.png"
            alt="hero"
            className="size-[261px] max-lg:size-48 max-sm:mx-auto max-sm:mt-4 pointer-events-none"
          />
          <div className="absolute flex items-center gap-[26px] -bottom-16 max-lg:-bottom-10 max-sm:-bottom-6">
            <img
              src="../assets/images/png/girl-dp.png"
              alt="profile"
              className="size-[206px] max-lg:size-32 max-sm:size-20 pointer-events-none"
            />
            <div>
              <p className="font-semibold text-[32px] max-lg:text-2xl leading-custom-2xl text-white max-sm:text-lg">
                Billie Eilish {artistName}
              </p>
              <p className="font-Montserrat font-medium text-base leading-5 text-white/70 pt-[5px] max-lg:pt-0 max-sm:pb-8 pb-[21px] max-sm:text-sm">
                Released May 17, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;