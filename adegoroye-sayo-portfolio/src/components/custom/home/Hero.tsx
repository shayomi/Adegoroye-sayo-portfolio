"use client";

import React from "react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/Variant";

const Hero = () => {
  return (
    <motion.section className="section mt-12">
      <div className="  pt-6 flex items-center h-full">
        <div className="flex items-center flex-wrap sm:flex-nowrap gap-4 sm:gap-8 w-full ">
          <motion.div
            variants={fadeIn("down", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
            className="basis-full sm:basis-1/2 order-last sm:order-first "
          >
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
                I&apos;m here to elevate your business with enhanced creativity
                and a strong digital footprint.
              </Typography>
              <a href="#service">
                <Button size="lg">Lets Talk</Button>
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
            className="basis-full sm:basis-6/12 flex sm:justify-end order-first sm:order-last"
          >
            <img className="w-full h-auto" src="/images/hero-img.png" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
