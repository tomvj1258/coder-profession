import React from "react";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import ButtonScn from "@/components/MyUIComponents/ButtonScn";
const HeaderScreen = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm">
      <div className="flex items-center justify-center bg-tertiary py-3 text-primary">
        <div className="inline-flex items-center gap-2">
          <p className="hidden text-black/70 md:flex">
            Streamline your workflow and boost your productivity.
          </p>

          <ButtonScn
            variant={"link"}
            className="h-0 space-x-1 px-1 text-lg font-normal md:py-0 md:font-medium"
          >
            <p>Get Started for Free</p>
            <ArrowRight className="size-4" />
          </ButtonScn>
        </div>
      </div>

      <div className="">
        <Navbar />
      </div>
    </header>
  );
};

export default HeaderScreen;
