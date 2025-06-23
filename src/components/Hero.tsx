import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleVideoClick = () => {
    window.open("https://youtu.be/JHpFFxnHtzc?si=UlVjtMBjQTNmHfl_", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50" role="banner">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full blur-3xl animate-float animate-delay-400"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full blur-2xl animate-float animate-delay-200"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Enhanced Typography Hierarchy */}
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
              <span className="text-blue-800 font-semibold text-sm tracking-wide uppercase">Trusted by 500+ Healthcare Providers</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              Healthcare
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Made Simple</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed font-light animate-fade-in-up animate-delay-200">
            Streamline your healthcare operations with our comprehensive software platform.
            <span className="font-medium text-slate-700">Improve patient care, reduce costs, and enhance efficiency</span>
            with industry-leading technology.
          </p>

          {/* Enhanced CTA Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in-up animate-delay-400">
            <button
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-lg font-semibold hover-lift"
              aria-label="Start your free 30-day trial of Biosoft healthcare software"
            >
              Start Free Trial
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
            </button>

            <button
              onClick={handleVideoClick}
              className="group border-2 border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 px-10 py-4 rounded-2xl backdrop-blur-sm bg-white/80 hover:bg-white/90 transition-all duration-300 text-lg font-semibold hover-lift"
              aria-label="Watch a demo of Biosoft healthcare platform"
            >
              <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              Watch Demo
            </button>
          </div>

          {/* Enhanced Trust Indicators with Schema Markup */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 hover:opacity-80 transition-opacity duration-500 animate-fade-in-up animate-delay-600"
            itemScope
            itemType="https://schema.org/Service"
          >
            <div className="text-center" itemProp="serviceOutput">
              <div className="text-3xl font-bold text-slate-800 mb-1">99.9%</div>
              <div className="text-sm text-slate-600 font-medium uppercase tracking-wider">Uptime</div>
            </div>
            <div className="text-center" itemProp="provider" itemScope itemType="https://schema.org/Organization">
              <div className="text-3xl font-bold text-slate-800 mb-1">500+</div>
              <div className="text-sm text-slate-600 font-medium uppercase tracking-wider">Providers</div>
            </div>
            <div className="text-center" itemProp="hoursAvailable">
              <div className="text-3xl font-bold text-slate-800 mb-1">24/7</div>
              <div className="text-sm text-slate-600 font-medium uppercase tracking-wider">Support</div>
            </div>
            <div className="text-center" itemProp="additionalProperty">
              <div className="text-3xl font-bold text-slate-800 mb-1">HIPAA</div>
              <div className="text-sm text-slate-600 font-medium uppercase tracking-wider">Compliant</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-label="Scroll down for more content">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
