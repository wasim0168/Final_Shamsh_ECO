"use client";

import {
  Users2,
  Recycle,
  Leaf,
  Award,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/about/about.avif"
          alt="Solar panel recycling facility in India processing end-of-life PV modules - SHAMSH ECO"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 via-green-900/60 to-green-950/70" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 space-y-6 px-6 max-w-3xl"
        >
          <nav aria-label="Breadcrumb">
            <p className="text-sm opacity-90 tracking-wide">
              Home <span className="mx-1">/</span> About Us
            </p>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            About Us
          </h1>

          <p className="text-lg md:text-2xl opacity-90 font-light">
            Driving Sustainable Solar Recycling in India
          </p>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex justify-center mt-6"
          >
            <Recycle className="w-16 h-16 text-green-300" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </section>

      {/* ================= WHO WE ARE + FOUNDER ================= */}
      <section className="bg-gray-50">
        {/* ---- WHO WE ARE ---- */}
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-4 grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div>
              <span className="inline-block text-xs font-bold text-green-700 uppercase tracking-widest mb-3">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 tracking-tight">
                Who We Are
              </h2>

              <p className="text-gray-700 mb-5 leading-relaxed text-[15px] sm:text-base">
                We are pioneers in sustainable solar panel recycling, committed
                to transforming end-of-life solar equipment into valuable
                resources. With cutting-edge technology and environmental
                expertise, we&apos;re building a circular economy for renewable
                energy infrastructure.
              </p>

              <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
                Our state-of-the-art facilities process thousands of solar
                panels annually, recovering precious materials while minimizing
                environmental impact. We don&apos;t just recycle—we reimagine
                the future of sustainable energy.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-3 mt-8">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <span className="text-gray-800 text-sm sm:text-[15px] font-medium">
                  Advanced material recovery technology
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <span className="text-gray-800 text-sm sm:text-[15px] font-medium">
                  Zero-landfill commitment
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <span className="text-gray-800 text-sm sm:text-[15px] font-medium">
                  Certified sustainable processes
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5 w-full">
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex flex-col justify-center rounded-2xl p-6 sm:p-7 text-white bg-gradient-to-br from-green-500 to-emerald-800 shadow-lg cursor-default min-h-[150px] sm:min-h-[170px]"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-3">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-1">15+</h3>
              <p className="text-xs sm:text-sm opacity-90 font-medium">
                Years of Experience
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex flex-col justify-center rounded-2xl p-6 sm:p-7 text-white bg-gradient-to-br from-blue-500 to-indigo-800 shadow-lg cursor-default min-h-[150px] sm:min-h-[170px]"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-3">
                <Recycle className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-1">50K+</h3>
              <p className="text-xs sm:text-sm opacity-90 font-medium">
                Panels Recycled
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex flex-col justify-center rounded-2xl p-6 sm:p-7 text-white bg-gradient-to-br from-cyan-500 to-teal-800 shadow-lg cursor-default min-h-[150px] sm:min-h-[170px]"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-1">98%</h3>
              <p className="text-xs sm:text-sm opacity-90 font-medium">
                Recovery Rate
              </p>
            </motion.div>

            {/* Stat 4 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex flex-col justify-center rounded-2xl p-6 sm:p-7 text-white bg-gradient-to-br from-green-600 to-lime-500 shadow-lg cursor-default min-h-[150px] sm:min-h-[170px]"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-3">
                <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-1">100%</h3>
              <p className="text-xs sm:text-sm opacity-90 font-medium">
                Eco-Friendly
              </p>
            </motion.div>
          </div>
        </div>

        {/* ---- FOUNDER'S MESSAGE ---- */}
        <div className="max-w-6xl mx-auto px-6 pt-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-3xl shadow-xl px-8 py-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center border-l-4 border-green-700 overflow-hidden"
          >
            <span
              aria-hidden="true"
              className="absolute -top-6 right-4 text-[10rem] text-green-50 font-serif select-none pointer-events-none leading-none"
            >
              &rdquo;
            </span>

            <div className="shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center shadow-lg relative z-10">
              <Users2 className="text-white w-9 h-9" />
            </div>

            <div className="flex-1 relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Message from Our Founder
              </h3>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base italic">
                &quot;Our journey began with a simple vision: to ensure that the
                technology powering our sustainable future doesn&apos;t become
                tomorrow&apos;s environmental burden. Every solar panel we
                recycle is a step toward a truly circular economy in renewable
                energy.&quot;
              </p>

              <p className="mt-4 text-green-700 font-semibold text-sm">
                ~ Ather Trading
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= INDUSTRY DATA + COMPLIANCE + MATERIALS ================= */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-12">

          {/* Industry Data */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-bold text-green-700 uppercase tracking-widest mb-3">
              The Challenge We Address
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 tracking-tight">
              India&apos;s Solar Waste Challenge
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-[15px] sm:text-base">
              <p>
                India is one of the world&apos;s fastest-growing solar markets. According to estimates
                supported by the Ministry of New and Renewable Energy (MNRE) and the Council on Energy,
                Environment and Water (CEEW), <strong>cumulative solar waste in India is expected to reach
                approximately 600 kilotonnes by 2030</strong>.
              </p>
              <p>
                Longer-term projections from the International Renewable Energy Agency (IRENA) indicate
                that <strong>annual solar PV waste in India will exceed 1 million tonnes after 2043 and
                reach 2.6 million tonnes by 2050</strong>. Building a compliant, traceable,
                high-recovery-rate recycling system is therefore not a distant concern—it is an
                immediate industry requirement.
              </p>
              <p>
                To learn more about how we handle each stage—from collection to final material
                recovery—visit our{" "}
                <Link
                  href="/information"
                  className="text-green-700 font-semibold underline hover:text-green-900"
                >
                  complete solar panel recycling process guide
                </Link>.
              </p>
            </div>
          </motion.div>

          {/* Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Compliance &amp; Traceability
            </h3>
            <div className="space-y-3 text-gray-700 leading-relaxed text-[15px] sm:text-base">
              <p>
                Under the <strong>E-Waste (Management) Rules, 2022</strong> notified by the Ministry of
                Environment, Forest and Climate Change (MoEFCC), solar photovoltaic modules, panels, and
                cells are covered under e-waste management obligations. Producers and manufacturers must
                register on the CPCB portal, maintain inventories, and fulfill Extended Producer
                Responsibility (EPR) requirements. Recyclers must recover materials in accordance with
                CPCB standards.
              </p>
              <p>
                SHAMSH ECO&apos;s processes are designed around this framework. From collection and
                weighing through dismantling, sorting, material recovery, and final certificate issuance,
                every batch of end-of-life panels has documentation that traces its destination. For EPC
                companies, project developers, and government clients, this documentation supports ESG
                reporting and environmental audit requirements.
              </p>
            </div>
          </motion.div>

          {/* Materials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Materials We Recover
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
              A typical crystalline silicon module contains approximately <strong>75% glass</strong>,
              <strong> 10% aluminum frame</strong>, <strong>5% silicon</strong>, <strong>1% copper</strong>,
              and trace amounts of silver. Our recovery process focuses on reintroducing these materials
              into the manufacturing supply chain:
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                Glass — sorted and cleaned for new glass products
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                Aluminum frame — returned to metal recycling streams
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                Silicon — purified for PV or electronics reuse
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                Copper &amp; silver — recovered through physical and chemical processes
              </li>
              <li className="flex items-center gap-2 sm:col-span-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                Junction boxes &amp; cables — separately dismantled and processed as e-waste
              </li>
            </ul>
          </motion.div>

        </div>
      </section>
    </div>
  );
}