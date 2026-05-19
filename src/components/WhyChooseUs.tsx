import { motion } from "motion/react";
import { Zap, BookCheck, Wallet, DoorOpen, HelpCircle, HardHat } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Experienced Teachers",
      icon: <HardHat className="w-6 h-6" />,
      desc: "Our faculty brings years of successful coaching experience."
    },
    {
      title: "Small Batch Size",
      icon: <DoorOpen className="w-6 h-6" />,
      desc: "Ensuring individual attention for every student in every batch."
    },
    {
      title: "Weekly Mock Tests",
      icon: <BookCheck className="w-6 h-6" />,
      desc: "Real-time exam simulation every week to track performance."
    },
    {
      title: "Affordable Fees",
      icon: <Wallet className="w-6 h-6" />,
      desc: "Premium education that doesn't burden your family financially."
    },
    {
      title: "Smart Classrooms",
      icon: <Zap className="w-6 h-6" />,
      desc: "Modern teaching aids and comfortable study environment."
    },
    {
      title: "Doubt Sessions",
      icon: <HelpCircle className="w-6 h-6" />,
      desc: "Daily dedicated time for one-on-one doubt solving."
    }
  ];

  return (
    <section className="py-24 bg-linear-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-blue font-bold tracking-widest text-sm uppercase mb-4">Why We Are The Best</h2>
          <h3 className="text-4xl font-bold font-display text-slate-900 mb-6Leading-tight">
            The <span className="text-primary-blue">Bright Advantage</span>
          </h3>
          <p className="text-slate-600">
            We don't just teach modules; we build careers with a strategic approach and dedicated support system.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-blue-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-blue-50 text-primary-blue rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                {reason.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
