// components/Header.tsx
"use client";
import React, { useState, useRef, useEffect } from "react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <div className="bg-header">
      <header className="flex justify-between items-center px-5 py-2 md:py-4 xl:container mx-auto border border-t-0 border-black">
        <div className="flex gap-8 max-md:w-full max-md:justify-between">
          <div className="logo w-[75px] flex items-center">
            <a href="./">
              <img src="/images/logo.png" alt="" />
            </a>
          </div>
          {/* <div className="hidden md:flex items-center gap-6">
            <div className="tooltip">
              <a
                className="cursor-pointer text"
                href="https://www.beautiful.ai/player/-O-LUT5aQfeKiOOMQcID"
                target="_blank"
                rel="noopener noreferrer"
              >
                Intro
              </a>
            </div>
            <div className="tooltip">
              <a
                className="cursor-pointer text"
                href="https://capylabs.gitbook.io/katkafe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Docs
              </a>
            </div>
          </div> */}

          <input
            type="checkbox"
            id="menu-toggle"
            className="menu-toggle md:hidden"
            checked={menuOpen}
            onChange={toggleMenu}
          />
          <label htmlFor="menu-toggle" className="menu-icon md:hidden">
            &#9776;
          </label>

          <nav
            ref={menuRef}
            className={`mobile-menu ${menuOpen ? "open" : ""}`}
          >
            <ul className="menu-items md:hidden flex justify-center gap-4">
              <li className="cursor-pointer">
                <div className="tooltip z-30">
                  {/* <a href="" target="_blank" rel="noopener noreferrer"> */}
                  <img
                    className="cursor-pointer w-6 h-6"
                    src="/images/telegram.png"
                    alt=""
                  />
                  {/* </a> */}
                  <span className="tooltip-text">Coming Soon</span>
                </div>
              </li>
              <li className="cursor-pointer">
                <div className="tooltip z-30">
                  {/* <a href="" target="_blank" rel="noopener noreferrer"> */}
                  <img
                    className="cursor-pointer w-[26px] h-[26px]"
                    src="/images/twitter.png"
                    alt=""
                  />
                  {/* </a> */}
                  <span className="tooltip-text">Coming Soon</span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden md:flex gap-4">
          <div className="tooltip z-30">
            {/* <a href="" target="_blank" rel="noopener noreferrer"> */}
            <img
              className="cursor-pointer w-6 h-6"
              src="/images/telegram.png"
              alt=""
            />
            {/* </a> */}
            <span className="tooltip-text">Coming Soon</span>
          </div>
          <div className="tooltip z-30">
            {/* <a href="" target="_blank" rel="noopener noreferrer"> */}
            <img
              className="cursor-pointer w-[26px] h-[26px]"
              src="/images/twitter.png"
              alt=""
            />
            {/* </a> */}
            <span className="tooltip-text">Coming Soon</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
