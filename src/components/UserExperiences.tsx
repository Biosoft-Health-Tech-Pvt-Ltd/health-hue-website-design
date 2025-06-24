import { Play, Users, Star, Calendar, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

// This component showcases real user experiences through video testimonials
// integrating the provided YouTube videos as professional case studies

const UserExperiences = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const userExperiences = [
    {
      id: "4LlIrLdu7PE",
      title: "Emergency Department Transformation",
      description: "Dr. Martinez shares how Biosoft reduced patient wait times by 40% in their emergency department.",
      category: "Emergency Care",
      duration: "4:32",
      userType: "Emergency Physician",
      userName: "Dr. Sarah Martinez",
      institution: "Metro General Hospital",
      thumbnail: "https://img.youtube.com/vi/4LlIrLdu7PE/maxresdefault.jpg",
      icon: Users,
      metrics: "40% faster patient processing",
    },
    {
      id: "bPzttnhdQrE",
      title: "Rural Healthcare Innovation",
      description: "How a small clinic improved patient care access through telemedicine integration with Biosoft.",
      category: "Telemedicine",
      duration: "3:45",
      userType: "Practice Manager",
      userName: "Jennifer Wilson",
      institution: "Valley Health Clinic",
      thumbnail: "https://img.youtube.com/vi/bPzttnhdQrE/maxresdefault.jpg",
      icon: Calendar,
      metrics: "300% increase in remote consultations",
    },
    {
      id: "27TUVrQGa0k",
      title: "Data Security Success Story",
      description: "Learn how Biosoft's HIPAA-compliant platform helped a large practice maintain perfect compliance.",
      category: "Security & Compliance",
      duration: "5:18",
      userType: "IT Director",
      userName: "Michael Chen",
      institution: "HealthFirst Medical Group",
      thumbnail: "https://img.youtube.com/vi/27TUVrQGa0k/maxresdefault.jpg",
      icon: Shield,
      metrics: "100% HIPAA compliance maintained",
    },
    {
      id: "wuHF8QXoiro",
      title: "Workflow Optimization Journey",
      description: "A comprehensive look at how Biosoft streamlined operations for a multi-location practice.",
      category: "Practice Management",
      duration: "6:22",
      userType: "Chief Medical Officer",
      userName: "Dr. Amanda Rodriguez",
      institution: "Riverside Medical Network",
      thumbnail: "https://img.youtube.com/vi/wuHF8QXoiro/maxresdefault.jpg",
      icon: TrendingUp,
      metrics: "50% reduction in administrative tasks",
    },
    {
      id: "cYVD59tuOLI",
      title: "Patient Portal Excellence",
      description: "Discover how patient engagement improved dramatically with Biosoft's patient portal features.",
      category: "Patient Engagement",
      duration: "4:01",
      userType: "Patient Experience Manager",
      userName: "Lisa Thompson",
      institution: "Community Health Partners",
      thumbnail: "https://img.youtube.com/vi/cYVD59tuOLI/maxresdefault.jpg",
      icon: Star,
      metrics: "85% patient satisfaction increase",
    },
    {
      id: "AvARNcMAVYM",
      title: "Analytics Transformation",
      description: "Real-world insights on how data analytics features helped improve clinical outcomes.",
      category: "Clinical Analytics",
      duration: "7:15",
      userType: "Quality Director",
      userName: "Dr. Robert Kim",
      institution: "Advanced Care Medical Center",
      thumbnail: "https://img.youtube.com/vi/AvARNcMAVYM/maxresdefault.jpg",
      icon: TrendingUp,
      metrics: "25% improvement in clinical outcomes",
    },
  ];

  const handleVideoClick = (videoId) => {
    setActiveVideo(videoId);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white via-biosoft-gray/20 to-biosoft-blue-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-biosoft-blue-light/30 to-biosoft-blue-lighter/30 border border-biosoft-blue/20 rounded-full px-6 py-3 mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light rounded-full animate-pulse"></div>
            <span className="text-biosoft-blue font-semibold text-sm tracking-wide uppercase">Real User Experiences</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-biosoft-gray-dark mb-6 animate-fade-in-up animate-delay-100">
            Healthcare Professionals
            <span className="block bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light bg-clip-text text-transparent">Share Their Success Stories</span>
          </h2>

          <p className="text-xl text-biosoft-gray-medium max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up animate-delay-200">
            Discover how healthcare providers across different specialties and settings have transformed their operations and improved patient care with Biosoft's comprehensive
            platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {userExperiences.map((experience, index) => (
            <Card
              key={experience.id}
              className={`group hover:shadow-2xl transition-all duration-700 border-0 shadow-lg hover-lift animate-scale-in opacity-0 bg-white backdrop-blur-sm overflow-hidden`}
              style={{
                animationDelay: `${0.1 + index * 0.1}s`,
                animationFillMode: "forwards",
              }}
            >
              <CardContent className="p-0">
                {/* Video Thumbnail */}
                <div className="relative overflow-hidden">
                  <div className="aspect-video relative group-hover:scale-105 transition-transform duration-700">
                    <img src={experience.thumbnail} alt={experience.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Play Button */}
                    <button
                      onClick={() => handleVideoClick(experience.id)}
                      className="absolute inset-0 flex items-center justify-center group/play"
                      aria-label={`Play ${experience.title}`}
                    >
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover/play:bg-white/30 group-hover/play:scale-110 transition-all duration-500 border-2 border-white/40">
                        <Play className="h-6 w-6 text-white ml-1 group-hover/play:scale-110 transition-transform duration-300" />
                      </div>
                    </button>

                    {/* Duration Badge */}
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">{experience.duration}</div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {experience.category}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <experience.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-biosoft-gray-dark group-hover:text-biosoft-blue transition-colors duration-300 leading-tight mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-biosoft-gray-medium text-sm leading-relaxed group-hover:text-biosoft-gray-dark transition-colors duration-300">{experience.description}</p>
                    </div>
                  </div>

                  {/* User Info */}
                  <div className="border-t border-biosoft-gray/30 pt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-biosoft-gray-dark text-sm">{experience.userName}</div>
                        <div className="text-biosoft-gray-medium text-xs">{experience.userType}</div>
                        <div className="text-biosoft-blue text-xs font-medium">{experience.institution}</div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="bg-gradient-to-r from-biosoft-green/10 to-biosoft-orange-light/10 rounded-lg p-3 border border-biosoft-green/20">
                      <div className="text-biosoft-green font-semibold text-sm">{experience.metrics}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up animate-delay-600">
          <div className="bg-gradient-to-r from-biosoft-blue-light/10 to-biosoft-blue-lighter/10 rounded-2xl p-8 border border-biosoft-blue/20">
            <h3 className="text-2xl font-bold text-biosoft-gray-dark mb-4">Ready to Join These Success Stories?</h3>
            <p className="text-biosoft-gray-medium mb-6 max-w-2xl mx-auto">
              Discover how Biosoft can transform your healthcare practice with the same proven results that our satisfied users have experienced.
            </p>
            <button className="bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light hover:from-biosoft-blue hover:to-biosoft-blue text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-lg font-semibold hover-lift">
              Schedule Your Demo Today
            </button>
          </div>
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeVideo}>
            <div className="relative w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
              <button onClick={closeVideo} className="absolute -top-12 right-0 text-white hover:text-biosoft-gray transition-colors text-xl font-bold z-10">
                ✕ Close
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                title="User Experience Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl shadow-2xl"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UserExperiences;
