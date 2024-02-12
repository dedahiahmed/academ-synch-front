"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useLocation } from "react-router-dom";
import NavLink from "../NavLink/NavLink";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";
import Logout from "../Logout/Logout";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const mobileNavBar = document.getElementById("mobile-nav-bar");
    if (mobileNavBar) {
      mobileNavBar.classList.toggle("hidden");
    }
  };

  return (
    <nav className="px-4 py-4 flex justify-between items-center bg-white border-b-2 w-full">
      <a className="text-3xl font-bold leading-none" href="#">
        <Image
          alt=""
          src="assets/academ.svg"
          quality={100}
          width={70}
          height={70}
        />
      </a>
      <div className="lg:hidden md:hidden">
        <MobileNavbar />
      </div>
      <div className="hidden lg:flex lg:justify-between lg:space-x-[5rem] md:flex md:justify-between md:space-x-[2rem]">
        <NavLink to="/home" currentPath={location.pathname}>
          Accueil
        </NavLink>
        <NavLink to="/course" currentPath={location.pathname}>
          Cours
        </NavLink>
        <NavLink to="/about" currentPath={location.pathname}>
          Archive
        </NavLink>
        <NavLink to="/about" currentPath={location.pathname}>
          Emploi
        </NavLink>
      </div>

      <Logout />
    </nav>
  );
};

export default Navbar;