import React from "react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="section">
      <div className="  pt-6 flex items-center h-full">
        <div className="flex items-center flex-wrap sm:flex-nowrap gap-4 sm:gap-8 w-full ">
          <div className="basis-full sm:basis-1/2 order-last sm:order-first ">
            <div className="sm:max-w-lg">
              <div className="space-y-4 mb-8">
                <Typography variant="p">Hi there</Typography>
                <Typography
                  variant="h1"
                  className="hidden sm:block leading-[3rem] sm:leading-none"
                >
                  My name is sayo
                </Typography>

                <Typography
                  variant="h1"
                  className="leading-[3rem] sm:leading-none"
                >
                  <span className="sm:hidden">My name is sayo {""}</span>

                  <span className="sm:hidden text-primary">
                    a frontend Engineer
                  </span>
                </Typography>

                <Typography
                  variant="h1"
                  className="text-primary leading-[3rem] sm:leading-none hidden sm:flex"
                >
                  a frontend Engineer
                </Typography>
              </div>

              <Typography variant="h5" className="max-w-[80%] mb-10 mt-4">
                I am here to give your business better creativity and digital
                presence
              </Typography>
              <a target="_blank">
                <Button size="lg">Lets Talk</Button>
              </a>
            </div>
          </div>
          <div className="basis-full sm:basis-6/12 flex sm:justify-end order-first sm:order-last">
            <img className="w-full h-auto" src="/images/hero-img.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
