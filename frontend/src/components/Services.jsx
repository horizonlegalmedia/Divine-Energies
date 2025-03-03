// import { StarIcon, GiftIcon, SparklesIcon } from '@heroicons/react/solid';

import React from "react";

const services = [
  {
    title: "Essentials Package",
    // icon: StarIcon,
    price: "297",
    features: [
      "4 Weekly Manifestation Sessions",
      "Custom Affirmation Library",
      "Email Support",
      "Basic Vision Board Setup"
    ],
    popular: false
  },
  {
    title: "Transformation Suite",
    // icon: GiftIcon,
    price: "597",
    features: [
      "Unlimited Coaching Sessions",
      "Personalized Meditation Plans",
      "VIP Email & Chat Support",
      "3D Vision Board Creation",
      "Energy Clearing Sessions"
    ],
    popular: true
  },
  {
    title: "Elite Experience",
    // icon: SparklesIcon,
    price: "997",
    features: [
      "All Transformation Suite Features",
      "In-Person Retreat (2 days)",
      "Crystal Energy Kit",
      "Private Community Access",
      "Annual Check-ins"
    ],
    popular: false
  }
];

const Services = React.forwardRef((props,ref) => {
  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-indigo-100 to-purple-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full opacity-20 -mt-32 -ml-32" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100 rounded-full opacity-20 -mb-32 -mr-32" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-purple-600 uppercase tracking-wide">
            Offerings
          </h2>
          <p className="mt-2 text-4xl font-bold text-gray-900">
            Transformational Packages
          </p>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored programs designed to meet you at every stage of your growth journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow ${
                service.popular ? 'ring-2 ring-purple-600' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 rounded-bl-xl text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="text-center">
                {/* <service.icon className="h-12 w-12 text-purple-600 mx-auto mb-6" /> */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">${service.price}</span>
                  <span className="text-gray-600">/ program</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                service.popular 
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'
              }`}>
                Start Transformation
              </button>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg border border-purple-100 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What's Included in Every Program
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['24/7 Support', 'Progress Tracking', 'Community Access', 'Resources Library'].map((item, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Services;
