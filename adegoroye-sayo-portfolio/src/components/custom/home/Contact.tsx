"use client";

import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Contactdata } from "@/utils/data/Contactdata";
import ContactForm from "./Contactform";
import { motion } from "framer-motion";
import { fadeIn } from "@/Variant";
import { transition1 } from "@/Transition";

const Contact = () => {
  return (
    <motion.section className="mt-24  " id="contact">
      <div className=" ">
        <h1 className="background-text">CONTACT</h1>
        <motion.div className="flex flex-wrap sm:flex-nowrap gap-10 sm:gap-8 lg:gap-14 items-center">
          <div className="basis-full sm:basis-6/12 ">
            <motion.div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  gap-4 sm:gap-6 lg:gap-4 xl:gap-6 mt-12 sm:mt-16">
              {Contactdata.map((item, index) => (
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
                  <a href={item.link}>
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-7 h-7 mx-auto mb-5"
                    />

                    <Typography variant="h5" className="mb-3 text-primary ">
                      {item.title}
                    </Typography>

                    <Typography variant="smallText" className="font-normal ">
                      {item.description}
                    </Typography>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
            className="basis-full sm:basis-6/12 sm:pr-8 "
          >
            <div className="z-20 -mt-4">
              <ContactForm />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
