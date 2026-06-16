"use client";

import { ContactForm } from "./contact-form";

export default function ContactSection() {
  return (
    <section className="w-full bg-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* ================= LEFT - FORM ================= */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <ContactForm />
        </div>

        {/* ================= RIGHT - MAP ================= */}
        <div className="flex flex-col gap-6">
          {/* Map Card */}
         <div className="rounded-2xl overflow-hidden shadow-xl bg-white h-full">
  <iframe
    src="https://maps.google.com/maps?q=plot%20no%2039%20road%20beside%20sai%20pride%20city%20nanihal%20vihar%20mungi%20pacheda%201%20chhattisgarh%20493111&t=&z=15&ie=UTF8&iwloc=&output=embed"
    width="100%"
    height="100%"
    className="min-h-[420px] w-full"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

          {/* Location Info Box */}
          <div className="bg-green-700 text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Our Location</h3>
            <p className="text-sm text-white/90 leading-relaxed">
              Visit our state-of-the-art solar recycling facility. We’re
              committed to sustainable practices and would love to show you our
              process in action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
