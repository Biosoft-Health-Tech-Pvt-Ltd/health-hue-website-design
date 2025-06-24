import { Building2, FlaskConical, Stethoscope, ArrowRight, CheckCircle, Users, Database, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EBiosProducts = () => {
  const products = [
    {
      id: "hmis",
      name: "eBios HMIS",
      fullName: "Hospital Management Information System",
      icon: Building2,
      description:
        "Comprehensive hospital management solution that integrates all clinical, administrative, and financial operations into a unified platform designed for complex healthcare institutions.",
      targetUsers: "Hospital Administrators, Clinical Directors, Department Heads, and Healthcare Executives",
      primaryColor: "from-biosoft-blue to-biosoft-blue-light",
      accentColor: "from-biosoft-blue-light/10 to-biosoft-blue-lighter/10",
      borderColor: "border-biosoft-blue/20",
      features: [
        "Patient Registration and Admission Management",
        "Electronic Medical Records with Clinical Decision Support",
        "Integrated Billing and Revenue Cycle Management",
        "Pharmacy and Inventory Management Systems",
        "Laboratory and Radiology Information Systems Integration",
        "Staff Scheduling and Human Resources Management",
        "Real-time Analytics and Executive Dashboards",
        "Multi-location Support for Hospital Networks",
      ],
      benefits: [
        "Streamlined hospital operations across all departments",
        "Improved patient care coordination and safety",
        "Enhanced financial performance and cost control",
        "Comprehensive regulatory compliance and reporting",
      ],
      keyMetrics: {
        efficiency: "45% reduction in administrative overhead",
        satisfaction: "92% improvement in patient satisfaction scores",
        compliance: "100% regulatory compliance maintenance",
      },
    },
    {
      id: "lmis",
      name: "eBios LMIS",
      fullName: "Laboratory Management Information System",
      icon: FlaskConical,
      description:
        "Specialized laboratory management platform that optimizes diagnostic workflows, ensures quality control, and integrates seamlessly with hospital and clinic information systems.",
      targetUsers: "Laboratory Directors, Pathologists, Lab Technicians, and Quality Assurance Managers",
      primaryColor: "from-biosoft-green to-biosoft-orange-light",
      accentColor: "from-biosoft-green/10 to-biosoft-orange-light/10",
      borderColor: "border-biosoft-green/20",
      features: [
        "Sample Tracking and Chain of Custody Management",
        "Automated Instrument Integration and Data Collection",
        "Quality Control and Proficiency Testing Modules",
        "Result Validation and Critical Value Alerting",
        "Comprehensive Test Catalog and Protocol Management",
        "Inventory Management for Reagents and Supplies",
        "Advanced Analytics and Laboratory Performance Metrics",
        "Regulatory Compliance and Accreditation Support",
      ],
      benefits: [
        "Reduced turnaround times for critical test results",
        "Enhanced accuracy through automated quality controls",
        "Improved laboratory efficiency and resource utilization",
        "Seamless integration with clinical information systems",
      ],
      keyMetrics: {
        efficiency: "35% faster test result turnaround",
        accuracy: "99.8% accuracy in diagnostic reporting",
        compliance: "Full CAP and CLIA compliance support",
      },
    },
    {
      id: "pms",
      name: "eBios PMS",
      fullName: "Practice Management System",
      icon: Stethoscope,
      description:
        "Integrated practice management solution designed for medical practices, clinics, and healthcare providers who require efficient patient care delivery and practice administration.",
      targetUsers: "Practice Owners, Medical Providers, Practice Managers, and Administrative Staff",
      primaryColor: "from-biosoft-orange to-biosoft-yellow",
      accentColor: "from-biosoft-orange/10 to-biosoft-yellow/10",
      borderColor: "border-biosoft-orange/20",
      features: [
        "Patient Scheduling and Appointment Management",
        "Electronic Health Records with Clinical Templates",
        "Medical Billing and Claims Management",
        "Patient Portal with Secure Messaging",
        "Prescription Management and e-Prescribing",
        "Insurance Verification and Prior Authorization",
        "Financial Reporting and Practice Analytics",
        "Telemedicine Integration and Remote Care",
      ],
      benefits: [
        "Optimized patient scheduling and reduced no-shows",
        "Streamlined clinical documentation and workflows",
        "Improved revenue cycle and faster collections",
        "Enhanced patient engagement and communication",
      ],
      keyMetrics: {
        efficiency: "40% increase in patient throughput",
        revenue: "25% improvement in collection rates",
        satisfaction: "88% patient satisfaction with digital services",
      },
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-biosoft-gray/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-biosoft-blue-light/30 to-biosoft-blue-lighter/30 border border-biosoft-blue/20 rounded-full px-6 py-3 mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light rounded-full animate-pulse"></div>
            <span className="text-biosoft-blue font-semibold text-sm tracking-wide uppercase">eBios Product Suite</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-biosoft-gray-dark mb-6 animate-fade-in-up animate-delay-100">
            Comprehensive Healthcare
            <span className="block bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light bg-clip-text text-transparent">Management Solutions</span>
          </h2>

          <p className="text-xl text-biosoft-gray-medium max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up animate-delay-200">
            The eBios platform delivers specialized management information systems that address the unique operational requirements of hospitals, laboratories, and medical
            practices across the healthcare continuum.
          </p>
        </div>

        <div className="space-y-16">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className={`group hover:shadow-2xl transition-all duration-700 border-0 shadow-lg hover-lift animate-scale-in opacity-0 bg-gradient-to-br ${product.accentColor} backdrop-blur-sm ${product.borderColor} border`}
              style={{
                animationDelay: `${0.2 + index * 0.2}s`,
                animationFillMode: "forwards",
              }}
            >
              <CardContent className="p-0">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Content Side */}
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <CardHeader className="p-0 mb-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.primaryColor} flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                        >
                          <product.icon className="h-8 w-8 text-white transform group-hover:rotate-12 transition-transform duration-300" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-biosoft-gray-dark group-hover:text-biosoft-blue transition-colors duration-300">{product.name}</CardTitle>
                          <p className="text-biosoft-gray-medium font-medium">{product.fullName}</p>
                        </div>
                      </div>

                      <p className="text-biosoft-gray-medium leading-relaxed text-lg group-hover:text-biosoft-gray-dark transition-colors duration-300 mb-6">
                        {product.description}
                      </p>

                      <div className="bg-white/60 rounded-lg p-4 border border-white/40 mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="h-4 w-4 text-biosoft-gray-medium" />
                          <span className="font-semibold text-biosoft-gray-dark text-sm">Target Users:</span>
                        </div>
                        <p className="text-biosoft-gray-medium text-sm">{product.targetUsers}</p>
                      </div>
                    </CardHeader>

                    {/* Key Metrics */}
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      <div className="bg-white/60 rounded-lg p-4 text-center border border-white/40">
                        <div className="text-2xl font-bold text-biosoft-gray-dark mb-1">{product.keyMetrics.efficiency}</div>
                        <div className="text-xs text-biosoft-gray-medium uppercase tracking-wider">Efficiency Gain</div>
                      </div>
                      <div className="bg-white/60 rounded-lg p-4 text-center border border-white/40">
                        <div className="text-2xl font-bold text-biosoft-gray-dark mb-1">
                          {product.keyMetrics.satisfaction || product.keyMetrics.accuracy || product.keyMetrics.revenue}
                        </div>
                        <div className="text-xs text-biosoft-gray-medium uppercase tracking-wider">
                          {product.keyMetrics.satisfaction ? "Satisfaction" : product.keyMetrics.accuracy ? "Accuracy" : "Revenue"}
                        </div>
                      </div>
                      <div className="bg-white/60 rounded-lg p-4 text-center border border-white/40">
                        <div className="text-2xl font-bold text-biosoft-gray-dark mb-1">{product.keyMetrics.compliance}</div>
                        <div className="text-xs text-biosoft-gray-medium uppercase tracking-wider">Compliance</div>
                      </div>
                    </div>

                    <Button
                      className={`bg-gradient-to-r ${product.primaryColor} hover:opacity-90 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift font-semibold px-8 py-3 group`}
                    >
                      Learn More About {product.name}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>

                  {/* Features Side */}
                  <div className={`bg-white/40 p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="space-y-8">
                      {/* Core Features */}
                      <div>
                        <div className="flex items-center gap-2 mb-6">
                          <Database className="h-5 w-5 text-biosoft-gray-dark" />
                          <h3 className="text-lg font-bold text-biosoft-gray-dark">Core Capabilities</h3>
                        </div>
                        <div className="space-y-3">
                          {product.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-biosoft-green mt-0.5 flex-shrink-0" />
                              <span className="text-biosoft-gray-dark font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Advanced Features */}
                      <div>
                        <div className="flex items-center gap-2 mb-6">
                          <Shield className="h-5 w-5 text-biosoft-gray-dark" />
                          <h3 className="text-lg font-bold text-biosoft-gray-dark">Advanced Features</h3>
                        </div>
                        <div className="space-y-3">
                          {product.features.slice(4).map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-biosoft-green mt-0.5 flex-shrink-0" />
                              <span className="text-biosoft-gray-dark font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Benefits */}
                      <div className="bg-gradient-to-br from-biosoft-gray/30 to-white rounded-lg p-6 border border-biosoft-gray-medium/30">
                        <h4 className="font-bold text-biosoft-gray-dark mb-4">Key Benefits</h4>
                        <div className="space-y-2">
                          {product.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-gradient-to-r from-biosoft-green to-biosoft-orange-light rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-biosoft-gray-medium text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Message */}
        <div className="text-center mt-20 animate-fade-in-up animate-delay-800">
          <div className="bg-gradient-to-r from-biosoft-gray-dark to-biosoft-blue rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Integrated Healthcare Technology Ecosystem</h3>
            <p className="text-xl text-biosoft-gray mb-8 max-w-4xl mx-auto leading-relaxed">
              The eBios platform provides seamless integration between hospital operations, laboratory management, and practice administration, creating a unified technology
              environment that supports comprehensive healthcare delivery across your organization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-white text-biosoft-gray-dark hover:bg-biosoft-gray rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift font-semibold px-8 py-3">
                Schedule Integration Consultation
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-biosoft-gray-dark rounded-xl transition-all duration-300 hover-lift font-semibold px-8 py-3"
              >
                Download Technical Specifications
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EBiosProducts;
