import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Contactdata } from "@/utils/data/Contactdata";
import ContactForm from "./Contactform";

const Contact = () => {
  return (
    <section className="mt-24  ">
      <div className=" ">
        <h1 className="background-text">CONTACT</h1>
        <div className="flex flex-wrap sm:flex-nowrap gap-10 sm:gap-8 lg:gap-14 items-center">
          <div className="basis-full sm:basis-6/12 ">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  gap-4 sm:gap-6 lg:gap-4 xl:gap-6 mt-12 sm:mt-16">
              {Contactdata.map((item, index) => (
                <div
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
                </div>
              ))}
            </div>
          </div>
          <div className="basis-full sm:basis-6/12 sm:pr-8 ">
            <div className="z-20 -mt-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
