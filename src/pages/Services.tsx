import React from 'react';
import PageContainer from '../components/PageContainer';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Brain, Moon, Stars, Compass, Shield, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Lucid Dream Training',
    description: 'Master the art of conscious dreaming with our expert guidance and proven techniques.',
    price: '$299/month'
  },
  {
    icon: Stars,
    title: 'Custom Dreamscapes',
    description: 'Design and experience personalized dream environments tailored to your desires.',
    price: '$499/session'
  },
  {
    icon: Shield,
    title: 'Nightmare Therapy',
    description: 'Transform and overcome recurring nightmares with our therapeutic approach.',
    price: '$399/session'
  },
  {
    icon: Compass,
    title: 'Dreamwalking Tours',
    description: 'Explore shared dream spaces with trained guides in group sessions.',
    price: '$699/tour'
  },
  {
    icon: Moon,
    title: 'Dream Analysis',
    description: 'Understand the deeper meaning behind your dreams with our expert analysis.',
    price: '$199/session'
  },
  {
    icon: Sparkles,
    title: 'Dream Incubation',
    description: 'Learn to plant and grow specific dream themes for problem-solving.',
    price: '$349/session'
  }
];

const Services = () => {
  return (
    <PageContainer>
      <SectionTitle 
        title="Our Services" 
        subtitle="Discover the extraordinary possibilities of dream manipulation" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div
                className="w-16 h-16 rounded-full bg-purple-600/20 
                flex items-center justify-center mb-6"
              >
                <Icon
                  className="dark:text-purple-400 text-purple-900"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-black dark:text-gray-100 mb-6">
                {service.description}
              </p>
              <div className="mt-auto">
                <span className="text-2xl font-bold text-purple-500">
                  {service.price}
                </span>
              </div>
            </Card>
          );
        })}
      </div>
    </PageContainer>
  );
};

export default Services;