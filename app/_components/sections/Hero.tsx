import React from "react";
import HeroContent from "../specific/HeroContent";
import HeroVideo from "../specific/HeroVideo";
import BubbleBackground from "../shared/ui/BubbleBackground";
import { MetemiFilled } from "../shared/icons/MetemiFilled";
import NavButton from "../specific/NavButton";

export default function Hero() {
  return (
    <section className="w-full px-xs pb-24">
      <div className="bg-[url('/images/bg-final-mobile.jpg')] md:bg-[url('/images/bg-final.jpg')] relative bg-cover bg-center w-full flex flex-col rounded-bl-custom-xl rounded-br-custom-xl">
        <BubbleBackground />
        <div className="relative z-10 flex flex-col w-full">
          <div className="relative flex flex-col md:gap-0 gap-8">
            <MetemiFilled className="anim-logo translate-y-[-100%] text-white z-[2] w-[90vw] mx-auto " />

            <div className="flex items-center gap-12 md:gap-16 self-end pr-20 md:pr-[2.5%]">
              <p className="anim-pop-in text-outline-krakov whitespace-nowrap font-bold">
                for KRAKOW
              </p>
              <NavButton />
            </div>
          </div>

          <div className="flex flex-col xl:flex-row gap-58 md:gap-16 mt-60 md:mt-0 pb-0 md:pb-40">
            <HeroContent />
            <HeroVideo />
          </div>
        </div>
      </div>
    </section>
  );
}
