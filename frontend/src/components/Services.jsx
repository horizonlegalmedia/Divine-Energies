import React from "react";

const services = [
  {
    title: "Starter Package",
    time: "40 mins",
    price: "199",
    features: [
      "Video or Audio Call (Zoom)",
      "Magical tricks",
      "Effective solutions",
      "Positive mindset starts",
      "Magical affirmations",
      "Power of words & thoughts",
    ],
    popular: false
  },
  {
    title: "Growth Package",
    time: "60 mins",
    price: "499",
    features: [
      "Video or Audio Call (Zoom)",
      "Magical tricks",
      "Effective solutions",
      "Positive mindset starts",
      "Magical affirmations",
      "Power of words & thoughts",
      "How to unlock hidden powers",
      "Deep dive into self-transformation",
      "Special guided visualization technique",
      "Overcoming self-doubt & fears",
      "Action plan for personal growth",
    ],
    popular: true
  },
  {
    title: "Elite Package",
    time: "90 mins",
    price: "999",
    features: [
      "Video or Audio Call (Zoom)",
      "Magical tricks",
      "Effective solutions",
      "Positive mindset starts",
      "Magical affirmations",
      "Power of words & thoughts",
      "How to unlock hidden powers",
      "Deep dive into self-transformation",
      "Special guided visualization technique",
      "Overcoming self-doubt & fears",
      "Action plan for personal growth",
      "Exclusive personalized affirmations",
      "Manifestation techniques for success",
      "Mind rewiring strategies for abundance",
      "Powerful energy cleansing practice",
      "One follow-up consultation (15 mins)"
    ],
    popular: false
  },
];

const Services = React.forwardRef((props, ref) => {
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
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow ${service.popular ? 'ring-2 ring-purple-600' : ''
                }`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 rounded-bl-xl rounded-tr-2xl text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">Rs {service.price}</span>
                  <span className="text-gray-600">/ program</span>
                  <span className="text-gray-900 font-bold">- ({service.time})</span>
                </div>
              </div>

              <div className="md:relative md:h-[87%] lg:h-[90%] md:pb-6">

                <ul className="space-y-3 mb-12">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-medium transition-colors md:absolute md:bottom-2 lg:bottom-3 ${service.popular
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'
                  }`}>
                  <a href="https://calendly.com/divineenergiesbyshradha/30min" target="_blank">Start Transformation</a>

                </button>
              </div>
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
