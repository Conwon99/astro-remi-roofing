import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { trackPhoneCall, trackMessenger, trackQuoteRequest, trackFormInteraction, trackWhatsAppClick, trackPhoneCallClick } from "@/utils/analytics";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const serviceOptions = [
    'Full Roof Replacement',
    'Roof Repairs & Maintenance',
    'Chimney Services',
    'Solar Panel Services',
    'Guttering & Roofline',
    'Emergency Repairs',
    'General Roofing',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xnnoajkg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _subject: 'Free Quote Request from Website'
        }),
      });

      if (response.ok) {
        trackQuoteRequest('contact_form', [formData.service]);
        trackFormInteraction('quote_form', 'submit_success');
        
        toast({
          title: "Quote request sent!",
          description: "Thank you for your request. We'll respond within 24 hours.",
        });
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      trackFormInteraction('quote_form', 'submit_error');
      toast({
        title: "Error sending request",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const handleCallClick = () => {
    trackPhoneCallClick('contact_section');
    window.location.href = "tel:+447930951155";
  };

  const handleMessengerClick = () => {
    trackWhatsAppClick('contact_section');
    window.open("https://wa.me/447930951155", "_blank");
  };

  return (
    <section id="contact-form" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-[hsl(var(--muted))]">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12 shadow-xl">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Ready to Get Your FREE Quote?
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Fast, friendly and professional roofing quotes across Crosshouse, Kilmarnock and surrounding areas.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-6 sm:px-10 py-6 sm:py-8 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 shiny-button relative overflow-hidden uppercase tracking-wide text-base sm:text-lg"
          >
            GET A FREE QUOTE
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;