import React from 'react'
import { owner,logo } from '../images'

const AboutUs = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-100 relative overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute w-96 h-96 bg-indigo-100 rounded-full -top-48 -right-48 opacity-50" />
      <div className="absolute w-64 h-64 bg-blue-200 rounded-full -bottom-32 -left-32 opacity-50" />


      {/* Hero Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28">
        <div className="flex flex-col md:flex-row items-center">
          {/* Owner's Profile */}
          <div className="md:w-1/2 mb-12 md:mb-0 relative">
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full transform rotate-45" />
              <img
                src={owner}
                alt="Owner"
                className="relative z-10 w-full h-full object-cover rounded-full border-8 border-white"
              />
            </div>
          </div>

          {/* About Section */}
          <div className="md:w-1/2 md:pl-16 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-500">
              Shradha Khandelwal
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-justify">
              I am a life coach focusing on manifestation and affirmations helps individuals clarify goals, shift mindset, and harness the power of thoughts to create desired outcomes. By fostering self-belief, personal growth, and accountability, she empowers clients to overcome obstacles, build confidence, and manifest lasting change for a fulfilling, intentional life.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
})

export default AboutUs
