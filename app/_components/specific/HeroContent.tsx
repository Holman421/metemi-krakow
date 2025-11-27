"use client";

import React, { useState } from "react";
import EmailSubscribe from "../shared/ui/EmailSubscribe";
import { DMText } from "../shared/ui/DMText";
import ShimmerWrapper from "../shared/ui/ShimmerWrapper";
import VideoModal from "../shared/ui/VideoModal";

export default function HeroContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col z-[3] xl:w-[55%]">
      <div className="ml-[clamp(2.5rem,calc(1.102rem+5.592vw),7.813rem)] mb-16 flex flex-col items-center lg:items-start gap-35 md:gap-16 xl:text-start text-center -translate-x-[clamp(1.25rem,calc(0.921rem+1.316vw),2.5rem)]">
        <h2 className="text-display-lg text-white anim-text-lines">
          Přestaň lidi míjet. <br /> Začni je potkávat.
        </h2>
        <p className="text-2xl text-white anim-text-lines">
          Jste si blíž, než si myslíte. <br /> Stačí se potkat.
        </p>
        <ShimmerWrapper className="w-fit rounded-2xl">
          <button
            onClick={() => setIsModalOpen(true)}
            className="group px-24 cursor-pointer py-8 bg-transparent border border-white rounded-2xl text-white w-fit flex items-center gap-8"
          >
            How it works
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 4.98756C5 4.0164 5 3.53081 5.20249 3.26314C5.37889 3.02995 5.64852 2.88565 5.9404 2.86823C6.27544 2.84822 6.67946 3.11757 7.48752 3.65628L18.0031 10.6667C18.6708 11.1118 19.0046 11.3343 19.1209 11.6149C19.2227 11.8601 19.2227 12.1357 19.1209 12.381C19.0046 12.6615 18.6708 12.8841 18.0031 13.3292L7.48752 20.3396C6.67946 20.8783 6.27544 21.1476 5.9404 21.1276C5.64852 21.1102 5.37889 20.9659 5.20249 20.7327C5 20.465 5 19.9795 5 19.0083V4.98756Z"
                stroke="white"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="fill-transparent group-hover:fill-white transition-all duration-300"
              />
            </svg>
          </button>
        </ShimmerWrapper>
      </div>
      <div className="anim-fade-left w-full">
        <div className="mt-24 md:mt-24 relative z-[3] flex flex-col w-full md:w-fit gap-0 py-[clamp(1.25rem,calc(0.839rem+1.645vw),2.813rem)] bg-[#DAD9DE] pl-[clamp(2.5rem,calc(1.102rem+5.592vw),7.813rem)] pr-[clamp(1.25rem,calc(-0.97rem+8.882vw),9.688rem)] rounded-tr-custom-big rounded-br-custom-big -translate-x-[clamp(1.25rem,calc(0.921rem+1.316vw),2.5rem)] shadow-[23.512px_11.756px_41.146px_0_rgba(0,0,0,0.27)]">
          <p className="text-gradient text-[clamp(2.5rem,calc(-1.5rem+5vw),4.5rem)]/[100%] max-w-725 font-normal">
            Get <span className="font-bold">lifetime Premium for free</span>
          </p>
          <div>
            <EmailSubscribe
              variant="primary"
              className="2xl:absolute bottom-[20%] right-32"
            />
            {/* <div className="hidden absolute -bottom-[200px] 2xl:-bottom-[100%] right-[] md:flex flex-col items-end w-fit self-end gap-20 z-[3]">
              <DMText
                rounded="right"
                colorVariant="primary"
                text="Tak jo, potkáme se v 7 před tou vietnamskou restaurací? Vezmeme to s sebou."
                time="12:02"
              />
              <DMText
                rounded="left"
                colorVariant="secondary"
                text="OK, souhlasím, uvidíme se"
                time="12:05"
                className="mr-190"
                animateTyping
              />
            </div> */}
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoSrc="/videos/what-differently.mp4"
      />
    </div>
  );
}
