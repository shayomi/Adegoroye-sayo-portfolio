"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "../../../../public/images/sayo-logo.png";
import { Navdata } from "@/utils/data/Navdata";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { clsx } from "clsx";
import MobileNav from "./MobileNav";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg">
      <div className="container flex justify-between items-center py-3">
        <Link href="/">
          <Image
            src={Logo}
            alt="Accelerate Africa's Logo"
            width={60}
            className="w-[110px] sm-[120px]"
          />
        </Link>

        <div className="hidden sm:block">
          {Navdata.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={clsx(
                pathname === item.href || pathname.startsWith(item.href + "/")
                  ? "text-primary hover:text-red-500"
                  : "text-foreground hover:text-primary",
                "px-4 font-medium"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <a>
          <Button className="px-8 hidden sm:block">Get Started</Button>
        </a>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Nav;
