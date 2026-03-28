import { Metadata } from "next";
import Link from "next/link";
import { 
  Shield, 
  Lock, 
  Mail, 
  MapPin, 
  ArrowLeft,
  UserCheck,
  Building2,
  MailCheck,
  Phone,
  BarChart3,
  MessageSquare,
  Recycle,
  FileCheck,
  Server,
  Eye
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Shamsh Eco Re-New Recycling",
  description:
    "Privacy Policy of Shamsh Eco Re-New Recycling explaining how we collect, use, and protect personal data.",
};

export default function PrivacyPolicy() {
  const collectedInfo = [
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Name and Contact Details",
      description: "Your full name and preferred contact information",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Company Information",
      description: "Business name, role, and company details",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <MailCheck className="w-5 h-5" />,
      title: "Email Address",
      description: "For communication and service updates",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone Number",
      description: "To reach you quickly when needed",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Website Usage Data",
      description: "How you interact with our website",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const usagePurposes = [
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Respond to Inquiries",
      description: "Answer your questions and provide support",
      color: "from-blue-500 to-teal-500"
    },
    {
      icon: <Recycle className="w-5 h-5" />,
      title: "Provide Recycling Services",
      description: "Deliver our core recycling solutions",
      color: "from-green-500 to-lime-500"
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: "Improve Website Performance",
      description: "Enhance user experience and functionality",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      title: "Maintain Compliance",
      description: "Keep required documentation and records",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Back to Home Link */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      {/* Header Section */}
      <div className="relative max-w-4xl mx-auto px-6 pt-8 pb-12">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-700 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-gray-600 mt-2">Last updated: January 2024</p>
            </div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              At Shamsh Eco Re-New Recycling, your privacy is our priority. We are committed to protecting 
              your personal data and being transparent about how we collect and use it. This policy outlines 
              our practices in clear, simple terms.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        {/* Information We Collect Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl">
              <Eye className="w-6 h-6 text-gray-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Information We Collect</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collectedInfo.map((item, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 bg-gradient-to-r ${item.color} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How We Use Information Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl">
              <BarChart3 className="w-6 h-6 text-gray-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">How We Use Your Information</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {usagePurposes.map((item, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 bg-gradient-to-r ${item.color} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Data Protection Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Data Protection & Security</h2>
            </div>
            
            <p className="text-gray-200 mb-6 leading-relaxed">
              We implement industry-standard security measures to protect your personal information 
              from unauthorized access, disclosure, or misuse. Our commitment to data protection includes:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-white block mb-1">🔒 Encryption</span>
                  All data is encrypted during transmission
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-white block mb-1">🛡️ Access Control</span>
                  Strict access controls and authentication
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-white block mb-1">📋 Regular Audits</span>
                  Routine security assessments
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-white block mb-1">⚡ Quick Response</span>
                  Immediate action on security concerns
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Your Rights Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Privacy Rights</h2>
            <p className="text-gray-600 mb-6">
              You have the right to:
            </p>
            <ul className="space-y-3">
              {[
                "Access your personal data",
                "Correct inaccurate information",
                "Request deletion of your data",
                "Opt-out of marketing communications",
                "Export your data in a portable format"
              ].map((right, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{right}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-sm border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Have Questions About Your Privacy?</h2>
          <p className="text-gray-600 mb-6">
            Our privacy team is here to help. Contact us with any questions or concerns:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group">
              <div className="p-2 bg-blue-500 rounded-lg text-white group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email us at</p>
                <p className="text-gray-800 font-medium">privacy@shamsheco.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group">
              <div className="p-2 bg-indigo-500 rounded-lg text-white group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Visit us at</p>
                <p className="text-gray-800 font-medium">123 Eco Street, Green City, GC 12345</p>
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