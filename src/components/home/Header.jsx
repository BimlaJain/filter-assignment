import React from 'react';

const Header = () => {
    return (
        <div className="bg-white px-4">
            <header className="flex flex-wrap items-center justify-between px-4 py-4 bg-white shadow-2xl rounded-[20px]">
                <a href="#" className="flex-shrink-0">
                    <img
                        src="../assets/images/png/logo.png"
                        alt="logo"
                        className="h-8 sm:h-10"
                    />
                </a>
                <div className="hidden lg:flex  flex-grow max-w-[650px] items-center mx-4 px-4 py-2 border rounded-full">
                    <input
                        type="text"
                        placeholder="What do you feel like listening to right now?"
                        className="flex-grow text-lightgrey placeholder:text-lightgrey focus:outline-none"
                    />
                    <img
                        src="../assets/images/svg/search.svg"
                        alt="search"
                        className="w-6 h-6 ml-2"
                    />
                </div>
                <div className="flex gap-3 items-center max-lg:mt-4 mx-auto">
                    <button className="px-6 py-2 text-sm sm:text-base hover:text-white hover:bg-black rounded-lg transition-all duration-500 ease-in-out">
                        Login
                    </button>
                    <button className="px-6 py-2 text-sm sm:text-base bg-black text-white hover:bg-white hover:text-black rounded-lg transition-all duration-500 ease-in-out">
                        Sign Up
                    </button>
                </div>
                <div className="lg:hidden mt-4 flex w-full justify-between">
                    <div className="flex flex-grow items-center max-w-full px-4 py-2 border rounded-full">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="flex-grow text-lightgrey placeholder:text-lightgrey  focus:outline-none text-sm"
                        />
                        <img
                            src="../assets/images/svg/search.svg"
                            alt="search"
                            className="size-7 ml-2"
                        />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
