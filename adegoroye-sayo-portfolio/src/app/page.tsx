import Hero from "@/components/custom/home/Hero";
import About from "@/components/custom/home/About";
import Service from "@/components/custom/home/Service";
import Portfolio from "@/components/custom/home/Portfolio";
import Contact from "@/components/custom/home/Contact";
import Footer from "@/components/custom/footer/Footer";

export default function Home() {
  return (
    <main className="px-6 pt-24">
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
