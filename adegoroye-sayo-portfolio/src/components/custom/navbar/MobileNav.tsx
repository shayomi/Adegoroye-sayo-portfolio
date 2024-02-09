"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { usePathname } from "next/navigation";
import Logo from "../../../../public/images/sayo-logo.png";
import { Button } from "@/components/ui/button";
import { Navdata } from "@/utils/data/Navdata";
import { clsx } from "clsx";
import { useEffect, useState } from "react";

const MobileNav = () => {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setSheetOpen(false);
  }, [pathname]);

  return (
    <section className="sm:hidden">
      <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger onClick={() => setSheetOpen(true)}>
          <Menu size={28} className="text-foreground" />
        </SheetTrigger>

        <SheetContent side="top" className="w-full rounded-xl">
          <SheetHeader className="text-left">
            <SheetTitle className="mt-8 mb-12 flex flex-wrap justify-between items-end">
              <Link href="/">
                <Image src={Logo} alt="Accelerate Africa's Logo" width={110} />
              </Link>

              <a href="#service">
                <Button className="px-8">Get Started</Button>
              </a>
            </SheetTitle>

            <div className="flex flex-col space-y-5 pb-5">
              {Navdata.map((item, index) => (
                <Link key={index} href={item.href}>
                  <Typography
                    variant="h3"
                    as={"div"}
                    className={clsx(
                      pathname === item.href ||
                        pathname.startsWith(item.href + "/")
                        ? "text-primary hover:text-red-500"
                        : "text-foreground hover:text-primary",
                      "font-medium"
                    )}
                  >
                    {item.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
