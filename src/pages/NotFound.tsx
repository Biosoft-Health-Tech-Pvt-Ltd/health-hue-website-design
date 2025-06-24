import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Heart } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-biosoft-gray via-biosoft-gray/80 to-biosoft-blue-light/20">
      <div className="text-center max-w-2xl mx-auto px-6">
        {/* Biosoft Logo Icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light rounded-2xl shadow-2xl mb-8 animate-pulse-glow">
          <Heart className="h-12 w-12 text-white" />
        </div>

        {/* Error Code */}
        <h1 className="text-8xl md:text-9xl font-black text-biosoft-blue mb-6 tracking-tight">404</h1>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-biosoft-gray-dark mb-4">Page Not Found</h2>

        <p className="text-xl text-biosoft-gray-medium mb-8 leading-relaxed max-w-lg mx-auto">
          We apologize, but the page you are looking for does not exist or has been moved. Please verify the URL or return to our homepage to continue your healthcare journey.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light hover:from-biosoft-blue hover:to-biosoft-blue text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
          >
            <Home className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            Return to Homepage
          </a>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-3 bg-white border-2 border-biosoft-blue text-biosoft-blue hover:bg-biosoft-blue hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            Go Back
          </button>
        </div>

        {/* Additional Help Text */}
        <div className="mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-biosoft-blue/20">
          <p className="text-biosoft-gray-dark font-medium">
            Need assistance? Contact our support team at{" "}
            <a href="tel:+1-800-BIOSOFT" className="text-biosoft-blue hover:text-biosoft-blue-light font-bold transition-colors duration-200">
              1-800-BIOSOFT
            </a>{" "}
            or{" "}
            <a href="mailto:support@biosoft-healthcare.com" className="text-biosoft-blue hover:text-biosoft-blue-light font-bold transition-colors duration-200">
              support@biosoft-healthcare.com
            </a>
          </p>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-biosoft-blue-light/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-biosoft-orange/10 rounded-full blur-3xl animate-float animate-delay-400"></div>
      </div>
    </div>
  );
};

export default NotFound;
