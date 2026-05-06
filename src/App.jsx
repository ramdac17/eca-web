import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";
// Import the logo from your assets folder
import ecaLogo from "./assets/ecaLogoV3.jpg";

const App = () => {
  // State to toggle between themes
  const [theme, setTheme] = useState("blue");

  // Dynamic Color Mapping
  const colors = {
    blue: {
      primary: "bg-[#002147]",
      primaryText: "text-[#002147]",
      accent: "text-yellow-400",
      accentBg: "bg-yellow-400",
      accentHover: "hover:bg-yellow-300",
      button: "bg-yellow-400",
      heroOverlay: "bg-[#002147]/5",
      border: "border-yellow-400",
    },
    choco: {
      primary: "bg-[#3d2b1f]",
      primaryText: "text-[#3d2b1f]",
      accent: "text-yellow-400",
      accentBg: "bg-yellow-500",
      accentHover: "hover:bg-yellow-400",
      button: "bg-yellow-500",
      heroOverlay: "bg-[#3d2b1f]/5",
      border: "border-yellow-500",
    },
  };

  const active = colors[theme];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Top Bar */}
      <div
        className={`${active.primary} text-white py-2 px-6 text-sm flex justify-between items-center border-b border-orange-500/30`}
      >
        <div className="flex gap-4">
          <span className="flex items-center gap-1">
            <Phone size={14} className="text-orange-500" /> 8-891-89-59
          </span>
          <span className="hidden md:flex items-center gap-1">
            <Mail size={14} className="text-orange-500" /> sales@ecasales.com
          </span>
        </div>
        <div className={`${active.accent} font-bold uppercase tracking-wider`}>
          Reliable Industrial Solutions
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b-2 ${active.border}`}
      >
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={ecaLogo}
              alt="ECA Sales Corporation"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Links + Theme Switcher */}
          <div className="hidden md:flex items-center space-x-8 font-bold text-slate-700">
            <a href="#" className="hover:text-orange-600 transition">
              Home
            </a>

            {/* Theme Toggle Links */}
            <div className="flex items-center bg-slate-100 rounded-full p-1 px-3 gap-4 border border-slate-200">
              <button
                onClick={() => setTheme("blue")}
                className={`text-sm transition ${theme === "blue" ? "text-blue-700 font-black underline" : "text-slate-400"}`}
              >
                Blue
              </button>
              <button
                onClick={() => setTheme("choco")}
                className={`text-sm transition ${theme === "choco" ? "text-[#3d2b1f] font-black underline" : "text-slate-400"}`}
              >
                Choco
              </button>
            </div>

            <a href="#" className="hover:text-orange-600 transition">
              Brands
            </a>
            <button className="bg-orange-600 text-white px-5 py-2 rounded shadow-md hover:bg-orange-700 transition cursor-pointer">
              Get Quote
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className={`relative py-16 md:py-24 ${active.primary} transition-colors duration-500 overflow-hidden`}
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 -skew-x-12 transform translate-x-20" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                Your Partner in{" "}
                <span className={active.accent}>Electrical</span> & Industrial
                Excellence
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed border-l-4 border-orange-500 pl-6">
                Distributing world-class brands like Schneider Electric, Eldon,
                and Pfannenberg to power the Philippines' infrastructure.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  className={`${active.button} ${active.primaryText} px-8 py-4 rounded-md font-black text-lg ${active.accentHover} transition transform hover:-translate-y-1 cursor-pointer`}
                >
                  VIEW CATALOG
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition cursor-pointer">
                  OUR SERVICES
                </button>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center">
              <div className="w-full max-w-md h-100 bg-white rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl relative group">
                <img
                  src={ecaLogo}
                  alt="ECA Sales Corporation Logo"
                  className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 ${active.heroOverlay} group-hover:bg-transparent transition-colors`}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Partner Brands Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2
            className={`${active.primaryText} text-3xl font-black mb-2 uppercase tracking-tight`}
          >
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
                className="bg-white p-10 border border-slate-200 hover:border-orange-500 transition group shadow-sm rounded-sm"
              >
                <p
                  className={`text-slate-400 group-hover:${active.primaryText} font-bold transition uppercase tracking-widest`}
                >
                  {brand}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer
        className={`${theme === "blue" ? "bg-slate-900" : "bg-[#2a1d15]"} text-white py-16 transition-colors duration-500`}
      >
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className={`${active.accent} font-black text-xl mb-6`}>
              ECA SALES CORP.
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Leading supplier of high-quality electrical components and
              enclosures for industrial applications since 1990.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-orange-500 uppercase mb-4">
              Visit Us
            </h4>
            <div className="flex gap-3 text-slate-300">
              <MapPin className={`shrink-0 ${active.accent}`} />
              <p>
                #11, Unit B, Mt. Kennedy St., Mountain View Village, Marikina
                City, 1801
              </p>
            </div>
            <div className="flex gap-3 text-slate-300">
              <Clock className={`shrink-0 ${active.accent}`} />
              <p>
                Mon-Fri: 8:00 AM - 5:00 PM
                <br />
                Sat: 8:00 AM - 12:00 PM
              </p>
            </div>
          </div>
          <div className="space-y-4 text-slate-300">
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
                className={`flex ${active.accentHover.replace("bg", "text")} items-center gap-1 transition`}
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
