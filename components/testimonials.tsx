import React from "react";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    quote:
      "SaaSify helped us roll out integrations 10x faster. Our metrics skyrocketed after switching!",
    name: "Anna K.",
    title: "CTO, ScaleWorks",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?fit=crop&w=180&q=80",
    rating: 5,
  },
  {
    quote:
      "Everything just works. The team and analytics are outstanding."
      ,
    name: "Brandon H.",
    title: "CEO, Syncly",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?fit=crop&w=180&q=80",
    rating: 5,
  },
  {
    quote:
      "We cut churn in half and wowed our investors. Superb experience.",
    name: "Marie G.",
    title: "Head of Product, AppLab",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=180&q=80",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl text-center font-extrabold mb-8 bg-gradient-to-br from-cyan-400 via-indigo-300 to-indigo-600 bg-clip-text text-transparent">Loved by SaaS teams</h2>
      <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex-1 bg-white/20 border border-white/25 shadow-2xl rounded-2xl py-10 px-8 mx-0 md:mx-4 flex flex-col items-center glass-gradient backdrop-blur-xl animate-in fade-in zoom-in-50 duration-700"
            style={{ boxShadow: '0 2px 32px 0 rgba(34,211,238,0.13)' }}
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full border-4 border-cyan-300 shadow-md mb-2 object-cover"
              loading="lazy"
            />
            <div className="flex gap-0.5 my-2">
              {[...Array(t.rating)].map((_, j) => (
                <StarIcon key={j} className="w-5 h-5 text-yellow-300 fill-yellow-200" />
              ))}
            </div>
            <blockquote className="text-lg text-white font-medium mb-6 italic text-center">“{t.quote}”</blockquote>
            <div className="font-semibold text-white/90 text-base">{t.name}</div>
            <div className="text-cyan-200 text-sm mb-2">{t.title}</div>
          </div>
        ))}
      </div>
      <style>{`.glass-gradient{background:linear-gradient(120deg,rgba(34,211,238,0.13) 30%,rgba(165,180,252,0.08) 70%);}`}</style>
    </section>
  );
}
