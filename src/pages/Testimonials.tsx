import React from 'react';
import PageContainer from '../components/PageContainer';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Artist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    content: 'Dreamscapes helped me unlock my creative potential. The custom dreamscapes they designed have inspired my latest art collection.',
    rating: 5
  },
  {
    name: 'David Chen',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    content: 'The nightmare therapy sessions were life-changing. I no longer suffer from recurring stress dreams about coding deadlines!',
    rating: 5
  },
  {
    name: 'Emma Thompson',
    role: 'Writer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    content: 'Dream incubation helped me overcome writer\'s block. I developed my entire novel plot through guided dream sessions.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <PageContainer>
      <SectionTitle
        title="Client Stories"
        subtitle="Hear from those who've experienced the power of dream manipulation"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="relative">
            <div className="absolute -top-6 left-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="pt-8">
              <Quote className="text-purple-400 mb-4" size={24} />
              <p className="text-black dark:text-gray-100 mb-4">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-purple-400"
                    size={16}
                    fill="currentColor"
                  />
                ))}
              </div>
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-black dark:text-gray-100">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="max-w-3xl mx-auto">
        <Card>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Share Your Story</h3>
            <p className="text-black dark:text-gray-100 mb-6">
              Have you experienced transformation through our services? We'd
              love to hear about it.
            </p>
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full 
              font-medium transition-all duration-300"
            >
              Submit Your Testimonial
            </button>
          </div>
        </Card>
      </div>
    </PageContainer>
  );
};

export default Testimonials;