import { Play, Users, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const highlights = [
    {
      icon: Users,
      text: "See how 500+ providers use Biosoft daily",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Award,
      text: "Award-winning healthcare technology",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: TrendingUp,
      text: "Discover the 40% efficiency improvement",
      color: "from-purple-500 to-violet-600",
    },
  ];

  const handleVideoClick = () => {
    setShowVideo(true);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full px-6 py-3 mb-8 animate-fade-in-up">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
              <span className="text-blue-800 font-semibold text-sm tracking-wide uppercase">See Biosoft in Action</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 animate-fade-in-up animate-delay-100">
              Experience the Future of
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Healthcare Technology</span>
            </h2>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up animate-delay-200">
              Watch how healthcare providers are transforming patient care and streamlining operations with our comprehensive platform. Discover the innovation that's
              revolutionizing healthcare delivery.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Thumbnail */}
            <div className="relative group animate-fade-in-left">
              <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 group-hover:scale-105">
                <CardContent className="p-0 relative">
                  <div className="aspect-video bg-gradient-to-br from-blue-600 to-indigo-600 relative overflow-hidden">
                    <img
                      src="https://img.youtube.com/vi/JHpFFxnHtzc/maxresdefault.jpg"
                      alt="Biosoft Healthcare Platform Demo"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-75 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                    {/* Play Button */}
                    <button onClick={handleVideoClick} className="absolute inset-0 flex items-center justify-center group/play" aria-label="Play Biosoft demo video">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover/play:bg-white/30 group-hover/play:scale-110 transition-all duration-500 border-2 border-white/40">
                        <Play className="h-8 w-8 text-white ml-1 group-hover/play:scale-110 transition-transform duration-300" />
                      </div>
                    </button>

                    {/* Video Duration Badge */}
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">Demo Video</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Video Highlights */}
            <div className="space-y-8 animate-fade-in-right">
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50/50 transition-colors duration-300">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${highlight.color} flex items-center justify-center shadow-lg`}>
                      <highlight.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium text-lg">{highlight.text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <button
                  onClick={handleVideoClick}
                  className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-lg font-semibold hover-lift inline-flex items-center gap-3"
                >
                  <Play className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  Watch Full Demo
                </button>

                <p className="text-sm text-slate-500 mt-4 font-medium">No registration required • 3-minute overview</p>
              </div>
            </div>
          </div>

          {/* Inline Video Modal */}
          {showVideo && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setShowVideo(false)}>
              <div className="relative w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setShowVideo(false)} className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors text-xl font-bold">
                  ✕ Close
                </button>
                <iframe
                  src="https://www.youtube.com/embed/JHpFFxnHtzc?autoplay=1&rel=0"
                  title="Biosoft Healthcare Platform Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-xl shadow-2xl"
                ></iframe>
              </div>
            </div>
          )}

          {/* Additional Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-slate-200">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-3xl font-bold text-slate-800 mb-2">3M+</div>
              <div className="text-sm text-slate-600 font-medium">Patient Records</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl font-bold text-slate-800 mb-2">15+</div>
              <div className="text-sm text-slate-600 font-medium">Countries</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-3xl font-bold text-slate-800 mb-2">98%</div>
              <div className="text-sm text-slate-600 font-medium">User Satisfaction</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl font-bold text-slate-800 mb-2">5★</div>
              <div className="text-sm text-slate-600 font-medium">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
