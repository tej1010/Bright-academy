import { motion } from "motion/react";
import { User, Award, BookOpen, Clock, Users, Lightbulb } from "lucide-react";

const About = () => {
  const features = [
    { icon: <Award className="w-6 h-6" />, title: "Expert Faculty", desc: "Learn from subject matter experts." },
    { icon: <BookOpen className="w-6 h-6" />, title: "Updated Material", desc: "Study with latest exam patterns." },
    { icon: <Clock className="w-6 h-6" />, title: "Daily Practice", desc: "Regular tests to track progress." },
    { icon: <Users className="w-6 h-6" />, title: "Personal Mentorship", desc: "Individual attention to every student." },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Smart Classrooms", desc: "Modern tech for better learning." },
    { icon: <User className="w-6 h-6" />, title: "Led by Mr. Mayur", desc: "Expert guidance from the founder." },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=2127&auto=format&fit=crop"
                alt="Classroom"
                className="rounded-2xl shadow-lg h-64 w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                alt="Students"
                className="rounded-2xl shadow-lg h-48 w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                alt="Teaching"
                className="rounded-2xl shadow-lg h-48 w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="bg-primary-blue p-6 rounded-2xl text-white">
                <p className="text-3xl font-bold mb-1">7+</p>
                <p className="text-sm opacity-80">Years of Shaping Careers in Ahmedabad</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4">About Bright Academy</h2>
            <h3 className="text-4xl font-bold font-display text-slate-900 mb-6Leading-tight">
              Empowering Students for a <span className="text-primary-blue">Secure Future</span>
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Bright Academy, located in Ghodasar, Ahmedabad, is a premier coaching institute dedicated to helping students clear government competitive exams. Led by the visionary educator **Mr. Mayur**, we focus on result-oriented preparation with a human touch.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="bg-blue-50 p-2 rounded-lg text-primary-blue shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
