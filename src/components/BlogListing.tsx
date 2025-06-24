// src/components/BlogListing.tsx

import { useState, useMemo } from "react";
import { Search, Filter, Calendar, TrendingUp, Users, Bookmark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BlogPostCard from "@/components/BlogPostCard";
import { mockBlogPosts, blogCategories, getFeaturedPosts, getPostsByCategory, searchPosts, BlogPost } from "@/data/blogData";

const BlogListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("latest");

  const filteredAndSortedPosts = useMemo(() => {
    let posts = mockBlogPosts;

    // Apply search filter
    if (searchQuery.trim()) {
      posts = searchPosts(searchQuery);
    }

    // Apply category filter
    if (selectedCategory !== "all") {
      posts = getPostsByCategory(selectedCategory);
    }

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
  }, [searchQuery, selectedCategory, sortBy]);

  const featuredPosts = getFeaturedPosts();

  const handlePostNavigation = (slug: string) => {
    // In a real application, this would use React Router
    window.location.href = `/blog/${slug}`;
  };

  const handleCategorySelect = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    setSearchQuery(""); // Clear search when selecting category
  };

  const totalPosts = filteredAndSortedPosts.length;
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-biosoft-gray/20 to-biosoft-blue-light/20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-biosoft-gray-dark to-biosoft-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-biosoft-blue-light to-biosoft-blue-lighter rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-biosoft-orange to-biosoft-yellow rounded-full blur-3xl animate-float animate-delay-400"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-biosoft-blue-light to-biosoft-blue-lighter rounded-full animate-pulse"></div>
              <span className="text-white font-semibold text-sm tracking-wide uppercase">Healthcare Insights & Innovation</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Biosoft Healthcare
              <span className="block bg-gradient-to-r from-biosoft-blue-light to-biosoft-blue-lighter bg-clip-text text-transparent">Blog & Resources</span>
            </h1>

            <p className="text-xl text-biosoft-gray max-w-4xl mx-auto leading-relaxed font-light mb-8">
              Stay informed with the latest healthcare technology insights, industry best practices, and success stories from healthcare providers worldwide.
            </p>

            {/* Blog Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{mockBlogPosts.length}+</div>
                <div className="text-biosoft-gray text-sm font-medium">Expert Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{blogCategories.length}</div>
                <div className="text-biosoft-gray text-sm font-medium">Topic Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-biosoft-gray text-sm font-medium">Healthcare Experts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50k+</div>
                <div className="text-biosoft-gray text-sm font-medium">Monthly Readers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-biosoft-orange to-biosoft-yellow flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-biosoft-gray-dark">Featured Articles</h2>
                <p className="text-biosoft-gray-medium">Our most popular and impactful content</p>
              </div>
            </div>

            <div className="space-y-8">
              {featuredPosts.map((post, index) => (
                <div key={post.id} className={`animate-fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <BlogPostCard post={post} featured={true} onReadMore={handlePostNavigation} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Search and Filter Section */}
        <section className="mb-12">
          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-4 gap-6">
                {/* Search */}
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-biosoft-gray-medium" />
                    <input
                      type="text"
                      placeholder="Search articles, topics, or keywords..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-biosoft-gray/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-biosoft-blue focus:border-transparent text-biosoft-gray-dark"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => handleCategorySelect(e.target.value)}
                    className="w-full px-4 py-3 border border-biosoft-gray/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-biosoft-blue focus:border-transparent text-biosoft-gray-dark bg-white"
                  >
                    <option value="all">All Categories</option>
                    {blogCategories.map((category) => (
                      <option key={category.id} value={category.slug}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 border border-biosoft-gray/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-biosoft-blue focus:border-transparent text-biosoft-gray-dark bg-white"
                  >
                    <option value="latest">Latest First</option>
                    <option value="popular">Most Popular</option>
                    <option value="readTime">Quick Reads</option>
                  </select>
                </div>
              </div>

              {/* Active Filters */}
              {(searchQuery || selectedCategory !== "all") && (
                <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-biosoft-gray/30">
                  <span className="text-sm font-medium text-biosoft-gray-dark">Active filters:</span>
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1 bg-biosoft-blue/10 text-biosoft-blue px-3 py-1 rounded-full text-sm font-medium">
                      Search: "{searchQuery}"
                      <button onClick={() => setSearchQuery("")} className="hover:text-biosoft-blue-light">
                        ×
                      </button>
                    </span>
                  )}
                  {selectedCategory !== "all" && (
                    <span className="inline-flex items-center gap-1 bg-biosoft-orange/10 text-biosoft-orange px-3 py-1 rounded-full text-sm font-medium">
                      Category: {blogCategories.find((cat) => cat.slug === selectedCategory)?.name}
                      <button onClick={() => setSelectedCategory("all")} className="hover:text-biosoft-orange-light">
                        ×
                      </button>
                    </span>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Category Quick Links */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-biosoft-green to-biosoft-orange-light flex items-center justify-center">
              <Filter className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-biosoft-gray-dark">Browse by Category</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {blogCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category.slug)}
                className={`text-left p-4 rounded-xl transition-all duration-300 border hover:shadow-lg group ${
                  selectedCategory === category.slug
                    ? "bg-gradient-to-r from-biosoft-blue/10 to-biosoft-blue-light/10 border-biosoft-blue/30"
                    : "bg-white border-biosoft-gray/30 hover:border-biosoft-blue/30"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Bookmark className="h-4 w-4 text-white" />
                </div>
                <h4 className="font-semibold text-biosoft-gray-dark group-hover:text-biosoft-blue transition-colors duration-300 mb-1">{category.name}</h4>
                <p className="text-sm text-biosoft-gray-medium line-clamp-2">{category.description}</p>
                <div className="text-xs text-biosoft-blue font-medium mt-2">{getPostsByCategory(category.slug).length} articles</div>
              </button>
            ))}
          </div>
        </section>

        {/* Results Header */}
        <section className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-biosoft-gray-dark mb-2">
                {searchQuery
                  ? `Search Results for "${searchQuery}"`
                  : selectedCategory !== "all"
                  ? `${blogCategories.find((cat) => cat.slug === selectedCategory)?.name} Articles`
                  : "All Articles"}
              </h2>
              <p className="text-biosoft-gray-medium">{totalPosts === 0 ? "No articles found" : totalPosts === 1 ? "1 article found" : `${totalPosts} articles found`}</p>
            </div>

            {totalPosts > 0 && (
              <div className="text-sm text-biosoft-gray-medium">Sorted by {sortBy === "latest" ? "Latest" : sortBy === "popular" ? "Most Popular" : "Read Time"}</div>
            )}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section>
          {totalPosts === 0 ? (
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-biosoft-gray to-biosoft-gray-medium flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-biosoft-gray-dark mb-4">No Articles Found</h3>
                <p className="text-biosoft-gray-medium mb-6 max-w-md mx-auto">
                  We could not find any articles matching your search criteria. Try adjusting your search terms or browsing our categories.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light hover:from-biosoft-blue hover:to-biosoft-blue text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                >
                  View All Articles
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredAndSortedPosts.map((post, index) => (
                <div key={post.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <BlogPostCard post={post} onReadMore={handlePostNavigation} />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter Subscription */}
        <section className="mt-20">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light text-white">
            <CardContent className="p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Stay Updated with Healthcare Innovation</h3>
                <p className="text-xl text-biosoft-gray mb-8">
                  Join thousands of healthcare professionals receiving our weekly insights on technology, best practices, and industry trends.
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
                <p className="text-sm text-biosoft-gray mt-4">
                  No spam, unsubscribe at any time. Read our{" "}
                  <a href="/privacy" className="underline hover:text-white">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default BlogListing;
