"use client";
import LandingLayout from "@/landing/LandingLayout";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const coin = document.querySelector(".coin");
    const container = document.querySelector(".div-parent");

    function randomPosition() {
      if (!coin || !container) return;
      const containerRect = container.getBoundingClientRect();
      const coinSize = coin.getBoundingClientRect().width;
      const maxX = containerRect.width - coinSize;
      const maxY = containerRect.height - coinSize;

      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      (coin as HTMLElement).style.left = `${randomX}px`;
      (coin as HTMLElement).style.bottom = `0`;
    }

    if (!coin) return;
    coin.addEventListener("animationend", function () {
      randomPosition();
      (coin as HTMLElement).style.animation = "none"; // Dừng animation hiện tại
      void (coin as HTMLElement).offsetHeight; // Kích hoạt lại việc tính toán layout để có thể khởi động lại animation
      (coin as HTMLElement).style.animation =
        "flyUp 2s ease-in-out, flip 2s linear"; // Khởi động lại animation
    });

    randomPosition();
  }, []);

  return (
    <main className="">
      <LandingLayout>
        <section className="banner w-full grid grid-cols-12 gap-8 items-center justify-between flex-col-reverse py-12 md:flex-row max-md:justify-items-center">
          <div className="relative z-20 banner-content grid col-span-12 max-md:order-2 md:col-span-8 text w-full max-w-[630px] max-md:mt-12 max-md:text-center max-md:flex max-md:flex-col max-md:items-center max-md:pt-10">
            <img
              className="w-[270px] img-logo mb-4"
              src="/images/CatCafeLogo.png"
              alt=""
            />
            <h1 className="mb-2 lg:mb-4">
              <p className="text-2xl md:text-3xl lg:text-4xl">
                Let’s spread the coziness across the world
              </p>
            </h1>
            <div className="mb-6 text-base lg:text-xl">
              Manage and grow your dream coffee shop like never before
            </div>
            <div className="flex justify-center items-center gap-1 browser bg-white shadow-md w-[164px] h-12">
              <img className="h-6 w-6" src="/images/telegram.png" alt="" />
              <p className="text-base ml-1">Telegram</p>
            </div>
          </div>
          <div className="image w-fit col-span-12 md:col-span-4 lg:col-span-4 max-md:order-1 relative max-md:pt-12 max-md:flex max-md:justify-center">
            <img
              className="banner-home mx-auto"
              src="/images/Home.png"
              alt=""
            />
            <img
              className="absolute img-join-us z-50"
              src="/images/join-us.png"
              alt=""
            />
            <img
              className="absolute img-bundle z-50"
              src="/images/bundle.png"
              alt=""
            />
            <img
              className="absolute img-gem z-50"
              src="/images/gem.png"
              alt=""
            />
          </div>
        </section>
        {/* <img className="w-12 h-12" src="/images/coin.png" alt="" /> */}
      </LandingLayout>
    </main>
  );
}
