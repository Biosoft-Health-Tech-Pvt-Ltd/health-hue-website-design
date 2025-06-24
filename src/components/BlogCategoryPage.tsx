// src/components/BlogCategoryPage.tsx

import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, Filter, Calendar, TrendingUp, BookOpen, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BlogPostCard from "@/components/BlogPostCard";
import BlogSEO from "@/components/BlogSEO";
import { blogCategories, getPostsByCategory, BlogPost } from "@/data/blogData";

const BlogCategoryPage = () => {
  const { category: categorySlug } = useParams<{ category: string }>();
  const [sortBy, setSortBy] = useState("latest");

  const category = blogCategories.find((cat) => cat.slug === categorySlug);
  const categoryPosts = useMemo(() => {
    if (!category) return [];

    let posts = getPostsByCategory(categorySlug || "");

    // Apply sorting
    switch (sortBy) {
      case "latest":
        posts = [...posts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        break;
      case "popular":
        posts = [...posts].sort((a, b) => (b.views || 0) - (a.views || 0));
        break;
      case "readTime":
        posts = [...posts].sort((a, b) => a.readTime - b.readTime);
        break;
      default:
        break;
    }

    return posts;
  }, [category, categorySlug, sortBy]);

  const handlePostNavigation = (slug: string) => {
    window.location.href = `/blog/${slug}`;
  };

  const handleBackToBlog = () => {
    window.location.href = "/blog";
  };

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-biosoft-gray/20 to-biosoft-blue-light/20 flex items-center justify-center">
        <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-biosoft-gray to-biosoft-gray-medium flex items-center justify-center mx-auto mb-6">
              <Filter className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-biosoft-gray-dark mb-4">Category Not Found</h2>
            <p className="text-biosoft-gray-medium mb-6">The requested blog category could not be found. It may have been moved or removed.</p>
            <Button
              onClick={handleBackToBlog}
              className="bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light hover:from-biosoft-blue hover:to-biosoft-blue text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const categoryIcon =
    {
      "Healthcare Technology": TrendingUp,
      "Practice Management": Users,
      "Patient Care": BookOpen,
      "Industry News": Calendar,
      "Case Studies": BookOpen,
    }[category.name] || BookOpen;

  const IconComponent = categoryIcon;

  return (
    <>
      <BlogSEO category={category.name} />
      <div className="min-h-screen bg-gradient-to-br from-white via-biosoft-gray/20 to-biosoft-blue-light/20">
        {/* Category Hero Section */}
        <section className="py-20 bg-gradient-to-r from-biosoft-gray-dark to-biosoft-blue relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-biosoft-blue-light to-biosoft-blue-lighter rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-biosoft-orange to-biosoft-yellow rounded-full blur-3xl animate-float animate-delay-400"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Button
                onClick={handleBackToBlog}
                variant="ghost"
                className="text-white hover:text-biosoft-blue-light hover:bg-white/10 mb-8 backdrop-blur-sm border border-white/20 rounded-xl"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Articles
              </Button>

              <div className="text-center">
                {/* Category Icon and Badge */}
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-2xl`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className={`bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-full text-sm font-bold tracking-wide uppercase`}>{category.name}</div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  {category.name}
                  <span className="block bg-gradient-to-r from-biosoft-blue-light to-biosoft-blue-lighter bg-clip-text text-transparent">Articles & Insights</span>
                </h1>

                <p className="text-xl text-biosoft-gray max-w-3xl mx-auto leading-relaxed font-light mb-8">{category.description}</p>

                {/* Category Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-2xl font-bold text-white mb-1">{categoryPosts.length}</div>
                    <div className="text-biosoft-gray text-sm font-medium">Articles</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-2xl font-bold text-white mb-1">{Math.round(categoryPosts.reduce((acc, post) => acc + post.readTime, 0) / categoryPosts.length) || 0}</div>
                    <div className="text-biosoft-gray text-sm font-medium">Avg Read Time</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 md:col-span-1 col-span-2">
                    <div className="text-2xl font-bold text-white mb-1">{categoryPosts.reduce((acc, post) => acc + (post.views || 0), 0).toLocaleString()}</div>
                    <div className="text-biosoft-gray text-sm font-medium">Total Views</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          {/* Sort and Filter Controls */}
          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm mb-12">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-biosoft-gray-dark mb-2">
                    {categoryPosts.length === 0 ? "No articles found" : categoryPosts.length === 1 ? "1 article" : `${categoryPosts.length} articles`} in {category.name}
                  </h2>
                  <p className="text-biosoft-gray-medium">Expert insights and practical guidance for healthcare professionals</p>
                </div>

                <div className="flex items-center gap-3">
                  <label className="text-sm font-medium text-biosoft-gray-dark">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-biosoft-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-biosoft-blue focus:border-transparent text-biosoft-gray-dark bg-white"
                  >
                    <option value="latest">Latest First</option>
                    <option value="popular">Most Popular</option>
                    <option value="readTime">Quick Reads</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Articles Grid */}
          {categoryPosts.length === 0 ? (
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-biosoft-gray to-biosoft-gray-medium flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-biosoft-gray-dark mb-4">No Articles Yet</h3>
                <p className="text-biosoft-gray-medium mb-6 max-w-md mx-auto">
                  We are working on adding more content to this category. Check back soon for new articles and insights.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button
                    onClick={handleBackToBlog}
                    className="bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light hover:from-biosoft-blue hover:to-biosoft-blue text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                  >
                    Browse All Articles
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-biosoft-gray-medium hover:border-biosoft-blue text-biosoft-gray-dark hover:text-biosoft-blue hover:bg-biosoft-blue-light/10 rounded-xl transition-all duration-300 font-semibold"
                    onClick={() => (window.location.href = "/contact")}
                  >
                    Suggest Topics
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {categoryPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="animate-fade-in-up opacity-0"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  <BlogPostCard post={post} onReadMore={handlePostNavigation} />
                </div>
              ))}
            </div>
          )}

          {/* Related Categories */}
          <section className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-biosoft-gray-dark mb-4">Explore Other Categories</h3>
              <p className="text-biosoft-gray-medium max-w-2xl mx-auto">Discover more healthcare insights across our comprehensive range of expert content</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {blogCategories
                .filter((cat) => cat.id !== category.id)
                .map((relatedCategory) => (
                  <button
                    key={relatedCategory.id}
                    onClick={() => (window.location.href = `/blog/category/${relatedCategory.slug}`)}
                    className="text-left p-6 rounded-xl transition-all duration-300 border border-biosoft-gray/30 hover:border-biosoft-blue/30 bg-white hover:shadow-lg group"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${relatedCategory.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-biosoft-gray-dark group-hover:text-biosoft-blue transition-colors duration-300 mb-2">{relatedCategory.name}</h4>
                    <p className="text-sm text-biosoft-gray-medium line-clamp-2 mb-3">{relatedCategory.description}</p>
                    <div className="text-xs text-biosoft-blue font-medium">{getPostsByCategory(relatedCategory.slug).length} articles</div>
                  </button>
                ))}
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="mt-20">
            <Card className="border-0 shadow-2xl bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light text-white">
              <CardContent className="p-12 text-center">
                <div className="max-w-3xl mx-auto">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Stay Updated on {category.name}</h3>
                  <p className="text-xl text-biosoft-gray mb-8">
                    Get the latest insights and best practices delivered directly to your inbox. Join healthcare professionals who rely on our expert analysis.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-3 rounded-xl text-biosoft-gray-dark focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    <Button className="bg-white text-biosoft-blue hover:bg-biosoft-gray rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-8 py-3 whitespace-nowrap">
                      Subscribe Now
                    </Button>
                  </div>
                  <p className="text-sm text-biosoft-gray mt-4">Weekly insights • No spam • Unsubscribe anytime</p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
};

export default BlogCategoryPage;
