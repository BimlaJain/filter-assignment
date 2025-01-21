import React, { useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import Header from "./Header";

const HomePage = () => {
  const [tabData, setTabData] = useState('');
  const [heading, setHeading] = useState('');
  const [girlName, setGirlName] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "All";
  const letter = searchParams.get("letter") || "A";

  const tabs = ["All", "Pop", "Rock", "More"];
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleTabClick = (tabName) => {
    setTabData(tabName);
    setHeading(tabName); 
    setSearchParams({ tab: tabName, letter });
  };

  const handleLetterClick = (letter) => {
    setGirlName(` ${letter}`);
    setSearchParams({ tabData, letter });
  };

  return (
    <div className="min-h-screen">
      <div className="container">
      <Header />
      <div className="flex items-center space-x-4 py-2 max-2xl:overflow-x-auto">
        {tabs.map((tabName) => (
          <button
            key={tabName}
            onClick={() => handleTabClick(tabName)}
            className={`px-4 py-2 rounded ${tab === tabName
                ? "bg-black text-white"
                : "text-gray-800 border border-black rounded-lg"
              }`}
          >
            {tabName}
          </button>
        ))}
        {alphabet.map((char) => (
          <button
            key={char}
            onClick={() => handleLetterClick(char)}
            className={`px-[11px] py-1 rounded ${letter === char
                ? "bg-black text-white rounded-full"
                : "text-gray-800"
              }`}
          >
            {char}
          </button>
        ))}
        </div>
      <div className="flex flex-col items-center py-[43px] md:px-4">
        <div className="flex flex-col md:flex-row lg:pl-12 lg:pr-[43px] bg-black text-white p-6 pt-[36px] rounded-lg max-w-[1141px] w-full">
          <div className="md:w-2/3 w-full">
            <h1 className="lg:text-[44px] md:text-3xl text-2xl font-bold md:mb-24 mb-8 max-sm:text-center uppercase">hit me hard and soft {heading}</h1>
            <div className="md:flex items-center gap-7 md:relative">
              <img className="md:absolute lg:top-[8%] max-lg:pt-32 max-sm:pt-0  max-sm:flex max-sm:mx-auto" src="../assets/images/png/girl-dp.png" alt="girl-dp" />
              <div className="flex-col md:absolute xl:left-[33%] md:left-[49%] top-[5%] lg:mt-12 md:mt-8">
                <p className="lg:text-[32px] text-2xl mt-4 text-center">Billie Eilish{girlName}</p>
                <p className="lg:text-base text-sm text-gray-400 text-center">Released May 17, 2024</p>
              </div>
           </div>
          </div>
          <div className="md:w-1/3 w-full max-sm:pt-6 flex justify-end">
           <img src="../assets/images/png/girl-hero.png" alt="hero-girl" className="max-sm:flex max-sm:mx-auto" />
          </div>
        </div>
        </div>
        </div>
    </div>
  );
};

export default HomePage;
