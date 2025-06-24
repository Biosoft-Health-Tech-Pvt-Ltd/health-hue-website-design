import { Shield, CheckCircle, Award, Globe, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Certifications = () => {
  const certifications = [
    {
      name: "HL7 FHIR",
      description: "Health Level 7 Fast Healthcare Interoperability Resources compliance for seamless data exchange",
      icon: Database,
      color: "from-biosoft-blue to-biosoft-blue-light",
      bgColor: "from-biosoft-blue-light/10 to-biosoft-blue-lighter/10",
      category: "Interoperability",
    },
    {
      name: "SNOMED CT",
      description: "Systematized Nomenclature of Medicine Clinical Terms integration for standardized clinical terminology",
      icon: CheckCircle,
      color: "from-biosoft-green to-biosoft-orange-light",
      bgColor: "from-biosoft-green/10 to-biosoft-orange-light/10",
      category: "Clinical Standards",
    },
    {
      name: "LOINC",
      description: "Logical Observation Identifiers Names and Codes support for laboratory and clinical observations",
      icon: Award,
      color: "from-biosoft-orange to-biosoft-yellow",
      bgColor: "from-biosoft-orange/10 to-biosoft-yellow/10",
      category: "Laboratory Standards",
    },
    {
      name: "ABDM Certified",
      description: "Ayushman Bharat Digital Mission certification for India's national digital health ecosystem",
      icon: Globe,
      color: "from-biosoft-orange to-biosoft-orange-light",
      bgColor: "from-biosoft-orange/10 to-biosoft-orange-light/10",
      category: "National Standards",
    },
    {
      name: "WASA Certified",
      description: "WASA certification ensuring comprehensive healthcare application security and compliance",
      icon: Shield,
      color: "from-biosoft-blue-light to-biosoft-blue-lighter",
      bgColor: "from-biosoft-blue-light/10 to-biosoft-blue-lighter/10",
      category: "Security & Compliance",
    },
  ];

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

                <p className="text-biosoft-gray-medium leading-relaxed group-hover:text-biosoft-gray-dark transition-colors duration-300 font-medium">{cert.description}</p>

                <div className="mt-6 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-biosoft-green" />
                  <span className="text-sm font-semibold text-biosoft-green">Certified & Compliant</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center animate-fade-in-up animate-delay-600">
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
      </div>
    </section>
  );
};

export default Certifications;
