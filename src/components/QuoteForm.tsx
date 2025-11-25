import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { trackQuoteRequest, trackFormInteraction } from "@/utils/analytics";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

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
          phone: formData.phone,
          message: formData.message,
          _subject: 'Free Quote Request from Contact Page'
        }),
      });

      if (response.ok) {
        trackQuoteRequest('contact_page', []);
        trackFormInteraction('quote_form', 'submit_success');
        
        toast({
          title: "Quote request sent!",
          description: "Thank you for your request. We'll respond within 24 hours.",
        });
        
        setFormData({
          name: '',
          phone: '',
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

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(var(--asphalt-grey))] mb-4 sm:mb-6 text-center">
          Request Your FREE Quote
        </h2>
        <p className="text-lg sm:text-xl text-[hsl(var(--asphalt-grey))] mb-6 sm:mb-8 text-center">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-[hsl(var(--asphalt-grey))] font-semibold text-base sm:text-lg">
              Name *
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
              className="mt-2 rounded-xl border-2 text-base sm:text-lg h-12"
              placeholder="Your full name"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-[hsl(var(--asphalt-grey))] font-semibold text-base sm:text-lg">
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              required
              className="mt-2 rounded-xl border-2 text-base sm:text-lg h-12"
              placeholder="+44 7930 951155"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-[hsl(var(--asphalt-grey))] font-semibold text-base sm:text-lg">
              Message *
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              required
              placeholder="Tell us about your roofing needs..."
              className="mt-2 rounded-xl border-2 min-h-[150px] text-base sm:text-lg"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 sm:py-5 px-6 rounded-lg transition-colors duration-200 text-base sm:text-lg shiny-button relative overflow-hidden uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            GET A FREE QUOTE
          </Button>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;

