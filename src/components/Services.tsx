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
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
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
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
      features: ["Sample Tracking and Chain of Custody", "Automated Instrument Integration", "Quality Control and Validation", "Regulatory Compliance Support"],
      targetMetric: "35% faster test result turnaround",
    },
    {
      icon: Stethoscope,
      title: "eBios PMS",
      subtitle: "Practice Management System",
      description:
        "Integrated practice management solution designed for medical practices, clinics, and healthcare providers who require efficient patient care delivery and practice administration. Optimized for practice owners and medical providers.",
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-50",
      features: ["Patient Scheduling and EHR Integration", "Medical Billing and Claims Management", "Patient Portal and Telemedicine", "Financial Reporting and Analytics"],
      targetMetric: "40% increase in patient throughput",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50/50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full px-6 py-3 mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            <span className="text-blue-800 font-semibold text-sm tracking-wide uppercase">eBios Healthcare Solutions</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 animate-fade-in-up animate-delay-100">
            Specialized Management
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Information Systems</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up animate-delay-200">
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
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight mb-2">{service.title}</CardTitle>
                <p className="text-slate-500 font-medium text-sm mb-4">{service.subtitle}</p>
              </CardHeader>
              <CardContent className="pb-8">
                <CardDescription className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 font-medium mb-6">
                  {service.description}
                </CardDescription>

                {/* Key Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                      <span className="text-slate-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Performance Metric */}
                <div className="bg-white/60 rounded-lg p-4 border border-white/40 mb-6">
                  <div className="text-lg font-bold text-slate-900 mb-1">{service.targetMetric}</div>
                  <div className="text-xs text-slate-600 uppercase tracking-wider">Proven Performance Impact</div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-2 border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all duration-300 font-semibold hover-lift group"
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
          <div className="bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Integrated Healthcare Technology Platform</h3>
            <p className="text-slate-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              Each eBios solution operates independently while maintaining seamless integration capabilities, allowing healthcare organizations to implement comprehensive
              technology ecosystems that support their entire operational spectrum.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift font-semibold px-8">
                Schedule Product Demo
              </Button>
              <Button
                variant="outline"
                className="border-2 border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all duration-300 hover-lift font-semibold px-8"
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
