// src/components/HomepageBlog.tsx

import { ArrowRight, BookOpen, TrendingUp, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BlogPostCard from "@/components/BlogPostCard";
import { getFeaturedPosts } from "@/data/blogData";

const HomepageBlog = () => {
  const featuredPosts = getFeaturedPosts().slice(0, 3); // Show top 3 featured posts

  const handleViewAllBlog = () => {
    window.location.href = "/blog";
  };

  const handlePostNavigation = (slug: string) => {
    window.location.href = `/blog/${slug}`;
  };

  if (featuredPosts.length === 0) {
    return null; // Don't render if no featured posts
  }

  return (
    <section className="py-24 bg-gradient-to-br from-white via-biosoft-gray/20 to-biosoft-blue-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-biosoft-blue-light/30 to-biosoft-blue-lighter/30 border border-biosoft-blue/20 rounded-full px-6 py-3 mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light rounded-full animate-pulse"></div>
            <span className="text-biosoft-blue font-semibold text-sm tracking-wide uppercase">Healthcare Insights & Innovation</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-biosoft-gray-dark mb-6 animate-fade-in-up animate-delay-100">
            Latest Healthcare
            <span className="block bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light bg-clip-text text-transparent">Technology Insights</span>
          </h2>

          <p className="text-xl text-biosoft-gray-medium max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up animate-delay-200">
            Stay informed with expert analysis on healthcare technology trends, implementation strategies, and success stories from leading healthcare providers worldwide.
          </p>
        </div>

        {/* Featured Blog Posts */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredPosts.map((post, index) => (
            <div
              key={post.id}
              className="animate-scale-in opacity-0"
              style={{
                animationDelay: `${0.1 + index * 0.15}s`,
                animationFillMode: "forwards",
              }}
            >
              <BlogPostCard post={post} onReadMore={handlePostNavigation} />
            </div>
          ))}
        </div>

        {/* Blog Statistics and CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Blog Stats */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-2xl font-bold text-biosoft-gray-dark mb-6">Why Healthcare Professionals Read Our Blog</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light flex items-center justify-center shadow-lg flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-biosoft-gray-dark mb-2">Industry-Leading Insights</h4>
                    <p className="text-biosoft-gray-medium">
                      Access cutting-edge analysis on healthcare technology trends, regulatory changes, and best practices from industry experts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-biosoft-green to-biosoft-orange-light flex items-center justify-center shadow-lg flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-biosoft-gray-dark mb-2">Practical Implementation Guides</h4>
                    <p className="text-biosoft-gray-medium">Step-by-step guides and real-world case studies that help you successfully implement new technologies and processes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-biosoft-orange to-biosoft-yellow flex items-center justify-center shadow-lg flex-shrink-0">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-biosoft-gray-dark mb-2">Regular Updates</h4>
                    <p className="text-biosoft-gray-medium">Fresh content published weekly, keeping you informed about the latest developments in healthcare technology.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Metrics */}
            <div className="bg-gradient-to-r from-biosoft-gray/30 to-biosoft-blue-light/20 rounded-2xl p-8 border border-biosoft-gray-medium/30">
              <h4 className="font-bold text-biosoft-gray-dark mb-6">Our Impact</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-black text-biosoft-gray-dark mb-2">50k+</div>
                  <div className="text-sm text-biosoft-gray-medium font-medium">Monthly Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-biosoft-gray-dark mb-2">500+</div>
                  <div className="text-sm text-biosoft-gray-medium font-medium">Healthcare Organizations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-biosoft-gray-dark mb-2">95%</div>
                  <div className="text-sm text-biosoft-gray-medium font-medium">Find Content Valuable</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-biosoft-gray-dark mb-2">15+</div>
                  <div className="text-sm text-biosoft-gray-medium font-medium">Healthcare Experts</div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="animate-fade-in-right">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-biosoft-blue to-biosoft-blue-light text-white overflow-hidden relative">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
              </div>

              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Stay Ahead of Healthcare Innovation</h3>
                  <p className="text-biosoft-gray leading-relaxed">
                    Join thousands of healthcare professionals receiving weekly insights on technology trends, best practices, and industry developments.
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-xl text-biosoft-gray-dark focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/95 backdrop-blur-sm"
                  />
                  <Button className="w-full bg-white text-biosoft-blue hover:bg-biosoft-gray rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold py-3">
                    Subscribe to Healthcare Insights
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-sm text-biosoft-gray mb-4">✓ Weekly expert insights ✓ No spam, unsubscribe anytime ✓ 15,000+ subscribers</p>

                  <Button onClick={handleViewAllBlog} variant="ghost" className="text-white hover:text-biosoft-blue-light hover:bg-white/10 font-semibold group">
                    Explore All Articles
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* View All Blog CTA */}
        <div className="text-center mt-16 animate-fade-in-up animate-delay-600">
          <div className="bg-gradient-to-r from-biosoft-gray/30 to-biosoft-blue-light/20 rounded-2xl p-8 border border-biosoft-gray-medium/30">
            <h3 className="text-2xl font-bold text-biosoft-gray-dark mb-4">Ready to Dive Deeper?</h3>
            <p className="text-biosoft-gray-medium mb-6 max-w-3xl mx-auto leading-relaxed">
              Explore our complete collection of healthcare technology articles, case studies, and expert insights. From EHR implementation guides to digital transformation
              strategies, find the resources you need to advance your practice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={handleViewAllBlog}
                className="bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light hover:from-biosoft-blue hover:to-biosoft-blue text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift font-semibold px-8 py-3 group"
              >
                View All Blog Articles
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-biosoft-gray-medium hover:border-biosoft-blue text-biosoft-gray-dark hover:text-biosoft-blue hover:bg-biosoft-blue-light/10 rounded-xl transition-all duration-300 hover-lift font-semibold px-8 py-3"
                onClick={() => (window.location.href = "/blog/category/case-studies")}
              >
                Browse Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageBlog;
