import Image from "next/image";
import React from "react";
import Logo from "@/assets/logosaas.png";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navData } from "@/data/navDetails/navData";
import ButtonScn from "@/components/MyUIComponents/ButtonScn";

const Navbar = () => {
  return (
    <section className="container mx-auto">
      <div className="flex items-center justify-between py-3">
        <div className="">
          <Image
            src={Logo}
            alt="coder profession logo"
            width={40}
            height={40}
          />
        </div>

        <div className="hidden items-center gap-7 text-lg font-medium text-black/60 md:flex">
          {navData?.map((nav) => (
            <Link key={nav.id} href={nav.link} className="hover:text-primary">
              {nav.title}
            </Link>
          ))}

          <ButtonScn className="btn-primary">Get Started</ButtonScn>
        </div>

        <div className="block text-black md:hidden">
          <MenuIcon />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
