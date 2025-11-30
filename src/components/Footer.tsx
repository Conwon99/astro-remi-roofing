import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { trackExternalLink, trackFacebookClick, trackPhoneCallClick } from "@/utils/analytics";
import { PHONE_CONFIG } from "@/config/phone";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4">
                Remi Roofing
              </h3>
              <p className="text-white leading-relaxed text-sm sm:text-base">
                Expert roofing services in Crosshouse, Kilmarnock and surrounding areas. 
                We specialise in full roof replacements, repairs, chimney work, solar panel services, and guttering systems. 
                Professional, reliable, and committed to delivering exceptional results with 10-year guarantee.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <a 
                  href={`tel:${PHONE_CONFIG.tracking.e164}`}
                  onClick={() => {
                    trackPhoneCallClick('footer');
                  }}
                  className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base"
                >
                  {PHONE_CONFIG.tracking.short}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <a href="mailto:remiroofing1@outlook.com" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base break-all">
                  remiroofing1@outlook.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-white text-sm sm:text-base">27 Annandale Cres, Crosshouse, Kilmarnock KA2 0EP</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
              Our Services
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-white">
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors text-sm sm:text-base">
                  • Full Roof Replacement
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors text-sm sm:text-base">
                  • Roof Repairs & Maintenance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors text-sm sm:text-base">
                  • Chimney Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors text-sm sm:text-base">
                  • Solar Panel Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors text-sm sm:text-base">
                  • Guttering & Roofline
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
              Service Areas
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-white">
              <li>
                <a href="#service-areas" className="hover:text-gray-300 transition-colors text-sm sm:text-base">
                  • Crosshouse, Kilmarnock & Surrounding Areas
                </a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
              About Us
            </h4>
            <p className="text-white leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Remi Roofing is a trusted provider of professional roofing services. 
              Our skilled contractors are experts in all aspects of roofing, ensuring every project is completed 
              to the highest standards. We believe in combining functionality with durability to create reliable, 
              long-lasting roofing solutions that protect your property.
            </p>
            
            <div className="space-y-3">
              <div className="text-white text-sm sm:text-base">
                <p className="font-semibold mb-2">Business Hours:</p>
                <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                <p>Sat: 9:00 AM - 4:00 PM</p>
              </div>
              
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.facebook.com/REMIROOFINDLTD" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackFacebookClick('footer')}
                  className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-sm sm:text-base"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Follow us on Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white text-sm sm:text-base text-center md:text-left">
              © {currentYear} Remi Roofing. All rights reserved.
            </div>
            <div className="text-white/70 text-xs sm:text-sm text-center">
              Professional roofing services across Glasgow & Ayrshire.
              <br />
              Website made by <a href="https://codapixel.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors underline">CodaPixel</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;