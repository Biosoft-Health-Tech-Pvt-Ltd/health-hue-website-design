
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      organization: "Metro General Hospital",
      content: "Biosoft has revolutionized our patient care delivery. The intuitive interface and comprehensive features have improved our efficiency by 40% while enhancing patient satisfaction.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Practice Administrator",
      organization: "Riverside Medical Group",
      content: "The seamless integration and 24/7 support make Biosoft an invaluable partner. Our administrative costs have decreased significantly since implementation.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Family Physician",
      organization: "Community Health Center",
      content: "The mobile capabilities allow me to provide better care to patients in remote areas. Biosoft truly makes healthcare accessible and efficient.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1594824475038-d67417a7bd5a?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-biosoft-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-biosoft-light to-white border border-biosoft-primary/20 rounded-full px-6 py-3 mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-gradient-to-r from-biosoft-primary to-biosoft-medium-blue rounded-full animate-pulse"></div>
            <span className="text-biosoft-primary font-semibold text-sm tracking-wide uppercase">Trusted by Healthcare Professionals</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-biosoft-dark-gray mb-6 animate-fade-in-up animate-delay-100">
            Trusted by
            <span className="block bg-gradient-to-r from-biosoft-primary to-biosoft-medium-blue bg-clip-text text-transparent">Healthcare Professionals</span>
          </h2>
          <p className="text-xl text-biosoft-gray max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            See what healthcare providers are saying about our platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 group hover:-translate-y-1 hover:border-biosoft-primary/20"
            >
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-biosoft-primary mb-4 group-hover:text-biosoft-orange transition-colors" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-biosoft-yellow fill-current" />
                  ))}
                </div>

                <p className="text-biosoft-gray mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-biosoft-dark-gray">{testimonial.name}</h4>
                    <p className="text-sm text-biosoft-gray">{testimonial.role}</p>
                    <p className="text-sm text-biosoft-primary font-medium">{testimonial.organization}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
