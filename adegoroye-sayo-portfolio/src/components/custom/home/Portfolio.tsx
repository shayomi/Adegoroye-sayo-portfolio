"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import PortfolioTabs from "./Portfoliotab";
import { Portfoliodata } from "@/utils/data/Portfoliodata";
import { Designdata } from "@/utils/data/Designdata";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/Variant";
import { transition1 } from "@/Transition";

interface PortfolioItem {
  icon: string;
  title: string;
  website: string;
  github: string;
}

const Portfolio: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("website");
  const [portfolioData, setPortfolioData] =
    useState<PortfolioItem[]>(Portfoliodata);

  const handleSelectType = (type: string) => {
    setSelectedTab(type);
    setPortfolioData(type === "website" ? Portfoliodata : Designdata);
  };

  return (
    <motion.section className="mt-24" id="portfolio">
      <h1 className="background-text">PORTFOLIO</h1>
      <div className="flex justify-center mt-6">
        <PortfolioTabs
          selectedType={selectedTab}
          onSelectType={handleSelectType}
          portfolio={{ website: Portfoliodata, UIUX: Designdata }}
        />
      </div>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 sm:gap-6 lg:gap-10 xl:gap-x-12 xl:gap-y-12 mt-12 sm:mt-16">
        {portfolioData.map((item: PortfolioItem, index: number) => (
          <motion.div
            variants={fadeIn("up", "tween", index * 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            exit="show"
            whileHover={{ scale: 1.05 }}
            transition={transition1}
            key={index}
            className="bg-[#FBF2F0] gray-card-shadow px-2.5 py-5 sm:px-4 sm:py-6 text-center rounded-lg"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-auto h-auto mx-auto mb-5"
            />

            <Typography variant="h5" className="mb-3">
              {item.title}
            </Typography>
            <div className="flex justify-around mt-4">
              <a href={item.website}>
                <Button>
                  {selectedTab === "UIUX" ? "Live Demo" : "Website"}
                </Button>
              </a>
              {selectedTab !== "UIUX" && (
                <a href={item.github}>
                  <Button variant="secondary">Github</Button>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Portfolio;
