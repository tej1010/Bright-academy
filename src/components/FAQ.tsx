import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What are the typical batch timings?",
      answer: "We offer morning (8 AM - 11 AM) and evening (4 PM - 7 PM) batches to accommodate both college students and working professionals."
    },
    {
      question: "Is there a demo class available?",
      answer: "Yes, we provide 2 free demo classes for all our courses so you can experience our teaching methodology before enrolling."
    },
    {
      question: "Do you provide online classes?",
      answer: "We primarily focus on offline classroom coaching in Ghodasar, but we provide recorded lectures and online test series access to all our students."
    },
    {
      question: "What is your fee structure?",
      answer: "Our fees are very affordable and vary by course. We also offer scholarships for meritorious students and installment options."
    },
    {
      question: "How often are the test series conducted?",
      answer: "We conduct weekly topic-wise tests every Saturday and a full-length mock test every Sunday under exam-like conditions."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary-blue font-bold tracking-widest text-sm uppercase mb-4">FAQ</h2>
          <h3 className="text-4xl font-bold font-display text-slate-900">
            Frequently Asked <span className="text-primary-blue">Questions</span>
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900">{faq.question}</span>
                {openIndex === idx ? (
                  <Minus className="w-5 h-5 text-primary-blue" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-400" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-slate-500 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
