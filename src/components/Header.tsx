// src/components/Header.tsx - Updated with Blog Navigation

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Sparkles, BookOpen, TrendingUp, FileText, Users as UsersIcon, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogCategories } from "@/data/blogData";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    {
      name: "Solutions",
      href: "#services",
      hasDropdown: true,
      dropdownItems: [
        { name: "eBios HMIS", href: "#services", description: "Hospital Management Information System" },
        { name: "eBios LMIS", href: "#services", description: "Laboratory Management Information System" },
        { name: "eBios PMS", href: "#services", description: "Practice Management System" },
      ],
    },
    {
      name: "Products",
      href: "#products",
      hasDropdown: true,
      dropdownItems: [
        { name: "Electronic Health Records", href: "#products", description: "Comprehensive EHR solution" },
        { name: "Practice Management", href: "#products", description: "Streamline operations" },
        { name: "Telemedicine Platform", href: "#products", description: "Remote patient care" },
        { name: "Patient Portal", href: "#products", description: "Patient engagement tools" },
      ],
    },
    {
      name: "Resources",
      href: "/blog",
      hasDropdown: true,
      dropdownItems: [
        { name: "Blog", href: "/blog", description: "Healthcare technology insights", icon: BookOpen },
        { name: "Case Studies", href: "/blog/category/case-studies", description: "Real-world success stories", icon: Award },
        { name: "Industry News", href: "/blog/category/industry-news", description: "Latest healthcare updates", icon: TrendingUp },
        { name: "Best Practices", href: "/blog/category/practice-management", description: "Implementation guides", icon: FileText },
      ],
    },
    { name: "Team", href: "#team", hasDropdown: false },
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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false);
      }
      if (activeDropdown && !target.closest(".dropdown-container")) {
        setActiveDropdown(null);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    if (activeDropdown) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen, activeDropdown]);

  const handleMenuClick = (itemName: string, href: string) => {
    setClickedItem(itemName);
    setActiveDropdown(null);

    // Handle different link types
    if (href.startsWith("/")) {
      // External/page links
      window.location.href = href;
    } else if (href.startsWith("#")) {
      // Smooth scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }

    // Reset click animation after delay
    setTimeout(() => setClickedItem(null), 600);

    // Close mobile menu if open
    if (isMenuOpen) {
      setTimeout(() => setIsMenuOpen(false), 300);
    }
  };

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 mobile-menu-container ${
          isScrolled ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/80 shadow-xl py-3" : "bg-white/90 backdrop-blur-lg border-b border-white/30 shadow-lg py-4"
        } animate-slide-down`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo with Biosoft Logo Image */}
            <div className="flex items-center gap-3 animate-fade-in-left group cursor-pointer">
              <div className="relative">
                <div
                  className={`${
                    isScrolled ? "w-14 h-14" : "w-20 h-14"
                  } bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:rotate-1 group-hover:shadow-biosoft-orange/25 overflow-hidden`}
                >
                  <img
                    src="/BiosoftLogo.png"
                    alt="Biosoft Healthcare Solutions Logo"
                    className={`${isScrolled ? "h-11 w-11" : "h-13 w-19"} object-contain transition-all duration-500 group-hover:scale-110`}
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      if (img.src.includes(".png")) {
                        img.src = "/BiosoftLogo.jpg";
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-biosoft-orange-light rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-biosoft-yellow rounded-full animate-pulse">
                  <Sparkles className="h-3 w-3 text-white absolute top-0.5 left-0.5" />
                </div>
              </div>
              <div className="transition-all duration-500">
                <span className={`${isScrolled ? "text-2xl" : "text-3xl"} font-black text-biosoft-gray-dark transition-all duration-500 group-hover:text-biosoft-orange`}>
                  Biosoft
                </span>
                <div
                  className={`${
                    isScrolled ? "text-sm" : "text-sm"
                  } text-biosoft-gray-dark font-medium -mt-1 tracking-wider transition-all duration-500 group-hover:text-biosoft-orange`}
                >
                  HEALTHCARE MADE SIMPLE
                </div>
              </div>
            </div>

            {/* Enhanced Desktop Navigation with Dropdowns */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 animate-fade-in-up animate-delay-200">
              {navigation.map((item, index) => (
                <div key={item.name} className="relative group dropdown-container">
                  <button
                    onClick={() => (item.hasDropdown ? handleDropdownToggle(item.name) : handleMenuClick(item.name, item.href))}
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                    className={`flex items-center gap-1 transition-all duration-300 font-semibold relative text-sm tracking-wide uppercase transform ${
                      clickedItem === item.name ? "scale-110 text-biosoft-orange" : "text-biosoft-gray-dark hover:text-biosoft-orange hover:scale-105"
                    }`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : "group-hover:rotate-180"}`} />
                    )}

                    <span
                      className={`absolute -bottom-2 left-0 h-0.5 bg-biosoft-orange transition-all duration-500 ${
                        clickedItem === item.name ? "w-full animate-pulse" : "w-0 group-hover:w-full"
                      }`}
                    ></span>

                    {clickedItem === item.name && <span className="absolute inset-0 bg-biosoft-orange-light/20 rounded-lg scale-150 opacity-50 animate-ping"></span>}
                  </button>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div
                      className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl border border-gray-200/80 shadow-2xl rounded-2xl p-6 animate-fade-in-up z-50"
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="space-y-4">
                        {item.dropdownItems?.map((dropdownItem, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleMenuClick(dropdownItem.name, dropdownItem.href)}
                            className="w-full text-left p-3 rounded-xl hover:bg-biosoft-blue-light/10 transition-all duration-300 group/dropdown"
                          >
                            <div className="flex items-start gap-3">
                              {dropdownItem.icon && (
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light flex items-center justify-center mt-1">
                                  <dropdownItem.icon className="h-4 w-4 text-white" />
                                </div>
                              )}
                              <div className="flex-1">
                                <div className="font-semibold text-biosoft-gray-dark group-hover/dropdown:text-biosoft-blue transition-colors duration-300">
                                  {dropdownItem.name}
                                </div>
                                <div className="text-sm text-biosoft-gray-medium mt-1">{dropdownItem.description}</div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* Special Blog Categories Section */}
                      {item.name === "Resources" && (
                        <div className="mt-6 pt-6 border-t border-biosoft-gray/30">
                          <div className="text-xs font-semibold text-biosoft-gray-medium uppercase tracking-wider mb-3">Popular Categories</div>
                          <div className="grid grid-cols-2 gap-2">
                            {blogCategories.slice(0, 4).map((category) => (
                              <button
                                key={category.id}
                                onClick={() => handleMenuClick(category.name, `/blog/category/${category.slug}`)}
                                className="text-left p-2 rounded-lg hover:bg-biosoft-blue-light/10 transition-all duration-300"
                              >
                                <div className="text-sm font-medium text-biosoft-gray-dark hover:text-biosoft-blue transition-colors duration-300">{category.name}</div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3 animate-fade-in-right animate-delay-400">
              <Button
                variant="ghost"
                className="text-biosoft-gray-dark hover:text-biosoft-orange transition-all duration-300 hover:scale-105 font-semibold hover:bg-biosoft-orange-light/10 relative overflow-hidden group px-4 py-2"
              >
                <span className="relative z-10">Sign In</span>
                <div className="absolute inset-0 bg-biosoft-orange-light/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
              <Button className="bg-biosoft-orange hover:bg-biosoft-orange-light text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-0.5 font-semibold px-6 py-2.5 relative overflow-hidden group">
                <span className="relative z-10 whitespace-nowrap">Free Trial</span>
                <div className="absolute inset-0 bg-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 z-50 relative"
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`h-6 w-6 text-biosoft-gray-dark absolute transition-all duration-500 ${
                    isMenuOpen ? "rotate-180 opacity-0 scale-75" : "rotate-0 opacity-100 scale-100"
                  }`}
                />
                <X
                  className={`h-6 w-6 text-biosoft-gray-dark absolute transition-all duration-500 ${
                    isMenuOpen ? "rotate-0 opacity-100 scale-100" : "rotate-180 opacity-0 scale-75"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 ${isMenuOpen ? "opacity-100 z-40" : "opacity-0 -z-10 pointer-events-none"}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Enhanced Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-gray-200/80 shadow-2xl transition-all duration-500 mobile-menu-container ${
          isMenuOpen ? "opacity-100 translate-y-0 z-40 pointer-events-auto" : "opacity-0 -translate-y-full z-40 pointer-events-none"
        }`}
        style={{
          paddingTop: isScrolled ? "4.5rem" : "5.5rem",
          maxHeight: "100vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-4 py-6 space-y-4 min-h-screen bg-white/98">
          {navigation.map((item, index) => (
            <button
              key={item.name}
              onClick={() => handleMenuClick(item.name, item.href)}
              className={`w-full text-left text-biosoft-gray-dark hover:text-biosoft-orange transition-all duration-300 font-semibold py-4 px-4 rounded-xl hover:bg-biosoft-orange-light/10 transform text-lg relative overflow-hidden group ${
                isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              } ${clickedItem === item.name ? "bg-biosoft-orange-light/20 text-biosoft-orange scale-105" : ""}`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 0.1}s` : "0s",
                animationFillMode: "both",
              }}
            >
              <span className="relative z-10 flex items-center justify-between">
                {item.name}
                {item.hasDropdown && <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />}
              </span>

              {clickedItem === item.name && <div className="absolute inset-0 bg-biosoft-orange-light/30 animate-pulse rounded-xl"></div>}

              <div className="absolute inset-0 bg-biosoft-orange-light/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
            </button>
          ))}

          <div
            className={`pt-6 space-y-4 transform transition-all duration-500 border-t border-gray-200/50 ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
            style={{
              transitionDelay: isMenuOpen ? "0.6s" : "0s",
              animationFillMode: "both",
            }}
          >
            <Button
              variant="ghost"
              className="w-full text-biosoft-gray-dark hover:text-biosoft-orange transition-all duration-300 font-semibold py-4 hover:bg-biosoft-orange-light/10 rounded-xl text-lg"
            >
              Sign In
            </Button>
            <Button className="w-full bg-biosoft-orange hover:bg-biosoft-orange-light text-white rounded-xl transition-all duration-500 font-semibold py-4 shadow-lg hover:shadow-xl text-lg">
              Free Trial
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
