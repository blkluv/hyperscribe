
import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do you maintain my brand voice in AI-generated content?",
    answer: "We start with a comprehensive brand voice analysis and create a detailed style guide. Our AI tools are trained on your existing content, and our human editors ensure every piece aligns with your brand's unique voice and tone. We continuously refine this process based on your feedback to ensure authenticity."
  },
  {
    question: "What's your turnaround time for content creation?",
    answer: "Turnaround times vary by service type. LinkedIn posts typically take 2-3 business days, blog articles 5-7 business days, and  website copywriting depends on the amounts of content needed. Rush delivery is available for an additional fee."
  },
  {
    question: "How do you measure content performance?",
    answer: "We provide comprehensive performance analytics for all content we create. This includes engagement metrics (views, clicks, shares), conversion data, SEO rankings, and lead generation attribution. Monthly reports track progress against your KPIs, and we use these insights to continuously optimize your content strategy."
  },
  {
    question: "Can I request revisions to the content?",
    answer: "Absolutely! All our service packages include up to two rounds of revisions to ensure you're completely satisfied with the final content. For extensive revisions beyond the scope of the original brief, additional charges may apply. Our collaborative review process ensures we capture your feedback effectively."
  },
  {
    question: "How do you research our industry to create expert content?",
    answer: "Our process includes in-depth research of your industry, competitors, and target audience."
  },
];

const ServiceFAQ = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about our services, process, and how we can help your SaaS company grow with content.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg bg-white shadow-sm">
                  <AccordionTrigger className="px-6 text-left font-medium text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
