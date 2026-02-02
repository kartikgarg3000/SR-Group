'use client';

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import BusinessCarousel from "@/components/BusinessCarousel";
import AboutSection from "@/components/AboutSection";
import FounderSection from "@/components/FounderSection";
import JourneyTimeline from "@/components/JourneyTimeline";
import PhilosophySection from "@/components/PhilosophySection";
import VerticalsSection from "@/components/VerticalsSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const statsRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: statsRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      {/* ================= HERO – BUSINESS CAROUSEL ================= */}
      <div className="relative h-screen">
        <BusinessCarousel />
      </div>

      <div className="relative z-10">
        <AboutSection />
        
        <div className="px-4 max-w-7xl mx-auto">
          <FounderSection />
          <JourneyTimeline />
          <PhilosophySection />
          <VerticalsSection />
        </div>

        <StatsSection statsRef={statsRef} backgroundY={backgroundY} />
        <ContactSection />
      </div>
    </main>
  );
}