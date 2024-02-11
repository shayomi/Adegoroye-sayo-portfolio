"use client";

import { Typography } from "@/components/ui/typography";
import { Services } from "@/utils/data/Servicedata";
import { motion } from "framer-motion";
import { fadeIn } from "@/Variant";
import { transition2 } from "@/Transition";

const Service = () => {
  return (
    <motion.section className="mt-24 " id="service">
      <h1 className="background-text">SERVICES</h1>
      <motion.div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-4 xl:gap-6 mt-12 sm:mt-16">
        {Services.map((item, index) => (
          <motion.div
            variants={fadeIn("up", "tween", index * 0.2, 0.8)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
            whileHover={{ scale: 1.1 }}
            transition={transition2}
            key={index}
            className="bg-[#FBF2F0] gray-card-shadow px-2.5 py-5 sm:px-4 sm:py-6 text-center  rounded-lg"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-7 h-7 mx-auto mb-5"
            />

            <Typography variant="h5" className="mb-3 text-primary ">
              {item.title}
            </Typography>

            <Typography variant="smallText" className="font-normal">
              {item.description}
            </Typography>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex flex-wrap md:flex-nowrap gap-10 sm:gap-8 lg:gap-14 items-center mt-16">
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 0.8)}
          initial="hidden"
          whileInView={"show"}
          exit={"show"}
          className="basis-full sm:basis-6/12 lg:basis-5/12"
        >
          <img
            src="/images/service-image.png"
            alt="service"
            className="w-full h-auto"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 0.8)}
          initial="hidden"
          whileInView={"show"}
          exit={"show"}
          className="basis-full sm:basis-6/12 lg:basis-7/12 overflow-hidden"
        >
          <div className="lg:max-w-[590px] lg:ml-auto z-20 -mt-4">
            <Typography variant="h4" className="text-accent mt-4">
              I am passionate about leveraging technology and design to create
              transformative digital experiences that resonate with audiences
              and drive measurable outcomes. Contact me today to learn more
              about how we can help bring your vision to life!
            </Typography>

            <Typography variant="p">
              I offer expert frontend web development and UI/UX design
              solutions. Through user-centric design and innovative
              technologies, we create engaging web applications and prioritize
              continuous improvement. Partner with us to elevate your digital
              presence and deliver exceptional user experiences.
            </Typography>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Service;
