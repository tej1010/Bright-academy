import { GraduationCap, Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="bg-primary-blue p-2 rounded-lg">
                <GraduationCap className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-display tracking-tight text-white">
                BRIGHT <span className="text-primary-orange">ACADEMY</span>
              </span>
            </a>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Ahmedabad's leading coaching institute for government exams. We help you turn your hard work into success with expert guidance and modern methodology.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-blue hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Academy", "Success Results", "Contact Us", "New Batches"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary-blue transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Courses</h4>
            <ul className="space-y-4">
              {["SSC Coaching", "Police Constable", "Sub Inspector (SI)", "TET Exam", "State Services"].map((course) => (
                <li key={course}>
                  <a href="#" className="hover:text-primary-blue transition-colors">{course}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-blue shrink-0 mt-1" />
                <span>Ghodasar, Ahmedabad, Gujarat, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-blue shrink-0 mt-1" />
                <span>+91 97378 42191</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-blue shrink-0 mt-1" />
                <span>info@brightacademy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 Bright Academy. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
