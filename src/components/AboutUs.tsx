import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Home, Facebook, Truck } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { trackMessenger, trackFacebookClick, trackWhatsAppClick } from "@/utils/analytics";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 relative overflow-hidden">
      {/* Desktop Video Background - Hidden on mobile */}
      <video
        src="/remiroofvid.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="hidden sm:block absolute inset-0 w-full h-full object-cover object-center z-0 scale-95 lg:scale-100"
      >
        Your browser does not support the video tag.
      </video>
      
      {/* Desktop Dark Overlay - Hidden on mobile */}
      <div className="hidden sm:block absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto max-w-7xl relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[hsl(var(--asphalt-grey))] sm:text-white leading-tight">
                ABOUT US
              </h2>
              <div className="w-16 h-1 bg-primary"></div>
              
              <p className="text-base sm:text-lg text-[hsl(var(--asphalt-grey))] sm:text-white/90 leading-relaxed">
                We are trusted roofing specialists serving Crosshouse, Kilmarnock and surrounding areas. Our professional team specialises in full roof replacements, repairs, chimney work, solar panel services, and guttering systems. Expert installation services with 10-year guarantee, delivering premium roofing solutions that protect and enhance your property.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-4 pt-4">
                <a 
                  href="https://www.facebook.com/REMIROOFINDLTD" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackFacebookClick('about_section')}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </a>
                <a 
                  href="https://wa.me/447930951155" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('about_section')}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" color="black" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="max-w-sm w-full">
              <LazyImage
                src="/remiabout.jpg"
                alt="Remi Roofing - Professional roofing contractors team"
                className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-80 lg:h-80 object-cover rounded-lg shadow-lg mx-auto"
              />
              
              {/* Mobile Video - Below image */}
              <div className="mt-6 sm:hidden">
                <video
                  src="/remiroofvid.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-64 h-64 mx-auto rounded-lg shadow-lg object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;