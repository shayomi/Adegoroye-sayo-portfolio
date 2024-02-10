import { Typography } from "@/components/ui/typography";

const About = () => {
  return (
    <section className="mt-24  ">
      <div className=" ">
        <h1 className="background-text">ABOUT</h1>
        <div className="flex flex-wrap sm:flex-nowrap gap-10 sm:gap-8 lg:gap-14 items-center">
          <div className="basis-full sm:basis-6/12 ">
            <img
              src="/images/about-image.png"
              alt="Home about image"
              className="w-full h-auto"
            />
          </div>
          <div className="basis-full sm:basis-6/12 sm:pr-8 ">
            <div className="z-20 -mt-4">
              <Typography variant="h6">About Me</Typography>

              <Typography variant="h3" className="text-accent mt-4">
                I'm Adegoroye Sayo, a seasoned frontend web developer and UI/UX
                designer with four years of hands-on experience.
              </Typography>

              <Typography variant="p">
                Throughout my career, I've collaborated with leading
                organizations like Techclout Africa, Run Technology, Nexapluxe,
                and Future Africa, honing my skills in JavaScript, HTML/CSS,
                React.js, Next.js, Tailwind CSS, TypeScript, and Node.js.
              </Typography>

              <Typography variant="p" className="styled-link">
                My approach to design is rooted in user-centric principles,
                utilizing tools like Webflow for rapid prototyping, wireframing,
                and user testing. I'm passionate about ideation and iteration,
                believing that effective design stems from thorough user
                research and feedback-driven refinement.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
