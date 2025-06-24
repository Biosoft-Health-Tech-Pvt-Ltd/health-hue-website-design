
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
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
      type: 'main',
      title: 'Healthcare Made Simple',
      subtitle: 'Streamline your healthcare operations with our comprehensive software platform.',
      description: 'Improve patient care, reduce costs, and enhance efficiency with industry-leading technology.',
    },
    {
      type: 'video',
      title: 'See Biosoft in Action',
      subtitle: 'Watch how healthcare providers are transforming patient care',
      videoUrl: 'https://youtu.be/JHpFFxnHtzc?si=o9Gfr1gu5gA9_ipJ',
      videoId: 'JHpFFxnHtzc',
    },
    {
      type: 'stats',
      title: 'Trusted Worldwide',
      subtitle: 'Join 500+ healthcare providers who trust Biosoft',
      stats: [
        { value: '500+', label: 'Providers' },
        { value: '99.9%', label: 'Uptime' },
        { value: '24/7', label: 'Support' },
        { value: 'HIPAA', label: 'Compliant' }
      ]
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50" role="banner">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full blur-3xl animate-float animate-delay-400"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full blur-2xl animate-float animate-delay-200"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="text-center min-h-[70vh] flex flex-col justify-center">
                    {slide.type === 'main' && (
                      <>
                        <div className="mb-8 animate-fade-in-up">
                          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full px-6 py-3 mb-8">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
                            <span className="text-blue-800 font-semibold text-sm tracking-wide uppercase">Trusted by 500+ Healthcare Providers</span>
                          </div>

                          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
                            {slide.title.split(' ').map((word, i) => 
                              i === slide.title.split(' ').length - 1 ? (
                                <span key={i} className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">{word}</span>
                              ) : (
                                <span key={i}>{word} </span>
                              )
                            )}
                          </h1>
                        </div>

                        <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed font-light animate-fade-in-up animate-delay-200">
                          {slide.subtitle}
                          <span className="font-medium text-slate-700 block mt-2">{slide.description}</span>
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in-up animate-delay-400">
                          <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-lg font-semibold hover-lift">
                            Start Free Trial
                            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                          </button>

                          <button
                            onClick={handleVideoClick}
                            className="group border-2 border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 px-10 py-4 rounded-2xl backdrop-blur-sm bg-white/80 hover:bg-white/90 transition-all duration-300 text-lg font-semibold hover-lift"
                          >
                            <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                            Watch Demo
                          </button>
                        </div>
                      </>
                    )}

                    {slide.type === 'video' && (
                      <>
                        <div className="mb-8 animate-fade-in-up">
                          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 rounded-full px-6 py-3 mb-8">
                            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-pulse"></div>
                            <span className="text-orange-800 font-semibold text-sm tracking-wide uppercase">Platform Demo</span>
                          </div>

                          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
                            {slide.title.split(' ').slice(0, -1).join(' ')}
                            <span className="block bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                              {slide.title.split(' ').slice(-1)}
                            </span>
                          </h2>
                        </div>

                        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light animate-fade-in-up animate-delay-200">
                          {slide.subtitle}
                        </p>

                        <div className="max-w-4xl mx-auto mb-8 animate-fade-in-up animate-delay-400">
                          <div className="relative aspect-video bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer" onClick={handleVideoClick}>
                            <img
                              src={`https://img.youtube.com/vi/${slide.videoId}/maxresdefault.jpg`}
                              alt="Biosoft Healthcare Platform Demo"
                              className="w-full h-full object-cover opacity-90 group-hover:opacity-75 transition-opacity duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                            
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-500 border-2 border-white/40">
                                <Play className="h-8 w-8 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
                              </div>
                            </div>

                            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">3:00</div>
                          </div>
                        </div>
                      </>
                    )}

                    {slide.type === 'stats' && (
                      <>
                        <div className="mb-8 animate-fade-in-up">
                          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-full px-6 py-3 mb-8">
                            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
                            <span className="text-green-800 font-semibold text-sm tracking-wide uppercase">Proven Results</span>
                          </div>

                          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
                            {slide.title.split(' ')[0]}
                            <span className="block bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                              {slide.title.split(' ').slice(1).join(' ')}
                            </span>
                          </h2>
                        </div>

                        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light animate-fade-in-up animate-delay-200">
                          {slide.subtitle}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12 animate-fade-in-up animate-delay-400">
                          {slide.stats?.map((stat, statIndex) => (
                            <div key={statIndex} className="text-center">
                              <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">{stat.value}</div>
                              <div className="text-sm text-slate-600 font-medium uppercase tracking-wider">{stat.label}</div>
                            </div>
                          ))}
                        </div>

                        <div className="animate-fade-in-up animate-delay-600">
                          <button className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-lg font-semibold hover-lift">
                            Join Our Network
                            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300" />
            <CarouselNext className="right-4 bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300" />
          </Carousel>
        </div>
      </div>

      {/* Inline Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setShowVideo(false)}>
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
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
