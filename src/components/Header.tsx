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
        isScrolled ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/80 shadow-xl py-3" : "bg-white/90 backdrop-blur-lg border-b border-white/30 shadow-lg py-4"
      } animate-slide-down`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo with Better Contrast */}
          <div className="flex items-center gap-3 animate-fade-in-left group cursor-pointer">
            <div className="relative">
              <div
                className={`${
                  isScrolled ? "w-10 h-10" : "w-12 h-12"
                } bg-gradient-to-r from-biosoft-blue via-biosoft-blue-light to-biosoft-blue-lighter rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:rotate-3 group-hover:shadow-biosoft-blue/25`}
              >
                <Heart className={`${isScrolled ? "h-5 w-5" : "h-7 w-7"} text-white transition-all duration-500 group-hover:scale-110`} />
                <div className="absolute inset-0 bg-gradient-to-r from-biosoft-blue-light to-biosoft-blue-lighter rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-biosoft-orange to-biosoft-yellow rounded-full animate-pulse">
                <Sparkles className="h-3 w-3 text-white absolute top-0.5 left-0.5" />
              </div>
            </div>
            <div className="transition-all duration-500">
              <span
                className={`${
                  isScrolled ? "text-xl" : "text-2xl"
                } font-black bg-gradient-to-r from-biosoft-gray-dark via-biosoft-blue to-biosoft-blue-light bg-clip-text text-transparent transition-all duration-500 group-hover:from-biosoft-blue group-hover:to-biosoft-blue-lighter`}
              >
                Biosoft
              </span>
              <div
                className={`${
                  isScrolled ? "text-xs" : "text-xs"
                } text-biosoft-gray-dark font-medium -mt-1 tracking-wider transition-all duration-500 group-hover:text-biosoft-blue`}
              >
                HEALTHCARE MADE SIMPLE
              </div>
            </div>
          </div>

          {/* Enhanced Desktop Navigation with Better Contrast */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 animate-fade-in-up animate-delay-200">
            {navigation.map((item, index) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleMenuClick(item.name, item.href)}
                  className={`flex items-center gap-1 transition-all duration-300 font-semibold relative text-sm tracking-wide uppercase transform ${
                    clickedItem === item.name ? "scale-110 text-biosoft-blue" : "text-biosoft-gray-dark hover:text-biosoft-blue hover:scale-105"
                  }`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />}

                  {/* Enhanced underline animation */}
                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light transition-all duration-500 ${
                      clickedItem === item.name ? "w-full animate-pulse" : "w-0 group-hover:w-full"
                    }`}
                  ></span>

                  {/* Click ripple effect */}
                  {clickedItem === item.name && <span className="absolute inset-0 bg-biosoft-blue-light/20 rounded-lg scale-150 opacity-50 animate-ping"></span>}
                </button>
              </div>
            ))}
          </nav>

          {/* Fixed Desktop CTA with Proper Alignment */}
          <div className="hidden lg:flex items-center gap-3 animate-fade-in-right animate-delay-400">
            <Button
              variant="ghost"
              className="text-biosoft-gray-dark hover:text-biosoft-blue transition-all duration-300 hover:scale-105 font-semibold hover:bg-biosoft-blue-light/10 relative overflow-hidden group px-4 py-2"
            >
              <span className="relative z-10">Sign In</span>
              <div className="absolute inset-0 bg-gradient-to-r from-biosoft-blue-light/10 to-biosoft-blue/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Button>
            <Button className="bg-gradient-to-r from-biosoft-blue via-biosoft-blue-light to-biosoft-blue-lighter hover:from-biosoft-blue hover:via-biosoft-blue hover:to-biosoft-blue-light text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-0.5 font-semibold px-6 py-2.5 relative overflow-hidden group">
              <span className="relative z-10 whitespace-nowrap">Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="relative w-6 h-6">
              <Menu
                className={`h-6 w-6 text-biosoft-gray-dark absolute transition-all duration-500 ${isMenuOpen ? "rotate-180 opacity-0 scale-75" : "rotate-0 opacity-100 scale-100"}`}
              />
              <X
                className={`h-6 w-6 text-biosoft-gray-dark absolute transition-all duration-500 ${isMenuOpen ? "rotate-0 opacity-100 scale-100" : "rotate-180 opacity-0 scale-75"}`}
              />
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu with Better Contrast */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-gray-200/80 shadow-2xl transition-all duration-500 overflow-hidden ${
            isMenuOpen ? "opacity-100 translate-y-0 max-h-96" : "opacity-0 -translate-y-8 max-h-0 pointer-events-none"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item.name, item.href)}
                className={`w-full text-left text-biosoft-gray-dark hover:text-biosoft-blue transition-all duration-500 font-semibold py-4 px-4 rounded-xl hover:bg-biosoft-blue-light/10 transform text-lg relative overflow-hidden group ${
                  isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                } ${clickedItem === item.name ? "bg-biosoft-blue-light/20 text-biosoft-blue scale-105" : ""}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10 flex items-center justify-between">
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />}
                </span>

                {/* Mobile click animation */}
                {clickedItem === item.name && <div className="absolute inset-0 bg-gradient-to-r from-biosoft-blue-light/30 to-biosoft-blue/30 animate-pulse rounded-xl"></div>}

                <div className="absolute inset-0 bg-gradient-to-r from-biosoft-blue-light/10 to-biosoft-blue/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
              </button>
            ))}

            <div
              className={`pt-4 space-y-4 transform transition-all duration-700 ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
              style={{ transitionDelay: "0.5s" }}
            >
              <Button
                variant="ghost"
                className="w-full text-biosoft-gray-dark hover:text-biosoft-blue transition-all duration-300 font-semibold py-4 hover:bg-biosoft-blue-light/10 rounded-xl"
              >
                Sign In
              </Button>
              <Button className="w-full bg-gradient-to-r from-biosoft-blue via-biosoft-blue-light to-biosoft-blue-lighter hover:from-biosoft-blue hover:via-biosoft-blue hover:to-biosoft-blue-light text-white rounded-xl transition-all duration-500 font-semibold py-4 shadow-lg hover:shadow-xl">
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
