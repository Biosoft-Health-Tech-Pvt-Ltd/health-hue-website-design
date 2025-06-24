
import { TrendingUp, Users, Shield, Clock } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Healthcare Providers",
      description: "Trust our platform daily",
      color: "from-biosoft-primary to-biosoft-medium-blue"
    },
    {
      icon: TrendingUp,
      number: "40%",
      label: "Efficiency Increase",
      description: "Average improvement reported",
      color: "from-biosoft-green to-biosoft-light-blue"
    },
    {
      icon: Shield,
      number: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable, always-on service",
      color: "from-biosoft-orange to-biosoft-yellow"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Expert Support",
      description: "Available when you need us",
      color: "from-biosoft-peach to-biosoft-orange"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-biosoft-dark-gray via-biosoft-gray to-biosoft-dark-gray relative overflow-hidden">
      {/* Enhanced Background Pattern with Biosoft Colors */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-biosoft-primary to-biosoft-light-blue rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-biosoft-orange to-biosoft-yellow rounded-full blur-3xl animate-float animate-delay-400"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-biosoft-green to-biosoft-medium-blue rounded-full blur-2xl animate-float animate-delay-200"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-gradient-to-r from-biosoft-light-blue to-biosoft-primary rounded-full animate-pulse"></div>
            <span className="text-biosoft-light font-semibold text-sm tracking-wide uppercase">
              Proven Results
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 animate-fade-in-up animate-delay-100">
            Trusted Across the
            <span className="block bg-gradient-to-r from-biosoft-light-blue to-biosoft-primary bg-clip-text text-transparent">
              Healthcare Industry
            </span>
          </h2>
          
          <p className="text-xl text-biosoft-light max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up animate-delay-200">
            Our platform delivers measurable improvements in healthcare delivery and operational efficiency
            for providers worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center group animate-scale-in opacity-0`}
              style={{ 
                animationDelay: `${0.3 + index * 0.15}s`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/15 transition-all duration-700 hover-lift group-hover:scale-105 border border-white/10 hover:border-white/20">
                <div className={`w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl`}>
                  <stat.icon className="h-10 w-10 text-white transform group-hover:rotate-12 transition-transform duration-300" />
                </div>
                
                <div className="text-5xl md:text-6xl font-black text-white mb-4 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-white to-biosoft-light bg-clip-text">
                  {stat.number}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-biosoft-light-blue transition-colors duration-300">
                  {stat.label}
                </h3>
                
                <p className="text-biosoft-light group-hover:text-white transition-colors duration-300 font-medium">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
