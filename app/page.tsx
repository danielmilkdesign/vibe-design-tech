import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhatChanges from "@/components/WhatChanges";
import SampleDelivery from "@/components/SampleDelivery";
import HowItWorks from "@/components/HowItWorks";
import Tiers from "@/components/Tiers";
import Plans from "@/components/Plans";
import About from "@/components/About";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <WhatChanges />
        <SampleDelivery />
        <HowItWorks />
        <Tiers />
        <Plans />
        <About />
        <Faq />
      </main>
      <FinalCta />
      <Footer />
    </>
  );
}
