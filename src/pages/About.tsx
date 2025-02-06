import React from 'react';
import PageContainer from '../components/PageContainer';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Award, Users, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <PageContainer>
      <SectionTitle
        title="About Dreamscapes"
        subtitle="Pioneering the future of dream exploration"
      />

      <div className="mb-16">
        <Card className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
          <p className="text-black dark:text-gray-100 mb-6">
            Founded in 2025, Dreamscapes Inc. emerged from a groundbreaking
            discovery in neurotechnology that allowed for conscious dream
            manipulation. Our team of renowned neuroscientists, psychologists,
            and dream specialists has since been dedicated to unlocking the full
            potential of the human mind during sleep.
          </p>
          <p className="text-black dark:text-gray-100">
            Today, we're the world's leading provider of dream manipulation
            services, helping thousands of clients explore their consciousness,
            overcome fears, and tap into their creative potential through the
            power of lucid dreaming.
          </p>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="flex items-start gap-6">
          <div
            className="w-12 h-12 rounded-full bg-purple-600/20 
            flex items-center justify-center flex-shrink-0"
          >
            <Target className="dark:text-purple-400 text-purple-900" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-black dark:text-gray-100">
              To revolutionize human consciousness by making lucid dreaming
              accessible and beneficial for everyone, while advancing the
              science of dream research.
            </p>
          </div>
        </Card>

        <Card className="flex items-start gap-6">
          <div
            className="w-12 h-12 rounded-full bg-purple-600/20 
            flex items-center justify-center flex-shrink-0"
          >
            <Heart className="dark:text-purple-400 text-purple-900" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-black dark:text-gray-100">
              We believe in ethical dream manipulation, personal growth, and the
              transformative power of consciousness exploration.
            </p>
          </div>
        </Card>
      </div>

      <SectionTitle
        title="Our Achievements"
        subtitle="Leading the industry in dream technology"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div
            className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-600/20 
            flex items-center justify-center"
          >
            <Users className="dark:text-purple-400 text-purple-900" size={32} />
          </div>
          <h4 className="text-2xl font-bold text-purple-500 mb-2">10,000+</h4>
          <p className="text-black dark:text-gray-100">Satisfied Clients</p>
        </div>

        <div className="text-center">
          <div
            className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-600/20 
            flex items-center justify-center"
          >
            <Award className="dark:text-purple-400 text-purple-900" size={32} />
          </div>
          <h4 className="text-2xl font-bold text-purple-500 mb-2">15+</h4>
          <p className="text-black dark:text-gray-100">Industry Awards</p>
        </div>

        <div className="text-center">
          <div
            className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-600/20 
            flex items-center justify-center"
          >
            <Target className="dark:text-purple-400 text-purple-900" size={32} />
          </div>
          <h4 className="text-2xl font-bold text-purple-500 mb-2">95%</h4>
          <p className="text-black dark:text-gray-100">Success Rate</p>
        </div>

        <div className="text-center">
          <div
            className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-600/20 
            flex items-center justify-center"
          >
            <Heart className="dark:text-purple-400 text-purple-900" size={32} />
          </div>
          <h4 className="text-2xl font-bold text-purple-500 mb-2">24/7</h4>
          <p className="text-black dark:text-gray-100">Client Support</p>
        </div>
      </div>
    </PageContainer>
  );
};

export default About;