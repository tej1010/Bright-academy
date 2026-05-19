import { motion } from "motion/react";

const Gallery = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1544244015-0cd4b3fe659f?q=80&w=2070&auto=format&fit=crop", title: "Smart Classroom" },
    { url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop", title: "Morning Batch" },
    { url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop", title: "Practice Test" },
    { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop", title: "Doubt Session" },
    { url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", title: "Career Seminar" },
    { url: "https://images.unsplash.com/photo-1517673132405-a56a62b18acc?q=80&w=2070&auto=format&fit=crop", title: "Library Area" },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary-blue font-bold tracking-widest text-sm uppercase mb-4">Gallery</h2>
          <h3 className="text-4xl font-bold font-display text-slate-900">
            Life at <span className="text-primary-blue">Bright Academy</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group overflow-hidden rounded-3xl h-64"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-bold text-lg">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
