// src/components/BlogPostCard.tsx

import { Clock, User, Eye, ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BlogPost, blogCategories } from "@/data/blogData";

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
  onReadMore?: (slug: string) => void;
}

const BlogPostCard = ({ post, featured = false, onReadMore }: BlogPostCardProps) => {
  const category = blogCategories.find((cat) => cat.name === post.category);
  const categoryColor = category?.color || "from-biosoft-blue to-biosoft-blue-light";

  const handleReadMore = () => {
    if (onReadMore) {
      onReadMore(post.slug);
    } else {
      // Default navigation behavior
      window.location.href = `/blog/${post.slug}`;
    }
  };

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

  if (featured) {
    return (
      <Card className="group hover:shadow-2xl transition-all duration-700 border-0 shadow-lg hover-lift bg-white backdrop-blur-sm overflow-hidden">
        <CardContent className="p-0">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Featured Image */}
            <div className="relative overflow-hidden">
              <div className="aspect-[4/3] lg:aspect-square relative group-hover:scale-105 transition-transform duration-700">
                <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Category Badge */}
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${categoryColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>{post.category}</div>

                {/* Featured Badge */}
                <div className="absolute top-4 right-4 bg-biosoft-orange text-white px-3 py-1 rounded-full text-xs font-bold">FEATURED</div>

                {/* Read Time */}
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime} min read
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl lg:text-3xl font-black text-biosoft-gray-dark group-hover:text-biosoft-blue transition-colors duration-300 leading-tight mb-4">
                  {post.title}
                </h2>

                <p className="text-biosoft-gray-medium leading-relaxed group-hover:text-biosoft-gray-dark transition-colors duration-300 font-medium mb-6 text-lg">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="text-xs bg-biosoft-gray/30 text-biosoft-gray-dark px-2 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                {/* Author Info */}
                <div className="flex items-center gap-4 mb-6 border-t border-biosoft-gray/30 pt-6">
                  <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full object-cover border-2 border-biosoft-blue-light/30" />
                  <div className="flex-1">
                    <div className="font-semibold text-biosoft-gray-dark text-sm">{post.author.name}</div>
                    <div className="text-biosoft-gray-medium text-xs">{post.author.title}</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-biosoft-gray-medium text-xs mb-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(post.publishedAt)}
                    </div>
                    <div className="flex items-center gap-1 text-biosoft-gray-medium text-xs">
                      <Eye className="h-3 w-3" />
                      {formatViews(post.views)} views
                    </div>
                  </div>
                </div>

                {/* Read More Button */}
                <Button
                  onClick={handleReadMore}
                  className="w-full bg-gradient-to-r from-biosoft-blue to-biosoft-blue-light hover:from-biosoft-blue hover:to-biosoft-blue text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift font-semibold group/button"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="group hover:shadow-2xl transition-all duration-700 border-0 shadow-lg hover-lift bg-white backdrop-blur-sm overflow-hidden">
      <CardContent className="p-0">
        {/* Featured Image */}
        <div className="relative overflow-hidden">
          <div className="aspect-[16/9] relative group-hover:scale-105 transition-transform duration-700">
            <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

            {/* Category Badge */}
            <div className={`absolute top-4 left-4 bg-gradient-to-r ${categoryColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>{post.category}</div>

            {/* Read Time */}
            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime} min read
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-biosoft-gray-dark group-hover:text-biosoft-blue transition-colors duration-300 leading-tight mb-3">{post.title}</h3>

          <p className="text-biosoft-gray-medium leading-relaxed group-hover:text-biosoft-gray-dark transition-colors duration-300 font-medium mb-4 line-clamp-3">{post.excerpt}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 2).map((tag, index) => (
              <span key={index} className="text-xs bg-biosoft-gray/30 text-biosoft-gray-dark px-2 py-1 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>

          {/* Author and Meta Info */}
          <div className="flex items-center justify-between border-t border-biosoft-gray/30 pt-4">
            <div className="flex items-center gap-3">
              <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full object-cover border-2 border-biosoft-blue-light/30" />
              <div>
                <div className="font-semibold text-biosoft-gray-dark text-sm">{post.author.name}</div>
                <div className="text-biosoft-gray-medium text-xs">{formatDate(post.publishedAt)}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-biosoft-gray-medium text-xs">
              <div className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                {formatViews(post.views)}
              </div>
              <Button
                onClick={handleReadMore}
                variant="ghost"
                size="sm"
                className="text-biosoft-blue hover:text-biosoft-blue-light hover:bg-biosoft-blue-light/10 p-1 h-auto font-semibold group/button"
              >
                Read More
                <ArrowRight className="ml-1 h-3 w-3 group-hover/button:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPostCard;
