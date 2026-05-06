import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
// Import the logo from your assets folder
import ecaLogo from "./assets/ecaLogoV3.jpg";
import ecaBanner from "./assets/ecaBannerV1.jpg";

const App = () => {
  const [theme, setTheme] = useState("blue");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* Top Bar - Hidden on very small screens for cleanliness */}
      <div
        className={`${active.primary} text-white py-2 px-6 text-[10px] md:text-sm flex justify-between items-center border-b border-orange-500/30 transition-colors duration-500`}
      >
        <div className="flex gap-3 md:gap-4">
          <span className="flex items-center gap-1">
            <Phone size={12} className="text-orange-500" /> 8-891-89-59
          </span>
          <span className="hidden sm:flex items-center gap-1">
            <Mail size={12} className="text-orange-500" /> sales@ecasales.com
          </span>
        </div>
        <div className={`${active.accent} font-bold uppercase tracking-wider`}>
          Reliable Industrial Solutions
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b-2 ${active.border} transition-colors duration-500`}
      >
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={ecaLogo}
              alt="ECA Sales Corporation"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 font-bold text-slate-700">
            <a href="#" className="hover:text-orange-600 transition">
              Home
            </a>
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
            <button className="bg-orange-600 text-white px-5 py-2 rounded shadow-md hover:bg-orange-700 transition">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`${active.primaryText} p-2`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`fixed inset-0 z-40 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={toggleMenu}
          ></div>
          <div className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-white shadow-xl p-8 flex flex-col">
            <div className="flex justify-end mb-8">
              <button onClick={toggleMenu}>
                <X size={32} className="text-slate-400" />
              </button>
            </div>

            <div className="flex flex-col space-y-6 font-bold text-xl text-slate-800">
              <p className="text-xs uppercase text-slate-400 tracking-widest mb-2">
                Switch Theme
              </p>
              <div className="flex items-center bg-slate-100 rounded-xl p-2 w-full justify-around border border-slate-200">
                <button
                  onClick={() => {
                    setTheme("blue");
                    setIsMenuOpen(false);
                  }}
                  className={`flex-1 py-2 rounded-lg transition ${theme === "blue" ? "bg-blue-800 text-white shadow-md" : "text-slate-400"}`}
                >
                  Blue
                </button>
                <button
                  onClick={() => {
                    setTheme("choco");
                    setIsMenuOpen(false);
                  }}
                  className={`flex-1 py-2 rounded-lg transition ${theme === "choco" ? "bg-[#3d2b1f] text-white shadow-md" : "text-slate-400"}`}
                >
                  Choco
                </button>
              </div>

              <div className="h-px bg-slate-100 my-4"></div>

              <a
                href="#"
                onClick={toggleMenu}
                className="hover:text-orange-600"
              >
                Home
              </a>
              <a
                href="#"
                onClick={toggleMenu}
                className="hover:text-orange-600"
              >
                Brands
              </a>
              <a
                href="#"
                onClick={toggleMenu}
                className="hover:text-orange-600"
              >
                Products
              </a>
              <button className="bg-orange-600 text-white w-full py-4 rounded-lg shadow-lg mt-4">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className={`relative py-12 md:py-24 ${active.primary} transition-colors duration-500 overflow-hidden`}
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 -skew-x-12 transform translate-x-20" />
        <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                Your Partner in{" "}
                <span className={active.accent}>Electrical</span> & Excellence
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed border-l-4 border-orange-500 pl-6 mx-auto lg:mx-0 max-w-md md:max-w-none">
                Distributing world-class brands like Schneider Electric to power
                the Philippines' infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button
                  className={`${active.button} ${active.primaryText} px-8 py-4 rounded-md font-black text-lg ${active.accentHover} transition transform hover:-translate-y-1`}
                >
                  VIEW CATALOG
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition">
                  OUR SERVICES
                </button>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center">
              <div className="w-full max-w-md h-100 bg-white rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl relative">
                <img
                  src={ecaLogo}
                  alt="ECA"
                  className="w-full h-full object-contain p-8"
                />
                <div className={`absolute inset-0 ${active.heroOverlay}`} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Brand Grid Snippet */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2
            className={`${active.primaryText} text-2xl md:text-3xl font-black mb-12 uppercase`}
          >
            Authorized Distributor
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["Schneider", "Eldon", "Pfannenberg", "IBOCO"].map((brand) => (
              <div
                key={brand}
                className="bg-white p-6 md:p-10 border border-slate-200 rounded shadow-sm"
              >
                <p className="text-slate-400 font-bold uppercase text-xs md:text-base">
                  {brand}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer (Simplified for brevity, similar to your existing code) */}
      {/* Contact Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-eca-yellow font-black text-xl mb-6">
              <img src={ecaBanner} />
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
              CONTACT US
            </h4>
            <a
              href="#"
              className="flex hover:text-eca-yellow items-center gap-1"
            >
              <ChevronRight size={16} />
              Mobile: 8-891-89-59
            </a>
            <a
              href="#"
              className="flex hover:text-eca-yellow items-center gap-1"
            >
              <ChevronRight size={16} />
              Email: sales@ecasales.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
