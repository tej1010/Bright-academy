import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Harshil Mevada",
      role: "Selected in SSC CGL",
      content: "Bright Academy provided me with the structured approach I needed. Mayur sir's personal guidance in mathematics was a game-changer for my preparation.",
      img: "https://i.pravatar.cc/100?u=harshil"
    },
    {
      name: "Bhumika Parmar",
      role: "Selected in Police Constable",
      content: "The environment here is very competitive yet supportive. The weekly mock tests helped me manage my time effectively during the actual exam.",
      img: "https://i.pravatar.cc/100?u=bhumika"
    },
    {
      name: "Tushar Vaghela",
      role: "Selected in Sub Inspector",
      content: "Excellent study material and very clear concepts. The doubt-solving sessions are the best part of Bright Academy.",
      img: "https://i.pravatar.cc/100?u=tushar"
    },
    {
      name: "Anjali Soni",
      role: "Selected in TET",
      content: "I recommend Bright Academy to all aspirants. The teachers are very patient and explain everything until we understand perfectly.",
      img: "https://i.pravatar.cc/100?u=anjali"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary-blue font-bold tracking-widest text-sm uppercase mb-4">Testimonials</h2>
          <h3 className="text-4xl font-bold font-display text-slate-900">
            What Our <span className="text-primary-blue">Students Say</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-50 p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-200" />
              
              <div className="flex items-center gap-1 text-primary-yellow mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-slate-600 italic mb-8 relative z-10 leading-relaxed">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-white shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-primary-blue font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
