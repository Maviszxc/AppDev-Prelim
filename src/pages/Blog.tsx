import React from 'react';
import PageContainer from '../components/PageContainer';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: "The Science Behind Lucid Dreaming",
    excerpt:
      "Explore the neurological processes that enable conscious dreaming and how we can influence them.",
    date: "2025-03-15",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Brain scan/neural activity image
  },
  {
    title: "Mastering Dream Control",
    excerpt:
      "Learn advanced techniques for maintaining consciousness and control in your dreams.",
    date: "2025-03-12",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Ethereal, dreamy landscape
  },
  {
    title: "Therapeutic Benefits of Dream Manipulation",
    excerpt:
      "Discover how controlled dreaming can help overcome trauma and anxiety.",
    date: "2025-03-10",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Calming sunrise/therapeutic image
  },
];
const Blog = () => {
  return (
    <PageContainer>
      <SectionTitle
        title="Dream Research & Insights"
        subtitle="Latest discoveries and techniques in dream manipulation"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="h-48 overflow-hidden mb-6">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-4 text-sm text-black dark:text-gray-100 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
              <p className="text-black dark:text-gray-100 mb-6">
                {post.excerpt}
              </p>
              <button
                className="text-purple-800 dark:text-purple-300 hover:text-purple-300 transition-colors 
                flex items-center gap-2"
              >
                Read More <ArrowRight size={16} />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
};

export default Blog;