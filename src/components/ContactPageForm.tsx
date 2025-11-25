import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { trackQuoteRequest, trackFormInteraction } from "@/utils/analytics";

const ContactPageForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "Name, phone and message are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xnnoajkg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
          _subject: "Contact form enquiry from website",
        }),
      });

      if (response.ok) {
        trackQuoteRequest("contact_page_form", []);
        trackFormInteraction("contact_page_form", "submit_success");
        window.location.href = "/thank-you";
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      trackFormInteraction("contact_page_form", "submit_error");
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly by phone or email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact-form"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-[hsl(var(--muted))]"
    >
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[hsl(var(--asphalt-grey))]">
            Contact Us
          </h1>
          <p className="text-[hsl(var(--asphalt-grey))]/80 mt-3">
            Have a question or need a free roofing quote? Send us a message and we’ll get back to you promptly.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <Label
                  htmlFor="name"
                  className="text-[hsl(var(--asphalt-grey))] font-semibold text-sm sm:text-base"
                >
                  Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 sm:mt-2 rounded-xl border-2 text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <Label
                  htmlFor="phone"
                  className="text-[hsl(var(--asphalt-grey))] font-semibold text-sm sm:text-base"
                >
                  Phone *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 sm:mt-2 rounded-xl border-2 text-sm sm:text-base"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="text-[hsl(var(--asphalt-grey))] font-semibold text-sm sm:text-base"
                >
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 sm:mt-2 rounded-xl border-2 min-h-[120px] text-sm sm:text-base"
                  placeholder="Tell us about your roof, any issues, and the type of work you’re looking for..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-5 sm:py-6 rounded-md text-sm sm:text-base lg:text-lg shiny-button relative overflow-hidden"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPageForm;


