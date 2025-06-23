
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEO = ({
  title = "Healthcare Software Solutions | Biosoft - Transform Your Practice",
  description = "Streamline your healthcare operations with Biosoft's comprehensive software platform. Improve patient care, reduce costs, and enhance efficiency with industry-leading technology. HIPAA compliant, 24/7 support, trusted by 500+ providers.",
  keywords = "healthcare software, electronic health records, EHR, practice management, HIPAA compliant, telemedicine, healthcare analytics, medical billing, patient management, healthcare technology",
  canonicalUrl = "https://biosoft-healthcare.com",
  ogImage = "https://biosoft-healthcare.com/og-image.jpg",
  structuredData
}: SEOProps) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Biosoft Healthcare Platform",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web Browser",
    "description": description,
    "url": canonicalUrl,
    "creator": {
      "@type": "Organization",
      "name": "Biosoft",
      "url": canonicalUrl,
      "logo": `${canonicalUrl}/logo.png`
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "30-day free trial with full access"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "500",
      "bestRating": "5"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="Biosoft Healthcare Solutions" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Biosoft Healthcare" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@biosoft_health" />
      <meta name="twitter:creator" content="@biosoft_health" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="application-name" content="Biosoft Healthcare" />
      <meta name="apple-mobile-web-app-title" content="Biosoft Healthcare" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
    </Helmet>
  );
};

export default SEO;
