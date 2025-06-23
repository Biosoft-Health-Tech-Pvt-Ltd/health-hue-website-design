import { useState, useEffect } from "react";
import { Menu, X, Heart, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  const navigation = [
    { name: "Solutions", href: "#services", hasDropdown: true },
    { name: "Products", href: "#products", hasDropdown: true },
    { name: "Resources", href: "#resources", hasDropdown: false },
    { name: "Pricing", href: "#pricing", hasDropdown: false },
    { name: "About", href: "#about", hasDropdown: false },
    { name: "Contact", href: "#contact", hasDropdown: false },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (itemName: string, href: string) => {
    setClickedItem(itemName);

    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Reset click animation after delay
    setTimeout(() => setClickedItem(null), 600);

    // Close mobile menu if open
    if (isMenuOpen) {
      setTimeout(() => setIsMenuOpen(false), 300);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/98 backdrop-blur-xl border-b border-slate-200/60 shadow-lg py-2" : "bg-white/95 backdrop-blur-xl border-b border-slate-200/30 shadow-sm py-4"
      } animate-slide-down`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo with Micro-interactions */}
          <div className="flex items-center gap-3 animate-fade-in-left group cursor-pointer">
            <div className="relative">
              <div
                className={`${
                  isScrolled ? "w-10 h-10" : "w-12 h-12"
                } bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:rotate-3 group-hover:shadow-blue-500/25`}
              >
                <Heart className={`${isScrolled ? "h-5 w-5" : "h-7 w-7"} text-white transition-all duration-500 group-hover:scale-110`} />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-pulse">
                <Sparkles className="h-3 w-3 text-white absolute top-0.5 left-0.5" />
              </div>
            </div>
            <div className="transition-all duration-500">
              <span
                className={`${
                  isScrolled ? "text-xl" : "text-2xl"
                } font-black bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent transition-all duration-500 group-hover:from-blue-600 group-hover:to-purple-600`}
              >
                Biosoft
              </span>
              <div className={`${isScrolled ? "text-xs" : "text-xs"} text-slate-500 font-medium -mt-1 tracking-wider transition-all duration-500 group-hover:text-blue-600`}>
                HEALTHCARE MADE SIMPLE
              </div>
            </div>
          </div>

          {/* Enhanced Desktop Navigation with Click Animations */}
          <nav className="hidden md:flex items-center gap-8 animate-fade-in-up animate-delay-200">
            {navigation.map((item, index) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleMenuClick(item.name, item.href)}
                  className={`flex items-center gap-1 text-slate-700 hover:text-blue-600 transition-all duration-300 font-semibold relative text-sm tracking-wide uppercase transform ${
                    clickedItem === item.name ? "scale-110 text-blue-600" : "hover:scale-105"
                  }`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />}

                  {/* Enhanced underline animation */}
                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500 ${
                      clickedItem === item.name ? "w-full animate-pulse" : "w-0 group-hover:w-full"
                    }`}
                  ></span>

                  {/* Click ripple effect */}
                  {clickedItem === item.name && <span className="absolute inset-0 bg-blue-100 rounded-lg scale-150 opacity-50 animate-ping"></span>}
                </button>
              </div>
            ))}
          </nav>

          {/* Enhanced Desktop CTA with Premium Styling */}
          <div className="hidden md:flex items-center gap-4 animate-fade-in-right animate-delay-400">
            <Button
              variant="ghost"
              className="text-slate-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-semibold hover:bg-blue-50 relative overflow-hidden group"
            >
              <span className="relative z-10">Sign In</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover-lift font-semibold px-8 relative overflow-hidden group">
              <span className="relative z-10">Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button className="md:hidden p-3 hover:bg-slate-100 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="relative w-6 h-6">
              <Menu className={`h-6 w-6 text-slate-700 absolute transition-all duration-500 ${isMenuOpen ? "rotate-180 opacity-0 scale-75" : "rotate-0 opacity-100 scale-100"}`} />
              <X className={`h-6 w-6 text-slate-700 absolute transition-all duration-500 ${isMenuOpen ? "rotate-0 opacity-100 scale-100" : "rotate-180 opacity-0 scale-75"}`} />
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu with Premium Animations */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-slate-200/60 shadow-2xl transition-all duration-500 overflow-hidden ${
            isMenuOpen ? "opacity-100 translate-y-0 max-h-96" : "opacity-0 -translate-y-8 max-h-0 pointer-events-none"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item.name, item.href)}
                className={`w-full text-left text-slate-700 hover:text-blue-600 transition-all duration-500 font-semibold py-4 px-4 rounded-xl hover:bg-blue-50 transform text-lg relative overflow-hidden group ${
                  isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                } ${clickedItem === item.name ? "bg-blue-100 text-blue-600 scale-105" : ""}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10 flex items-center justify-between">
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />}
                </span>

                {/* Mobile click animation */}
                {clickedItem === item.name && <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-200 animate-pulse rounded-xl"></div>}

                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
              </button>
            ))}

            <div
              className={`pt-4 space-y-4 transform transition-all duration-700 ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
              style={{ transitionDelay: "0.5s" }}
            >
              <Button variant="ghost" className="w-full text-slate-700 hover:text-blue-600 transition-all duration-300 font-semibold py-4 hover:bg-blue-50 rounded-xl">
                Sign In
              </Button>
              <Button className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white rounded-xl transition-all duration-500 font-semibold py-4 shadow-lg hover:shadow-xl">
                Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
