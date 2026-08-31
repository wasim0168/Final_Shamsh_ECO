"use client";

import {
  IconBrandWhatsapp,
  IconMail,
  IconMapPin,
  IconPhone,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export const footerData = {
  brand: {
    name: "SHAMSH Eco",
    poweredBy: "Resicode Solutions",
    taglineTitle: "Building a Greener Tomorrow",
    taglineDescription:
      "Leading the way in sustainable solar panel recycling with certified eco-friendly processes and commitment to environmental excellence.",
  },
  // social media links with icons, colors, and labels for accessibility
  socialLinks: [
    {
      icon: IconBrandWhatsapp,
      href: "https://wa.me/+916261196163",
      bg: "bg-green-600 hover:bg-green-700",
      label: "Whatsapp",
    },
  ],

  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Facilities", href: "/facilities" },
    { name: "Recycling Process", href: "/process" },
    { name: "Partner", href: "/partner" },
    { name: "Contact Us", href: "/contactUs" },
  ],

  services: [
    { name: "Solar Panel Collection", href: "#" },
    { name: "Bulk Recycling", href: "#" },
    { name: "Industrial Solutions", href: "#" },
    { name: "Residential Pickup", href: "#" },
    { name: "Certification Services", href: "#" },
    { name: "Consulting", href: "#" },
  ],

  contact: {
    phone: "+91 62611 96163",
    email: "info@shamsheco.com",
    address: `plot no 39, ROAD, beside sai pride city, nanihal vihar, Mungi, Pacheda-1, Chhattisgarh 493111`,
  },

  legalLinks: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/termsOfService" },
    { name: "Cookie Policy", href: "/cookiePolicy" },
  ],

  certifications: ["E-Waste Compliant", "100% Eco-Friendly"],
} as const;

// Floating WhatsApp Button Component
const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const phoneNumber = "+916261196163";
  const message =
    "Hi! I'd like to know more about your solar panel recycling services.";

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setIsOpen(false);
  };

  const quickActions = [
    {
      label: "Get a Quote",
      message: "Hi! I'd like to get a quote for solar panel recycling.",
      icon: "💰",
    },
    {
      label: "Schedule Pickup",
      message: "Hi! I'd like to schedule a pickup for solar panel recycling.",
      icon: "📅",
    },
    {
      label: "General Inquiry",
      message: "Hi! I have a question about your recycling services.",
      icon: "❓",
    },
  ];

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
      }`}
    >
      {/* Quick action menu */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl w-64 p-2 mb-2 animate-slideUp">
          {/* Header */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-100 mb-1">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <IconBrandWhatsapp size={16} className="text-white" />
            </div>
            <div>
              <p className="text-gray-900 font-semibold text-sm">SHAMSH Eco</p>
              <p className="text-green-500 text-xs">Online</p>
            </div>
          </div>

          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => {
                window.open(
                  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    action.message
                  )}`,
                  "_blank"
                );
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors text-left"
            >
              <span className="text-xl">{action.icon}</span>
              <span className="text-gray-700 text-sm font-medium">
                {action.label}
              </span>
            </button>
          ))}

          <div className="border-t border-gray-100 my-1"></div>

          <button
            onClick={() => {
              window.open(
                `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  "Hi! I need assistance."
                )}`,
                "_blank"
              );
              setIsOpen(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors text-left"
          >
            <IconMessage size={18} className="text-green-500" />
            <span className="text-gray-700 text-sm font-medium">
              Open Chat
            </span>
          </button>
        </div>
      )}

      {/* Main button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing ring */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>

        {/* Button */}
        <div
          className={`relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-110 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          {isOpen ? (
            <IconX size={28} className="text-white" />
          ) : (
            <IconBrandWhatsapp size={28} className="text-white" />
          )}
        </div>

        {/* Badge */}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
          1
        </div>
      </button>
    </div>
  );
};

// Icon Message component for the quick actions
type IconMessageProps = {
  size?: number;
  className?: string;
};

const IconMessage = ({
  size = 20,
  className = "",
}: IconMessageProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const Footer = () => {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      <footer className="bg-black text-gray-300">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {footerData.brand.name[0]}
                  </span>
                </div>
                <span className="text-white font-bold text-lg">
                  {footerData.brand.name}
                </span>
              </div>

              <div className="border border-teal-500 rounded-lg px-3 py-2 w-fit flex items-center gap-2 bg-black/50">
                <code className="text-teal-400 text-xs">&lt;&gt;</code>
                <span className="text-teal-400 text-xs font-medium">
                  Powered by {footerData.brand.poweredBy}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-teal-400 text-lg">🌿</span>
                <div>
                  <p className="text-white font-medium text-sm">
                    {footerData.brand.taglineTitle}
                  </p>
                  <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                    {footerData.brand.taglineDescription}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                {footerData.socialLinks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className={`${item.bg} p-3 rounded-full transition-colors`}
                      aria-label={item.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={18} className="text-white" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-6">Quick Links</h3>
              <nav className="space-y-3">
                {footerData.quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors block text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold mb-6">Our Services</h3>
              <nav className="space-y-3">
                {footerData.services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors block text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <IconPhone size={20} className="text-teal-400 mt-0.5" />
                  <div>
                    <p className="text-gray-500 text-xs">Phone</p>
                    <p className="text-white text-sm font-medium">
                      {footerData.contact.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <IconMail size={20} className="text-teal-400 mt-0.5" />
                  <div>
                    <p className="text-gray-500 text-xs">Email</p>
                    <p className="text-white text-sm font-medium">
                      {footerData.contact.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <IconMapPin size={20} className="text-teal-400 mt-0.5" />
                  <div>
                    <p className="text-gray-500 text-xs">Address</p>
                    <p className="text-white text-sm font-medium whitespace-pre-line">
                      {footerData.contact.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 my-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} {footerData.brand.name} Eco
              Renew-Recycling. All rights reserved.
            </p>

            <div className="flex gap-4 text-gray-500 text-xs">
              {footerData.legalLinks.map((item, index) => (
                <span key={index} className="flex items-center gap-2">
                  <Link
                    href={item.href}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                  {index !== 2 && <span>•</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-black/50 border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-8 py-8">
            <div className="flex flex-wrap justify-center gap-6">
              {footerData.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="border border-teal-500 rounded-lg px-4 py-2 text-center"
                >
                  <p className="text-teal-400 text-xs font-medium">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;