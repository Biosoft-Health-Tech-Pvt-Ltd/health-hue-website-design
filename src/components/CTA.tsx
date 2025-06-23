
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CTA = () => {
  const benefits = [
    "30-day free trial with full access",
    "No setup fees or hidden costs",
    "Dedicated onboarding specialist",
    "24/7 technical support included",
    "HIPAA compliance guaranteed"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <div className="container mx-auto px-4">
        <Card className="max-w-5xl mx-auto border-0 shadow-2xl bg-gradient-to-br from-white via-slate-50/50 to-white backdrop-blur-sm">
          <CardContent className="p-12 md:p-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full px-6 py-3 mb-8">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
                <span className="text-blue-800 font-semibold text-sm tracking-wide uppercase">
                  Ready to Get Started?
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Healthcare Practice
                </span>
              </h2>
              
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                Join hundreds of healthcare providers who have streamlined their operations 
                and improved patient care with our comprehensive platform.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50/50 transition-colors duration-300">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-emerald-500" />
                    </div>
                    <span className="text-slate-700 font-medium text-lg">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                  <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                    $0
                  </div>
                  <p className="text-slate-600 font-medium text-lg">to get started today</p>
                </div>

                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-lg font-bold hover-lift"
                  >
                    Start Your Free Trial
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-2 border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 py-6 rounded-2xl transition-all duration-300 text-lg font-semibold hover-lift"
                  >
                    Schedule a Demo
                  </Button>
                </div>

                <p className="text-sm text-slate-500 text-center font-medium">
                  No credit card required • Cancel anytime • HIPAA compliant
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
