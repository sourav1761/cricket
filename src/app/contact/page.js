'use client'
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import Navigation from '../../components/Navigation';
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactMethod: '',
    agreeToPrivacy: false
  });

  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
      ),
    title: "Phone",
  details: ["+91 7879598020"," ", "+91 8923605791",],
  description: "Available 9 AM - 6 PM, Monday to Saturday",
  action: "tel:+917879598020"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      title: "Email",
      details: "acplt10@gmail.com",
      description: "We respond within 24 hours",
      action: "mailto:info@acpltournament.com"
    },

    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "Business Hours",
      details: "Monday - Saturday",
      description: "9:00 AM - 6:00 PM",
      action: null
    }
  ];

  const departments = [
    {
      name: "Registration & Teams",
      email: "acplt10@gmail.com",
      phone: "+91 7879598020",
      description: "For team registration, player queries, and tournament participation"
    },
    {
      name: "Sponsorship & Partnerships",
      email: "acplt10@gmail.com",
      phone: "+91 7879598020",
      description: "For sponsorship opportunities and partnership inquiries"
    },
    {
      name: "Media & Press",
      email: "acplt10@gmail.com",
      phone: "+91 7879598020",
      description: "For media coverage, press releases, and interview requests"
    },
    {
      name: "Technical & Operations",
      email: "acplt10@gmail.com",
      phone: "+91 7879598020",
      description: "For venue, equipment, and technical support queries"
    }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // ✅ Handle Submit with API integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreeToPrivacy) {
      alert("Please agree to the privacy policy to continue.");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/contact', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('✅ Contact form submitted:', res.data);
      alert("Thank you for your message! We'll get back to you within 24 hours.");

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        contactMethod: '',
        agreeToPrivacy: false
      });
    } catch (error) {
      console.error('❌ Error submitting form:', error);
      alert("Something went wrong while sending your message. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Contact Us | ACPL Cricket Tournament 2024</title>
        <meta name="description" content="Get in touch with ACPL Cricket Tournament organizers for any queries" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#002E5D] to-[#081B33]  md:py-24 px-4 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-6 md:h-8 bg-white rounded-t-full"></div>
        <div className="container mx-auto py-10 max-w-6xl relative z-10">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 pt-25">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-[#56C2E8] mb-6 md:mb-8 max-w-4xl mx-auto px-2">
              We're here to help! Get in touch with our team for any questions about the tournament, 
              registration, sponsorship, or general inquiries.
            </p>
            <div className="bg-[#F36E21] text-white py-2 md:py-3 px-4 md:px-6 rounded-lg inline-block border-2 border-[#C1272D]">
              <span className="text-lg md:text-xl font-bold">24/7 Support</span> for Urgent Matters
            </div>
          </div>
        </div>
      </section>

       {/* Contact Methods Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#081B33] mb-8 md:mb-12">Get In Touch</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-gradient-to-b from-[#56C2E8]/10 to-white border-2 border-[#56C2E8] rounded-xl p-4 md:p-6 text-center transform hover:scale-105 transition duration-300">
                <div className="text-[#002E5D] mb-3 md:mb-4 flex justify-center">
                  {method.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#081B33] mb-2">{method.title}</h3>
                <p className="text-[#002E5D] font-semibold mb-2 text-sm md:text-base">{method.details}</p>
                <p className="text-[#081B33] text-xs md:text-sm mb-3 md:mb-4">{method.description}</p>
                {method.action && (
                  <a 
                    href={method.action} 
                    className="bg-gradient-to-r from-[#F36E21] to-[#C1272D] hover:from-[#E55D1A] hover:to-[#B02026] text-white font-medium py-2 px-3 md:px-4 rounded-lg transition duration-300 inline-block border border-[#C1272D] text-sm md:text-base"
                  >
                    Contact
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-16 px-4 bg-[#002E5D] text-[#002E5D] relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden border border-white/20">
            
            {/* Header */}
            <div className="py-6 px-6 md:px-8 text-center border-b border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002E5D]">Send Us a Message</h2>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                Fill out the form below and we'll get back to you soon
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

                {/* Name */}
                <div>
                  <label className="block text-[#002E5D] font-semibold mb-2 text-sm md:text-base">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg text-[#002E5D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#002E5D] text-sm md:text-base"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[#002E5D] font-semibold mb-2 text-sm md:text-base">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg text-[#002E5D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#002E5D] text-sm md:text-base"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[#002E5D] font-semibold mb-2 text-sm md:text-base">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg text-[#002E5D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#002E5D] text-sm md:text-base"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[#002E5D] font-semibold mb-2 text-sm md:text-base">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg text-[#002E5D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#002E5D] text-sm md:text-base"
                  >
                    <option value="">Select a subject</option>
                    <option value="registration">Registration Query</option>
                    <option value="sponsorship">Sponsorship Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="general">General Information</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Preferred Contact Method */}
                <div className="md:col-span-2">
                  <label className="block text-[#002E5D] font-semibold mb-2 text-sm md:text-base">
                    Preferred Contact Method
                  </label>
                  <div className="flex flex-col md:flex-row gap-3">
                    {["email", "phone", "whatsapp"].map((method) => (
                      <label
                        key={method}
                        className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method}
                          checked={formData.contactMethod === method}
                          onChange={handleChange}
                          className="accent-[#002E5D]"
                        />
                        <span className="text-[#002E5D] font-medium capitalize text-sm md:text-base">
                          {method}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="block text-[#002E5D] font-semibold mb-2 text-sm md:text-base">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg text-[#002E5D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#002E5D] text-sm md:text-base"
                    placeholder="Please describe your inquiry in detail..."
                  ></textarea>
                </div>

                {/* Privacy Agreement */}
                <div className="md:col-span-2">
                  <label className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      name="agreeToPrivacy"
                      checked={formData.agreeToPrivacy}
                      onChange={handleChange}
                      required
                      className="mt-1 accent-[#002E5D]"
                    />
                    <span className="text-[#002E5D] text-xs md:text-sm">
                      I agree to the privacy policy and consent to being contacted by the tournament organizers.
                      My information will be used solely for responding to my inquiry.
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6 md:mt-8 text-center">
                <button
                  type="submit"
                  className="bg-[#002E5D] text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded-lg text-base md:text-lg w-full md:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

        {/* Departments Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#081B33] mb-8 md:mb-12">Contact Specific Departments</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gradient-to-b from-[#56C2E8]/10 to-white border-2 border-[#56C2E8] rounded-xl p-4 md:p-6 transform hover:scale-102 transition duration-300">
                <h3 className="text-lg md:text-xl font-bold text-[#002E5D] mb-3 md:mb-4">{dept.name}</h3>
                <p className="text-[#081B33] mb-3 md:mb-4 text-sm md:text-base">{dept.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-[#002E5D]">
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <a href={`mailto:${dept.email}`} className="hover:text-[#F36E21] transition duration-300 text-sm md:text-base break-all">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center text-[#002E5D]">
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <a href={`tel:${dept.phone}`} className="hover:text-[#F36E21] transition duration-300 text-sm md:text-base">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
