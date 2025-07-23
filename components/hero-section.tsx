import React from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 pt-10 pb-24 md:pb-0 z-10"
    >
      <div className="absolute -z-10 top-0 left-0 right-0 h-[60vh] md:h-[90vh] bg-gradient-to-r from-indigo-400/60 via-violet-400/40 to-cyan-300/30 blur-[90px] opacity-60" />
      {/* Glassmorphism card */}
      <div className="backdrop-blur-2xl bg-white/20 border border-white/30 shadow-2xl rounded-3xl max-w-lg md:mr-16 p-8 md:p-10 flex flex-col items-center md:items-start">
        <h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-md mb-4 flex flex-col">
          <span className="bg-gradient-to-br from-cyan-400 via-indigo-300 to-indigo-600 bg-clip-text text-transparent">Supercharge <span className="inline-block animate-pulse">Your SaaS</span></span>
        </h1>
        <p className="text-lg text-white/90 mb-7">The modern toolkit for SaaS teams to scale, delight customers, and cut through the noise. Explore features, stats & more below.</p>
        <div className="flex gap-4">
          <Button className="bg-cyan-500/80 hover:bg-cyan-600 font-semibold shadow-lg px-8 py-3 text-lg rounded-full">Get Started</Button>
          <a href="#pricing"><Button variant="outline" className="border-white/30 hover:border-cyan-400 bg-white/10 text-white px-8 py-3 rounded-full text-lg">See Pricing</Button></a>
        </div>
      </div>
      <div className="relative mt-16 md:mt-0 md:ml-16 flex-1 flex items-center justify-center min-w-[340px] min-h-[450px] max-w-md">
        <span className="absolute top-4 left-8 bg-white/20 rounded-full h-36 w-36 blur-[48px]" />
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&auto=format" alt="SaaS platform teamwork" className="rounded-2xl shadow-2xl border-white/20 border-4 object-cover w-[340px] h-[450px]" loading="lazy" />
        {/* floating UI dots and micro-interactions */}
        <span className="absolute bottom-8 right-8 animate-bounce bg-cyan-400/70 border-2 border-white rounded-full w-8 h-8 shadow-lg" />
        <span className="absolute top-20 right-14 animate-spin-slow bg-indigo-300/80 border-2 border-white rounded-full w-6 h-6 shadow" />
        <style>{`@keyframes spin-slow {0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}} .animate-spin-slow{animation:spin-slow 4s linear infinite;}`}</style>
      </div>
    </section>
  );
}
