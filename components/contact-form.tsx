"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Your name is required"),
  email: z.string().email({ message: "Enter a valid email address" }),
  message: z.string().min(6, "Message should be more than 6 characters"),
});

export function ContactForm({ onSuccess }: { onSuccess: () => void }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: zodResolver(schema) });

  function onSubmit(values: { name: string; email: string; message: string }) {
    setTimeout(() => {
      reset();
      window.alert("Thank you for reaching out! We’ll get in touch soon.");
      onSuccess();
    }, 900);
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <label className="font-bold text-indigo-950/80 mb-1">Your Name</label>
      <input
        className="rounded-xl px-5 py-3 border border-white/40 bg-white/80 text-indigo-900 outline-cyan-400 shadow-inner text-lg transition placeholder:text-indigo-800/40 focus:ring-2 focus:ring-cyan-300"
        type="text"
        {...register("name")}
        placeholder="Jane Doe"
        aria-invalid={!!errors.name}
      />
      {errors.name && (
        <p className="text-red-600 text-sm font-medium mt-1">{errors.name.message as string}</p>
      )}
      <label className="font-bold text-indigo-950/80 mb-1">Email Address</label>
      <input
        className="rounded-xl px-5 py-3 border border-white/40 bg-white/80 text-indigo-900 outline-cyan-400 shadow-inner text-lg transition placeholder:text-indigo-800/40 focus:ring-2 focus:ring-cyan-300"
        type="email"
        {...register("email")}
        placeholder="you@company.com"
        aria-invalid={!!errors.email}
      />
      {errors.email && (
        <p className="text-red-600 text-sm font-medium mt-1">{errors.email.message as string}</p>
      )}
      <label className="font-bold text-indigo-950/80 mb-1">Message</label>
      <textarea
        className="rounded-xl px-5 py-3 border border-white/40 bg-white/80 text-indigo-900 outline-cyan-400 shadow-inner text-lg transition placeholder:text-indigo-800/40 focus:ring-2 focus:ring-cyan-300 min-h-[92px]"
        {...register("message")}
        placeholder="Type your message..."
        aria-invalid={!!errors.message}
      />
      {errors.message && (
        <p className="text-red-600 text-sm font-medium mt-1">{errors.message.message as string}</p>
      )}
      <Button
        type="submit"
        className="mt-2 bg-gradient-to-tr from-cyan-400 via-indigo-300 to-violet-500 text-white rounded-full px-7 py-3 font-bold shadow-xl"
      >
        Send Message
      </Button>
    </form>
  );
}
