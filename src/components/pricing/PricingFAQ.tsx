
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
    question: "Is there a minimum commitment?",
    answer: "We work on a monthly rolling basis — cancel anytime with 14 days' notice. But most of our clients stay long-term because we become their go-to content team."
  },
  {
    question: "How fast is your turnaround time?",
    answer: "Most content is delivered within 2–4 business days max. Need something urgent? Just let us know — we keep our workflow flexible."
  },
  {
    question: "What if I don't need all the services right now?",
    answer: "No problem. We adapt to your content needs. Some clients start with just blog + LinkedIn and expand as they grow. You’re not paying for anything you don’t use."
  },
  {
    question: "How is the content created - AI or human?",
    answer: "We use AI as a starting point to move fast, but every piece is reviewed, rewritten, and polished by a real Content Strategist to ensure quality and brand voice."
  },
];

const PricingFAQ = () => {
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
            Get answers to common questions about our services, process and pricing plans.
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

export default PricingFAQ;
