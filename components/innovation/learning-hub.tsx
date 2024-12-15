"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Video, BookOpen, Users } from "lucide-react";

const LEARNING_RESOURCES = [
  {
    title: "Upcoming Webinars",
    icon: Video,
    items: [
      "AI in Practice: Real-world Applications",
      "Cloud Architecture Masterclass",
      "Digital Innovation Workshop",
    ],
  },
  {
    title: "On-Demand Courses",
    icon: BookOpen,
    items: [
      "Digital Transformation Fundamentals",
      "Advanced Cloud Solutions",
      "UX Design Principles",
    ],
  },
  {
    title: "Community Events",
    icon: Users,
    items: [
      "Monthly Tech Meetup",
      "Innovation Summit 2024",
      "Developer Conference",
    ],
  },
];

export function LearningHub() {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-2xl font-bold">Learning & Development</h3>
      </CardHeader>
      <CardContent className="space-y-6">
        {LEARNING_RESOURCES.map((resource) => (
          <div key={resource.title} className="space-y-3">
            <div className="flex items-center gap-2">
              <resource.icon className="w-5 h-5 text-primary" />
              <h4 className="font-semibold">{resource.title}</h4>
            </div>
            <ul className="space-y-2">
              {resource.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Calendar className="w-4 h-4" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <Button variant="outline" className="w-full">
          Explore Learning Resources
        </Button>
      </CardContent>
    </Card>
  );
}