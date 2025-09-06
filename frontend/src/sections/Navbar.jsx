import React, { useState } from "react";
import { close, menu } from "../assets/assets";
import { motion } from "motion/react";

//To make it beautiful, we are going to use Motion.dev website for animation
function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">
          HOME
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">
          ABOUT
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work">
          WORK
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">
          CONTACT
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
            Nithesh
          </a>
          <button
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            onClick={() => setIsOpen((prev) => !prev)}>
            <img className="w-6 h-6" src={isOpen ? close : menu} alt="toggle" />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: '100vh' }}
        transition={{duration: 1}}>
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
