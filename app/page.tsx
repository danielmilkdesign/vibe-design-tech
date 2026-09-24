import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Tiers from "@/components/Tiers";
import Plans from "@/components/Plans";
import About from "@/components/About";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Tiers />
        <Plans />
        <About />
      </main>
      <FinalCta />
      <Footer />
    </>
  );
}
