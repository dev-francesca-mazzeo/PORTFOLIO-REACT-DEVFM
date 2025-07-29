import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import LanguageSwitch from "./LanguageSwitch";

const Navbar = () => {
  // State to track which nav link is active (highlighted)
  const [active, setActive] = useState("");
  // State to toggle mobile menu open/close
  const [toggle, setToggle] = useState(false);
  // State to track if page is scrolled past 100px to change navbar background
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // Event handler to check scroll position and update `scrolled` state
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100); // true if scrolled more than 100px
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      // Navbar container with padding and fixed positioning at top with z-index
      // Changes background color when scrolled using conditional class
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Logo and site title linking to home */}
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");       // Reset active link on logo click
            window.scrollTo(0, 0); // Scroll to top of page
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            DEVFM &nbsp;
            <span className='sm:block hidden'> || PORTFOLIO</span>
          </p>
        </Link>

        {/* Desktop navigation menu - visible on screen sizes medium and above */}
        <ul className='list-none hidden sm:flex flex-row gap-10 items-center'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.id)} // Set active on click
            >
              {/* Translated link text */}
              <a href={`#${nav.id}`}>{t(`navbar.${nav.id}`)}</a>
            </li>
          ))}
          {/* Language switcher included in desktop menu */}
          <li>
            <LanguageSwitch size="default" />
          </li>
        </ul>

        {/* Mobile menu toggle button - visible only on small screens */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          {/* Menu icon toggles between open and close icons */}
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile dropdown menu - shown only when toggle is true */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle); // Close mobile menu on link click
                    setActive(nav.id);   // Set active link
                  }}
                >
                  <a href={`#${nav.id}`}>{t(`navbar.${nav.id}`)}</a>
                </li>
              ))}
              {/* Language switcher included in mobile menu */}
              <li>
                <div style={{ marginTop: "10px" }}>
                  <LanguageSwitch size="default" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
