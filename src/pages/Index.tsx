
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Biosoft Healthcare Solutions",
    "url": "https://biosoft-healthcare.com",
    "logo": "https://biosoft-healthcare.com/logo.png",
    "description": "Leading healthcare software platform trusted by 500+ providers worldwide. Comprehensive EHR, practice management, and telemedicine solutions.",
    "foundingDate": "2020",
    "industry": "Healthcare Technology",
    "numberOfEmployees": "50-100",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-BIOSOFT",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://linkedin.com/company/biosoft-healthcare",
      "https://twitter.com/biosoft_health"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "CA"
    }
  };

  return (
    <>
      <SEO structuredData={structuredData} />
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <Stats />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
