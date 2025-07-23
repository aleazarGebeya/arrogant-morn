"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

const schema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
});

export function NewsletterSignup() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(schema),
  });

  function onSubmit(values: { email: string }) {
    // Simulate API call
    setTimeout(() => {
      reset();
      window.alert("Thank you for subscribing!");
    }, 600);
  }

  return (
    <form
      id="newsletter"
      className="flex flex-col items-center gap-4 p-8 bg-white/30 border border-white/30 backdrop-blur-2xl rounded-2xl shadow-xl animate-in fade-in duration-500"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      aria-labelledby="newsletter-title"
    >
      <label className="w-full text-center text-2xl font-bold mb-1 text-white/95" id="newsletter-title">Stay in touch</label>
      <div className="flex flex-col md:flex-row w-full items-center gap-3">
        <input
          className="px-5 py-3 md:px-6 md:py-4 w-full md:w-auto rounded-full border border-white/40 bg-white/80 text-indigo-800 outline-cyan-400 shadow-inner text-lg transition placeholder:text-indigo-700/40 focus:ring-2 focus:ring-cyan-300"
          type="email"
          placeholder="Enter your email..."
          {...register("email")}
          aria-invalid={!!errors.email}
        />
        <Button
          className="bg-gradient-to-tr from-cyan-400 via-indigo-300 to-violet-500 text-white rounded-full px-7 py-3 font-bold shadow-lg"
          type="submit"
        >
          Subscribe
        </Button>
      </div>
      {errors.email && (
        <p className="text-sm text-red-600 font-medium mt-1" role="alert">
          {errors.email.message as string}
        </p>
      )}
    </form>
  );
}
