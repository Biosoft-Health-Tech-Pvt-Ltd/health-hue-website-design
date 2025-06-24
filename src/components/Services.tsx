import { Building2, FlaskConical, Stethoscope, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "eBios HMIS",
      subtitle: "Hospital Management Information System",
      description:
        "Comprehensive hospital management solution that integrates clinical, administrative, and financial operations for complex healthcare institutions. Designed for hospital administrators, clinical directors, and healthcare executives who require enterprise-level functionality.",
      color: "from-biosoft-blue to-biosoft-blue-light",
      bgColor: "from-biosoft-blue-light/10 to-biosoft-blue-lighter/10",
      features: [
        "Integrated Patient Registration and EMR",
        "Revenue Cycle and Billing Management",
        "Multi-department Workflow Coordination",
        "Real-time Analytics and Executive Dashboards",
      ],
      targetMetric: "45% reduction in administrative overhead",
    },
    {
      icon: FlaskConical,
      title: "eBios LMIS",
      subtitle: "Laboratory Management Information System",
      description:
        "Specialized laboratory management platform that optimizes diagnostic workflows, ensures quality control, and integrates seamlessly with hospital and clinic information systems. Built for laboratory directors, pathologists, and quality assurance managers.",
      color: "from-biosoft-green to-biosoft-orange-light",
      bgColor: "from-biosoft-green/10 to-biosoft-orange-light/10",
      features: ["Sample Tracking and Chain of Custody", "Automated Instrument Integration", "Quality Control and Validation", "Regulatory Compliance Support"],
      targetMetric: "35% faster test result turnaround",
    },
    {
      icon: Stethoscope,
      title: "eBios PMS",
      subtitle: "Practice Management System",
      description:
        "Integrated practice management solution designed for medical practices, clinics, and healthcare providers who require efficient patient care delivery and practice administration. Optimized for practice owners and medical providers.",
      color: "from-biosoft-orange to-biosoft-yellow",
      bgColor: "from-biosoft-orange/10 to-biosoft-yellow/10",
      features: ["Patient Scheduling and EHR Integration", "Medical Billing and Claims Management", "Patient Portal and Telemedicine", "Financial Reporting and Analytics"],
      targetMetric: "40% increase in patient throughput",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-biosoft-gray/20" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-biosoft-blue-light/30 to-biosoft-blue-lighter/30 border border-biosoft-blue/20 rounded-full px-6 py-3 mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light rounded-full"></div>
            <span className="text-biosoft-blue font-semibold text-sm tracking-wide uppercase">eBios Healthcare Solutions</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-biosoft-gray-dark mb-6 animate-fade-in-up animate-delay-100">
            Specialized Management
            <span className="block bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light bg-clip-text text-transparent">Information Systems</span>
          </h2>

          <p className="text-xl text-biosoft-gray-medium max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up animate-delay-200">
            The eBios platform delivers three specialized solutions that address the distinct operational requirements of hospitals, laboratories, and medical practices throughout
            the healthcare ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-700 border-0 shadow-lg hover-lift animate-scale-in opacity-0 bg-gradient-to-br ${service.bgColor} backdrop-blur-sm`}
              style={{
                animationDelay: `${0.1 + index * 0.1}s`,
                animationFillMode: "forwards",
              }}
            >
              <CardHeader className="pb-4 pt-8">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                >
                  <service.icon className="h-8 w-8 text-white transform group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl font-bold text-biosoft-gray-dark group-hover:text-biosoft-blue transition-colors duration-300 leading-tight mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-biosoft-gray-medium font-medium text-sm mb-4">{service.subtitle}</p>
              </CardHeader>
              <CardContent className="pb-8">
                <CardDescription className="text-biosoft-gray-medium leading-relaxed group-hover:text-biosoft-gray-dark transition-colors duration-300 font-medium mb-6">
                  {service.description}
                </CardDescription>

                {/* Key Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-biosoft-green to-biosoft-orange-light rounded-full"></div>
                      <span className="text-biosoft-gray-medium font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Performance Metric */}
                <div className="bg-white/60 rounded-lg p-4 border border-white/40 mb-6">
                  <div className="text-lg font-bold text-biosoft-gray-dark mb-1">{service.targetMetric}</div>
                  <div className="text-xs text-biosoft-gray-medium uppercase tracking-wider">Proven Performance Impact</div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-2 border-biosoft-gray-medium hover:border-biosoft-blue text-biosoft-gray-dark hover:text-biosoft-blue hover:bg-biosoft-blue-light/10 rounded-xl transition-all duration-300 font-semibold hover-lift group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Message */}
        <div className="text-center mt-16 animate-fade-in-up animate-delay-600">
          <div className="bg-gradient-to-r from-biosoft-gray/30 to-biosoft-blue-light/20 rounded-2xl p-8 border border-biosoft-gray-medium/30">
            <h3 className="text-2xl font-bold text-biosoft-gray-dark mb-4">Integrated Healthcare Technology Platform</h3>
            <p className="text-biosoft-gray-medium mb-6 max-w-3xl mx-auto leading-relaxed">
              Each eBios solution operates independently while maintaining seamless integration capabilities, allowing healthcare organizations to implement comprehensive
              technology ecosystems that support their entire operational spectrum.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light hover:from-biosoft-blue hover:to-biosoft-blue text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift font-semibold px-8">
                Schedule Product Demo
              </Button>
              <Button
                variant="outline"
                className="border-2 border-biosoft-gray-medium hover:border-biosoft-blue text-biosoft-gray-dark hover:text-biosoft-blue hover:bg-biosoft-blue-light/10 rounded-xl transition-all duration-300 hover-lift font-semibold px-8"
              >
                Compare Solutions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
