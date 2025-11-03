import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { trackPhoneCall, trackPhoneCallClick } from "@/utils/analytics";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What roofing services do you provide?",
      answer: "We provide comprehensive roofing services including full roof replacements, roof repairs and maintenance, chimney services, solar panel services, and guttering & roofline systems. Our services cover everything from emergency repairs to complete roof installations with premium materials and 10-year guarantee."
    },
    {
      question: "How much does a roof replacement cost?",
      answer: "Roof replacement costs vary depending on the size, roof type, materials used, and complexity of the job. We provide free, no-obligation quotes for all roofing work. Our quotes include detailed breakdowns of materials, labour, and any additional work required, with no hidden costs."
    },
    {
      question: "What areas do you cover?",
      answer: "We provide roofing services across Crosshouse, Kilmarnock and surrounding areas. Contact us to confirm coverage for your specific location and discuss your roofing project requirements."
    },
    {
      question: "Do you offer emergency roof repairs?",
      answer: "Yes, we provide emergency roof repair services for urgent situations such as storm damage, leaks, or structural issues. We understand that roofing emergencies can't wait, so we offer prompt response times to protect your property from further damage."
    },
    {
      question: "What chimney services do you offer?",
      answer: "We provide expert chimney services including chimney removal or rebuilding, chimney re-slating and flashing work, and stove flue installations for wood-burning stoves. Our skilled contractors ensure all chimney work meets safety standards and building regulations."
    },
    {
      question: "Do you work with solar panels?",
      answer: "Yes, we provide safe removal and reinstallation of solar panels, professional soft washing and cleaning of panels, and maintenance services. We understand the importance of protecting your solar investment during roofing work."
    },
    {
      question: "What guttering services do you provide?",
      answer: "We provide complete guttering and roofline services including installation of new uPVC gutters and downpipes, replacement of fascia and soffits, and fitting of dry verge and dry ridge systems. All work is completed to the highest standards with quality materials."
    },
    {
      question: "How long does a typical roofing project take?",
      answer: "Project duration depends on the size and complexity. Simple repairs typically take 1-2 days, while full roof replacements may take 3-7 days depending on weather conditions and roof size. We provide realistic timelines during the quote process and keep you updated throughout the project."
    },
    {
      question: "Do you offer a guarantee on your work?",
      answer: "Yes, we offer a comprehensive 10-year guarantee on all our roofing work. This covers both materials and workmanship, giving you peace of mind that your investment is protected. We're fully insured and committed to delivering quality work that lasts."
    },
    {
      question: "Do you offer free quotes?",
      answer: "Yes, we provide completely free, no-obligation quotes for all our roofing services. You can request a quote by calling +44 7930 951155, emailing us at remiroofing1@outlook.com, or using our contact form. We'll assess your needs and provide a detailed, transparent quote with no hidden costs."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-gradient-to-b from-background to-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[hsl(var(--asphalt-grey))] max-w-3xl mx-auto">
              Common questions about our roofing services including roof replacements, repairs, chimney work, solar panel services, and guttering across Crosshouse, Kilmarnock and surrounding areas
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-lg text-[hsl(var(--asphalt-grey))] pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-[hsl(var(--primary-orange))] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[hsl(var(--primary-orange))] flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-[hsl(var(--asphalt-grey))] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-[hsl(var(--asphalt-grey))] mb-6">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+447930951155"
                onClick={() => trackPhoneCallClick('faq_section')}
                className="inline-flex items-center justify-center px-6 py-3 bg-[hsl(var(--primary-orange))] text-white rounded-full font-semibold hover:bg-[hsl(var(--primary-orange))]/90 transition-colors"
              >
                Call +44 7930 951155
              </a>
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[hsl(var(--primary-orange))] text-[hsl(var(--primary-orange))] rounded-full font-semibold hover:bg-[hsl(var(--primary-orange))] hover:text-white transition-colors"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default FAQ;
