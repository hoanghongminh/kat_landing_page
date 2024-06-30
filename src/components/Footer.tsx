// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-footer">
      <footer className="flex justify-between px-5 py-2 md:py-4 container mx-auto max-md:flex-col max-md:items-center max-md:px-4 max-md:py-6">
        <div>
          <a href="./">
            <img
              className="w-12 logo object-cover"
              src="/images/CatCafeLogo.png"
              alt=""
            />
          </a>
        </div>
        <nav className="flex items-center max-md:flex-col max-md:mt-6">
          <ul className="flex gap-8">
            <a href="" target="_blank" rel="noopener noreferrer">
              <li className="cursor-pointe hover:text-[#498ee4]">
                Privacy Policy
              </li>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <li className="cursor-pointer hidden md:block hover:text-[#498ee4]">
                Term and Conditions
              </li>
            </a>
          </ul>
          <a href="" target="_blank" rel="noopener noreferrer">
            <p className="cursor-pointer md:hidden mt-4 hover:text-[#498ee4]">
              Term and Conditions
            </p>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
