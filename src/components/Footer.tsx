import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Solutions: ["Electronic Health Records", "Practice Management", "Telemedicine", "Medical Billing", "Patient Portal"],
    Company: ["About Us", "Careers", "Press Kit", "Contact", "Privacy Policy"],
    Resources: ["Documentation", "API Reference", "Help Center", "Webinars", "Case Studies"],
    Support: ["24/7 Support", "Training", "Implementation", "System Status", "Community"],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-biosoft-gray-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info with Logo - INCREASED SIZE */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
                {/* Biosoft Logo Image - INCREASED SIZE */}
                <img
                  src="/BiosoftLogo.png"
                  alt="Biosoft Healthcare Solutions Logo"
                  className="h-14 w-14 object-contain"
                  onError={(e) => {
                    // Fallback to JPG if PNG fails
                    const img = e.target as HTMLImageElement;
                    if (img.src.includes(".png")) {
                      img.src = "/BiosoftLogo.jpg";
                    }
                  }}
                />
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-biosoft-blue-light to-biosoft-blue-lighter bg-clip-text text-transparent">Biosoft</span>
                <div className="text-sm text-biosoft-gray -mt-1">healthcare made simple</div>
              </div>
            </div>

            <p className="text-biosoft-gray leading-relaxed">
              Transforming healthcare delivery with innovative software solutions. Trusted by over 500 healthcare providers worldwide.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-biosoft-gray">
                <Phone className="h-5 w-5 text-biosoft-blue-light" />
                <span>1-800-BIOSOFT</span>
              </div>
              <div className="flex items-center gap-3 text-biosoft-gray">
                <Mail className="h-5 w-5 text-biosoft-blue-light" />
                <span>support@biosoft.com</span>
              </div>
              <div className="flex items-center gap-3 text-biosoft-gray">
                <MapPin className="h-5 w-5 text-biosoft-blue-light" />
                <span>123 Healthcare Blvd, Tech City, TC 12345</span>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-biosoft-gray-medium rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-biosoft-orange hover:to-biosoft-yellow transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-biosoft-gray hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-biosoft-gray-medium mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-biosoft-gray text-sm">© 2024 Biosoft Healthcare Solutions. All rights reserved.</div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-biosoft-gray hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-biosoft-gray hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-biosoft-gray hover:text-white transition-colors">
                HIPAA Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
