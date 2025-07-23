import React from "react";
export function Footer() {
  return (
    <footer className="w-full mt-20 pb-6 pt-10 px-6 bg-white/5 border-t border-white/15 backdrop-blur text-base">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-extrabold bg-gradient-to-br from-indigo-400 to-cyan-300 bg-clip-text text-transparent">SaaSify</span>
          <span className="text-sm text-white/40">© {new Date().getFullYear()} All rights reserved.</span>
        </div>
        <div className="flex flex-wrap gap-6 items-center">
          <a href="#hero" className="hover:text-cyan-300 transition">Home</a>
          <a href="#stats" className="hover:text-cyan-300 transition">Features</a>
          <a href="#pricing" className="hover:text-cyan-300 transition">Pricing</a>
          <a href="#testimonials" className="hover:text-cyan-300 transition">Testimonials</a>
          <a href="#newsletter" className="hover:text-cyan-300 transition">Newsletter</a>
        </div>
      </div>
    </footer>
  );
}
