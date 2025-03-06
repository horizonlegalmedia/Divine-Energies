import React from "react";
import { affirmationAndPositiveThinking, manifestationCoaching, mindsetMastery, } from '../images'
const services = [
  {
    title: "Manifestation Coaching",
    image: manifestationCoaching,
    description: "Manifestation is more than just wishful thinking—it’s a practice of aligning your thoughts, energy, and actions to attract the life you desire. I’ll help you clarify your goals, set powerful intentions, and guide you through the steps to manifest your dreams into reality.",
    featuresTagline: "Structured programs to harness universal laws of attraction",
    features: [
      "Custom vision board creation",
      "Energy alignment sessions",
      "90-day manifestation challenges",
      "Abundance mindset training"
    ],
    quote: '"Align your thoughts, feelings, and actions with your desires—what you believe, you receive." ✨💫'
  },
  {
    title: "Affirmations and Positive Thinking",
    image: affirmationAndPositiveThinking,
    description: "Your thoughts create your world. By replacing limiting beliefs with affirmations and empowering thoughts, you’ll learn how to build unshakable confidence, resilience, and self-love. I’ll teach you how to use affirmations to reprogram your mind for success and happiness.",
    featuresTagline: "Daily tools for positive neural reprogramming",
    features: [
      "Personalized affirmation libraries",
      "Voice-recorded mantras",
      "Accountability check-ins",
      "Crisis affirmation toolkits"
    ],
    quote: '"Align your thoughts, feelings, and actions with your desires—what you believe, you receive." ✨💫'
  },
  {
    title: "Mindset Mastery",
    image: mindsetMastery,
    description: "A positive mindset is the key to overcoming challenges and achieving your highest potential. Together, we’ll shift your mindset from negative or self-limiting patterns to one that attracts abundance, success, and joy.",
    featuresTagline: "Transform negative patterns into empowering beliefs",
    features: [
      "Cognitive restructuring exercises",
      "Gratitude journal systems",
      "Shadow work integration",
      "Neuro-linguistic programming"
    ],
    quote: '"Master your mindset, master your life. Your thoughts are the blueprint of your reality." 💭✨'
  }
];

const WhatIDo = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-purple-600 uppercase tracking-wide">
            Transformation Services
          </h2>
          <p className="mt-2 text-4xl font-bold text-gray-900">
            Mindset Development Programs
          </p>
        </div>

        <div className="space-y-8 w-full">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Image Section */}
                <div className="w-full md:w-1/3 relative group flex-shrink-0">
                  <div className="relative overflow-hidden rounded-lg aspect-square">
                    {/* Decorative background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100" />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="relative z-10 object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-5">
                    {service.description}
                  </p>
                  <p className="text-gray-600 mb-5">
                    {service.featuresTagline}
                  </p>
                  <div className="border-t border-purple-100 pt-5">
                    <h4 className="text-sm font-semibold text-purple-600 uppercase mb-4">
                      Program Includes
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <div className="flex-shrink-0 mt-2 mr-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <blockquote className="mt-4 border-l-4 border-purple-500 pl-4 italic text-gray-700 text-lg">
                    {service.quote}
                  </blockquote>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Block */}
        <div className="mt-12 p-8 bg-purple-100 rounded-xl border border-purple-200">
          <p className="text-lg italic text-gray-700">
            "The structured approach to positive thinking completely transformed my daily mindset and productivity."
          </p>
          <p className="mt-4 font-medium text-purple-600">– Satisfied Client</p>
        </div>
      </div>
    </section>
  );
});

export default WhatIDo;