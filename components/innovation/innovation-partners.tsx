"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Building2, Laptop, GraduationCap, Network } from "lucide-react";

const PARTNERS = [
  {
    category: "Technology Partners",
    icon: Laptop,
    partners: [
      "Microsoft for Startups",
      "AWS Partner Network",
      "Google Cloud Platform",
      "IBM Watson",
    ],
  },
  {
    category: "Research Institutions",
    icon: GraduationCap,
    partners: [
      "MIT Innovation Lab",
      "Stanford AI Research",
      "Digital Ethics Institute",
      "Cloud Security Alliance",
    ],
  },
  {
    category: "Industry Associations",
    icon: Building2,
    partners: [
      "Digital Innovation Alliance",
      "Tech Leaders Forum",
      "AI Ethics Board",
      "Global DevOps Network",
    ],
  },
  {
    category: "Innovation Networks",
    icon: Network,
    partners: [
      "Startup Incubator Network",
      "Digital Transformation Hub",
      "Future Tech Alliance",
      "Innovation Leaders Circle",
    ],
  },
];

export function InnovationPartners() {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-center">Innovation Ecosystem</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PARTNERS.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <category.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-lg font-semibold mb-4">{category.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.partners.map((partner) => (
                    <Badge key={partner} variant="secondary">
                      {partner}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}