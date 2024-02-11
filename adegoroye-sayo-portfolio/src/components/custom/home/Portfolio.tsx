"use client";

import { Typography } from "@/components/ui/typography";
import { Portfoliodata } from "@/utils/data/Portfoliodata";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/Variant";
import { transition1 } from "@/Transition";

const Portfolio = () => {
  return (
    <motion.section className="mt-24 " id="portfolio">
      <h1 className="background-text">PORTFOLIO</h1>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-6 lg:gap-4 xl:gap-x-6  xl:gap-y-12 mt-12 sm:mt-16">
        {Portfoliodata.map((item, index) => (
          <motion.div
            variants={fadeIn("up", "tween", index * 0.2, 0.8)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
            whileHover={{ scale: 1.05 }}
            transition={transition1}
            key={index}
            className="bg-[#FBF2F0] gray-card-shadow px-2.5 py-5 sm:px-4 sm:py-6 text-center  rounded-lg"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-auto h-auto mx-auto mb-5"
            />

            <Typography variant="h5" className="mb-3  ">
              {item.title}
            </Typography>
            <div className=" flex justify-around mt-4">
              <a href={item.website}>
                <Button>Website</Button>
              </a>
              <a href={item.github}>
                <Button variant="secondary">Github</Button>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Portfolio;
