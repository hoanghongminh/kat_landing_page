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
      <header className="flex justify-between px-5 py-2 md:py-4 container mx-auto">
        <div className="flex gap-8 max-md:w-full max-md:justify-between">
          <div className="logo w-8 h-8 flex items-center">
            <a href="./">
              <img src="/images/CatCafeLogo.png" alt="" />
            </a>
          </div>
          <div className="hidden md:flex items-center gap-6">
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
          </div>

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
            <ul className="menu-items md:hidden">
              <li className="cursor-pointer">
                <a
                  href="https://www.beautiful.ai/player/-O-LUT5aQfeKiOOMQcID"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Intro
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  href="https://capylabs.gitbook.io/katkafe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Docs
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden md:flex gap-4">
          <div className="tooltip z-30">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                className="cursor-pointer w-6 h-6"
                src="/images/telegram.png"
                alt=""
              />
            </a>
            <span className="tooltip-text">Coming Soon</span>
          </div>
          <div className="tooltip z-30">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                className="cursor-pointer w-[26px] h-[26px]"
                src="/images/twitter.png"
                alt=""
              />
            </a>
            <span className="tooltip-text">Coming Soon</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
