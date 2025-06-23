
import { Heart, Shield, Database, Smartphone, Users, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Electronic Health Records",
      description: "Comprehensive EHR system with intuitive interface, real-time data sync, and seamless integration with existing healthcare workflows.",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Industry-leading security measures ensuring complete HIPAA compliance with end-to-end encryption and audit trails.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Advanced analytics and reporting tools providing actionable insights to improve patient outcomes and operational efficiency.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Healthcare",
      description: "Native mobile applications for healthcare providers and patients, enabling care delivery anywhere, anytime.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Practice Management",
      description: "Complete practice management solution covering scheduling, billing, insurance claims, and patient communication.",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Clock,
      title: "Telemedicine Platform",
      description: "Integrated telehealth solutions with video consultations, remote monitoring, and digital prescription management.",
      color: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Our integrated platform provides everything you need to deliver exceptional patient care 
            while streamlining your healthcare operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover-lift animate-scale-in opacity-0`}
              style={{ 
                animationDelay: `${0.1 + index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 animate-pulse-glow`}>
                  <service.icon className="h-8 w-8 text-white transform group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
