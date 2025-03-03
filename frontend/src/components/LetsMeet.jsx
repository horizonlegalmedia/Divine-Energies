import { qr } from "../images";
import React from "react";

const LetsMeet = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-purple-100 to-indigo-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Let’s Get Started
          </h2>
          <p className="text-xl text-gray-600 text-left mb-4">
            Are you ready to start living the life you’ve always dreamed of? <span className="font-bold">Book your free consultation</span>  today and take the first step toward transforming your life with manifestation, affirmations, and positive thinking.
          </p>
          <p className="text-xl text-gray-600 text-left mb-4">
            Feel free to contact me for more information or to schedule a <span className="font-bold">Meet & Greet session.</span> I look forward to supporting you on your journey to empowerment and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

          {/* Contact Information */}
          {/* <div className="space-y-8 flex flex-col">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 ">
              Connect With Us
              </h3>

              <div className="space-y-5">
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href="mailto:Divineenergiesbyshradha@gmail.com" className="text-purple-600 hover:text-purple-700">
                    Divineenergiesbyshradha@gmail.com
                  </a>
                </div>

                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <a href="tel:+919368710716" className="text-purple-600 hover:text-purple-700">
                    +91 9368710716
                  </a>
                </div>

                <div>
                  <p className="font-medium text-gray-900">Mode of Consultation</p>
                  <p className="text-purple-600 hover:text-purple-700 hover:cursor-pointer">Online</p>
                </div>
              </div>

            </div>
          </div> */}
          <div className="space-y-8 flex flex-col">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                Connect With Us
              </h3>

              <div className="space-y-5">
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href="mailto:Divineenergiesbyshradha@gmail.com" className="text-purple-600 hover:text-purple-700">
                    Divineenergiesbyshradha@gmail.com
                  </a>
                </div>

                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <a href="tel:+919368710716" className="text-purple-600 hover:text-purple-700">
                    +91 9368710716
                  </a>
                </div>

                <div>
                  <p className="font-medium text-gray-900">Mode of Consultation</p>
                  <p className="text-purple-600 hover:text-purple-700 hover:cursor-pointer">Online</p>
                </div>

                {/* Social Media Links */}
                <div>
                  <p className="font-medium text-gray-900">Follow Us</p>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="https://www.instagram.com/divineenergiesbyshradha_k/reel/DEmmCpNzASQ/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code & Community */}
          <div className="bg-white rounded-2xl shadow-lg w-full h-full">
            <h3 className="text-2xl font-bold text-gray-900 text-center p-8">
              Join Our WhatsApp Community
            </h3>

            <div className="w-full p-6 pt-0">
              <img
                src={qr}
                alt="WhatsApp Community QR Code"
                className="w-full rounded-2xl"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 border-t border-purple-300 pt-8 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Divine Energies Co. All rights reserved.
        </p>
      </div>

    </section>
  );
});

export default LetsMeet;

{/* <div className="flex space-x-6">
<a href="#" className="text-purple-600 hover:text-purple-700">
  <span className="sr-only">Facebook</span>
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
</a>
<a href="#" className="text-purple-600 hover:text-purple-700">
  <span className="sr-only">Instagram</span>
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
</a>
</div> */}


