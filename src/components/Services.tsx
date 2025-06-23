
import { Heart, Shield, Database, Smartphone, Users, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Electronic Health Records",
      description: "Comprehensive EHR system with intuitive interface, real-time data sync, and seamless integration with existing healthcare workflows.",
      color: "from-rose-500 to-pink-600",
      bgColor: "from-rose-50 to-pink-50"
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Industry-leading security measures ensuring complete HIPAA compliance with end-to-end encryption and audit trails.",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Advanced analytics and reporting tools providing actionable insights to improve patient outcomes and operational efficiency.",
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-50"
    },
    {
      icon: Smartphone,
      title: "Mobile Healthcare",
      description: "Native mobile applications for healthcare providers and patients, enabling care delivery anywhere, anytime.",
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50"
    },
    {
      icon: Users,
      title: "Practice Management",
      description: "Complete practice management solution covering scheduling, billing, insurance claims, and patient communication.",
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-50 to-orange-50"
    },
    {
      icon: Clock,
      title: "Telemedicine Platform",
      description: "Integrated telehealth solutions with video consultations, remote monitoring, and digital prescription management.",
      color: "from-cyan-500 to-blue-600",
      bgColor: "from-cyan-50 to-blue-50"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full px-6 py-3 mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            <span className="text-blue-800 font-semibold text-sm tracking-wide uppercase">
              Our Solutions
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 animate-fade-in-up animate-delay-100">
            Comprehensive Healthcare
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up animate-delay-200">
            Our integrated platform provides everything you need to deliver exceptional patient care 
            while streamlining your healthcare operations with cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-700 border-0 shadow-lg hover-lift animate-scale-in opacity-0 bg-gradient-to-br ${service.bgColor} backdrop-blur-sm`}
              style={{ 
                animationDelay: `${0.1 + index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              <CardHeader className="pb-4 pt-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                  <service.icon className="h-8 w-8 text-white transform group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-8">
                <CardDescription className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 font-medium">
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
