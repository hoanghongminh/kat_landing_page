import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { PropsWithChildren } from "react";

export const LandingLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-layout text-black">
      <Header />
      <div className="main-content container mx-auto px-4 md:px-10 grow flex justify-center lg:justify-between">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default LandingLayout;
