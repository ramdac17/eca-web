import React from "react";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Top Bar - Direct Contact */}
      <div className="bg-eca-navy text-white py-2 px-6 text-sm flex justify-between items-center border-b border-eca-orange/30">
        <div className="flex gap-4">
          <span className="flex items-center gap-1">
            <Phone size={14} className="text-eca-orange" /> 8-891-89-59
          </span>
          <span className="hidden md:flex items-center gap-1">
            <Mail size={14} className="text-eca-orange" /> sales@ecasales.com
          </span>
        </div>
        <div className="text-eca-yellow font-bold uppercase tracking-wider">
          Reliable Industrial Solutions
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b-2 border-eca-yellow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-eca-navy rounded flex items-center justify-center text-eca-yellow font-bold text-xl">
              E
            </div>
            <span className="text-2xl font-black text-eca-navy tracking-tighter">
              ECA <span className="text-eca-orange text-lg">SALES</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8 font-bold text-eca-navy">
            <a href="#" className="hover:text-eca-orange transition">
              Home
            </a>
            <a href="#" className="hover:text-eca-orange transition">
              Brands
            </a>
            <a href="#" className="hover:text-eca-orange transition">
              Products
            </a>
            <button className="bg-eca-orange text-white px-5 py-2 rounded shadow-md hover:bg-orange-600 transition">
              Get Quote
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-24 bg-eca-navy overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-eca-yellow/10 -skew-x-12 transform translate-x-20" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Your Partner in{" "}
              <span className="text-eca-yellow text-glow">Electrical</span> &
              Industrial Excellence
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed border-l-4 border-eca-orange pl-6">
              Distributing world-class brands like Schneider Electric, Eldon,
              and Pfannenberg to power the Philippines' infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-eca-yellow text-eca-navy px-8 py-4 rounded-md font-black text-lg hover:bg-yellow-400 transition transform hover:-translate-y-1">
                VIEW CATALOG
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition">
                OUR SERVICES
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Partner Brands Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-eca-navy text-3xl font-black mb-2 uppercase tracking-tight">
            Authorized Distributor
          </h2>
          <div className="w-20 h-1.5 bg-eca-orange mx-auto mb-12"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Schneider Electric",
              "Eldon Enclosures",
              "Pfannenberg",
              "IBOCO",
            ].map((brand) => (
              <div
                key={brand}
                className="bg-white p-10 border border-slate-200 hover:border-eca-orange transition group shadow-sm rounded-sm"
              >
                <p className="text-slate-400 group-hover:text-eca-navy font-bold transition uppercase tracking-widest">
                  {brand}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-eca-yellow font-black text-xl mb-6">
              ECA SALES CORP.
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Leading supplier of high-quality electrical components and
              enclosures for industrial applications since 1990.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-eca-orange uppercase mb-4">
              Visit Us
            </h4>
            <div className="flex gap-3 text-slate-300">
              <MapPin className="shrink-0 text-eca-yellow" />
              <p>
                #11, Unit B, Mt. Kennedy St., Mountain View Village, Marikina
                City, 1801
              </p>
            </div>
            <div className="flex gap-3 text-slate-300">
              <Clock className="shrink-0 text-eca-yellow" />
              <p>
                Mon-Fri: 8:00 AM - 5:00 PM
                <br />
                Sat: 8:00 AM - 12:00 PM
              </p>
            </div>
          </div>
          <div className="space-y-4 text-slate-300">
            <h4 className="font-bold text-eca-orange uppercase mb-4">
              Quick Links
            </h4>
            <a
              href="#"
              className="block hover:text-eca-yellow items-center gap-1"
            >
              <ChevronRight size={16} /> Eldon Enclosures
            </a>
            <a
              href="#"
              className="block hover:text-eca-yellow items-center gap-1"
            >
              <ChevronRight size={16} /> IBOCO Wire Ducts
            </a>
            <a
              href="#"
              className="block hover:text-eca-yellow items-center gap-1"
            >
              <ChevronRight size={16} /> Pfannenberg Cooling
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
