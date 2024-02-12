"use client";

import { Typography } from "@/components/ui/typography";
import FooterContact from "./Footercontact";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <section className="bg-[#1A1E25] mt-24 ">
      <div className="container pt-20">
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-8 xl:gap-12 justify-evenly pb-12">
          <div className="sm:max-w-[220px] lg:max-w-[290px] xl:max-w-[350px]">
            <img
              src="/images/sayo-logo.png"
              alt="Accelerate Africa's Logo"
              className="w-[130px]"
            />

            <Typography variant="p" className="text-white">
              Self driven and Highly Motivated developer with 4+ years of
              experience in frontend development using React Js, Next Js ,
              javascript, html/css and UI designs
            </Typography>
          </div>

          <div>
            <FooterContact />
          </div>
        </div>

        <Separator className="bg-[#9F9F9F]/40" />

        <div className="py-4 flex justify-center">
          <Typography variant="smallText" className="text-white font-normal">
            2024 &#169; Sayo Adegoroye. All rights reserved
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Footer;
