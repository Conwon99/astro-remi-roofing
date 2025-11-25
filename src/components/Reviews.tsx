import { Star, ArrowRight, Facebook } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Stewart Clara",
      location: "Scotland",
      rating: 5,
      text: "Just had our new roof completed by Aaron @ Remi Roofing Solutions and cannot recommend them enough. From start to finish the communication was excellent and reliable as we were away on holiday at the time of starting the job. So happy with our new roof they did a professional job and completed with no issues. Highly recommend this company. 5* service and thanks for doing a fantastic job guys!",
      service: "Full Roof Replacement"
    },
    {
      name: "Lang Financial",
      location: "Wellington Square",
      rating: 5,
      text: "The team at Remi Roofing recently attended our office at Wellington Square for a repair. They arrived on time & were very professional. We are very pleased with the outcome.",
      service: "Commercial Roofing"
    },
    {
      name: "Gordon McCulley",
      location: "Kilmarnock",
      rating: 5,
      text: "Aaron and the team at Remi Roofing completed a whole new roof for the house. All work was completed to an excellent standard. The guys worked non-stop until the job was completed. Everything tidied up on completion. Aaron popped back a few days later to check that everything was satisfactory and no snagging needed. Would recommend Remi Roofing without hesitation. Excellent job!!!",
      service: "Full Roof Replacement"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-accent fill-current" : "text-muted-foreground/30"
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <div className="mb-8 lg:mb-0">
            {/* Dark banner */}
            <div className="bg-[hsl(var(--asphalt-grey))] text-white px-6 py-3 rounded-lg mb-4 inline-block">
              <p className="font-semibold text-sm">DISCOVER WHAT OUR CUSTOMERS HAVE TO SAY ABOUT US</p>
            </div>
            
            {/* Main title */}
            <h2 className="font-display font-bold text-6xl lg:text-7xl text-white mb-4">
              REVIEWS
            </h2>
          </div>
          
          {/* Contact button */}
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white border-2 border-black text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            CONTACT US NOW <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="flex justify-center mb-4">
                {renderStars(review.rating)}
              </div>
              
              <blockquote className="text-gray-700 mb-4 leading-relaxed text-sm">
                "{review.text}"
              </blockquote>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 text-base">
                  {review.name}
                </h4>
                {/* Facebook logo */}
                <div className="flex items-center justify-center gap-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <Facebook className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs text-gray-500">Facebook</span>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Reviews;