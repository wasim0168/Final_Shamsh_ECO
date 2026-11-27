import { Metadata, Viewport } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
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
  title: 'Solar Panel Recycling in India | SHAMSH ECO',
  description:
    'SHAMSH ECO offers CPCB-compliant solar panel recycling in India with 95% material recovery. Pan-India pickup, silicon recovery & e-waste recycling. Get a free quote.',
  keywords: [
    'solar panel recycling',
    'solar panel recycling India',
    'solar panel recycling company',
    'solar waste management',
    'solar panel disposal',
    'solar cell recycling',
    'silicon recovery solar panels',
    'solar panel dismantling',
    'end of life solar panel recycling',
    'PV module recycling',
    'e-waste recycling India',
    'CPCB approved solar recycling',
    'pan India solar recycling',
    'solar panel recycling Gujarat',
    'how to recycle solar panels in India',
  ],
  authors: [{ name: 'SHAMSH ECO Team', url: 'https://shamsheco.com/about' }],
  creator: 'SHAMSH ECO',
  publisher: 'SHAMSH ECO',
  category: 'Solar Panel Recycling',
  alternates: {
    canonical: 'https://shamsheco.com/information',
    languages: {
      'en-IN': 'https://shamsheco.com/information',
      'hi-IN': 'https://shamsheco.com/hi/information',
    },
  },
  openGraph: {
    title: 'Solar Panel Recycling in India | SHAMSH ECO',
    description:
      'CPCB-compliant solar panel recycling with 95% material recovery. Pan-India pickup, silicon recovery, and sustainable solar waste management.',
    url: 'https://shamsheco.com/information',
    siteName: 'SHAMSH ECO',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://shamsheco.com/images/solar-panel-recycling-india-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Solar Panel Recycling in India - SHAMSH ECO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@shamsheco',
    creator: '@shamsheco',
    title: 'Solar Panel Recycling in India | SHAMSH ECO',
    description: 'India\'s trusted solar panel recycling company. 95% material recovery. Pan India service.',
    images: ['https://shamsheco.com/images/solar-panel-recycling-twitter.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};
const whyRecycle = [
  { title: 'Protects the Environment', description: 'Prevents toxic heavy metals like lead and cadmium from entering landfills, soil, and groundwater ecosystems.', icon: '🌿' },
  { title: 'Conserves Natural Resources', description: 'Recovers valuable materials like silver, silicon, and copper, reducing dependency on environmentally destructive mining.', icon: '💎' },
  { title: 'Saves Energy', description: 'Recycling solar panels uses up to 80% less energy compared to producing virgin raw materials from scratch.', icon: '⚡' },
  { title: 'Supports a Circular Economy', description: 'Promotes reuse and responsible management of resources, keeping valuable materials in the supply chain longer.', icon: '🔄' },
];

const services = [
  { title: 'Solar Panel Recycling', description: 'Safe and efficient recycling of monocrystalline, polycrystalline, thin-film, and bifacial PV modules.', icon: '☀️' },
  { title: 'Material Recovery', description: 'Recovery of glass, aluminium, copper, silver, silicon, and rare earth metals from end-of-life panels.', icon: '🔧' },
  { title: 'Solar Cell Recycling', description: 'Advanced recovery of silicon, silver, copper, aluminium, and glass from used photovoltaic cells.', icon: '🔬' },
  { title: 'E-Waste Recycling', description: 'Responsible recycling of inverters, cables, and junction boxes from solar installations.', icon: '♻️' },
  { title: 'Silicon Recovery', description: 'Advanced extraction and purification of high-quality silicon for reuse in new solar products.', icon: '💠' },
  { title: 'Industrial Solar Waste Management', description: 'Complete management of industrial-scale solar waste in a CPCB-compliant manner.', icon: '🏭' },
];

const whyChooseUs = [
  'Eco-Friendly Sustainable Solution', 'High Material Recovery Rate (95%+)', 'Safe & Secure Handling',
  'Certified & Compliant Recycling Process', 'Experienced & Skilled Team', 'Advanced Technology & Equipment',
  'Affordable & Transparent Pricing', 'Pan India Service Network', 'Timely & Reliable Support',
  'Complete Documentation & Traceability', 'Free Pickup for Bulk Orders', '24/7 Customer Support',
];

const processSteps = [
  { step: '1', title: 'Collection & Logistics', description: 'Safe collection of end-of-life solar panels from your site with our pan-India logistics network.' },
  { step: '2', title: 'Dismantling', description: 'Careful dismantling to separate reusable parts including frames, junction boxes, and cables.' },
  { step: '3', title: 'Separation', description: 'Advanced mechanical and thermal sorting to separate glass, silicon, metals, and other materials.' },
  { step: '4', title: 'Material Recovery', description: 'Extraction and recovery of high-value materials like silver, copper, silicon, and aluminium.' },
  { step: '5', title: 'Recycling & Refining', description: 'Materials are recycled and refined for reintroduction into the manufacturing supply chain.' },
  { step: '6', title: 'Reuse & Reintroduction', description: 'Recovered materials are reused to create new products, supporting a true circular economy.' },
];

const recoveredMaterials = ['Glass', 'Aluminium', 'Copper', 'Plastic', 'Silicon', 'Silver', 'Junction Boxes', 'Cables', 'Frames'];

const whoWeServe = [
  'Solar EPC Companies', 'Project Developers', 'Manufacturers & Importers', 'Industrial & Commercial Clients',
  'Government & Public Sector Units', 'Solar Farms & Power Plants', 'Individuals & Institutions', 'Research & Educational Institutes',
];

const faqs = [
  { question: 'What is solar panel recycling and why is it important in India?', answer: 'Solar panel recycling recovers valuable materials such as glass, aluminium, copper, silicon, and silver from end-of-life panels. It matters in India because thousands of tonnes of panels reach end-of-life every year and responsible recycling prevents pollution.' },
  { question: 'Which types of solar panels do you recycle?', answer: 'SHAMSH ECO recycles monocrystalline, polycrystalline, thin-film (CdTe and CIGS), bifacial, and BIPV panels, plus inverters, cables, and mounting structures.' },
  { question: 'How much does solar panel recycling cost in India?', answer: 'Cost depends on volume, panel type, and location. SHAMSH ECO offers competitive pricing and free pickup for bulk orders. Contact us for a customized quote.' },
  { question: 'Do you provide solar panel pickup services across India?', answer: 'Yes, SHAMSH ECO provides pan-India pickup and recycling services, including Gujarat, Maharashtra, Rajasthan, Karnataka, and Tamil Nadu.' },
  { question: 'Is SHAMSH ECO a CPCB-compliant solar panel recycling company?', answer: 'Yes, we follow all CPCB, SPCB, and E-Waste Management Rules 2022 guidelines. Our processes are fully compliant, traceable, and environmentally responsible.' },
  { question: 'What materials can be recovered from recycled solar panels?', answer: 'We recover glass (up to 75% of panel weight), aluminium frames, copper, silver, silicon, plastics, and trace metals with a 95%+ recovery rate.' },
  { question: 'How long does the solar panel recycling process take?', answer: 'The complete process typically takes 7–15 business days from collection to material recovery, depending on volume and panel type.' },
  { question: 'Do you provide certificates of recycling and destruction?', answer: 'Yes, SHAMSH ECO provides certificates of recycling, destruction, and material recovery for ESG and compliance reporting.' },
];

export default function InformationPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://shamsheco.com/#organization',
        name: 'SHAMSH ECO',
        url: 'https://shamsheco.com/',
        logo: { '@type': 'ImageObject', url: 'https://shamsheco.com/images/logo.png', width: 200, height: 60 },
        description: 'SHAMSH ECO provides solar panel recycling and solar waste management solutions in India.',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-6261196163',
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi'],
        },
        sameAs: [
          'https://www.facebook.com/shamsheco',
          'https://www.linkedin.com/company/shamsheco',
          'https://twitter.com/shamsheco',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://shamsheco.com/#website',
        url: 'https://shamsheco.com/',
        name: 'SHAMSH ECO',
        publisher: { '@id': 'https://shamsheco.com/#organization' },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://shamsheco.com/information#webpage',
        url: 'https://shamsheco.com/information',
        name: 'Solar Panel Recycling in India | SHAMSH ECO',
        description: 'Information about solar panel recycling, solar waste management, material recovery, and sustainable resource recovery.',
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
        '@type': 'Service',
        '@id': 'https://shamsheco.com/information#solar-panel-recycling',
        name: 'Solar Panel Recycling',
        serviceType: 'Solar Panel Recycling and Solar Waste Management',
        provider: { '@id': 'https://shamsheco.com/#organization' },
        areaServed: { '@type': 'Country', name: 'India' },
        description: 'Responsible recycling of end-of-life solar panels with material recovery and sustainable waste management practices.',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://shamsheco.com/information#faq',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <Script
        id="information-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-white font-sans">
        {/* ===== HERO (IMAGE REMOVED) ===== */}
        <section className="relative bg-gradient-to-r from-[#1a5c3a] to-[#2d7a4f] text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center justify-center gap-2 text-sm text-green-100">
                  <li><Link href="/" className="hover:text-yellow-300 underline">Home</Link></li>
                  <li aria-hidden="true">/</li>
                  <li className="text-yellow-300 font-medium" aria-current="page">Information</li>
                </ol>
              </nav>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
                India&apos;s Trusted Solar Panel Recycling Company
              </h1>
              <p className="text-lg sm:text-xl text-green-50 max-w-3xl mx-auto leading-relaxed mb-8">
                At <strong>SHAMSH ECO</strong>, we power a cleaner, greener and sustainable future through
                responsible recycling of end-of-life solar panels. Using advanced technology, we recover
                valuable materials, reduce pollution, and support India&apos;s transition to a circular economy.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contactUs" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors text-lg shadow-lg">
                  Get Free Quote
                </Link>
                <Link href="/" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-lg border-2 border-white/50 transition-colors text-lg">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
        <article className="py-14 md:py-18 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
                Solar Panel Recycling in India: A Complete Guide
              </h2>

              <div className="space-y-5 text-gray-600 leading-8 text-base md:text-lg">
                <p>
                  <strong>Solar panel recycling</strong> has become one of the most critical components of
                  India&apos;s renewable energy ecosystem. As the country accelerates its solar installation
                  targets, thousands of tonnes of <strong>end-of-life solar panels</strong> are expected to
                  enter the waste stream over the coming decades. Without proper <strong>solar waste
                  management</strong>, these panels risk ending up in landfills, leaking hazardous materials
                  into the environment.
                </p>
                <p>
                  At <strong>SHAMSH ECO</strong>, we specialize in <strong>solar panel recycling in India</strong>,
                  offering a complete solution for businesses, industries, and institutions looking to dispose
                  of old, damaged, or decommissioned solar panels responsibly. Our advanced recycling
                  process recovers valuable materials such as <strong>glass, aluminium, copper, silver, and
                  silicon</strong> — reintroducing them into the manufacturing supply chain.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 pt-4">Why Solar Panel Recycling Matters in India</h3>
                <p>
                  India is among the world&apos;s fastest-growing solar markets, with installed capacity
                  exceeding 70 GW. Solar panels typically have a lifespan of 25–30 years, which means
                  panels installed in the early 2000s and 2010s are now reaching their end-of-life. The
                  <strong> Ministry of New and Renewable Energy (MNRE)</strong> and <strong>CPCB</strong> have
                  recognized the urgent need for a structured <strong>solar panel disposal</strong> framework.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Environmental protection</strong> — Preventing toxic materials like lead, cadmium, and selenium from contaminating soil and water.</li>
                  <li><strong>Resource conservation</strong> — Recovering precious metals like silver and rare earth elements that would otherwise be mined.</li>
                  <li><strong>Energy savings</strong> — Recycling uses significantly less energy than producing virgin materials.</li>
                  <li><strong>Circular economy</strong> — Keeping valuable materials in use and reducing the carbon footprint of the solar industry.</li>
                  <li><strong>Regulatory compliance</strong> — Meeting E-Waste Management Rules 2022 and CPCB guidelines.</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-800 pt-4">Our Solar Panel Recycling Process</h3>
                <p>
                  SHAMSH ECO follows a scientifically designed, multi-stage <strong>solar panel recycling
                  process</strong> that maximizes material recovery while minimizing environmental impact.
                  From safe collection to final material refinement, every step is executed with precision
                  and full traceability.
                </p>
                <p>
                  We serve <strong>solar EPC companies, project developers, manufacturers, importers,
                  industrial customers, government PSUs,</strong> and individual institutions across India.
                  Whether you have a single pallet of damaged panels or an entire solar farm to
                  decommission, our <strong>pan-India solar panel pickup</strong> service ensures safe,
                  compliant, and affordable recycling.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 pt-4">Looking for Solar Panel Recycling Near You?</h3>
                <p>
                  If you are searching for <strong>&quot;solar panel recycling near me&quot;</strong> or
                  <strong> &quot;where to dispose of old solar panels in India&quot;</strong>, SHAMSH ECO is your
                  trusted partner. We provide free consultations, competitive pricing, and complete
                  documentation including <strong>recycling certificates</strong> for ESG and compliance reporting.
                  <Link href="/contactUs" className="text-green-700 font-semibold underline hover:text-green-900">
                    Contact us today
                  </Link> to schedule a pickup or request a customized quotation.
                </p>
              </div>
            </div>
          </div>
        </article>
        <section className="py-16 bg-gray-50" aria-labelledby="why-recycle-heading">
          <div className="container mx-auto px-4">
            <h2 id="why-recycle-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4">
              Why Recycling Solar Panels Matters?
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Discover the environmental, economic, and social benefits of responsible solar panel recycling in India
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {whyRecycle.map((item) => (
                <div key={item.title} className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-green-600 hover:shadow-md transition-shadow text-center">
                  <div className="text-4xl mb-3" aria-hidden="true">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-green-700 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-white" aria-labelledby="services-heading">
          <div className="container mx-auto px-4">
            <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4">
              Our Solar Panel Recycling Services
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Comprehensive solar panel recycling and solar waste management solutions
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((service) => (
                <div key={service.title} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow hover:border-green-300">
                  <div className="text-3xl mb-3" aria-hidden="true">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-50" aria-labelledby="why-choose-heading">
          <div className="container mx-auto px-4">
            <h2 id="why-choose-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4">
              Why Choose SHAMSH ECO?
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Setting the standard for solar panel recycling in India
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {whyChooseUs.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-green-600 text-xl mt-0.5" aria-hidden="true">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" aria-labelledby="materials-heading">
          <div className="container mx-auto px-4">
            <h2 id="materials-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4">
              Materials We Recover from Solar Panels
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Valuable materials extracted from end-of-life solar panels
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {recoveredMaterials.map((material) => (
                <span key={material} className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md">
                  {material}
                </span>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-50" aria-labelledby="process-heading">
          <div className="container mx-auto px-4">
            <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-2">
              Our Solar Panel Recycling Process
            </h2>
            <p className="text-center text-gray-600 text-lg mb-12">Clean. Safe. Sustainable. Step-by-Step.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {processSteps.map((step) => (
                <div key={step.step} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600 relative">
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

        <section className="py-16 bg-white" aria-labelledby="clients-heading">
          <div className="container mx-auto px-4">
            <h2 id="clients-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4">
              Who We Serve
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Partnering with organizations across India for sustainable solar waste management
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {whoWeServe.map((client) => (
                <span key={client} className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg text-sm font-medium border border-gray-200 hover:border-green-400 hover:bg-green-50 transition-colors">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                Common questions about solar panel recycling in India
              </p>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details key={faq.question} className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="text-base md:text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                      <span className="text-green-600 text-xl flex-shrink-0 group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                    </summary>
                    <div className="px-5 pb-5 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" aria-labelledby="compliance-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="compliance-heading" className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                CPCB & SPCB Certified Solar Panel Recycling
              </h2>
              <div className="bg-gray-50 p-8 md:p-10 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-lg text-gray-700 mb-4">
                  We follow all <strong className="text-green-700">CPCB</strong>,{' '}
                  <strong className="text-green-700">SPCB</strong>, and{' '}
                  <strong className="text-green-700">E-Waste Management Rules, 2022</strong> guidelines
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {['CPCB Compliant', 'SPCB Approved', 'E-Waste Rules 2022', 'ISO Standards'].map((badge) => (
                    <span key={badge} className="bg-green-100 text-green-800 px-5 py-2 rounded-full text-sm font-medium border border-green-200">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-[#1a5c3a] to-[#2d7a4f] text-white" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 text-center">
            <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold mb-4">
              Together, Let&apos;s Build a Greener India
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Every solar panel recycled is a step towards a cleaner planet for future generations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contactUs" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors text-lg shadow-lg">
                Get Free Quote
              </Link>
              <Link href="/" className="bg-white hover:bg-gray-100 text-[#1a5c3a] font-bold py-3 px-8 rounded-lg transition-colors text-lg shadow-lg">
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}