import { Shield, CheckCircle, Award, Globe, Database, Eye, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const Certifications = () => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certifications = [
    {
      name: "HL7 FHIR",
      description: "Health Level 7 Fast Healthcare Interoperability Resources compliance for seamless data exchange",
      icon: Database,
      color: "from-biosoft-blue to-biosoft-blue-light",
      bgColor: "from-biosoft-blue-light/10 to-biosoft-blue-lighter/10",
      category: "Interoperability",
      certificateImage: null,
    },
    {
      name: "SNOMED CT",
      description: "Systematized Nomenclature of Medicine Clinical Terms integration for standardized clinical terminology",
      icon: CheckCircle,
      color: "from-biosoft-green to-biosoft-orange-light",
      bgColor: "from-biosoft-green/10 to-biosoft-orange-light/10",
      category: "Clinical Standards",
      certificateImage: null,
    },
    {
      name: "LOINC",
      description: "Logical Observation Identifiers Names and Codes support for laboratory and clinical observations",
      icon: Award,
      color: "from-biosoft-orange to-biosoft-yellow",
      bgColor: "from-biosoft-orange/10 to-biosoft-yellow/10",
      category: "Laboratory Standards",
      certificateImage: null,
    },
    {
      name: "ABDM Certified",
      description: "Ayushman Bharat Digital Mission certification for India's national digital health ecosystem",
      icon: Globe,
      color: "from-biosoft-orange to-biosoft-orange-light",
      bgColor: "from-biosoft-orange/10 to-biosoft-orange-light/10",
      category: "National Standards",
      certificateImage: "/BIOSOFT_ABDM_CERTIFICATE.png",
      hasDocument: true,
    },
    {
      name: "WASA Certified",
      description: "WASA certification ensuring comprehensive healthcare application security and compliance",
      icon: Shield,
      color: "from-biosoft-blue-light to-biosoft-blue-lighter",
      bgColor: "from-biosoft-blue-light/10 to-biosoft-blue-lighter/10",
      category: "Security & Compliance",
      certificateImage: "/BIOSOFT_WASA_CERTIFICATE.png",
      hasDocument: true,
    },
  ];

  const handleViewCertificate = (certification) => {
    setSelectedCertificate(certification);
    setShowCertificate(true);
  };

  const closeCertificate = () => {
    setShowCertificate(false);
    setSelectedCertificate(null);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white via-biosoft-gray/20 to-biosoft-blue-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-biosoft-blue-light/30 to-biosoft-blue-lighter/30 border border-biosoft-blue/20 rounded-full px-6 py-3 mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light rounded-full animate-pulse"></div>
            <span className="text-biosoft-blue font-semibold text-sm tracking-wide uppercase">Industry Standards & Certifications</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-biosoft-gray-dark mb-6 animate-fade-in-up animate-delay-100">
            Built to the Highest
            <span className="block bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light bg-clip-text text-transparent">Healthcare Standards</span>
          </h2>

          <p className="text-xl text-biosoft-gray-medium max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up animate-delay-200">
            Our eBios platform meets and exceeds the most stringent international healthcare standards, ensuring seamless interoperability, data security, and regulatory compliance
            across all healthcare environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-700 border-0 shadow-lg hover-lift animate-scale-in opacity-0 bg-gradient-to-br ${cert.bgColor} backdrop-blur-sm`}
              style={{
                animationDelay: `${0.1 + index * 0.15}s`,
                animationFillMode: "forwards",
              }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${cert.color} flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                  >
                    <cert.icon className="h-8 w-8 text-white transform group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-biosoft-gray-medium uppercase tracking-wider mb-1">{cert.category}</div>
                    <h3 className="text-xl font-bold text-biosoft-gray-dark group-hover:text-biosoft-blue transition-colors duration-300">{cert.name}</h3>
                  </div>
                </div>

                <p className="text-biosoft-gray-medium leading-relaxed group-hover:text-biosoft-gray-dark transition-colors duration-300 font-medium mb-6">{cert.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-biosoft-green" />
                    <span className="text-sm font-semibold text-biosoft-green">Certified & Compliant</span>
                  </div>

                  {cert.hasDocument && (
                    <button
                      onClick={() => handleViewCertificate(cert)}
                      className="flex items-center gap-2 bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light hover:from-biosoft-blue hover:to-biosoft-blue text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm font-semibold"
                    >
                      <Eye className="h-4 w-4" />
                      View Certificate
                    </button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ABDM & WASA Certificates Highlight Section */}
        <div className="mb-16 animate-fade-in-up animate-delay-600">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* ABDM Certificate Section */}
            <div className="bg-gradient-to-r from-biosoft-orange/10 to-biosoft-orange-light/10 rounded-2xl p-8 border border-biosoft-orange/20">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-3 mb-4">
                  <Globe className="h-6 w-6 text-biosoft-orange" />
                  <h3 className="text-xl font-bold text-biosoft-gray-dark">ABDM Certification</h3>
                </div>
                <p className="text-biosoft-gray-medium leading-relaxed text-sm">
                  Certified under India's Ayushman Bharat Digital Mission, validating our platform's compliance with national health data standards and interoperability
                  requirements.
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <h4 className="text-sm font-bold text-biosoft-gray-dark">Key Capabilities:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-biosoft-green flex-shrink-0" />
                    <span className="text-biosoft-gray-dark text-sm">National Health ID integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-biosoft-green flex-shrink-0" />
                    <span className="text-biosoft-gray-dark text-sm">Digital Health Records interoperability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-biosoft-green flex-shrink-0" />
                    <span className="text-biosoft-gray-dark text-sm">Unified Health Interface compliance</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white/60 rounded-lg p-4 border border-white/40 shadow-lg mb-4">
                  <img
                    src="/BIOSOFT_ABDM_CERTIFICATE.png"
                    alt="ABDM Certificate Preview"
                    className="w-full max-w-48 mx-auto rounded-md shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300"
                    onClick={() => handleViewCertificate(certifications.find((cert) => cert.name === "ABDM Certified"))}
                  />
                </div>
                <button
                  onClick={() => handleViewCertificate(certifications.find((cert) => cert.name === "ABDM Certified"))}
                  className="bg-gradient-to-r from-biosoft-orange to-biosoft-orange-light hover:from-biosoft-orange hover:to-biosoft-orange text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold inline-flex items-center gap-2 text-sm"
                >
                  <Eye className="h-4 w-4" />
                  View Certificate
                </button>
              </div>
            </div>

            {/* WASA Certificate Section */}
            <div className="bg-gradient-to-r from-biosoft-blue-light/10 to-biosoft-blue-lighter/10 rounded-2xl p-8 border border-biosoft-blue/20">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-biosoft-blue" />
                  <h3 className="text-xl font-bold text-biosoft-gray-dark">WASA Certification</h3>
                </div>
                <p className="text-biosoft-gray-medium leading-relaxed text-sm">
                  WASA certification ensures comprehensive healthcare application security and compliance with international cybersecurity standards for medical data protection.
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <h4 className="text-sm font-bold text-biosoft-gray-dark">Security Features:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-biosoft-green flex-shrink-0" />
                    <span className="text-biosoft-gray-dark text-sm">Advanced encryption protocols</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-biosoft-green flex-shrink-0" />
                    <span className="text-biosoft-gray-dark text-sm">Penetration testing validated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-biosoft-green flex-shrink-0" />
                    <span className="text-biosoft-gray-dark text-sm">Vulnerability assessment certified</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white/60 rounded-lg p-4 border border-white/40 shadow-lg mb-4">
                  <img
                    src="/BIOSOFT_WASA_CERTIFICATE.png"
                    alt="WASA Certificate Preview"
                    className="w-full max-w-48 mx-auto rounded-md shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300"
                    onClick={() => handleViewCertificate(certifications.find((cert) => cert.name === "WASA Certified"))}
                  />
                </div>
                <button
                  onClick={() => handleViewCertificate(certifications.find((cert) => cert.name === "WASA Certified"))}
                  className="bg-gradient-to-r from-biosoft-blue-light to-biosoft-blue-lighter hover:from-biosoft-blue hover:to-biosoft-blue text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold inline-flex items-center gap-2 text-sm"
                >
                  <Eye className="h-4 w-4" />
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center animate-fade-in-up animate-delay-800">
          <div className="bg-gradient-to-r from-biosoft-gray/30 to-biosoft-blue-light/20 rounded-2xl p-8 border border-biosoft-gray-medium/30">
            <h3 className="text-2xl font-bold text-biosoft-gray-dark mb-4">Trusted by Healthcare Leaders Worldwide</h3>
            <p className="text-biosoft-gray-medium mb-6 max-w-3xl mx-auto leading-relaxed">
              These certifications ensure that eBios seamlessly integrates with existing healthcare systems, supports international data exchange standards, and maintains the
              highest levels of security and compliance required in modern healthcare delivery.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-biosoft-gray-dark mb-2">100%</div>
                <div className="text-sm text-biosoft-gray-medium font-medium">Standards Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-biosoft-gray-dark mb-2">5+</div>
                <div className="text-sm text-biosoft-gray-medium font-medium">Major Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-biosoft-gray-dark mb-2">99.9%</div>
                <div className="text-sm text-biosoft-gray-medium font-medium">Interoperability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-biosoft-gray-dark mb-2">24/7</div>
                <div className="text-sm text-biosoft-gray-medium font-medium">Compliance Monitoring</div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Modal */}
        {showCertificate && selectedCertificate && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={closeCertificate}>
            <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-biosoft-orange to-biosoft-orange-light p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <selectedCertificate.icon className="h-6 w-6" />
                    <h3 className="text-xl font-bold">{selectedCertificate.name}</h3>
                  </div>
                  <button onClick={closeCertificate} className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-biosoft-gray-light mt-2">{selectedCertificate.description}</p>
              </div>

              {/* Certificate Image */}
              <div className="p-6 overflow-auto max-h-[calc(90vh-120px)]">
                <img src={selectedCertificate.certificateImage} alt={`${selectedCertificate.name} Certificate`} className="w-full rounded-lg shadow-lg" />
              </div>

              {/* Modal Footer */}
              <div className="bg-biosoft-gray/20 p-4 border-t border-biosoft-gray/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-biosoft-green" />
                    <span className="text-biosoft-gray-dark font-medium">Verified Official Certificate</span>
                  </div>
                  <button
                    onClick={closeCertificate}
                    className="px-4 py-2 bg-biosoft-gray-medium hover:bg-biosoft-gray-dark text-white rounded-lg transition-colors duration-200 font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
