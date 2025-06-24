// src/pages/BlogPost.tsx

import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostComponent from "@/components/BlogPost";
import BlogSEO from "@/components/BlogSEO";
import { getPostBySlug } from "@/data/blogData";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  return (
    <>
      <BlogSEO post={post} />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">{slug && <BlogPostComponent slug={slug} />}</main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPostPage;
