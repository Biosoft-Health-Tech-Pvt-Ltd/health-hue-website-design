import { Users, Award, Shield, Building2, Heart, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamGroups = [
    {
      title: "Leadership & Strategy Team",
      image: "/Team1.jpeg",
      description: "Our executive leadership team brings together decades of healthcare and technology expertise to guide Biosoft's mission of transforming healthcare delivery.",
      highlights: ["Combined 50+ years healthcare experience", "Former healthcare executives and clinicians", "Proven track record in healthcare technology"],
      icon: Award,
      color: "from-biosoft-blue to-biosoft-blue-light",
      members: "Executive Leadership",
    },
    {
      title: "Development & Engineering Team",
      image: "/Team2.jpeg",
      description: "Our world-class development team creates secure, scalable, and intuitive healthcare solutions that meet the demanding requirements of modern medical practice.",
      highlights: ["HIPAA compliance specialists", "Healthcare IT security experts", "Full-stack development expertise"],
      icon: Zap,
      color: "from-biosoft-green to-biosoft-orange-light",
      members: "Technical Specialists",
    },
    {
      title: "Clinical & Operations Team",
      image: "/Team3.jpg",
      description: "Our clinical operations team ensures that every feature we develop directly improves patient care and streamlines healthcare workflows for maximum efficiency.",
      highlights: ["Licensed healthcare professionals", "Clinical workflow optimization experts", "Quality assurance specialists"],
      icon: Heart,
      color: "from-biosoft-orange to-biosoft-yellow",
      members: "Clinical Experts",
    },
  ];

  const companyStats = [
    {
      value: "50+",
      label: "Team Members",
      description: "Healthcare and technology experts",
    },
    {
      value: "15+",
      label: "Years Experience",
      description: "Average team experience in healthcare",
    },
    {
      value: "24/7",
      label: "Support Coverage",
      description: "Around-the-clock customer support",
    },
    {
      value: "100%",
      label: "Remote Capable",
      description: "Flexible work arrangements",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-biosoft-gray/20 to-biosoft-blue-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-biosoft-blue-light/30 to-biosoft-blue-lighter/30 border border-biosoft-blue/20 rounded-full px-6 py-3 mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light rounded-full animate-pulse"></div>
            <span className="text-biosoft-blue font-semibold text-sm tracking-wide uppercase">Our Team</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-biosoft-gray-dark mb-6 animate-fade-in-up animate-delay-100">
            The People Behind
            <span className="block bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light bg-clip-text text-transparent">Healthcare Innovation</span>
          </h2>

          <p className="text-xl text-biosoft-gray-medium max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up animate-delay-200">
            Meet the dedicated professionals who combine deep healthcare expertise with cutting-edge technology skills to deliver solutions that transform patient care and
            streamline operations for healthcare providers worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {teamGroups.map((group, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-700 border-0 shadow-lg hover-lift animate-scale-in opacity-0 bg-gradient-to-br from-white/90 to-biosoft-blue-light/10 backdrop-blur-sm overflow-hidden`}
              style={{
                animationDelay: `${0.1 + index * 0.15}s`,
                animationFillMode: "forwards",
              }}
            >
              <CardContent className="p-0">
                {/* Team Photo */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] relative group-hover:scale-105 transition-transform duration-700">
                    <img src={group.image} alt={group.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                    {/* Overlay Icon */}
                    <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-r ${group.color} flex items-center justify-center shadow-lg`}>
                      <group.icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Team Size Badge */}
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">{group.members}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-biosoft-gray-dark group-hover:text-biosoft-blue transition-colors duration-300 leading-tight mb-3">{group.title}</h3>

                  <p className="text-biosoft-gray-medium leading-relaxed group-hover:text-biosoft-gray-dark transition-colors duration-300 font-medium mb-6">{group.description}</p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {group.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-biosoft-green to-biosoft-orange-light rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-biosoft-gray-dark text-sm font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Culture Section */}
        <div className="text-center mb-16 animate-fade-in-up animate-delay-600">
          <div className="bg-gradient-to-r from-biosoft-gray-dark to-biosoft-blue rounded-2xl p-12 text-white">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="h-8 w-8 text-biosoft-blue-light" />
              <h3 className="text-3xl font-bold">Our Culture & Values</h3>
            </div>

            <p className="text-xl text-biosoft-gray mb-8 max-w-4xl mx-auto leading-relaxed">
              At Biosoft, we believe that exceptional healthcare technology comes from exceptional people. Our team is united by a shared commitment to improving patient outcomes
              and supporting healthcare providers with innovative, reliable solutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {companyStats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-biosoft-blue-light font-semibold mb-1">{stat.label}</div>
                  <div className="text-biosoft-gray text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Join Our Team Section */}
        <div className="text-center animate-fade-in-up animate-delay-800">
          <div className="bg-gradient-to-r from-biosoft-blue-light/10 to-biosoft-blue-lighter/10 rounded-2xl p-8 border border-biosoft-blue/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Building2 className="h-6 w-6 text-biosoft-blue" />
              <h3 className="text-2xl font-bold text-biosoft-gray-dark">Join Our Growing Team</h3>
            </div>

            <p className="text-biosoft-gray-medium mb-6 max-w-3xl mx-auto leading-relaxed">
              We are always looking for passionate healthcare professionals and technology experts who share our mission of transforming healthcare delivery. Join us in building
              the future of healthcare technology.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light hover:from-biosoft-blue hover:to-biosoft-blue text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift font-semibold">
                View Open Positions
              </button>
              <button className="border-2 border-biosoft-gray-medium hover:border-biosoft-blue text-biosoft-gray-dark hover:text-biosoft-blue hover:bg-biosoft-blue-light/10 px-8 py-3 rounded-xl transition-all duration-300 hover-lift font-semibold">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
