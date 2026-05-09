"use client";

import ThemeToogle from "@/components/Helper/ThemeToogle";
import { NavLinks } from "@/Constant/Constants";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navBg, setNavBg] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`
      fixed top-6 left-1/2 -translate-x-1/2
      w-[92%] lg:w-[85%]
      z-50
      rounded-[2rem]
      border border-gray-300 dark:border-gray-700
      transition-all duration-300
      overflow-hidden

      ${
        navBg
          ? "bg-white/70 dark:bg-gray-900/70 shadow-xl"
          : "bg-white/40 dark:bg-gray-900/40"
      }

      ${showNav ? "h-[420px]" : "h-[10vh]"}
      `}
    >
      {/* TOP NAV */}
      <div className="flex items-center justify-between h-[10vh] px-6">
        {/* Left */}
        <ThemeToogle />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="
              text-black dark:text-white
              font-semibold
              transition-all duration-300
              hover:text-blue-400 dark:hover:text-blue-300
              hover:scale-105
              "
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Burger */}
        <button onClick={() => setShowNav(!showNav)} className="lg:hidden">
          {showNav ? (
            <X className="w-6 h-6 text-black dark:text-white" />
          ) : (
            <Menu className="w-6 h-6 text-black dark:text-white" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
        lg:hidden
        flex flex-col items-center justify-center
        gap-8
        transition-all duration-300
        ${
          showNav
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }
        `}
      >
        {NavLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            onClick={() => setShowNav(false)}
            className="
            text-lg
            font-medium
            text-black dark:text-white
            hover:text-blue-400
            transition-all duration-300
            "
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
