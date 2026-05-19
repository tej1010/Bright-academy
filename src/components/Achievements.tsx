import { motion } from "motion/react";
import { CheckCircle, Users, GraduationCap, Calendar } from "lucide-react";

const Achievements = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, count: "5000+", label: "Enrolled Students", color: "text-blue-600" },
    { icon: <CheckCircle className="w-8 h-8" />, count: "1200+", label: "Government Selections", color: "text-green-600" },
    { icon: <Calendar className="w-8 h-8" />, count: "7+", label: "Years Experience", color: "text-orange-600" },
    { icon: <GraduationCap className="w-8 h-8" />, count: "95%", label: "Success Rate", color: "text-purple-600" },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-orange/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6 backdrop-blur-sm">
                <span className={stat.color}>{stat.icon}</span>
              </div>
              <h4 className="text-4xl font-bold font-display mb-2">{stat.count}</h4>
              <p className="text-slate-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
