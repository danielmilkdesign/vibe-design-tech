"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Segments from "@/components/Segments";
import Problem from "@/components/Problem";
import WhatChanges from "@/components/WhatChanges";
import SampleDelivery from "@/components/SampleDelivery";
import HowItWorks from "@/components/HowItWorks";
import Plans from "@/components/Plans";
import About from "@/components/About";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <>
      <ScrollProgressBar />
      <Nav onOpenBooking={openBooking} />
      <main>
        <Hero onOpenBooking={openBooking} />
        <Segments />
        <Problem />
        <WhatChanges />
        <SampleDelivery />
        <HowItWorks onOpenBooking={openBooking} />
        <Plans onOpenBooking={openBooking} />
        <About />
        <Faq />
      </main>
      <FinalCta onOpenBooking={openBooking} />
      <Footer />
      <FloatingWhatsApp />
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </>
  );
}
