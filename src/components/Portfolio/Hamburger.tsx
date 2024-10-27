"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Links from "./Links";
import { Link as ScrollLink } from "react-scroll";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <div className="flex flex-row justify-end w-full ">
        <button
          onClick={toggleMenu}
          className="fixed z-50 left-0 flex flex-col justify-center items-center w-10 h-10 group outline-none"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            className="w-8 h-1  dark:bg-white  bg-black mb-1 rounded transition-all duration-300 ease-in-out"
          />

          <motion.div
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="w-8 h-1 dark:bg-white  bg-black mb-1 rounded transition-opacity duration-300 ease-in-out"
          />

          <motion.div
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            className="w-8 h-1 dark:bg-white  bg-black rounded transition-all duration-300 ease-in-out"
          />
        </button>
        <div className="flex flex-row gap-4 justify-center items-center ">
          <Links></Links>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-full fixed z-50 top-0 left-0 mt-14 sm:w-2/12 w-11/12 "
          >
            <ContentOfSideBar onChildClick={toggleMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
function ContentOfSideBar({ onChildClick }: { onChildClick: any }) {
  return (
    <>
      <div className="h-5/6 shadow-lg dark:border-none border border-slate-300 xl:text-xl lg:text-2xl  m-4 mt-0  rounded-lg font-semibold font-sans sm:text-xl text-xl w-full   bg-Primary_light dark:bg-Primary_dark  flex justify-center items-center flex-col gap-16">
        <button
          onClick={onChildClick}
          className="transform hover:scale-125 transition-transform duration-100"
        >
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
            onClick={onChildClick}
          >
            Home
          </ScrollLink>
        </button>
        <button
          onClick={onChildClick}
          className="transform hover:scale-125 transition-transform duration-100"
        >
          <ScrollLink
            to="work"
            smooth={true}
            duration={500}
            className="cursor-pointer"
            onClick={onChildClick}
          >
            Work
          </ScrollLink>
        </button>
        <button
          onClick={onChildClick}
          className="transform hover:scale-125 transition-transform duration-100"
        >
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer"
            onClick={onChildClick}
          >
            Projects{" "}
          </ScrollLink>
        </button>
        <button
          onClick={onChildClick}
          className="transform hover:scale-125 transition-transform duration-100"
        >
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer"
            onClick={onChildClick}
          >
            About{" "}
          </ScrollLink>
        </button>
        <button
          onClick={onChildClick}
          className="transform hover:scale-125 transition-transform duration-100"
        >
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
            onClick={onChildClick}
          >
            Contact{" "}
          </ScrollLink>
        </button>
      </div>
    </>
  );
}

export default HamburgerMenu;
