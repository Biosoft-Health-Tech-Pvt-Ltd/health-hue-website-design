
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Solutions", href: "#solutions" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/50 animate-slide-down shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          {/* Enhanced Logo */}
          <div className="flex items-center gap-3 animate-fade-in-left">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Biosoft
              </span>
              <div className="text-xs text-slate-500 font-medium -mt-1 tracking-wider">
                HEALTHCARE MADE SIMPLE
              </div>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 animate-fade-in-up animate-delay-200">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-semibold relative group text-sm tracking-wide uppercase"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Enhanced Desktop CTA */}
          <div className="hidden md:flex items-center gap-4 animate-fade-in-right animate-delay-400">
            <Button variant="ghost" className="text-slate-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-semibold">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift font-semibold px-8">
              Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 hover:bg-slate-100 rounded-xl transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu className={`h-6 w-6 text-slate-700 absolute transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
              <X className={`h-6 w-6 text-slate-700 absolute transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`md:hidden absolute top-18 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-xl transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="px-4 py-8 space-y-6">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`block text-slate-700 hover:text-blue-600 transition-all duration-300 font-semibold py-3 transform text-lg ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className={`pt-6 space-y-4 transform transition-all duration-500 ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} style={{ transitionDelay: '0.5s' }}>
              <Button variant="ghost" className="w-full text-slate-700 hover:text-blue-600 transition-all duration-300 font-semibold py-3">
                Sign In
              </Button>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl transition-all duration-300 font-semibold py-3">
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
