import React from 'react';
import PageContainer from '../components/PageContainer';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <PageContainer>
      <SectionTitle 
        title="Contact Us" 
        subtitle="Begin your journey into conscious dreaming" 
      />
      
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <Card>
          <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-purple-500/20 
                  focus:border-purple-500 focus:outline-none text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-purple-500/20 
                  focus:border-purple-500 focus:outline-none text-white"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-purple-500/20 
                  focus:border-purple-500 focus:outline-none text-white"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 
                rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
            >
              Send Message <Send size={16} />
            </button>
          </form>
        </Card>

        <div className="space-y-8">
          <Card className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-purple-600/20 
              flex items-center justify-center flex-shrink-0">
              <Mail className="dark:text-purple-400 text-purple-900" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-black dark:text-gray-100">contact@dreamscapes.com</p>
              <p className="text-black dark:text-gray-100">support@dreamscapes.com</p>
            </div>
          </Card>

          <Card className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-purple-600/20 
              flex items-center justify-center flex-shrink-0">
              <Phone className="dark:text-purple-400 text-purple-900" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-black dark:text-gray-100">+1 (555) 123-4567</p>
              <p className="text-black dark:text-gray-100">Mon - Fri, 9am - 6pm EST</p>
            </div>
          </Card>

          <Card className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-purple-600/20 
              flex items-center justify-center flex-shrink-0">
              <MapPin className="dark:text-purple-400 text-purple-900" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-black dark:text-gray-100">123 Dream Avenue</p>
              <p className="text-black dark:text-gray-100">New York, NY 10001</p>
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
};

export default Contact;