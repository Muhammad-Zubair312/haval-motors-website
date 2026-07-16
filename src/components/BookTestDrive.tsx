"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckIcon } from "./icons";

const MODELS = ["Haval H6", "Haval Jolion", "Haval H9", "Haval H2s"];

const floatFieldClasses =
  "peer w-full border-b border-white/20 bg-transparent px-0 pb-2.5 pt-6 text-sm text-white placeholder-transparent transition-colors duration-300 focus:border-gold focus:outline-none";

const floatLabelClasses =
  "pointer-events-none absolute left-0 top-6 text-sm text-text-muted transition-all duration-200 peer-focus:top-0 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gold";

export function BookTestDrive() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="bg-bg-card py-20 lg:py-[120px]">
      <div className="mx-auto max-w-2xl px-6 lg:px-10">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Get Behind The Wheel
          </span>
          <h2 className="mt-4 font-heading text-[clamp(32px,5vw,56px)] font-bold text-white">
            <span className="text-gold">Book</span> Your Test Drive
          </h2>
          <p className="mt-4 text-text-muted">
            Fill in your details and our team will reach out to schedule your experience.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-gold/20 bg-white/[0.03] p-6 backdrop-blur-md sm:p-10">
          {submitted ? (
            <div className="flex flex-col items-center py-10 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold">
                <CheckIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">Request Received</h3>
              <p className="mt-2 max-w-sm text-sm text-text-muted">
                Thank you for your interest in Haval Motors. Our team will contact you
                shortly to confirm your test drive.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 cursor-pointer text-sm font-medium text-gold underline-offset-4 hover:underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="relative sm:col-span-2">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder=" "
                  className={floatFieldClasses}
                />
                <label htmlFor="fullName" className={floatLabelClasses}>
                  Full Name
                </label>
              </div>

              <div className="relative">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder=" "
                  className={floatFieldClasses}
                />
                <label htmlFor="phone" className={floatLabelClasses}>
                  Phone
                </label>
              </div>

              <div className="relative">
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  placeholder=" "
                  className={floatFieldClasses}
                />
                <label htmlFor="city" className={floatLabelClasses}>
                  City
                </label>
              </div>

              <div className="relative sm:col-span-2">
                <label
                  htmlFor="model"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-text-muted"
                >
                  Model
                </label>
                <select
                  id="model"
                  name="model"
                  required
                  defaultValue=""
                  className="w-full border-b border-white/20 bg-transparent pb-2.5 text-sm text-white transition-colors duration-300 focus:border-gold focus:outline-none"
                >
                  <option value="" disabled className="bg-bg-card-alt">
                    Select a model
                  </option>
                  {MODELS.map((model) => (
                    <option key={model} value={model} className="bg-bg-card-alt">
                      {model}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="shimmer-btn mt-2 w-full cursor-pointer rounded-full bg-gold py-3.5 text-sm font-semibold uppercase tracking-wider text-[#0a0a0a] transition-colors duration-200"
                >
                  Confirm Booking
                </motion.button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
