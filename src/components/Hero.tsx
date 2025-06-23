
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-50 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-xl animate-float animate-delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full blur-lg animate-float animate-delay-500"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-left">
                Healthcare
                <span className="block bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent animate-fade-in-left animate-delay-200">
                  Made Simple
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg animate-fade-in-left animate-delay-300">
                Transforming healthcare delivery with innovative software solutions. 
                Streamline operations, enhance patient care, and boost efficiency with our comprehensive healthcare technology platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-left animate-delay-400">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover-lift animate-pulse-glow">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl transition-all duration-300 group hover-lift hover-glow">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-6 animate-fade-in-up animate-delay-500">
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Healthcare Providers</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300 animate-delay-100">
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime Guaranteed</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300 animate-delay-200">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative animate-fade-in-right animate-delay-600">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-all duration-700 hover-lift animate-float">
              <div className="space-y-4">
                <div className="flex items-center justify-between animate-slide-down">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg flex items-center justify-center animate-pulse-glow">
                      <div className="w-6 h-6 bg-white rounded-sm"></div>
                    </div>
                    <h3 className="font-semibold text-gray-900">Patient Dashboard</h3>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse animate-delay-100"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse animate-delay-200"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up animate-delay-100">
                    <div className="text-sm text-blue-600 font-medium">Active Patients</div>
                    <div className="text-2xl font-bold text-blue-900">1,247</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up animate-delay-200">
                    <div className="text-sm text-orange-600 font-medium">Appointments</div>
                    <div className="text-2xl font-bold text-orange-900">83</div>
                  </div>
                </div>

                <div className="space-y-2 animate-fade-in-up animate-delay-300">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">System Performance</span>
                    <span className="text-green-600 font-medium">Excellent</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-4/5 transform transition-all duration-1000 animate-fade-in-right"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
