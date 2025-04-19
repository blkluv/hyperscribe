
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, X, ChevronDown } from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const comparisonData = [
  {
    aspect: "Time to Market",
    creai.digital: "3-5x faster content delivery",
    internal: "Slow ramp-up time, high training costs",
    agency: "Variable timelines, often delayed by approval cycles"
  },
  {
    aspect: "Cost Efficiency",
    creai.digital: "Fixed monthly cost, predictable ROI",
    internal: "High overhead (salary, benefits, tools, training)",
    agency: "High markups, frequent scope creep costs"
  },
  {
    aspect: "Quality Control",
    creai.digital: "AI efficiency + human expertise ensures consistency",
    internal: "Variable quality based on employee skills",
    agency: "Inconsistent quality due to multiple writers"
  },
  {
    aspect: "Scalability",
    creai.digital: "Easily scale volume up/down as needed",
    internal: "Limited by employee capacity, costly to scale",
    agency: "Can scale but at premium cost increases"
  },
  {
    aspect: "Industry Expertise",
    creai.digital: "Specialized in CRE & tech content marketing",
    internal: "Limited by employee's background",
    agency: "Often generalists across many industries"
  },
  {
    aspect: "Technology",
    creai.digital: "Cutting-edge AI + human refinement",
    internal: "Limited by budget for tools & training",
    agency: "Traditional approach, limited AI integration"
  }
];

const costBreakdown = [
  {
    category: "Monthly Cost",
    creai.digital: "$2,500-$9,500/month",
    internal: "$8,000 - $15,000",
    agency: "$10,000 - $15,000",
    notes: "CREAI.DIGITAL's fixed monthly cost includes all services and deliverables with no hidden fees"
  },
  {
    category: "Content Volume",
    creai.digital: "4-8+ pieces weekly",
    internal: "Limited by employee capacity",
    agency: "3-6 pieces weekly",
    notes: "CREAI.DIGITAL delivers more content at a lower cost due to our AI-powered workflow"
  },
  {
    category: "Setup Costs",
    creai.digital: "$0",
    internal: "$15,000+ (hiring)",
    agency: "$2,000-$5,000 onboarding",
    notes: "Start with CREAI.DIGITAL immediately with no setup fees or long-term commitments"
  },
  {
    category: "Tools & Software",
    creai.digital: "Included",
    internal: "$500-$1,500/month",
    agency: "Limited access",
    notes: "All premium tools and software included in CREAI.DIGITAL's monthly rate"
  }
];

const PricingComparison = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600">
            COMPARISON
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why CREAI.DIGITAL is the Smarter Choice
          </h2>
          <p className="text-lg text-muted-foreground">
            See how our AI-powered ad + content solution compares to traditional options for CRE companies
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="overflow-x-auto rounded-xl border shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50">
                  <TableHead className="w-[250px]">Comparison</TableHead>
                  <TableHead className="text-center bg-blue-50 text-blue-700">CREAI.DIGITAL</TableHead>
                  <TableHead className="text-center">In-House Team</TableHead>
                  <TableHead className="text-center">Traditional Agency</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <TableCell className="font-medium">{row.aspect}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle size={18} className="text-blue-500" />
                        <span>{row.hyperscriber}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground">{row.internal}</TableCell>
                    <TableCell className="text-center text-muted-foreground">{row.agency}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Cost Breakdown Comparison</h3>
          <div className="overflow-x-auto rounded-xl border shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50">
                  <TableHead className="w-[200px]">Cost Category</TableHead>
                  <TableHead className="text-center bg-blue-50 text-blue-700">CREAI.DIGITAL</TableHead>
                  <TableHead className="text-center">In-House Team</TableHead>
                  <TableHead className="text-center">Traditional Agency</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {costBreakdown.map((row, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <TableCell className="font-medium">{row.category}</TableCell>
                    <TableCell className="text-center font-medium text-blue-700">{row.hyperscriber}</TableCell>
                    <TableCell className="text-center text-muted-foreground">{row.internal}</TableCell>
                    <TableCell className="text-center text-muted-foreground">{row.agency}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default PricingComparison;
