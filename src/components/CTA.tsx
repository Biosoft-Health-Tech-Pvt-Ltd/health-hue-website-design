
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50">
          <CardContent className="p-12">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Healthcare Practice?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join hundreds of healthcare providers who have streamlined their operations 
                and improved patient care with Biosoft.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                    $0
                  </div>
                  <p className="text-gray-600">to get started today</p>
                </div>

                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    Start Your Free Trial
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 py-4 rounded-xl transition-all duration-300"
                  >
                    Schedule a Demo
                  </Button>
                </div>

                <p className="text-sm text-gray-500 text-center">
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
