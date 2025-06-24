import { ArrowRight, Play, ChevronLeft, ChevronRight, Sparkles, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [thumbnailError, setThumbnailError] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);

  const handleVideoClick = () => {
    setIsVideoLoading(true);
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
    setIsVideoLoading(false);
  };

  // Close video with escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showVideo) {
        handleCloseVideo();
      }
    };

    if (showVideo) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [showVideo]);

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-biosoft-gray-dark" role="banner">
      {/* Enhanced Background with Orange Theme */}
      <div className="absolute inset-0">
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Floating geometric shapes with orange theme */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-biosoft-orange/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-biosoft-orange-light/20 rounded-full blur-3xl animate-float animate-delay-400"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-biosoft-yellow/20 rounded-full blur-2xl animate-float animate-delay-200"></div>

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

      <div className="container mx-auto px-4 relative z-20 pt-20">
        <div className="max-w-7xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="text-center min-h-[80vh] flex flex-col justify-center relative">
                    {slide.type === "main" && (
                      <>
                        {/* Enhanced Glass morphism card container with better contrast */}
                        <div className="relative bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl mx-auto max-w-5xl mx-4 sm:mx-auto">
                          <div className="absolute inset-0 bg-white/10 rounded-2xl sm:rounded-3xl"></div>

                          <div className="relative z-10">
                            {/* Trust badge with orange theme */}
                            <div className="inline-flex items-center gap-2 sm:gap-3 bg-black/30 backdrop-blur-sm border border-white/30 rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mb-6 sm:mb-8 md:mb-12">
                              <Shield className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                              <span className="text-white font-semibold text-xs sm:text-xs md:text-sm tracking-wide uppercase">Trusted by 500+ Healthcare Providers</span>
                              <Sparkles className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 text-biosoft-yellow animate-pulse" />
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black text-white mb-4 md:mb-6 lg:mb-8 leading-tight tracking-tight">
                              <span className="text-white drop-shadow-lg">Healthcare Made</span>
                              <span className="block text-biosoft-orange mt-1 md:mt-2 drop-shadow-lg">Simple</span>
                            </h1>

                            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-4xl mx-auto mb-4 md:mb-6 lg:mb-8 leading-relaxed font-medium drop-shadow-md px-4 sm:px-0">
                              {slide.subtitle}
                            </p>
                            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 max-w-3xl mx-auto mb-6 md:mb-8 lg:mb-12 font-normal drop-shadow-sm px-4 sm:px-0">
                              {slide.description}
                            </p>

                            {/* Feature highlights with orange theme */}
                            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-6 mb-6 md:mb-8 lg:mb-12 px-4 sm:px-0">
                              <div className="flex items-center gap-1.5 sm:gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 border border-white/20">
                                <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-biosoft-yellow" />
                                <span className="text-white text-xs sm:text-xs md:text-sm font-medium">40% Faster</span>
                              </div>
                              <div className="flex items-center gap-1.5 sm:gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 border border-white/20">
                                <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-biosoft-green" />
                                <span className="text-white text-xs sm:text-xs md:text-sm font-medium">HIPAA Compliant</span>
                              </div>
                              <div className="flex items-center gap-1.5 sm:gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 border border-white/20">
                                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-biosoft-orange-light" />
                                <span className="text-white text-xs sm:text-xs md:text-sm font-medium">99.9% Uptime</span>
                              </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 px-4 sm:px-0">
                              <button className="w-full sm:w-auto group relative bg-biosoft-orange hover:bg-biosoft-orange-light text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 rounded-2xl shadow-2xl hover:shadow-biosoft-orange/25 transition-all duration-500 text-sm sm:text-base md:text-lg font-bold overflow-hidden hover:scale-105 hover:-translate-y-1">
                                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <span className="relative flex items-center justify-center whitespace-nowrap">
                                  Start Free Trial
                                  <ArrowRight className="ml-2 md:ml-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                              </button>

                              <button
                                onClick={handleVideoClick}
                                className="w-full sm:w-auto group relative bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 rounded-2xl transition-all duration-300 text-sm sm:text-base md:text-lg font-bold overflow-hidden hover:scale-105 hover:-translate-y-1"
                              >
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <span className="relative flex items-center justify-center whitespace-nowrap">
                                  <Play className="mr-2 md:mr-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform duration-300" />
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
                        <div className="relative bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl mx-auto max-w-7xl mx-4 sm:mx-auto">
                          <div className="absolute inset-0 bg-biosoft-orange/10 rounded-2xl sm:rounded-3xl"></div>

                          <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 sm:gap-3 bg-black/30 backdrop-blur-sm border border-white/30 rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mb-6 sm:mb-8 md:mb-12">
                              <Play className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-biosoft-orange" />
                              <span className="text-white font-semibold text-xs sm:text-xs md:text-sm tracking-wide uppercase">Platform Demo</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight">
                              <span className="text-white drop-shadow-lg">See Biosoft in</span>
                              <span className="block text-biosoft-orange mt-1 md:mt-2 drop-shadow-lg">Action</span>
                            </h2>

                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12 leading-relaxed font-medium drop-shadow-md px-4 sm:px-0">
                              {slide.subtitle}
                            </p>

                            {/* Significantly larger video preview container */}
                            <div className="max-w-6xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
                              <div
                                className="relative w-full bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl group cursor-pointer border border-white/20"
                                style={{ aspectRatio: "16/9", minHeight: "400px" }}
                                onClick={handleVideoClick}
                              >
                                {!thumbnailError ? (
                                  <img
                                    src={`https://img.youtube.com/vi/${slide.videoId}/maxresdefault.jpg`}
                                    alt="Biosoft Healthcare Platform Demo"
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
                                    onError={() => setThumbnailError(true)}
                                    loading="lazy"
                                  />
                                ) : (
                                  <div className="w-full h-full bg-biosoft-orange/30 flex items-center justify-center">
                                    <div className="text-center">
                                      <Play className="h-20 w-20 md:h-28 md:w-28 text-white/80 mx-auto mb-6" />
                                      <p className="text-white/90 text-xl md:text-2xl font-semibold">Biosoft Platform Demo</p>
                                      <p className="text-white/70 text-lg md:text-xl mt-3">Click to watch</p>
                                    </div>
                                  </div>
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-500 border-2 border-white/40">
                                    <Play className="h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
                                  </div>
                                </div>

                                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 bg-black/70 backdrop-blur-sm text-white px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium border border-white/20">
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
                        <div className="relative bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl mx-auto max-w-6xl mx-4 sm:mx-auto">
                          <div className="absolute inset-0 bg-biosoft-orange/10 rounded-2xl sm:rounded-3xl"></div>

                          <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 sm:gap-3 bg-black/30 backdrop-blur-sm border border-white/30 rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mb-6 sm:mb-8 md:mb-12">
                              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-biosoft-orange" />
                              <span className="text-white font-semibold text-xs sm:text-xs md:text-sm tracking-wide uppercase">Proven Results</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight">
                              <span className="text-white drop-shadow-lg">Trusted</span>
                              <span className="block text-biosoft-orange mt-1 md:mt-2 drop-shadow-lg">Worldwide</span>
                            </h2>

                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12 leading-relaxed font-medium drop-shadow-md px-4 sm:px-0">
                              {slide.subtitle}
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8 max-w-5xl mx-auto mb-6 sm:mb-8 md:mb-12 px-4 sm:px-0">
                              {slide.stats?.map((stat, statIndex) => (
                                <div
                                  key={statIndex}
                                  className="text-center bg-black/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-8 border border-white/20 hover:bg-black/40 transition-all duration-300"
                                >
                                  <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-white mb-1 sm:mb-2 md:mb-3 drop-shadow-lg">{stat.value}</div>
                                  <div className="text-xs sm:text-xs md:text-sm text-white/80 font-medium uppercase tracking-wider">{stat.label}</div>
                                </div>
                              ))}
                            </div>

                            <div className="px-4 sm:px-0">
                              <button className="w-full sm:w-auto group relative bg-biosoft-orange hover:bg-biosoft-orange-light text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 rounded-2xl shadow-2xl hover:shadow-biosoft-orange/25 transition-all duration-500 text-sm sm:text-base md:text-lg font-bold overflow-hidden hover:scale-105 hover:-translate-y-1">
                                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <span className="relative flex items-center justify-center whitespace-nowrap">
                                  Join Our Network
                                  <ArrowRight className="ml-2 md:ml-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 md:left-8 bg-black/30 hover:bg-black/50 backdrop-blur-sm border-white/30 hover:border-white/50 text-white" />
            <CarouselNext className="right-4 md:right-8 bg-black/30 hover:bg-black/50 backdrop-blur-sm border-white/30 hover:border-white/50 text-white" />
          </Carousel>
        </div>
      </div>

      {/* Enhanced Video Modal with Improved Responsiveness */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-[60] p-2 sm:p-4" onClick={handleCloseVideo}>
          {isVideoLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            </div>
          )}

          <div className="relative w-full max-w-7xl mx-auto" style={{ aspectRatio: "16/9" }} onClick={(e) => e.stopPropagation()}>
            {/* Close button with better positioning */}
            <button
              onClick={handleCloseVideo}
              className="absolute -top-8 sm:-top-12 md:-top-16 right-0 text-white/80 hover:text-white transition-colors text-lg md:text-xl font-bold bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/20 hover:border-white/40 z-10"
              aria-label="Close video"
            >
              ✕
            </button>

            {/* Enhanced iframe with better error handling */}
            <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <iframe
                src="https://www.youtube.com/embed/JHpFFxnHtzc?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1&fs=1&cc_load_policy=0&iv_load_policy=3"
                title="Biosoft Healthcare Platform Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
                onLoad={() => setIsVideoLoading(false)}
              ></iframe>
            </div>

            {/* Video information overlay */}
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-black/70 backdrop-blur-sm text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg border border-white/20">
              <p className="text-xs sm:text-sm font-medium">Biosoft Healthcare Platform Demo</p>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-label="Scroll down for more content">
        <div className="w-6 h-10 md:w-8 md:h-12 border-2 border-white/50 rounded-full flex justify-center bg-black/20 backdrop-blur-sm">
          <div className="w-1 h-3 md:w-1.5 md:h-4 bg-white/70 rounded-full mt-2 md:mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
