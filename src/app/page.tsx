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
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap"
        rel="stylesheet"
      ></link>
      <main className="">
        <LandingLayout>
          <section className="banner w-full flex">
            <div className="content-banner border-r border-black flex flex-col items-center justify-between text-center relative overflow-hidden">
              <div className="flex flex-col gap-12 items-center h-full overflow-hidden relative">
                <div className="my-12 px-12 flex flex-col items-center justify-center max-md:mb-24">
                  <div className="flex items-center mb-3">
                    <img
                      className="w-[187px] md:w-[225px]"
                      src="/images/logo.png"
                      alt=""
                    />
                  </div>
                  <h1 className="mb-3">Earn token with Kat Kafe</h1>
                  <h4 className="mb-4">
                    Manage staffs, complete quests, invite friends and become
                    the best owner
                  </h4>
                  <div className="flex gap-2 max-xl:flex-wrap max-xl:justify-center">
                    <a
                      href="https://capylabs.gitbook.io/katkafe"
                      target="_blank"
                    >
                      <button>Gitbook</button>
                    </a>
                    <a
                      href="https://www.beautiful.ai/player/-O-LUT5aQfeKiOOMQcID"
                      target="_blank"
                    >
                      <button>Whitepaper</button>
                    </a>
                    <a href="https://t.me/katkafe_bot/KatKafe" target="_blank">
                      <button>Telegram</button>
                    </a>
                  </div>
                </div>
                <img
                  className="catOne w-[128px] h-[117px] md:w-[210px] md:h-[192px] absolute -left-20 -bottom-10 md:-bottom-20"
                  src="/images/catOne.png"
                  alt=""
                />
                <img
                  className="catTwo w-[128px] h-[136px] md:w-[210px] md:h-[222px] -rotate-12 absolute -right-12 -bottom-10 md:-bottom-20"
                  src="/images/catTwo.png"
                  alt=""
                />
              </div>
            </div>
          </section>
        </LandingLayout>
      </main>
    </>
  );
}
