import React from "react";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";
import ecaLogo from "./assets/ecaLogoV1.jpg";

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Top Bar - Chocolate & Orange */}
      <div className="bg-[#3d2b1f] text-white py-2 px-6 text-sm flex justify-between items-center border-b border-orange-500/30">
        <div className="flex gap-4">
          <span className="flex items-center gap-1">
            <Phone size={14} className="text-orange-500" /> 8-891-89-59
          </span>
          <span className="hidden md:flex items-center gap-1">
            <Mail size={14} className="text-orange-500" /> sales@ecasales.com
          </span>
        </div>
        <div className="text-yellow-400 font-bold uppercase tracking-wider">
          Reliable Industrial Solutions
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b-2 border-yellow-500">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#3d2b1f] rounded flex items-center justify-center text-yellow-400 font-bold text-xl">
              E
            </div>
            <span className="text-2xl font-black text-[#3d2b1f] tracking-tighter">
              ECA <span className="text-orange-600 text-lg">SALES</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8 font-bold text-[#3d2b1f]">
            <a href="#" className="hover:text-orange-600 transition">
              Home
            </a>
            <a href="#" className="hover:text-orange-600 transition">
              Brands
            </a>
            <a href="#" className="hover:text-orange-600 transition">
              Products
            </a>
            <button className="bg-orange-600 text-white px-5 py-2 rounded shadow-md hover:bg-orange-700 transition cursor-pointer">
              Get Quote
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Chocolate Brown Background */}
      <header className="relative py-16 md:py-24 bg-[#3d2b1f] overflow-hidden">
        {/* Yellow decorative slant */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-500/10 -skew-x-12 transform translate-x-20" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                Your Partner in{" "}
                <span className="text-yellow-400">Electrical</span> & Industrial
                Excellence
              </h1>
              <p className="text-xl text-stone-300 mb-10 leading-relaxed border-l-4 border-orange-500 pl-6">
                Distributing world-class brands like Schneider Electric, Eldon,
                and Pfannenberg to power the Philippines' infrastructure.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-yellow-500 text-[#3d2b1f] px-8 py-4 rounded-md font-black text-lg hover:bg-yellow-400 transition transform hover:-translate-y-1 cursor-pointer">
                  VIEW CATALOG
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition cursor-pointer">
                  OUR SERVICES
                </button>
              </div>
            </div>

            {/* Logo Container */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="w-full max-w-md h-[400px] bg-white rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl relative group">
                <img
                  src={ecaLogo}
                  alt="ECA Sales Corporation Logo"
                  className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#3d2b1f]/5 group-hover:bg-transparent transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Partner Brands */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-[#3d2b1f] text-3xl font-black mb-2 uppercase tracking-tight">
            Authorized Distributor
          </h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Schneider Electric",
              "Eldon Enclosures",
              "Pfannenberg",
              "IBOCO",
            ].map((brand) => (
              <div
                key={brand}
                className="bg-white p-10 border border-stone-200 hover:border-orange-500 transition group shadow-sm rounded-sm"
              >
                <p className="text-stone-400 group-hover:text-[#3d2b1f] font-bold transition uppercase tracking-widest">
                  {brand}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2a1d15] text-white py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-yellow-400 font-black text-xl mb-6">
              ECA SALES CORP.
            </h3>
            <p className="text-stone-400 leading-relaxed">
              Leading supplier of high-quality electrical components and
              enclosures for industrial applications since 1990.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-orange-500 uppercase mb-4">
              Visit Us
            </h4>
            <div className="flex gap-3 text-stone-300">
              <MapPin className="shrink-0 text-yellow-400" />
              <p>
                #11, Unit B, Mt. Kennedy St., Mountain View Village, Marikina
                City, 1801
              </p>
            </div>
            <div className="flex gap-3 text-stone-300">
              <Clock className="shrink-0 text-yellow-400" />
              <p>
                Mon-Fri: 8:00 AM - 5:00 PM
                <br />
                Sat: 8:00 AM - 12:00 PM
              </p>
            </div>
          </div>
          <div className="space-y-4 text-stone-300">
            <h4 className="font-bold text-orange-500 uppercase mb-4">
              Quick Links
            </h4>
            {[
              "Eldon Enclosures",
              "IBOCO Wire Ducts",
              "Pfannenberg Cooling",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="flex hover:text-yellow-400 items-center gap-1 transition"
              >
                <ChevronRight size={16} /> {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
