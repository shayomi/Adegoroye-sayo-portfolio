import { Typography } from "@/components/ui/typography";
import { Portfoliodata } from "@/utils/data/Portfoliodata";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  return (
    <section className="mt-24 ">
      <h1 className="background-text">PORTFOLIO</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-6 lg:gap-4 xl:gap-6 mt-12 sm:mt-16">
        {Portfoliodata.map((item, index) => (
          <div
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
