/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import WhyChooseUs from "./components/WhyChooseUs";
import Results from "./components/Results";
import Achievements from "./components/Achievements";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <WhyChooseUs />
      
      {/* CTA Banner Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 lg:p-20 text-center text-white shadow-2xl relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="grid grid-cols-6 h-full">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="border border-white/20" />
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-bold font-display mb-8">
                Start Your Preparation With <span className="text-primary-yellow">Bright Academy</span> Today
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                Don't wait for the right moment. Join our new batch starting this week and take the first step towards your dream government job.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="#contact"
                  className="bg-white text-primary-blue px-10 py-4 rounded-2xl font-bold text-lg hover:bg-primary-yellow hover:text-slate-900 transition-all shadow-xl shadow-blue-900/20 flex items-center gap-2"
                >
                  Join Now <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/919737842191"
                  className="bg-blue-500/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
                >
                  Ask a Question
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Results />
      <Achievements />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
