// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-footer border-t border-black w-full h-[64px] flex">
      <footer className="flex justify-between px-5 xl:container mx-auto max-md:items-center max-md:px-4">
        <nav className="w-full flex items-center">
          <ul className="flex gap-8 justify-between w-full">
            <a href="" target="_blank" rel="noopener noreferrer">
              <li className="cursor-pointe hover:text-[#498ee4]">
                Privacy Policy
              </li>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <li className="cursor-pointer hover:text-[#498ee4]">
                Term and Conditions
              </li>
            </a>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
