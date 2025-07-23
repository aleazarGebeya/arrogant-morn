"use client";
import React, { useState } from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AnimatedStats } from "@/components/animated-stats";
import { PricingTiers } from "@/components/pricing-tiers";
import { Testimonials } from "@/components/testimonials";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function Page() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-violet-900 via-indigo-800 to-cyan-700 text-white overflow-x-hidden">
      <Navigation onContactClick={() => setContactOpen(true)} />
      <main className="flex-1 pt-24 pb-10">
        <HeroSection />
        <AnimatedStats />
        <PricingTiers />
        <Testimonials />
        <div className="relative z-10 max-w-2xl mx-auto mt-16 mb-6 px-4 sm:px-0">
          <NewsletterSignup />
        </div>
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity ${contactOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          aria-hidden={!contactOpen}
        >
          <div className="max-w-lg w-full mx-4 bg-white/70 backdrop-blur-2xl rounded-xl p-8 shadow-2xl border border-white/30 relative animate-in fade-in zoom-in-50" role="dialog" aria-modal="true">
            <button aria-label="Close contact form" onClick={() => setContactOpen(false)} className="absolute top-3 right-4 text-indigo-900 hover:text-red-600 transition-colors focus:outline-none font-bold text-2xl ">&times;</button>
            <ContactForm onSuccess={() => setContactOpen(false)} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
