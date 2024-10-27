"use client";
import React, { useState } from "react";
import SharpButton from "./SharpButton";
import Image from "next/image";
import Link from "next/link";

const navItems = ["home", "location", "contact"];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="border border-theme-secondary sticky top-0 z-50 w-full h-28 bg-theme-secondary flex items-center justify-between px-4">
      <div className="flex items-center">
        <Image
          src="https://i.pinimg.com/736x/69/bb/05/69bb0546037a2594aff9389bb814b1f2.jpg"
          alt="placeholder"
          width={60}
          height={60}
          className="ml-4"
        />
        <p className="text-3xl ml-4">XYZ Company</p>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex w-2/4 justify-end gap-4">
        {navItems.map((item, index) => (
          <SharpButton key={index}>{item}</SharpButton>
        ))}
        <Link href={"/products"}>
          <SharpButton>Products</SharpButton>
        </Link>
      </div>

      {/* Mobile menu toggle button */}
      <div className="flex md:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="relative w-8 h-8 flex flex-col justify-center items-center gap-1"
        >
          <span
            className={`block w-full h-0.5 bg-white transform transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-white transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-white transform transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? "max-h-max" : "max-h-0 "
        } transition-all flex flex-col  items-center bg-theme-secondary w-full absolute top-24 left-0 overflow-hidden transition-max-height duration-300 ease-in-out md:hidden`}
      >
        {navItems.map((item, index) => (
          <SharpButton key={index}>{item}</SharpButton>
        ))}
        <Link href={"/products"} className="w-full">
          <SharpButton>Products</SharpButton>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
