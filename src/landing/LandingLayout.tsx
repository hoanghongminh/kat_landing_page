import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { PropsWithChildren } from "react";

export const LandingLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-[#fffeec] overflow-x-hidden">
      <Header />
      <div className="flex justify-center h-[calc(100vh-80px)]">
        <div className="flex page-layout xl:container border-r border-l border-black max-md:flex-col">
          <div className="flex flex-col bg-layout text-black bg-[#fffeec] w-1/2 justify-between max-md:w-full">
            <div className="main-content flex justify-center lg:justify-between grow">
              {children}
            </div>
            <div className="hidden md:block">
              <Footer />
            </div>
          </div>
          <div className="image-banner w-1/2 flex items-center justify-center max-md:w-full max-md:py-24">
            <div className="relative flex justify-center">
              <img
                className="w-[430px] max-md:w-[70%]"
                src="/images/banner.png"
                alt=""
              />
              <img
                className="kbuck absolute w-[60px] h-[60px] md:w-[120px] md:h-[120px] -top-[10%] right-[9%] md:-right-[1%]"
                src="/images/kbuck.png"
                alt=""
              />
              <img
                className="join-us absolute w-[86px] h-[86px] md:w-[172px] md:h-[172px] top-1/2 left-0 md:-left-[20%] -translate-y-1/2"
                src="/images/join-us.png"
                alt=""
              />
              <img
                className="rank absolute w-[40px] h-[40px] md:w-[80px] md:h-[80px] -bottom-4 right-[11%] md:-right-[1%]"
                src="/images/rank.png"
                alt=""
              />
            </div>
          </div>
          <div className="md:hidden">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingLayout;
