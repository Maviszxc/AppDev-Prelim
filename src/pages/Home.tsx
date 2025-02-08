import React from "react";
import PageContainer from "../components/PageContainer";
import Button from "../components/Button";
import { ArrowRight, Brain, Stars, Moon } from "lucide-react";

const Home = () => {
  return (
    <PageContainer>
      {/* Hero Section with Video */}
      <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen gap-12 px-6">
        {/* Hero Content */}
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
            Explore the Boundless Realms of Your Mind
          </h1>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
            Transform your dreams into extraordinary experiences with our
            cutting-edge dream manipulation technology.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button>
              Start Your Journey{" "}
              <ArrowRight className="ml-2 inline-block" size={20} />
            </Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>

        {/* Video Container */}
        <div className="relative w-full md:w-2/3 lg:w-1/2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              className="w-full aspect-video rounded-2xl"
              src="https://www.youtube.com/embed/qH-MGqokk_Y?autoplay=1&loop=1&mute=1&playlist=qH-MGqokk_Y"
              title="Dreamscape Video"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mt-20">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-600/20 flex items-center justify-center">
            <Brain className="dark:text-purple-400 text-purple-900" size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Lucid Dream Training
          </h3>
          <p className="text-gray-700 dark:text-gray-400">
            Master the art of conscious dreaming with our expert guidance.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-600/20 flex items-center justify-center">
            <Stars className="dark:text-purple-400 text-purple-900" size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Custom Dreamscapes
          </h3>
          <p className="text-gray-700 dark:text-gray-400">
            Design and experience personalized dream environments.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-600/20 flex items-center justify-center">
            <Moon
              className="dark:text-purple-400 text-purple-900"
              size={32}
            />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Dream Analysis
          </h3>
          <p className="text-gray-700 dark:text-gray-400">
            Understand the deeper meaning behind your dreams.
          </p>
        </div>
      </div>
    </PageContainer>
  );
};

export default Home;
