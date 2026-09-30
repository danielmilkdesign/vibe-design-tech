import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatChanges from "@/components/WhatChanges";
import SampleDelivery from "@/components/SampleDelivery";
import HowItWorks from "@/components/HowItWorks";
import Tiers from "@/components/Tiers";
import Plans from "@/components/Plans";
import About from "@/components/About";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <Nav />
      <main>
        <Hero />
        <Tiers />
        <WhatChanges />
        <SampleDelivery />
        <HowItWorks />
        <Plans />
        <About />
        <Faq />
      </main>
      <FinalCta />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
