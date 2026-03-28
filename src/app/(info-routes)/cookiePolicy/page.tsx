import { Metadata } from "next";
import Link from "next/link";
import { 
  Cookie, 
  Settings, 
  BarChart3, 
  Cpu, 
  Users, 
  Shield,
  Mail,
  MapPin,
  ArrowLeft
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | Shamsh Eco Re-New Recycling",
  description:
    "Read the Cookie Policy of Shamsh Eco Re-New Recycling to understand how we use cookies and tracking technologies.",
};

export default function CookiePolicy() {
  const cookieTypes = [
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Essential Cookies",
      description: "Required for basic website functionality and security",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Functional Cookies",
      description: "Remember your preferences and settings",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Third-Party Cookies",
      description: "Used for embedded content and services",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Back to Home Link */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      {/* Header Section with Modern Design */}
      <div className="relative max-w-4xl mx-auto px-6 pt-8 pb-12">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg">
              <Cookie className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-emerald-700 bg-clip-text text-transparent">
                Cookie Policy
              </h1>
              <p className="text-gray-600 mt-2">Last updated: January 2024</p>
            </div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              At Shamsh Eco Re-New Recycling, we believe in transparency about how we collect and use data. 
              This policy explains our use of cookies and similar technologies to enhance your browsing experience.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        {/* What Are Cookies Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl">
              <Shield className="w-6 h-6 text-gray-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">What Are Cookies?</h2>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <p className="text-gray-600 leading-relaxed">
              Cookies are small text files stored on your device that help us provide and improve our services. 
              Think of them as your device&apos;s memory for our website - they remember your preferences and help 
              us make your experience smoother and more personalized.
            </p>
          </div>
        </section>

        {/* Types of Cookies Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Types of Cookies We Use</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {cookieTypes.map((cookie, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 bg-gradient-to-r ${cookie.color} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {cookie.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{cookie.title}</h3>
                <p className="text-gray-600 text-sm">{cookie.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Managing Cookies Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                <Settings className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Managing Cookies</h2>
            </div>
            
            <p className="text-gray-200 mb-6 leading-relaxed">
              You have the power to control cookies. Most web browsers automatically accept cookies, 
              but you can modify your browser settings to decline cookies if you prefer. However, please 
              note that disabling cookies might affect your experience on our website.
            </p>
            
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-white">💡 Pro tip:</span> Check your browser&apos;s 
                help section to learn how to manage cookies in your specific browser.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about our use of cookies, feel free to reach out to us:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors group">
              <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-green-500 group-hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-gray-600 group-hover:text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email us at</p>
                <p className="text-gray-800 font-medium">privacy@shamsheco.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors group">
              <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-green-500 group-hover:text-white transition-colors">
                <MapPin className="w-5 h-5 text-gray-600 group-hover:text-white" />
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