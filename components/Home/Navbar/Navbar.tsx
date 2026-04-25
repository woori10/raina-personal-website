"use client";

import ThemeToogle from "@/components/Helper/ThemeToogle";
import { NavLinks } from "@/Constant/Constants";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type NavProps = {
  openNav: () => void;
};

const Navbar = ({ openNav }: NavProps) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all ${navBg ? "dark:bg-gray-800 bg-white shadow-md" : "fixed"} duration-200 h-[12vh] z-50 fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Theme Toogle */}
        <ThemeToogle />
        {/* Nav Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className="dark:text-white text-black hover:text-yellow-500 dark:hover:text-yellow-200 font-semibold transition-all duration-200"
              >
                <p>{link.name}</p>
              </Link>
            );
          })}
        </div>
        {/* Button CV
            <div className="flex items-center space-x-4">
                <a
                    href="#_"
                     className="relative z-20 inline-flex items-center justify-center px-6 sm:px-8 py-3 font-bold 
                    text-white dark:text-black
                    bg-indigo-600 dark:bg-white
                    border border-transparent dark:border-white/30
                    rounded-md cursor-pointer
                    transition-all duration-300
                    hover:bg-indigo-700 
                    dark:hover:bg-white/80">
                    <span className="relative z-20 flex items-center space-x-2 text-sm">
                        <Download className="w-4 h-4"/>
                        <span>Download CV</span>
                    </span>
                </a>
            </div> */}
        {/* Burger Menu */}
        <MenuIcon
          onClick={openNav}
          className="w-6 h-6 cursor-pointer text-black dark:text-white lg:hidden"
        />
      </div>
    </div>
  );
};

export default Navbar;
