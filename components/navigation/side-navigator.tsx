"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const SECTIONS = [
  {
    id: "hero",
    icon: "🚀",
    name: "Hero",
    description: "Digital Transformation Launch",
  },
  {
    id: "solutions",
    icon: "🧩",
    name: "Solutions",
    description: "Tailored Digital Solutions",
  },
  {
    id: "process",
    icon: "⚙️",
    name: "Process",
    description: "Proven Innovation Methodology",
  },
  {
    id: "success",
    icon: "📈",
    name: "Success",
    description: "Transformative Client Results",
  },
  {
    id: "why-us",
    icon: "🏆",
    name: "Why Us",
    description: "Our Unique Differentiators",
  },
  {
    id: "global",
    icon: "🌍",
    name: "Global",
    description: "International Digital Excellence",
  },
  {
    id: "innovation",
    icon: "💡",
    name: "Innovation",
    description: "Technology Leadership Insights",
  },
  {
    id: "contact",
    icon: "📞",
    name: "Contact",
    description: "Start Your Journey",
  },
];

export function SideNavigator() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex items-center gap-4">
      {/* Vertical Heading */}
      <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg">
        <div className="flex flex-col items-center gap-2 text-sm font-medium">
          <span>Navigate</span>
          <span>Quickly</span>
          <ArrowRight className="w-4 h-4 rotate-90" />
          <span>Save</span>
          <span>Time</span>
        </div>
      </div>

      <div className="flex flex-col items-end space-y-4 bg-background/40 backdrop-blur-sm p-3 rounded-full">
        {SECTIONS.map(({ id, icon, name, description }) => (
          <div
            key={id}
            className="relative group"
            onMouseEnter={() => setHoveredSection(id)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <button
              onClick={() => scrollToSection(id)}
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200",
                "bg-background/80 backdrop-blur-sm border shadow-sm",
                activeSection === id && "border-primary",
                "hover:scale-110"
              )}
            >
              <span className="text-lg">{icon}</span>
            </button>
            <AnimatePresence>
              {hoveredSection === id && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="absolute right-12 top-1/2 -translate-y-1/2 whitespace-nowrap"
                >
                  <div className="bg-popover/80 backdrop-blur-sm text-popover-foreground px-4 py-2 rounded-lg shadow-sm">
                    <p className="font-medium text-sm">{name}</p>
                    <p className="text-xs text-muted-foreground">{description}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}