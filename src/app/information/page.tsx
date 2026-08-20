// src/app/information/page.tsx
import { Metadata, Viewport } from 'next';
import Link from 'next/link';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a5c3a' },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "India's Trusted Solar Panel Recycling Company | SHAMSH ECO",
    template: '%s | SHAMSH ECO',
  },
  description:
    'SHAMSH ECO - India\'s leading solar panel recycling company. We specialize in responsible recycling of end-of-life solar panels using advanced technology for a sustainable future.',
  keywords: [
    'solar panel recycling',
    'solar waste management',
    'e-waste recycling India',
    'circular economy',
    'solar panel disposal',
    'sustainable recycling',
    'CPCB compliance',
    'SPCB guidelines',
    'India solar recycling',
    'renewable energy waste',
    'solar panel recovery',
    'green technology',
    'environmental protection',
    'resource recovery',
    'clean energy recycling',
    'silicon recovery',
    'solar cell recycling',
    'industrial solar waste',
  ].join(', '),
  openGraph: {
    title: "India's Trusted Solar Panel Recycling Company | SHAMSH ECO",
    description:
      'Sustainable Recycling Solutions for a Greener Tomorrow. Specializing in responsible recycling of end-of-life solar panels.',
    url: 'https://shamsheco.com/information',
    siteName: 'SHAMSH ECO',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://shamsheco.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SHAMSH ECO - India\'s Trusted Solar Panel Recycling Company',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@shamsheco',
    creator: '@shamsheco',
    title: "India's Trusted Solar Panel Recycling Company | SHAMSH ECO",
    description: 'Sustainable Recycling Solutions for a Greener Tomorrow.',
    images: ['https://shamsheco.com/images/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://shamsheco.com/information',
    languages: {
      'en-IN': 'https://shamsheco.com/information',
      'hi-IN': 'https://shamsheco.com/hi/information',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  applicationName: 'SHAMSH ECO',
  authors: [{ name: 'SHAMSH ECO Team', url: 'https://shamsheco.com/about' }],
  creator: 'SHAMSH ECO',
  publisher: 'SHAMSH ECO',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  category: 'Solar Panel Recycling',
  classification: 'Environmental Services, Recycling, Renewable Energy',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light dark',
};

// ============================================
// PAGE COMPONENT
// ============================================

export default function InformationPage() {
  // ===== STRUCTURED DATA =====
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://shamsheco.com/#organization',
        name: 'SHAMSH ECO',
        url: 'https://shamsheco.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://shamsheco.com/images/logo.png',
          width: 200,
          height: 60,
        },
        description:
          "India's Trusted Solar Panel Recycling Company providing sustainable recycling solutions.",
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-XXXXXXXXXX',
          contactType: 'customer service',
          availableLanguage: ['English', 'Hindi'],
        },
        sameAs: [
          'https://facebook.com/shamsheco',
          'https://twitter.com/shamsheco',
          'https://linkedin.com/company/shamsheco',
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://shamsheco.com/information#webpage',
        url: 'https://shamsheco.com/information',
        name: "India's Trusted Solar Panel Recycling Company | SHAMSH ECO",
        description:
          'SHAMSH ECO specializes in responsible recycling of end-of-life solar panels using advanced technology.',
        isPartOf: { '@id': 'https://shamsheco.com/#website' },
        about: { '@id': 'https://shamsheco.com/#organization' },
        breadcrumb: { '@id': 'https://shamsheco.com/information#breadcrumb' },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://shamsheco.com/information#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shamsheco.com/' },
          { '@type': 'ListItem', position: 2, name: 'Information', item: 'https://shamsheco.com/information' },
        ],
      },
      {
        '@type': 'Article',
        '@id': 'https://shamsheco.com/information#article',
        headline: "India's Trusted Solar Panel Recycling Company",
        description:
          'Sustainable Recycling Solutions for a Greener Tomorrow. SHAMSH ECO specializes in responsible recycling of end-of-life solar panels.',
        image: {
          '@type': 'ImageObject',
          url: 'https://shamsheco.com/images/og-image.jpg',
          width: 1200,
          height: 630,
        },
        author: { '@id': 'https://shamsheco.com/#organization' },
        publisher: { '@id': 'https://shamsheco.com/#organization' },
        datePublished: '2024-01-01T00:00:00+05:30',
        dateModified: new Date().toISOString(),
        mainEntityOfPage: { '@id': 'https://shamsheco.com/information#webpage' },
      },
    ],
  };

  // ===== DATA =====
  const whyRecycle = [
    {
      title: 'Protects the Environment',
      description: 'Prevents harmful waste from entering landfills and ecosystems.',
      icon: '🌿',
    },
    {
      title: 'Conserves Natural Resources',
      description: 'Recovers valuable materials and reduces dependency on mining.',
      icon: '💎',
    },
    {
      title: 'Saves Energy',
      description: 'Recycling uses significantly less energy compared to producing new materials.',
      icon: '⚡',
    },
    {
      title: 'Supports a Circular Economy',
      description: 'Promotes reuse and responsible management of resources.',
      icon: '🔄',
    },
  ];

  const services = [
    {
      title: 'Solar Panel Recycling',
      description:
        'Safe and efficient recycling of all types of solar panels, including silicon, thin-film and bifacial panels.',
      icon: '☀️',
    },
    {
      title: 'Material Recovery',
      description:
        'Recovery of valuable materials like glass, aluminium, copper, silver and more.',
      icon: '🔧',
    },
    {
      title: 'Solar Cell Recycling',
      description:
        'Recovery of raw materials such as silicon, silver, copper, aluminium and glass from used cells.',
      icon: '🔬',
    },
    {
      title: 'E-Waste Recycling',
      description:
        'Responsible recycling of electrical and electronic waste generated from solar installation.',
      icon: '♻️',
    },
    {
      title: 'Silicon Recovery',
      description:
        'Advanced extraction and purification of high-quality silicon for reuse in new solar products.',
      icon: '💠',
    },
    {
      title: 'Industrial Solar Waste Management',
      description:
        'Complete management of industrial solar waste in a safe, compliant and eco-friendly way.',
      icon: '🏭',
    },
  ];

  const whyChooseUs = [
    'Eco-Friendly sustainable solution',
    'High Material Recovery Rate',
    'Safe & Secure Handling',
    'Certified & compliant Recycling process',
    'Experienced & Skilled Team',
    'Advanced Technology & Equipment',
    'Affordable & Transparent pricing',
    'Pan India Service Network',
    'Timely & Reliable Support',
  ];

  const processSteps = [
    { step: '1', title: 'Collection', description: 'Safe Collection of end-of-life solar panels from site.' },
    { step: '2', title: 'Dismantling', description: 'Careful dismantling to separate reusable parts.' },
    { step: '3', title: 'Separation', description: 'Advanced sorting to separate glass, silicon, metals & other materials.' },
    { step: '4', title: 'Recovery', description: 'Extraction & recovery of high-value materials.' },
    { step: '5', title: 'Recycling', description: 'Materials are recycled and reintroduced into the supply chain.' },
    { step: '6', title: 'Reuse', description: 'Recovered materials are reused to create new products.' },
  ];

  const recoveredMaterials = ['Glass', 'Aluminium', 'Copper', 'Plastic', 'Components', 'Silicon', 'Silver'];

  const stats = [
    { value: '95%', label: 'Material Recovery Rate' },
    { value: '100%', label: 'Eco-Friendly Process' },
    { value: '500+', label: 'Projects Completed' },
    { value: '24/7', label: 'Support Available' },
    { value: '1000+', label: 'Happy Clients' },
  ];

  const whoWeServe = [
    'Solar EPC companies',
    'Project Developers',
    'Manufacturers & Importers',
    'Industrial & Commercial Clients',
    'Government & Public Sector Units',
    'Individuals & Institutions',
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-white font-sans">
        {/* ============================================================ */}
        {/* HERO SECTION */}
        {/* ============================================================ */}
        <section className="relative bg-gradient-to-r from-[#1a5c3a] to-[#2d7a4f] text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzR2LTRoNHY0aC00em0wIDB2LTRoLTR2NGg0em0wIDB2LTRoLTR2NGg0eiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-3">
                India's Trusted
                <br />
                <span className="text-yellow-300">Solar Panel Recycling Company</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-green-100 mb-4">
                Sustainable Recycling Solutions for a Greener Tomorrow
              </h2>
              <div className="h-1 w-24 bg-yellow-300 mx-auto mb-6"></div>
              <p className="text-base sm:text-lg text-green-50 max-w-3xl mx-auto leading-relaxed">
                At SHAMSH ECO, we believe in powering a cleaner, greener and sustainable future. We specialize in
                responsible recycling of end-of-life solar panels using advanced technology to recover valuable
                materials, reduce pollution and support India's transition to a circular economy.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* WHY RECYCLING SOLAR PANELS MATTERS? */}
        {/* ============================================================ */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
              Why Recycling Solar Panels Matters?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {whyRecycle.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-green-600 hover:shadow-md transition-shadow text-center"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-green-700 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* OUR SERVICES */}
        {/* ============================================================ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4">Our Services</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Comprehensive solar panel recycling solutions for a sustainable future
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow hover:border-green-300"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* WHY CHOOSE US */}
        {/* ============================================================ */}
        <section className="py-16 md:py-20 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Setting the standard for solar panel recycling in India
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-green-600 text-xl mt-0.5">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* RECOVERED MATERIALS */}
        {/* ============================================================ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4">What We Recover</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Valuable materials extracted from end-of-life solar panels
            </p>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {recoveredMaterials.map((material, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md"
                >
                  {material}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* KEY STATISTICS */}
        {/* ============================================================ */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-[#1a5c3a] to-[#2d7a4f] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Key Statistics</h2>
            <p className="text-center text-green-100 max-w-2xl mx-auto mb-12">
              Our impact in numbers
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300">{stat.value}</div>
                  <div className="text-sm text-green-100 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* RECYCLING PROCESS */}
        {/* ============================================================ */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-2">
              Our Recycling Process
            </h2>
            <p className="text-center text-gray-600 text-lg mb-12">Clean. Safe. Sustainable.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600 relative">
                  <div className="absolute -top-3 -left-3 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="mt-3">
                    <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* WHO WE SERVE */}
        {/* ============================================================ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4">Who We Serve</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Partnering with organizations across India for sustainable solar waste management
            </p>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {whoWeServe.map((client, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg text-sm font-medium border border-gray-200 hover:border-green-400 hover:bg-green-50 transition-colors"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* OUR COMMITMENT */}
        {/* ============================================================ */}
        <section className="py-16 md:py-20 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">Our Commitment</h2>
            <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are committed to building a sustainable future through innovation, responsible practices and a
              dedication to environmental protection.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
              <div className="bg-white p-8 rounded-lg text-center shadow-md border border-green-100">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">Advanced technologies for maximum recovery</p>
              </div>
              <div className="bg-white p-8 rounded-lg text-center shadow-md border border-green-100">
                <div className="text-4xl mb-3">🌱</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Responsibility</h3>
                <p className="text-gray-600 text-sm">Ethical and sustainable practices</p>
              </div>
              <div className="bg-white p-8 rounded-lg text-center shadow-md border border-green-100">
                <div className="text-4xl mb-3">🌍</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Protection</h3>
                <p className="text-gray-600 text-sm">Dedicated to environmental conservation</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* REGULATORY COMPLIANCE */}
        {/* ============================================================ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Regulatory Compliance</h2>
              <div className="bg-gray-50 p-8 md:p-10 rounded-xl border border-gray-200">
                <p className="text-lg text-gray-700 mb-4">
                  We follow all <strong className="text-green-700">CPCB</strong>,{' '}
                  <strong className="text-green-700">SPCB</strong> and{' '}
                  <strong className="text-green-700">E-Waste Management Rules, 2022</strong> guidelines
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="bg-green-100 text-green-800 px-5 py-2 rounded-full text-sm font-medium border border-green-200">
                    CPCB Compliant
                  </span>
                  <span className="bg-green-100 text-green-800 px-5 py-2 rounded-full text-sm font-medium border border-green-200">
                    SPCB Approved
                  </span>
                  <span className="bg-green-100 text-green-800 px-5 py-2 rounded-full text-sm font-medium border border-green-200">
                    E-Waste Management Rules 2022
                  </span>
                </div>
                <p className="mt-6 text-gray-600">
                  Ensuring safe, traceable and environmentally responsible recycling at every step.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* CTA SECTION */}
        {/* ============================================================ */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-[#1a5c3a] to-[#2d7a4f] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Together, Let's Build a Greener India</h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Every panel recycled is a step towards a cleaner planet for future generations.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl max-w-3xl mx-auto mb-8">
              <p className="text-lg text-white mb-4">
                Have old or damaged solar panels?
                <br />
                <span className="text-green-200 text-sm">
                  We offer safe pickup and recycling across India.
                </span>
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contactUs"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors text-lg shadow-lg"
                >
                  Get Free Quote Today
                </Link>
                <Link
                  href="/contactUs"
                  className="bg-transparent hover:bg-green-800 text-white font-bold py-3 px-8 rounded-lg border-2 border-white transition-colors text-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-green-200">
              <span>✓ Pan India Service</span>
              <span>✓ Free Pickup</span>
              <span>✓ Certified Process</span>
              <span>✓ Affordable Pricing</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}