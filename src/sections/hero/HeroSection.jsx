"use client";
import ButtonScn from "@/components/MyUIComponents/ButtonScn";
import { ArrowRight } from "lucide-react";
import CogImage from "@/assets/cog.png";
import CylinderImage from "@/assets/cylinder.png";

import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] pb-20 pt-8 md:pb-10 md:pt-5">
      <div className="container">
        <div className="items-center md:flex">
          <div className="md:w-[478px]">
            <div className="inline-flex rounded-lg border border-[#222]/10 px-3 py-1 text-sm tracking-tight">
              Version 2.0 is here
            </div>
            <h1 className="head-gradient mt-6 text-5xl font-bold tracking-tighter md:text-7xl">
              Pathway to Web Development
            </h1>
            <p className="text-textBlue mt-6 text-xl tracking-tight">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>

            <div className="mt-[30px] flex items-center gap-1">
              <ButtonScn className="btn-primary">Get Started</ButtonScn>
              <ButtonScn
                variant="link"
                className="inline-flex h-0 items-center gap-1 text-base font-semibold text-black hover:text-primary md:py-0"
              >
                <p>Learn More</p>
                <span className="">
                  <ArrowRight className="size-4" />
                </span>
              </ButtonScn>
            </div>
          </div>

          <div className="relative mt-20 md:mt-0 md:h-[648px] md:flex-1">
            <Image
              src={CogImage}
              alt="cog image"
              className="md:absolute md:-left-6 md:h-full md:w-auto md:max-w-none"
            />

            <Image
              src={CylinderImage}
              alt="cylinder image"
              width={220}
              height={220}
              className="-left-32 -top-8 hidden md:absolute md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
