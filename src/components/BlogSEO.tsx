// src/components/BlogSEO.tsx

import { BlogPost } from "@/data/blogData";
import { Helmet } from "react-helmet-async";

interface BlogSEOProps {
  post?: BlogPost;
  isListingPage?: boolean;
  category?: string;
  searchQuery?: string;
}

const BlogSEO = ({ post, isListingPage = false, category, searchQuery }: BlogSEOProps) => {
  // Generate metadata for individual blog posts
  if (post) {
    const postUrl = `https://biosoft-healthcare.com/blog/${post.slug}`;
    const publishedDate = new Date(post.publishedAt).toISOString();
    const modifiedDate = post.updatedAt ? new Date(post.updatedAt).toISOString() : publishedDate;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: [post.featuredImage],
      datePublished: publishedDate,
      dateModified: modifiedDate,
      author: {
        "@type": "Person",
        name: post.author.name,
        jobTitle: post.author.title,
        description: post.author.bio,
        image: post.author.avatar,
        url: `https://biosoft-healthcare.com/team/${post.author.name.toLowerCase().replace(/\s+/g, "-")}`,
      },
      publisher: {
        "@type": "Organization",
        name: "Biosoft Healthcare Solutions",
        logo: {
          "@type": "ImageObject",
          url: "https://biosoft-healthcare.com/logo.png",
        },
        url: "https://biosoft-healthcare.com",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": postUrl,
      },
      articleSection: post.category,
      keywords: post.tags.join(", "),
      wordCount: post.content.split(/\s+/).length,
      timeRequired: `PT${post.readTime}M`,
      inLanguage: "en-US",
      url: postUrl,
      isAccessibleForFree: true,
      commentCount: 0, // Could be dynamic based on actual comments
      interactionStatistic: {
        "@type": "InteractionCounter",
        interactionType: "https://schema.org/ReadAction",
        userInteractionCount: post.views || 0,
      },
    };

    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://biosoft-healthcare.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://biosoft-healthcare.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.category,
          item: `https://biosoft-healthcare.com/blog/category/${post.category.toLowerCase().replace(/\s+/g, "-")}`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: post.title,
          item: postUrl,
        },
      ],
    };

    return (
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{post.seoTitle || post.title} | Biosoft Healthcare Blog</title>
        <meta name="description" content={post.seoDescription || post.excerpt} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <meta name="author" content={post.author.name} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={postUrl} />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Biosoft Healthcare Blog" />
        <meta property="og:locale" content="en_US" />

        {/* Article-specific Open Graph tags */}
        <meta property="article:published_time" content={publishedDate} />
        <meta property="article:modified_time" content={modifiedDate} />
        <meta property="article:author" content={post.author.name} />
        <meta property="article:section" content={post.category} />
        {post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.featuredImage} />
        <meta name="twitter:site" content="@biosoft_health" />
        <meta name="twitter:creator" content="@biosoft_health" />

        {/* Additional SEO Meta Tags */}
        <meta name="reading-time" content={`${post.readTime} minutes`} />
        <meta name="article-category" content={post.category} />
        <meta name="content-language" content="en" />
        <meta name="revisit-after" content="7 days" />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
      </Helmet>
    );
  }

  // Generate metadata for blog listing pages
  let title = "Healthcare Technology Blog | Expert Insights & Best Practices | Biosoft";
  let description =
    "Discover the latest healthcare technology insights, industry best practices, and success stories from leading healthcare providers. Expert analysis on EHR, practice management, and digital health innovations.";
  let canonicalUrl = "https://biosoft-healthcare.com/blog";

  if (category) {
    title = `${category} Articles | Healthcare Technology Blog | Biosoft`;
    description = `Explore expert insights and best practices in ${category}. In-depth articles on healthcare technology, implementation strategies, and industry trends.`;
    canonicalUrl = `https://biosoft-healthcare.com/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`;
  }

  if (searchQuery) {
    title = `Search Results for "${searchQuery}" | Healthcare Technology Blog | Biosoft`;
    description = `Search results for "${searchQuery}" in our healthcare technology blog. Find relevant articles, insights, and best practices.`;
    canonicalUrl = `https://biosoft-healthcare.com/blog/search?q=${encodeURIComponent(searchQuery)}`;
  }

  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Biosoft Healthcare Technology Blog",
    description: "Expert insights on healthcare technology, digital health innovations, and industry best practices",
    url: "https://biosoft-healthcare.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Biosoft Healthcare Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://biosoft-healthcare.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    inLanguage: "en-US",
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://biosoft-healthcare.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://biosoft-healthcare.com/blog",
      },
      ...(category
        ? [
            {
              "@type": "ListItem",
              position: 3,
              name: category,
              item: `https://biosoft-healthcare.com/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`,
            },
          ]
        : []),
    ],
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="healthcare technology, EHR, practice management, digital health, healthcare software, medical technology, healthcare innovation, telemedicine, patient engagement, healthcare analytics"
      />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content="https://biosoft-healthcare.com/blog-og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Biosoft Healthcare Blog" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://biosoft-healthcare.com/blog-og-image.jpg" />
      <meta name="twitter:site" content="@biosoft_health" />

      {/* Additional SEO Meta Tags */}
      <meta name="content-language" content="en" />
      <meta name="revisit-after" content="3 days" />
      <meta name="theme-color" content="#077abb" />

      {/* RSS Feed */}
      <link rel="alternate" type="application/rss+xml" title="Biosoft Healthcare Blog RSS Feed" href="https://biosoft-healthcare.com/blog/rss.xml" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(blogStructuredData)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
    </Helmet>
  );
};

export default BlogSEO;
