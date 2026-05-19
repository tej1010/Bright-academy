import { motion } from "motion/react";
import { useState } from "react";
import { Trophy, Star, Filter } from "lucide-react";

const Results = () => {
  const [filter, setFilter] = useState("All");

  const results = [
    { name: "Rahul Sharma", exam: "SSC CGL", rank: "AIR 245", year: "2023", category: "SSC", img: "https://i.pravatar.cc/150?u=rahul" },
    { name: "Priya Patel", exam: "Police Constable", rank: "District Rank 12", year: "2023", category: "Police", img: "https://i.pravatar.cc/150?u=priya" },
    { name: "Amit Shah", exam: "Sub Inspector", rank: "Selected", year: "2022", category: "SI", img: "https://i.pravatar.cc/150?u=amit" },
    { name: "Sneha Gupta", exam: "TET", rank: "State Rank 8", year: "2023", category: "TET", img: "https://i.pravatar.cc/150?u=sneha" },
    { name: "Vikram Rathod", exam: "Police Constable", rank: "Selected", year: "2023", category: "Police", img: "https://i.pravatar.cc/150?u=vikram" },
    { name: "Meera Joshi", exam: "SSC CHSL", rank: "Selected", year: "2022", category: "SSC", img: "https://i.pravatar.cc/150?u=meera" },
  ];

  const filteredResults = filter === "All" ? results : results.filter(r => r.category === filter);

  return (
    <section id="results" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary-blue font-bold tracking-widest text-sm uppercase mb-4">Success Stories</h2>
            <h3 className="text-4xl font-bold font-display text-slate-900">
              Our Hall of <span className="text-primary-blue">Fame</span>
            </h3>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <Filter className="w-4 h-4 text-slate-400 mr-2" />
            {["All", "SSC", "Police", "SI", "TET"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  filter === cat
                    ? "bg-primary-blue text-white shadow-lg shadow-blue-200"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResults.map((result, idx) => (
            <motion.div
              layout
              key={result.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img
                    src={result.img}
                    alt={result.name}
                    className="w-20 h-20 rounded-2xl object-cover ring-4 ring-blue-50 transition-transform group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary-yellow p-1.5 rounded-lg shadow-md">
                    <Trophy className="w-4 h-4 text-slate-900" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">{result.name}</h4>
                  <p className="text-sm font-semibold text-primary-blue uppercase tracking-wider">{result.exam}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Achievement</span>
                  <span className="font-bold text-slate-900">{result.rank}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Year</span>
                  <span className="font-bold text-slate-900">{result.year}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-top border-slate-50">
                <div className="flex items-center gap-1 text-primary-yellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
