import { motion } from "motion/react";
import { MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-linear-to-b from-blue-50 to-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary-yellow/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-primary-blue text-sm font-semibold mb-6">
              <CheckCircle2 className="w-4 h-4" />
              <span>Ghodasar's Most Trusted Academy</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold font-display text-slate-900 leading-tight mb-6">
              Bright Academy – Your Path to <span className="text-primary-blue">Government Success</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Expert Coaching for SSC, Police Constable, SI & TET Exams in Ahmedabad. Led by Mr. Mayur with 7+ years of excellence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#courses"
                className="group inline-flex items-center gap-2 bg-primary-blue text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/919737842191"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold shadow-sm hover:bg-slate-50 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-green-500" />
                Contact on WhatsApp
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              {[
                { label: "Students", value: "5000+" },
                { label: "Selections", value: "1200+" },
                { label: "Experience", value: "7+ Years" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                alt="Students studying"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-yellow rounded-2xl -z-0 rotate-12" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-orange rounded-full -z-0 opacity-50" />
            
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 animate-bounce">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">New Batch</p>
                <p className="text-sm font-bold text-slate-900">Starting Monday!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
