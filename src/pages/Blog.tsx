// src/pages/Blog.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogListing from "@/components/BlogListing";
import BlogSEO from "@/components/BlogSEO";

const Blog = () => {
  return (
    <>
      <BlogSEO isListingPage={true} />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <BlogListing />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
