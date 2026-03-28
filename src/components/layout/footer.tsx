import {
  IconBrandWhatsapp,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";

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
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Recycling Process", href: "#" },
    { name: "Facilities", href: "#" },
    { name: "Contact Us", href: "#" },
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

  certifications: [
    "E-Waste Compliant",
    "100% Eco-Friendly",
  ],
} as const;

const Footer = () => {
  return (
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
  );
};

export default Footer;
