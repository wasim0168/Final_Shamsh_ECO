"use client";

import React, { useState } from "react";
import {
  User,
  Phone,
  Mail,
  Tag,
  Send,
  ShieldCheck,
  MapPin,
  Sparkles,
  Sun,
  Wrench,
  DollarSign,
  Award,
} from "lucide-react";
import { toast } from "sonner";

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      toast.error("Please enter your full name.");
      return;
    }
    if (!formData.phone.trim()) {
      toast.error("Please enter your phone number.");
      return;
    }

    // Format message for WhatsApp
    const messageText = `*New Partner Inquiry / Get in Touch*\n\n` +
      `*Full Name:* ${formData.fullName}\n` +
      `*Phone Number:* ${formData.phone}\n` +
      `*Email Address:* ${formData.email || "N/A"}\n` +
      `*Subject:* ${formData.subject || "Partner Proposal"}\n\n` +
      `*Message:*\n${formData.message || "No message provided."}`;

    // WhatsApp Phone Number (default: 916261196163)
    const phoneNumber = "918224062812";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      messageText
    )}`;

    toast.success("Redirecting to WhatsApp...");

    // Open WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-green-400 text-slate-100 pt-20 lg:pt-24 pb-16 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Main Card Container */}
        <div className=" grid grid-cols-1 lg:grid-cols-12 min-h-[650px]">

          {/* ================= LEFT SIDEBAR PANEL ================= */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#081762] via-[#081762] to-[#fff] flex flex-col justify-between relative overflow-hidden text-white border-r border-slate-700/40">

            <div className="space-y-6 relative z-10 p-8">
              <div className="w-full py-4 flex flex-col items-center justify-center">
                <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <img src="/partner/logo.png" className="h-40" alt="" />
                </div>
                <h3 className="mt-3 text-3xl font-bold text-white tracking-wide text-center">
                  DUHA <span className="text-amber-300 block">ENTERPRISES</span>
                </h3>
                <span className="text-sm font-normal text-white tracking-wider uppercase">
                  SWITCH TO SUNSHINE
                </span>
                <span className="text-[10px] text-amber-300 font-bold">
                  SOLAR POWER SOLUTIONS
                </span>
              </div>

              {/* Tagline text */}
              <div className="text-center space-y-1">
                <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
                  Solar installation for residential, commercial and EPC works.
                </p>
                <p className="text-xs font-bold text-amber-300">
                  Complete Solar Installation Company
                </p>
              </div>

              {/* Contact Information Badge */}
              <div className="pt-2 flex flex-col items-start gap-5 w-full">

                {/* Yellow Pill Badge with Overlapping Circular Icon */}
                <div className="relative inline-flex items-center pl-1 pr-6 py-1.5 bg-[#f5b800] text-[#0c203b] rounded-full font-black text-xs sm:text-sm tracking-wide shadow-lg">
                  <div className="w-8 h-8 rounded-full bg-[#0c203b] border-2 border-[#f5b800] flex items-center justify-center mr-2 shrink-0 shadow">
                    <User className="w-4 h-4 text-[#f5b800]" />
                  </div>
                  <span className="uppercase">CONTACT INFORMATION</span>
                </div>

                {/* Phone & Address Details */}
                <div className="space-y-5 w-full pt-1">

                  {/* Phone Number */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md">
                      <Phone className="w-5 h-5 text-[#0c203b] fill-[#0c203b]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#f5b800]">Phone Number</p>
                      <p className="text-xs sm:text-sm font-bold text-white tracking-wide">
                        +91 8224002812
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md mt-0.5">
                      <MapPin className="w-5 h-5 text-[#0c203b] fill-[#0c203b]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#f5b800]">Address</p>
                      <p className="text-xs text-white leading-relaxed font-medium">
                        Duha Enterprises <br />
                        G07 , hire arcade in front of mats university, pandri, raipur chattisgarh
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* ---------------- HOUSE / SOLAR ILLUSTRATION (EMPTY DIV FOR USER IMAGE) ---------------- */}
            {/* USER IMAGE PLACEHOLDER: Insert your House / Solar panel banner image inside this div */}
            <div className="mt-auto relative z-10 w-full  rounded-2xl">
              <div className="text-slate-400 text-xs font-semibold flex items-end">
                <img src="/partner/home.png" className="w-1/2 ml-auto" alt="" />
              </div>
            </div>

          </div>

          <img src="/partner/solar.png" className="absolute top-0 right-0 h-80 md:h-90" alt="" />
          {/* ================= RIGHT FORM PANEL ================= */}
          <div className="lg:col-span-7 text-slate-800  lg:p-10 flex flex-col justify-center items-center relative">
            <div className="bg-white p-8 h-2.4 w-full lg:absolute -left-5 bottom-20">
              {/* Header Title Section */}
              <div className="flex items-start  justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0c203b] tracking-tight">
                    GET IN <span className="text-amber-500">TOUCH</span>
                  </h2>
                  <div className="w-16 h-1 bg-amber-400 rounded-full mt-2" />
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
                    Have a question or need a quote? Fill out the form below and we&apos;ll get back to you shortly.
                  </p>
                </div>

                {/* ---------------- HEADER SUN GRAPHIC (EMPTY DIV FOR USER IMAGE) ---------------- */}
                {/* USER IMAGE PLACEHOLDER: Put header solar graphic image here */}
                <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center p-2 text-center">
                  <img src="/partner/sun.png" alt="" />
                </div>
              </div>

              {/* Partner Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <div className="flex rounded-xl overflow-hidden border border-slate-300 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600/20 transition-all shadow-sm">
                    <div className="bg-[#0c203b] text-white px-4 flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-amber-400" />
                    </div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3 text-sm text-slate-800 bg-slate-50/50 focus:outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <div className="flex rounded-xl overflow-hidden border border-slate-300 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600/20 transition-all shadow-sm">
                    <div className="bg-[#0c203b] text-white px-4 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-amber-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your Phone number"
                      required
                      className="w-full px-4 py-3 text-sm text-slate-800 bg-slate-50/50 focus:outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address<span className="text-red-500">*</span>
                  </label>
                  <div className="flex rounded-xl overflow-hidden border border-slate-300 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600/20 transition-all shadow-sm">
                    <div className="bg-[#0c203b] text-white px-4 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-amber-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 text-sm text-slate-800 bg-slate-50/50 focus:outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Subject<span className="text-red-500">*</span>
                  </label>
                  <div className="flex rounded-xl overflow-hidden border border-slate-300 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600/20 transition-all shadow-sm">
                    <div className="bg-[#0c203b] text-white px-4 flex items-center justify-center shrink-0">
                      <Tag className="w-4 h-4 text-amber-400" />
                    </div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter subject"
                      className="w-full px-4 py-3 text-sm text-slate-800 bg-slate-50/50 focus:outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className="w-full p-4 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 text-sm text-slate-800 bg-slate-50/50 focus:outline-none placeholder:text-slate-400 resize-none shadow-sm"
                  />
                </div>

                {/* Submit / Send to WhatsApp Button */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#f5b800] hover:bg-[#e0a800] text-[#0c203b] font-extrabold text-base tracking-wide flex items-center justify-center gap-3 transition-all duration-200 transform active:scale-[0.99] shadow-lg shadow-amber-400/20 cursor-pointer"
                  >
                    <Send className="w-5 h-5 fill-current" />
                    <span>SEND MESSAGE</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-slate-500 text-xs text-center font-medium">
                    <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>We respect your privacy and your information is safe with us.</span>
                  </div>
                </div>
              </form>
            </div>

          </div>

        </div>

        {/* ================= BOTTOM FEATURE CARDS (4 COLUMNS) ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Card 1: High Quality Solar System */}
          <div className="bg-white text-slate-900 rounded-2xl p-5 border border-slate-200 shadow-md flex items-center gap-4 hover:shadow-xl transition-all group">
            {/* USER IMAGE PLACEHOLDER: Insert icon/image here */}
            <div className="w-12 h-12 rounded-xl bg-amber-50 border-2 border-dashed border-amber-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <img src="/partner/sun.png" alt="" />

            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-[#0c203b] leading-snug uppercase tracking-wider">
                HIGH QUALITY <br />SOLAR SYSTEM
              </h4>
            </div>
          </div>

          {/* Card 2: Expert Installation */}
          <div className="bg-white text-slate-900 rounded-2xl p-5 border border-slate-200 shadow-md flex items-center gap-4 hover:shadow-xl transition-all group">
            {/* USER IMAGE PLACEHOLDER: Insert icon/image here */}
            <div className="w-12 h-12 rounded-xl bg-blue-50 border-2 border-dashed border-blue-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <img src="/partner/check.png" alt="" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-[#0c203b] leading-snug uppercase tracking-wider">
                EXPERT <br />INSTALLATION
              </h4>
            </div>
          </div>

          {/* Card 3: Cost Effective Solution */}
          <div className="bg-white text-slate-900 rounded-2xl p-5 border border-slate-200 shadow-md flex items-center gap-4 hover:shadow-xl transition-all group">
            {/* USER IMAGE PLACEHOLDER: Insert icon/image here */}
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border-2 border-dashed border-emerald-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <img src="/partner/settings.png" alt="" />

            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-[#0c203b] leading-snug uppercase tracking-wider">
                COST EFFECTIVE <br />SOLUTION
              </h4>
            </div>
          </div>

          {/* Card 4: Reliable & Durable */}
          <div className="bg-white text-slate-900 rounded-2xl p-5 border border-slate-200 shadow-md flex items-center gap-4 hover:shadow-xl transition-all group">
            {/* USER IMAGE PLACEHOLDER: Insert icon/image here */}
            <div className="w-12 h-12 rounded-xl bg-indigo-50 border-2 border-dashed border-indigo-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <img src="/partner/secure.png" alt="" />

            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-[#0c203b] leading-snug uppercase tracking-wider">
                RELIABLE & <br />DURABLE
              </h4>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
