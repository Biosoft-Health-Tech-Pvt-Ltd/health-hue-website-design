
import { TrendingUp, Users, Shield, Clock } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Healthcare Providers",
      description: "Trust our platform daily",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      number: "40%",
      label: "Efficiency Increase",
      description: "Average improvement reported",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Shield,
      number: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable, always-on service",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Expert Support",
      description: "Available when you need us",
      color: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Proven Results Across the Healthcare Industry
          </h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Our platform delivers measurable improvements in healthcare delivery and operational efficiency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">
                  {stat.number}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-orange-100 text-sm">
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
