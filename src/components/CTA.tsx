import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CTA = () => {
  const benefits = [
    "30-day free trial with full access",
    "No setup fees or hidden costs",
    "Dedicated onboarding specialist",
    "24/7 technical support included",
    "HIPAA compliance guaranteed",
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-biosoft-gray/30 via-biosoft-blue-light/20 to-biosoft-blue-lighter/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-5xl mx-auto border-0 shadow-2xl bg-gradient-to-br from-white via-biosoft-gray/20 to-white backdrop-blur-sm">
          <CardContent className="p-12 md:p-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-biosoft-blue-light/30 to-biosoft-blue-lighter/30 border border-biosoft-blue/20 rounded-full px-6 py-3 mb-8">
                <div className="w-2 h-2 bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light rounded-full animate-pulse"></div>
                <span className="text-biosoft-blue font-semibold text-sm tracking-wide uppercase">Ready to Get Started?</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-biosoft-gray-dark mb-6 leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light bg-clip-text text-transparent">Healthcare Practice</span>
              </h2>

              <p className="text-xl text-biosoft-gray-medium max-w-3xl mx-auto leading-relaxed font-light">
                Join hundreds of healthcare providers who have streamlined their operations and improved patient care with our comprehensive platform.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-biosoft-blue-light/10 transition-colors duration-300">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-biosoft-green" />
                    </div>
                    <span className="text-biosoft-gray-dark font-medium text-lg">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                <div className="text-center p-8 bg-gradient-to-br from-biosoft-blue-light/20 to-biosoft-blue-lighter/20 rounded-2xl border border-biosoft-blue/20">
                  <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light bg-clip-text text-transparent mb-3">$0</div>
                  <p className="text-biosoft-gray-medium font-medium text-lg">to get started today</p>
                </div>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full group bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light hover:from-biosoft-blue hover:to-biosoft-blue text-white py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-lg font-bold hover-lift"
                  >
                    Start Your Free Trial
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-biosoft-gray-medium hover:border-biosoft-blue text-biosoft-gray-dark hover:text-biosoft-blue hover:bg-biosoft-blue-light/10 py-6 rounded-2xl transition-all duration-300 text-lg font-semibold hover-lift"
                  >
                    Schedule a Demo
                  </Button>
                </div>

                <p className="text-sm text-biosoft-gray-medium text-center font-medium">No credit card required • Cancel anytime • HIPAA compliant</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
