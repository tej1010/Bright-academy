import { motion } from "motion/react";
import { ShieldAlert as Shield, Star, Book, Landmark, ChevronRight } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "SSC Coaching",
      icon: <Landmark className="w-8 h-8" />,
      desc: "Comprehensive preparation for SSC CGL, CHSL, and MTS exams.",
      features: ["Full Syllabus Coverage", "Previous Year Papers", "Weekly Mock Tests"],
      duration: "6 Months",
      color: "bg-blue-500",
    },
    {
      title: "Police Constable",
      icon: <Shield className="w-8 h-8" />,
      desc: "Specialized batch for Gujarat Police Constable exam preparation.",
      features: ["Physical Test Guidance", "Law & Constitution", "Regular Drill Practice"],
      duration: "4 Months",
      color: "bg-primary-orange",
    },
    {
      title: "SI (Sub Inspector)",
      icon: <Star className="w-8 h-8" />,
      desc: "Focus on Sub Inspector recruitment with advanced modules.",
      features: ["Advanced G.K.", "Legal Education", "Current Affairs Focus"],
      duration: "6 Months",
      color: "bg-primary-yellow",
    },
    {
      title: "TET Preparation",
      icon: <Book className="w-8 h-8" />,
      desc: "Excellent coaching for Teacher Eligibility Test for various levels.",
      features: ["Child Development", "Language Proficiency", "Subject Hubs"],
      duration: "5 Months",
      color: "bg-indigo-600",
    },
  ];

  return (
    <section id="courses" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-blue font-bold tracking-widest text-sm uppercase mb-4">Our Programs</h2>
          <h3 className="text-4xl font-bold font-display text-slate-900 mb-4">
            Specialized Courses for <span className="text-primary-blue">Your Career</span>
          </h3>
          <p className="text-slate-600">
            We provide targeted coaching designed to help you excel in specific government exams with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all group group-hover:-translate-y-2"
            >
              <div className={`${course.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-${course.color.split('-')[1]}-200`}>
                {course.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{course.title}</h4>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                {course.desc}
              </p>
              
              <ul className="space-y-3 mb-8">
                {course.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-blue" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
                  {course.duration}
                </span>
                <button className="text-primary-blue font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
