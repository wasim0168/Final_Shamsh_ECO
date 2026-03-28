import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle,
  FileCheck,
  FileText,
  Gavel,
  Laptop,
  Mail,
  MapPin,
  Recycle,
  Shield,
  Sun,
  Users,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Shamsh Eco Re-New Recycling",
  description:
    "Terms of Service for Shamsh Eco Re-New Recycling outlining service conditions and legal responsibilities.",
};

export default function TermsOfService() {
  const services = [
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Solar Panel Recycling",
      description:
        "Environmentally responsible recycling of end-of-life solar panels",
      color: "from-yellow-500 to-orange-500",
      features: [
        "Panel dismantling",
        "Material recovery",
        "Hazardous material handling",
      ],
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "E-Waste Recycling",
      description: "Safe and compliant recycling of electronic waste",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Data destruction",
        "Component recovery",
        "Certified disposal",
      ],
    },
    {
      icon: <Recycle className="w-6 h-6" />,
      title: "Material Recovery",
      description: "Extraction and processing of valuable materials",
      color: "from-green-500 to-emerald-500",
      features: [
        "Metal recovery",
        "Plastic recycling",
        "Rare earth extraction",
      ],
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "ESG & Compliance",
      description: "Documentation and reporting for regulatory compliance",
      color: "from-purple-500 to-pink-500",
      features: [
        "Audit reports",
        "Compliance certificates",
        "Sustainability tracking",
      ],
    },
  ];

  const responsibilities = [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Legal Ownership",
      description:
        "Clients must have lawful ownership of all materials submitted",
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Full Disclosure",
      description: "Provide complete and accurate information about materials",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Compliance",
      description: "Ensure materials comply with all applicable regulations",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Authorized Representative",
      description:
        "Have authority to enter into agreements on behalf of your organization",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50">
      {/* Back to Home Link */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-amber-600 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      {/* Header Section */}
      <div className="relative max-w-4xl mx-auto px-6 pt-8 pb-12">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-lg">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-amber-800 to-orange-700 bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-gray-600 mt-2">Last updated: January 2024</p>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              Welcome to Shamsh Eco Re-New Recycling. By accessing our website
              or engaging our services, you agree to be bound by these Terms of
              Service. Please read them carefully before using our services.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        {/* Services Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl">
              <Recycle className="w-6 h-6 text-gray-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Our Services</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`inline-flex p-3 bg-gradient-to-r ${service.color} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform`}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Client Responsibilities Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Client Responsibilities</h2>
            </div>

            <p className="text-gray-200 mb-6 leading-relaxed">
              To ensure safe and compliant recycling services, clients must
              adhere to the following responsibilities:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {responsibilities.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-xl p-4 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-amber-400">{item.icon}</div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Sections Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Limitation of Liability */}
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">
                Limitation of Liability
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              The Company shall not be liable for any indirect, incidental, or
              consequential damages arising from the use of our services,
              including but not limited to undisclosed hazardous materials,
              improper handling by clients, or force majeure events.
            </p>
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">
                <span className="font-semibold">⚠️ Important:</span> Clients are
                responsible for disclosing all hazardous materials prior to
                recycling.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-100 rounded-lg">
                <Gavel className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Governing Law</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              These Terms of Service shall be governed by and construed in
              accordance with the laws of India. Any disputes arising under
              these terms shall be subject to the exclusive jurisdiction of the
              courts in [Your City], India.
            </p>
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">
                <span className="font-semibold">📍 Jurisdiction:</span> All
                legal proceedings shall be conducted in [Your City], India.
              </p>
            </div>
          </section>
        </div>

        {/* Additional Terms */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Additional Terms
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Intellectual Property
                </h3>
                <p className="text-gray-600">
                  All content, logos, and materials on our website are the
                  property of Shamsh Eco Re-New Recycling and protected by
                  intellectual property laws.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Modifications to Service
                </h3>
                <p className="text-gray-600">
                  We reserve the right to modify or discontinue any part of our
                  services without prior notice. We will notify clients of
                  significant changes that may affect ongoing contracts.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Termination
                </h3>
                <p className="text-gray-600">
                  We reserve the right to terminate or suspend access to our
                  services immediately, without prior notice, for conduct that
                  we believe violates these Terms or is harmful to other users,
                  us, or third parties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Acceptance Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-green-500 rounded-lg text-white">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Acceptance of Terms
                </h2>
                <p className="text-gray-600">
                  By accessing or using our services, you acknowledge that you
                  have read, understood, and agree to be bound by these Terms of
                  Service. If you do not agree to these terms, please do not use
                  our services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-sm border border-amber-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Questions About Our Terms?
          </h2>
          <p className="text-gray-600 mb-6">
            Our legal team is available to address any questions about these
            terms:
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group">
              <div className="p-2 bg-amber-500 rounded-lg text-white group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email us at</p>
                <p className="text-gray-800 font-medium">legal@shamsheco.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group">
              <div className="p-2 bg-orange-500 rounded-lg text-white group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Visit us at</p>
                <p className="text-gray-800 font-medium">
                  123 Eco Street, Green City, GC 12345
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2024 Shamsh Eco Re-New Recycling. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
