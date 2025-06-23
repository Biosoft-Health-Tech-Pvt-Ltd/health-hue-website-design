import { Shield, CheckCircle, Award, Globe, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Certifications = () => {
  const certifications = [
    {
      name: "HL7 FHIR",
      description: "Health Level 7 Fast Healthcare Interoperability Resources compliance for seamless data exchange",
      icon: Database,
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      category: "Interoperability",
    },
    {
      name: "SNOMED CT",
      description: "Systematized Nomenclature of Medicine Clinical Terms integration for standardized clinical terminology",
      icon: CheckCircle,
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
      category: "Clinical Standards",
    },
    {
      name: "LOINC",
      description: "Logical Observation Identifiers Names and Codes support for laboratory and clinical observations",
      icon: Award,
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-50",
      category: "Laboratory Standards",
    },
    {
      name: "ABDM Certified",
      description: "Ayushman Bharat Digital Mission certification for India's national digital health ecosystem",
      icon: Globe,
      color: "from-orange-500 to-amber-600",
      bgColor: "from-orange-50 to-amber-50",
      category: "National Standards",
    },
    {
      name: "WASA Certified",
      description: "WASA certification ensuring comprehensive healthcare application security and compliance",
      icon: Shield,
      color: "from-red-500 to-pink-600",
      bgColor: "from-red-50 to-pink-50",
      category: "Security & Compliance",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full px-6 py-3 mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
            <span className="text-blue-800 font-semibold text-sm tracking-wide uppercase">Industry Standards & Certifications</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 animate-fade-in-up animate-delay-100">
            Built to the Highest
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Healthcare Standards</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up animate-delay-200">
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
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">{cert.category}</div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">{cert.name}</h3>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 font-medium">{cert.description}</p>

                <div className="mt-6 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-sm font-semibold text-emerald-700">Certified & Compliant</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center animate-fade-in-up animate-delay-600">
          <div className="bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Trusted by Healthcare Leaders Worldwide</h3>
            <p className="text-slate-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              These certifications ensure that eBios seamlessly integrates with existing healthcare systems, supports international data exchange standards, and maintains the
              highest levels of security and compliance required in modern healthcare delivery.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800 mb-2">100%</div>
                <div className="text-sm text-slate-600 font-medium">Standards Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800 mb-2">5+</div>
                <div className="text-sm text-slate-600 font-medium">Major Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800 mb-2">99.9%</div>
                <div className="text-sm text-slate-600 font-medium">Interoperability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800 mb-2">24/7</div>
                <div className="text-sm text-slate-600 font-medium">Compliance Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
