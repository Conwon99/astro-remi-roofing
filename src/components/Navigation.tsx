import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import LazyImage from "@/components/LazyImage";
import { trackPhoneCall, trackNavigation, trackQuoteRequest, trackPhoneCallClick } from "@/utils/analytics";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight; // Approximate hero section height
      
      if (scrollY > heroHeight * 0.8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCallClick = () => {
    trackPhoneCallClick('navigation');
    window.location.href = "tel:+447930951155";
  };

  const scrollToSection = (sectionId: string) => {
    trackNavigation(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleQuoteClick = () => {
    trackQuoteRequest('navigation_button', []);
    window.location.href = "/contact";
  };

  const handleContactClick = () => {
    window.location.href = "/#contact-form";
  };

  const navItems: { label: string; id?: string; href?: string }[] = [
    { label: "Home", id: "hero" },
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "Reviews", id: "reviews" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black backdrop-blur-sm border-b border-white/10' 
        : 'bg-black'
    }`}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="/"
              onClick={(e) => {
                const isHome = window.location.pathname === '/' || window.location.pathname === '/index.html';
                if (isHome) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="cursor-pointer"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                <LazyImage
                  src="/remilogo.png"
                  alt="Remi Roofing logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation - Only on very large screens */}
          <div className="hidden xl:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href ?? `/#${item.id}`}
                onClick={(e) => {
                  if (item.id) {
                    const isHome = window.location.pathname === '/' || window.location.pathname === '/index.html';
                    if (isHome) {
                      e.preventDefault();
                      scrollToSection(item.id);
                    } else {
                      // let the default navigation occur to "/#section"
                      setIsMenuOpen(false);
                    }
                  }
                }}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200 font-medium uppercase"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* iPad/Tablet Layout - Phone Number + Hamburger */}
          <div className="hidden md:flex xl:hidden items-center space-x-4">
            <Button
              onClick={handleCallClick}
              variant="ghost"
              className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground bg-transparent hover:bg-transparent p-0"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                <Phone className="w-5 h-5 text-blue-500" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-300 font-medium">CALL US NOW</span>
                <span className="text-lg font-bold text-white">+44 7930 951155</span>
              </div>
            </Button>
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-primary-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-primary-foreground" />
              )}
            </button>
          </div>

          {/* Desktop CTA - Only on very large screens */}
          <div className="hidden xl:flex items-center space-x-4">
            <Button
              onClick={handleCallClick}
              variant="ghost"
              className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground bg-transparent hover:bg-transparent p-0"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <Phone className="w-6 h-6 text-blue-500" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-300 font-medium">CALL US NOW</span>
                <span className="text-3xl font-bold text-white">+44 7930 951155</span>
              </div>
            </Button>
            <Button
              onClick={handleQuoteClick}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-md font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 shiny-button relative overflow-hidden uppercase tracking-wide"
            >
              GET A FREE QUOTE
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-primary-foreground" />
            )}
          </button>
        </div>

        {/* Mobile/iPad Menu */}
        {isMenuOpen && (
          <div className="xl:hidden bg-primary border-t border-primary-foreground/20">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href ?? `/#${item.id}`}
                  onClick={(e) => {
                    if (item.id) {
                      const isHome = window.location.pathname === '/' || window.location.pathname === '/index.html';
                      if (isHome) {
                        e.preventDefault();
                        scrollToSection(item.id);
                      } else {
                        // navigate to home section; allow default
                        setIsMenuOpen(false);
                      }
                    } else {
                      setIsMenuOpen(false);
                    }
                  }}
                  className="block w-full text-left px-4 py-2 text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10 transition-colors duration-200 uppercase font-medium"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-primary-foreground/20 space-y-3">
                <Button
                  onClick={handleCallClick}
                  variant="ghost"
                  className="w-full justify-start flex items-center gap-4 text-primary-foreground hover:text-primary-foreground/80 bg-transparent hover:bg-transparent p-0"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Phone className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-gray-300 font-medium">CALL US NOW</span>
                    <span className="text-3xl font-bold text-white">+44 7930 951155</span>
                  </div>
                </Button>
                <Button
                  onClick={handleQuoteClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-md font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 shiny-button relative overflow-hidden uppercase tracking-wide"
                >
                  GET A FREE QUOTE
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;