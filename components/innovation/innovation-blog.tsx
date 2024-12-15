"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Tag, User } from "lucide-react";

const BLOG_POSTS = [
  {
    title: "The Future of AI in Digital Transformation",
    excerpt: "Exploring how artificial intelligence is reshaping business operations and customer experiences.",
    author: "Dr. Sarah Chen",
    category: "AI & Technology",
    readTime: "5 min read",
    date: "2024-03-15",
  },
  {
    title: "Building Scalable Cloud Solutions",
    excerpt: "Best practices for developing cloud-native applications that scale efficiently.",
    author: "Michael Rodriguez",
    category: "Cloud Computing",
    readTime: "4 min read",
    date: "2024-03-10",
  },
  {
    title: "UX Design Trends for 2024",
    excerpt: "Latest trends and innovations in user experience design and interface development.",
    author: "Emma Thompson",
    category: "Design",
    readTime: "6 min read",
    date: "2024-03-05",
  },
];

export function InnovationBlog() {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-2xl font-bold">Latest Insights</h3>
      </CardHeader>
      <CardContent className="space-y-6">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.title}
            className="p-4 bg-secondary/50 rounded-lg space-y-3"
          >
            <h4 className="font-semibold">{post.title}</h4>
            <p className="text-sm text-muted-foreground">{post.excerpt}</p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-1">
                <Tag className="w-4 h-4" />
                {post.category}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        ))}
        <Button variant="outline" className="w-full">
          View All Articles
        </Button>
      </CardContent>
    </Card>
  );
}