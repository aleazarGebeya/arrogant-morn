import React from "react";
import { Button } from "@/components/ui/button";
import { CheckIcon, SparklesIcon, StarIcon } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: 0,
    description: "Perfect for solopreneurs and early projects.",
    features: ["Up to 3 projects", "Basic reporting", "Community support"],
    highlight: false,
  },
  {
    name: "Growth",
    price: 29,
    description: "Advanced for startups with real traction.",
    features: ["Unlimited projects", "Advanced analytics", "Automations", "Priority email support"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: 99,
    description: "Scale securely with dedicated expertise.",
    features: ["Custom integrations", "Team management", "Highest priorities", "Onboarding support"],
    highlight: false,
  },
];

export function PricingTiers() {
  return (
    <section id="pricing" className="py-24 px-6 max-w-5xl mx-auto relative z-10">
      <h2 className="text-4xl font-extrabold text-center mb-2 bg-gradient-to-br from-cyan-400 via-indigo-300 to-indigo-600 bg-clip-text text-transparent">Simple Pricing</h2>
      <p className="text-center text-white/90 mb-14">Choose a plan built for every stage of your SaaS journey.</p>
      <div className="flex flex-col md:flex-row gap-12 md:gap-8 items-center justify-center">
        {tiers.map((tier, i) => (
          <div
            key={tier.name}
            className={`flex-1 max-w-sm rounded-2xl shadow-2xl transition-all duration-400 border backdrop-blur-2xl p-8 bg-white/30 border-white/40 relative flex flex-col items-center ${tier.highlight ? 'scale-105 ring-2 ring-cyan-400/80 z-20 glass-gradient' : ''}`}
            style={tier.highlight ? { boxShadow: '0 4px 64px 0 rgba(34, 211,238,0.18)' } : {}}
          >
            {tier.highlight && (
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 inline-flex gap-1 items-center px-4 py-2 bg-gradient-to-tr from-cyan-400 to-indigo-500 text-white shadow-lg rounded-full font-semibold animate-in fade-in slide-in-from-top-8 duration-500 text-base"><SparklesIcon className="w-5 h-5 mr-1" />Best Value</span>
            )}
            <h3 className="text-2xl font-bold mt-4 mb-3 bg-gradient-to-br from-cyan-400 via-indigo-200 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg">{tier.name}</h3>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-4xl font-extrabold text-white">{tier.price === 0 ? 'Free' : `$${tier.price}`}</span>
              {tier.price !== 0 && <span className="text-lg text-white/80 font-medium mb-1">/mo</span>}
            </div>
            <p className="mb-5 text-white/90">{tier.description}</p>
            <ul className="w-full mb-8 flex flex-col items-center gap-3">
              {tier.features.map((f, idx) => (
                <li key={f} className="flex items-center gap-2 text-base text-white/95">
                  <CheckIcon className="w-5 h-5 text-cyan-400" />
                  {f}
                </li>
              ))}
            </ul>
            <Button className={`w-full rounded-full font-semibold text-lg px-0 ${tier.highlight ? 'glass-gradient text-white' : 'bg-white/80 text-indigo-950 border-white/60 hover:bg-white shadow'}`}
              variant={tier.highlight ? "default" : "outline"}
              >{tier.price === 0 ? 'Start Free' : 'Choose Plan'}</Button>
          </div>
        ))}
      </div>
      <style>{`.glass-gradient{background:linear-gradient(120deg,rgba(34,211,238,0.5) 20%,rgba(165,180,252,0.3) 80%);}`}</style>
    </section>
  );
}
