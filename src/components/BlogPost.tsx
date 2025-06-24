// src/components/BlogPost.tsx

import { useState, useEffect } from "react";
import { ArrowLeft, Clock, User, Eye, Calendar, Share2, Bookmark, Twitter, Linkedin, Facebook, Link } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BlogPostCard from "@/components/BlogPostCard";
import { BlogPost, getPostBySlug, getRelatedPosts, blogCategories } from "@/data/blogData";

interface BlogPostProps {
  slug: string;
}

const BlogPostComponent = ({ slug }: BlogPostProps) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const foundPost = getPostBySlug(slug);
    if (foundPost) {
      setPost(foundPost);
      setRelatedPosts(getRelatedPosts(foundPost, 3));
    }
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-biosoft-gray/20 to-biosoft-blue-light/20 flex items-center justify-center">
        <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-biosoft-gray to-biosoft-gray-medium flex items-center justify-center mx-auto mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-biosoft-gray-dark mb-4">Article Not Found</h2>
            <p className="text-biosoft-gray-medium mb-6">The requested article could not be found. It may have been moved or removed.</p>
            <Button
              onClick={() => (window.location.href = "/blog")}
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

  const category = blogCategories.find((cat) => cat.name === post.category);
  const categoryColor = category?.color || "from-biosoft-blue to-biosoft-blue-light";

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatViews = (views?: number) => {
    if (!views) return "0";
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  const shareArticle = (platform: string) => {
    const url = window.location.href;
    const title = post.title;

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    };

    if (platform === "copy") {
      navigator.clipboard.writeText(url);
      // In a real app, you'd show a success message
      return;
    }

    const shareUrl = shareUrls[platform as keyof typeof shareUrls];
    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  const handleBackToBlog = () => {
    window.location.href = "/blog";
  };

  const handleRelatedPostClick = (slug: string) => {
    window.location.href = `/blog/${slug}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-biosoft-gray/20 to-biosoft-blue-light/20">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="h-1 bg-biosoft-gray/30">
          <div className="h-full bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light transition-all duration-300" style={{ width: `${readingProgress}%` }} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
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
              Back to Blog
            </Button>

            {/* Article Metadata */}
            <div className="mb-8">
              <div className={`inline-block bg-gradient-to-r ${categoryColor} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4`}>{post.category}</div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">{post.title}</h1>

              <p className="text-xl text-biosoft-gray mb-8 leading-relaxed">{post.excerpt}</p>

              {/* Author and Meta Information */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-center gap-4">
                  <img src={post.author.avatar} alt={post.author.name} className="w-16 h-16 rounded-full object-cover border-4 border-white/30" />
                  <div>
                    <div className="font-bold text-white text-lg">{post.author.name}</div>
                    <div className="text-biosoft-gray">{post.author.title}</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-biosoft-gray">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    {formatDate(post.publishedAt)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    {post.readTime} min read
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    {formatViews(post.views)} views
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Article Content */}
          <article className="mb-16">
            <Card className="border-0 shadow-lg bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-biosoft-gray/30">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="bg-biosoft-gray/20 text-biosoft-gray-dark px-3 py-1 rounded-full text-sm font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Article Body */}
                <div
                  className="prose prose-lg max-w-none text-biosoft-gray-dark leading-relaxed"
                  style={{
                    lineHeight: "1.8",
                  }}
                >
                  {/* Convert markdown-like content to HTML-like rendering */}
                  {post.content.split("\n").map((paragraph, index) => {
                    if (paragraph.startsWith("#")) {
                      const level = paragraph.match(/^#+/)?.[0].length || 1;
                      const text = paragraph.replace(/^#+\s/, "");
                      const HeadingTag = `h${Math.min(level, 6)}` as keyof JSX.IntrinsicElements;

                      return (
                        <HeadingTag
                          key={index}
                          className={`font-bold text-biosoft-gray-dark mb-4 mt-8 ${level === 1 ? "text-3xl" : level === 2 ? "text-2xl" : level === 3 ? "text-xl" : "text-lg"}`}
                        >
                          {text}
                        </HeadingTag>
                      );
                    }

                    if (paragraph.startsWith("###")) {
                      return (
                        <h3 key={index} className="text-xl font-bold text-biosoft-gray-dark mb-4 mt-6">
                          {paragraph.replace(/^###\s/, "")}
                        </h3>
                      );
                    }

                    if (paragraph.startsWith("- ")) {
                      return (
                        <li key={index} className="mb-2 ml-4">
                          {paragraph.replace(/^-\s/, "")}
                        </li>
                      );
                    }

                    if (paragraph.trim() === "") {
                      return <div key={index} className="mb-4" />;
                    }

                    return (
                      <p key={index} className="mb-6 text-biosoft-gray-dark leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                {/* Author Bio */}
                <div className="mt-16 pt-8 border-t border-biosoft-gray/30">
                  <div className="flex items-start gap-6">
                    <img src={post.author.avatar} alt={post.author.name} className="w-20 h-20 rounded-full object-cover border-4 border-biosoft-blue-light/30" />
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-biosoft-gray-dark mb-2">About {post.author.name}</h4>
                      <p className="text-biosoft-gray-medium mb-4">{post.author.bio}</p>
                      <div className="text-sm text-biosoft-blue font-semibold">{post.author.title}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </article>

          {/* Share and Actions */}
          <Card className="border-0 shadow-lg bg-white/95 backdrop-blur-sm mb-16">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-bold text-biosoft-gray-dark mb-2">Share this article</h3>
                  <p className="text-biosoft-gray-medium">Help others discover valuable healthcare insights</p>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    onClick={() => shareArticle("twitter")}
                    variant="outline"
                    size="sm"
                    className="border-biosoft-blue text-biosoft-blue hover:bg-biosoft-blue hover:text-white"
                  >
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                  <Button
                    onClick={() => shareArticle("linkedin")}
                    variant="outline"
                    size="sm"
                    className="border-biosoft-blue text-biosoft-blue hover:bg-biosoft-blue hover:text-white"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button
                    onClick={() => shareArticle("facebook")}
                    variant="outline"
                    size="sm"
                    className="border-biosoft-blue text-biosoft-blue hover:bg-biosoft-blue hover:text-white"
                  >
                    <Facebook className="h-4 w-4 mr-2" />
                    Facebook
                  </Button>
                  <Button
                    onClick={() => shareArticle("copy")}
                    variant="outline"
                    size="sm"
                    className="border-biosoft-gray-medium text-biosoft-gray-dark hover:bg-biosoft-gray-dark hover:text-white"
                  >
                    <Link className="h-4 w-4 mr-2" />
                    Copy Link
                  </Button>
                  <Button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    variant="outline"
                    size="sm"
                    className={`${
                      isBookmarked
                        ? "border-biosoft-orange text-biosoft-orange bg-biosoft-orange/10"
                        : "border-biosoft-gray-medium text-biosoft-gray-dark hover:bg-biosoft-orange/10 hover:text-biosoft-orange hover:border-biosoft-orange"
                    }`}
                  >
                    <Bookmark className={`h-4 w-4 mr-2 ${isBookmarked ? "fill-current" : ""}`} />
                    {isBookmarked ? "Saved" : "Save"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <section>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-biosoft-gray-dark mb-4">Related Articles</h2>
                <p className="text-biosoft-gray-medium max-w-2xl mx-auto">Continue exploring healthcare technology insights with these related articles</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <div key={relatedPost.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <BlogPostCard post={relatedPost} onReadMore={handleRelatedPostClick} />
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button
                  onClick={handleBackToBlog}
                  className="bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light hover:from-biosoft-blue hover:to-biosoft-blue text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-8 py-3"
                >
                  View All Articles
                </Button>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostComponent;
