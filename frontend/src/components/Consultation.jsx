// import { CalendarIcon, UsersIcon, ChatIcon } from '@heroicons/react/outline';

import React from "react";
import { manifestation } from "../images";

const Consultation = React.forwardRef((props,ref) => {
  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-purple-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content Section */}
          <div className="lg:w-1/2">
            <h2 className="text-base font-semibold text-purple-600 uppercase tracking-wide">
              Let's Connect
            </h2>
            <p className="mt-2 text-4xl font-bold text-gray-900 mb-8">
              Personalized Consultation Sessions
            </p>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
              Take the first step toward your transformation with a <span className="font-bold">complimentary consultation.</span> During this session, we’ll discuss your goals, challenges, and how my coaching services can support you in achieving the life you deserve.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                    {/* <UsersIcon className="h-6 w-6 text-purple-600" /> */}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      What to Expect
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>30-minute introductory video call</li>
                      <li>Personalized action plan</li>
                      <li>Energy assessment questionnaire</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our sessions blend practical coaching with spiritual guidance, 
                creating a safe space for profound personal breakthroughs. 
                Whether you're new to personal development or seeking deeper 
                transformation, we'll meet you where you are.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">Sometimes, all you need is a friendly chat to see if we’re the right fit. Book a <span className="font-bold">Meet & Greet session</span> where we can get to know each other, explore your needs, and determine how best I can support you on your journey.</p>
            </div>

            <button className="mt-8 bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2">
              {/* <CalendarIcon className="h-5 w-5" /> */}
              Schedule Free Session
            </button>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={manifestation}
                alt="Consultation Session"
                className="w-full h-full object-cover"
                style={{ minHeight: '400px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
              
              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                {/* <ChatIcon className="h-8 w-8 mb-4" /> */}
                <p className="text-xl font-semibold">
                  "The quality of your life is determined by the quality of your conversations"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Consultation;