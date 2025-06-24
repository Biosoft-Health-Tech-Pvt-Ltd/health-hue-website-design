import { ArrowRight, Play, ChevronLeft, ChevronRight, Sparkles, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoClick = () => {
    setShowVideo(true);
  };

  const slides = [
    {
      type: "main",
      title: "Healthcare Made Simple",
      subtitle: "Streamline your healthcare operations with our comprehensive software platform.",
      description: "Improve patient care, reduce costs, and enhance efficiency with industry-leading technology.",
    },
    {
      type: "video",
      title: "See Biosoft in Action",
      subtitle: "Watch how healthcare providers are transforming patient care",
      videoUrl: "https://youtu.be/JHpFFxnHtzc?si=o9Gfr1gu5gA9_ipJ",
      videoId: "JHpFFxnHtzc",
    },
    {
      type: "stats",
      title: "Trusted Worldwide",
      subtitle: "Join 500+ healthcare providers who trust Biosoft",
      stats: [
        { value: "500+", label: "Providers" },
        { value: "99.9%", label: "Uptime" },
        { value: "24/7", label: "Support" },
        { value: "HIPAA", label: "Compliant" },
      ],
    },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-biosoft-gray-dark via-biosoft-blue to-biosoft-blue-light"
      role="banner"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-biosoft-blue-light/20 to-biosoft-blue-lighter/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-biosoft-orange/20 to-biosoft-yellow/20 rounded-full blur-3xl animate-float animate-delay-400"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-biosoft-green/20 to-biosoft-orange-light/20 rounded-full blur-2xl animate-float animate-delay-200"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-7xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="text-center min-h-[80vh] flex flex-col justify-center relative">
                    {slide.type === "main" && (
                      <>
                        {/* Glass morphism card container */}
                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl mx-auto max-w-5xl">
                          <div className="absolute inset-0 bg-gradient-to-r from-biosoft-blue-light/5 to-biosoft-blue/5 rounded-3xl"></div>

                          <div className="relative z-10">
                            {/* Trust badge with icon */}
                            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 mb-12">
                              <Shield className="w-5 h-5 text-biosoft-blue-lighter" />
                              <span className="text-biosoft-gray font-semibold text-sm tracking-wide uppercase">Trusted by 500+ Healthcare Providers</span>
                              <Sparkles className="w-4 h-4 text-biosoft-yellow animate-pulse" />
                            </div>

                            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
                              <span className="bg-gradient-to-r from-white via-biosoft-gray to-biosoft-gray bg-clip-text text-transparent">Healthcare Made</span>
                              <span className="block bg-gradient-to-r from-biosoft-blue-light via-biosoft-blue-lighter to-biosoft-blue bg-clip-text text-transparent mt-2">
                                Simple
                              </span>
                            </h1>

                            <p className="text-2xl md:text-3xl text-biosoft-gray max-w-4xl mx-auto mb-8 leading-relaxed font-light">{slide.subtitle}</p>
                            <p className="text-lg text-biosoft-gray-medium max-w-3xl mx-auto mb-12 font-medium">{slide.description}</p>

                            {/* Feature highlights */}
                            <div className="flex flex-wrap justify-center gap-6 mb-12">
                              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
                                <Zap className="w-4 h-4 text-biosoft-yellow" />
                                <span className="text-white text-sm font-medium">40% Faster Operations</span>
                              </div>
                              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
                                <Shield className="w-4 h-4 text-biosoft-green" />
                                <span className="text-white text-sm font-medium">HIPAA Compliant</span>
                              </div>
                              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
                                <Sparkles className="w-4 h-4 text-biosoft-blue-light" />
                                <span className="text-white text-sm font-medium">99.9% Uptime</span>
                              </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                              <button className="group relative bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light hover:from-biosoft-blue hover:to-biosoft-blue text-white px-12 py-5 rounded-2xl shadow-2xl hover:shadow-biosoft-blue/25 transition-all duration-500 text-lg font-bold overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <span className="relative flex items-center">
                                  Start Free Trial
                                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                              </button>

                              <button
                                onClick={handleVideoClick}
                                className="group relative bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 text-white px-12 py-5 rounded-2xl transition-all duration-300 text-lg font-bold overflow-hidden"
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-biosoft-blue-light/10 to-biosoft-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <span className="relative flex items-center">
                                  <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                                  Watch Demo
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {slide.type === "video" && (
                      <>
                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl mx-auto max-w-6xl">
                          <div className="absolute inset-0 bg-gradient-to-r from-biosoft-orange/5 to-biosoft-yellow/5 rounded-3xl"></div>

                          <div className="relative z-10">
                            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 mb-12">
                              <Play className="w-5 h-5 text-biosoft-orange" />
                              <span className="text-biosoft-orange-light font-semibold text-sm tracking-wide uppercase">Platform Demo</span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
                              <span className="bg-gradient-to-r from-white to-biosoft-orange-light bg-clip-text text-transparent">See Biosoft in</span>
                              <span className="block bg-gradient-to-r from-biosoft-orange to-biosoft-yellow bg-clip-text text-transparent mt-2">Action</span>
                            </h2>

                            <p className="text-xl text-biosoft-gray max-w-3xl mx-auto mb-12 leading-relaxed font-light">{slide.subtitle}</p>

                            <div className="max-w-5xl mx-auto mb-8">
                              <div
                                className="relative aspect-video bg-gradient-to-br from-biosoft-orange/20 to-biosoft-yellow/20 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl group cursor-pointer border border-white/10"
                                onClick={handleVideoClick}
                              >
                                <img
                                  src={`https://img.youtube.com/vi/${slide.videoId}/maxresdefault.jpg`}
                                  alt="Biosoft Healthcare Platform Demo"
                                  className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-500 border-2 border-white/40">
                                    <Play className="h-10 w-10 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
                                  </div>
                                </div>

                                <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                                  3:00
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {slide.type === "stats" && (
                      <>
                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl mx-auto max-w-6xl">
                          <div className="absolute inset-0 bg-gradient-to-r from-biosoft-green/5 to-biosoft-orange-light/5 rounded-3xl"></div>

                          <div className="relative z-10">
                            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 mb-12">
                              <Sparkles className="w-5 h-5 text-biosoft-green" />
                              <span className="text-biosoft-green font-semibold text-sm tracking-wide uppercase">Proven Results</span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
                              <span className="bg-gradient-to-r from-white to-biosoft-green bg-clip-text text-transparent">Trusted</span>
                              <span className="block bg-gradient-to-r from-biosoft-green to-biosoft-orange-light bg-clip-text text-transparent mt-2">Worldwide</span>
                            </h2>

                            <p className="text-xl text-biosoft-gray max-w-3xl mx-auto mb-12 leading-relaxed font-light">{slide.subtitle}</p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
                              {slide.stats?.map((stat, statIndex) => (
                                <div
                                  key={statIndex}
                                  className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
                                >
                                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white to-biosoft-gray bg-clip-text text-transparent mb-3">{stat.value}</div>
                                  <div className="text-sm text-biosoft-gray font-medium uppercase tracking-wider">{stat.label}</div>
                                </div>
                              ))}
                            </div>

                            <button className="group relative bg-gradient-to-r from-biosoft-green to-biosoft-orange-light hover:from-biosoft-green hover:to-biosoft-orange text-white px-12 py-5 rounded-2xl shadow-2xl hover:shadow-biosoft-green/25 transition-all duration-500 text-lg font-bold overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <span className="relative flex items-center">
                                Join Our Network
                                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                              </span>
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20 hover:border-white/40 text-white" />
            <CarouselNext className="right-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20 hover:border-white/40 text-white" />
          </Carousel>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowVideo(false)}>
          <div className="relative w-full max-w-6xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-16 right-0 text-white/80 hover:text-white transition-colors text-xl font-bold bg-white/10 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center border border-white/20"
            >
              ✕
            </button>
            <iframe
              src="https://www.youtube.com/embed/JHpFFxnHtzc?autoplay=1&rel=0"
              title="Biosoft Healthcare Platform Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-2xl shadow-2xl border border-white/20"
            ></iframe>
          </div>
        </div>
      )}

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-label="Scroll down for more content">
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center bg-white/5 backdrop-blur-sm">
          <div className="w-1.5 h-4 bg-white/60 rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
