
'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

import Navigation from '../../components/Navigation';
import Footer from "@/components/Footer";

import { FaWhatsapp, FaYoutube, FaInstagram, FaArrowRight} from 'react-icons/fa';

export default function SponsorshipPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    sponsorshipTier: '',
    budget: '',
    amount: '',
    message: '',
    agreeToContact: false
  });

  const sponsorshipTiers = [
    {
      name: 'Platinum Sponsor',
      amount: '₹80,000',
      description: 'Exclusive Title Partnership (ACPL powered by Your Brand)',
      benefits: [
        'Logo on central stage, jerseys & trophies',
        '10+ Social Media shoutouts',
        'Special announcements during matches',
        'Live Streaming on YouTube channel with 50k subscribers',
        'Prime logo placement on all materials',
        'VIP passes for all matches'
      ]
    },
    {
      name: 'Gold Sponsor',
      amount: '₹50,000',
      description: 'Premium Partnership',
      benefits: [
        'Logo on banners & team jerseys',
        '5+ Social Media mentions',
        'Recognition in opening & closing ceremony',
        'Live Streaming coverage',
        'Digital banner ads',
        'Printed program features'
      ]
    },
    {
      name: 'Silver Sponsor',
      amount: '₹25,000',
      description: 'Supporting Partnership',
      benefits: [
        'Logo on brochures & pamphlets',
        '2+ Social Media mentions',
        'Recognition in event coverage',
        'Social media recognition',
        'Booth space at venue',
        'Program advertisement'
      ]
    }
  ];

  const partnershipBenefits = [
    {
      title: 'Brand Visibility',
      description: 'Your logo on banners, jerseys, stage backdrops, and social media promotions',
      icon: (
        <svg className="w-10 h-10 text-[#56C2E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
        </svg>
      )
    },
    {
      title: 'Direct Audience Reach',
      description: 'Thousands of cricket enthusiasts across Uttar Pradesh & All India',
      icon: (
        <svg className="w-10 h-10 text-[#56C2E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    },
    {
      title: 'Community Impact',
      description: 'Support grassroots cricket and upcoming talent',
      icon: (
        <svg className="w-10 h-10 text-[#56C2E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      )
    },
    {
      title: 'Media Exposure',
      description: 'Event promotion through digital and offline campaigns',
      icon: (
        <svg className="w-10 h-10 text-[#56C2E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9m0 0v12m0-12a2 2 0 012-2h2a2 2 0 012 2"></path>
        </svg>
      )
    },
    {
      title: 'Positive Brand Association',
      description: 'Connect with youth, families, and sports lovers',
      icon: (
        <svg className="w-10 h-10 text-[#56C2E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
        </svg>
      )
    },
    {
      title: 'Live Streaming',
      description: 'YouTube channel with 50k subscribers coverage',
      icon: (
        <svg className="w-10 h-10 text-[#56C2E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
      )
    }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // ✅ Updated handleSubmit with API POST (No UI changes)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Sponsorship form submitted:', formData);

    try {
      const response = await fetch('http://localhost:5001/api/sponsors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for your sponsorship interest! We will contact you soon.');
        // Reset form
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          website: '',
          sponsorshipTier: '',
          budget: '',
          amount: '',
          message: '',
          agreeToContact: false
        });
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Sponsorship Opportunities | ACPL Cricket Tournament 2026</title>
        <meta name="description" content="Become a sponsor for ACPL - The biggest cricket tournament of the year" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section - Primary Blue Background */}
      <section className="bg-gradient-to-r from-[#002E5D] to-[#081B33] py-5 md:py-28 px-6 md:px-8 relative overflow-hidden">
        {/* Decorative white curve only visible on desktop */}
        <div className="hidden md:block absolute bottom-0 left-0 w-full h-8 bg-white rounded-t-full"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center pt-30">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Sponsorship Opportunities
            </h1>
            <p className="text-xl md:text-2xl text-[#56C2E8] mb-8 max-w-4xl mx-auto">
              Partner with ACPL Cricket Tournament and reach thousands of cricket enthusiasts across Uttar Pradesh & All India. 
              Showcase your brand and support grassroots cricket talent.
            </p>
            <div className="bg-[#F36E21] text-white py-4 px-8 rounded-lg inline-block shadow-lg border-2 border-[#C1272D]">
              <span className="text-2xl font-bold">50,000+</span> YouTube Subscribers
            </div>
          </div>
        </div>
      </section>


      
{/* Why Partner with ACPL Section - Refined Design */}
<section className="py-20 px-6 bg-white">
  <div className="container mx-auto max-w-7xl text-center">
    {/* Section Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-[#081B33] mb-6 tracking-tight">
      Why Partner with <span className="text-[#56C2E8]">ACPL?</span>
    </h2>
    <p className="text-gray-600 text-lg md:text-xl mb-14 max-w-3xl mx-auto leading-relaxed">
      Partner with ACPL to empower the next generation of cricket talent while giving your brand exceptional visibility and engagement across India.
    </p>

    {/* Benefits Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {partnershipBenefits.map((benefit, index) => (
        <div
          key={index}
          className="group relative p-8 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
        >
          {/* Decorative Accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#A6CE39]/20 via-transparent to-[#56C2E8]/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* Icon */}
          <div className="relative z-10 bg-[#081B33] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-105 transition-transform duration-500">
            <span className="text-white text-4xl">{benefit.icon}</span>
          </div>

          {/* Title */}
          <h3 className="relative z-10 text-xl font-semibold text-[#081B33] mb-3">
            {benefit.title}
          </h3>

          {/* Description */}
          <p className="relative z-10 text-gray-600 leading-relaxed">
            {benefit.description}
          </p>

          {/* Subtle Hover Line */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-[3px] bg-[#56C2E8] transition-all duration-500 rounded-full"></div>
        </div>
      ))}
    </div>
  </div>
</section>


     {/* Sponsorship Packages Section - Primary Blue Background */}
    <section className="py-16 px-4 bg-[#081B33] text-gray-900 relative overflow-hidden">
  {/* Decorative curves for desktop */}
  <div className="hidden md:block absolute top-0 left-0 w-full h-8 bg-white rounded-b-full"></div>
  <div className="hidden md:block absolute bottom-0 left-0 w-full h-8 bg-white rounded-t-full"></div>

  <div className="container mx-auto max-w-6xl relative z-10 text-center">
    {/* Section Title */}
    <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">Sponsorship Packages</h2>
    <p className="text-white mb-12 max-w-3xl mx-auto">
      Select the package that aligns with your marketing goals and budget
    </p>

    {/* Packages Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {sponsorshipTiers.map((tier, index) => (
        <div
          key={index}
          className={`rounded-2xl p-8 text-center transition-transform duration-300 transform hover:scale-105 border border-gray-200 bg-white shadow-md`}
        >
          {/* Package Info */}
          <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
          <div className="text-3xl md:text-4xl font-bold mb-2">{tier.amount}</div>
          <p className="text-gray-500 text-sm md:text-base mb-6">{tier.description}</p>

          {/* Benefits */}
          <ul className="space-y-2 mb-6 text-left">
            {tier.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
            Select Package
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Sponsorship Form Section */}
      <section className="py-16 px-4 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-[#002E5D]/20">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-[#002E5D] to-[#081B33] text-white py-6 px-8 rounded-t-2xl">
              <h2 className="text-3xl font-bold text-center">Become a Sponsor</h2>
              <p className="text-center text-[#56C2E8] mt-2 text-sm">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            {/* Form */}
                 {/* Form */}
      <form onSubmit={handleSubmit} className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Company Name */}
          <div className="md:col-span-2">
            <label className="block text-[#002E5D] font-semibold mb-2 text-base">
              Company Name *
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent placeholder-gray-500 text-black focus:border-[#56C2E8] focus:ring-0"
              placeholder="Enter your company name"
            />
          </div>

          {/* Contact Person */}
          <div>
            <label className="block text-[#002E5D] font-semibold mb-2 text-base">
              Contact Person *
            </label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent placeholder-gray-500 text-black focus:border-[#56C2E8] focus:ring-0"
              placeholder="Full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#002E5D] font-semibold mb-2 text-base">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent placeholder-gray-500 text-black focus:border-[#56C2E8] focus:ring-0"
              placeholder="your@company.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-[#002E5D] font-semibold mb-2 text-base">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent placeholder-gray-500 text-black focus:border-[#56C2E8] focus:ring-0"
              placeholder="+91 9876543210"
            />
          </div>

          {/* Website */}
          <div>
            <label className="block text-[#002E5D] font-semibold mb-2 text-base">
              Website
            </label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent placeholder-gray-500 text-black focus:border-[#56C2E8] focus:ring-0"
              placeholder="https://yourcompany.com"
            />
          </div>

          {/* Sponsorship Tier */}
          <div>
            <label className="block text-[#002E5D] font-semibold mb-2 text-base">
              Sponsorship Tier *
            </label>
            <select
              name="sponsorshipTier"
              value={formData.sponsorshipTier}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent text-black focus:border-[#56C2E8] focus:ring-0"
            >
              <option value="">Select a tier</option>
              {sponsorshipTiers.map((tier, index) => (
                <option key={index} value={tier.name}>
                  {tier.name} - {tier.amount}
                </option>
              ))}
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-[#002E5D] font-semibold mb-2 text-base">
              Budget Range
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent text-black focus:border-[#56C2E8] focus:ring-0"
            >
              <option value="">Select budget range</option>
              <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
              <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
              <option value="₹1,00,000 - ₹2,50,000">₹1,00,000 - ₹2,50,000</option>
              <option value="₹2,50,000+">₹2,50,000+</option>
            </select>
          </div>

          {/* Amount */}
          <div className="md:col-span-2">
            <label className="block text-[#002E5D] font-semibold mb-2 text-base">
              Proposed Sponsorship Amount (INR)
            </label>
            <input
              type="text"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent placeholder-gray-500 text-black focus:border-[#56C2E8] focus:ring-0"
              placeholder="Enter amount in Indian Rupees"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block text-[#002E5D] font-semibold mb-2 text-base">
              Additional Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent placeholder-gray-500 text-black focus:border-[#56C2E8] focus:ring-0"
              placeholder="Tell us about your sponsorship goals or ideas..."
            ></textarea>
          </div>

          {/* Agreement */}
          <div className="md:col-span-2">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="agreeToContact"
                checked={formData.agreeToContact}
                onChange={handleChange}
                required
                className="mt-1 text-[#002E5D] focus:ring-[#56C2E8]"
              />
              <span className="text-[#002E5D] text-sm leading-snug">
                I agree to be contacted by ACPL tournament organizers regarding sponsorship opportunities.
                My information will be used solely for this purpose.
              </span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-10 text-center">
          <button
            type="submit"
            className="bg-[#002E5D] text-white font-semibold py-3 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-md"
          >
            Submit Inquiry
          </button>
        </div>
      </form>
    </div>
  </div>
</section>


  {/* Benefits for Sponsors Section - Lime Green Background */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#F36F21] to-[#FF8833] relative overflow-hidden">
        <div className=" hidden md:block absolute top-0 left-0 w-full h-8 bg-white rounded-b-full"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Sponsors Get</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#081B33] rounded-xl border-2 border-[#002E5D]">
              <div className="bg-[#002E5D] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Brand Recognition</h3>
              <p className="text-white">Extensive visibility across all tournament materials and platforms</p>
            </div>

            <div className="text-center p-6 bg-[#081B33] rounded-xl border-2 border-[#002E5D]">
              <div className="bg-[#002E5D] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Networking Events</h3>
              <p className="text-white">Exclusive access to VIP events and player meet-and-greets</p>
            </div>

            <div className="text-center p-6 bg-[#081B33] rounded-xl border-2 border-[#002E5D]">
              <div className="bg-[#002E5D] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl text-white font-bold mb-2">Media Coverage</h3>
              <p className="text-white">Featured in press releases, social media, and tournament broadcasts</p>
            </div>
          </div>
        </div>
      </section>

        {/* Current Sponsors Section - White Background */}
     <section className="relative  px-6 bg-gradient-to-b from-[#F8FAFC] to-white">
  <div className="container mx-auto max-w-6xl text-center">

    {/* Heading */}


    {/* Sponsorship Section */}
{/* Sponsorship Section */}
<section className="px-4 py-10 md:py-16 bg-white">
  <div className="max-w-5xl mx-auto">
    {/* Section Header */}
    <div className="text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm">
      
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
        Our Valued Partners
      </h2>
      <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Join hands with us to promote cricket and build a stronger sports community together.
      </p>

      {/* Social Media Links */}
      <div className="mt-8 md:mt-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
          Stay Connected With Our Journey
        </h3>

        <div className="flex justify-center items-center gap-5 sm:gap-8 md:gap-10 flex-wrap">
          {/* WhatsApp */}
          <a
            href="https://chat.whatsapp.com/Eyos8omo42k3RRRbtD9pbT"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-2"
            title="Join WhatsApp Group"
          >
            <div className="bg-gradient-to-br from-green-400 to-green-600 p-4 md:p-5 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <FaWhatsapp className="text-white text-2xl md:text-3xl" />
            </div>
            <span className="mt-2 text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors">
              WhatsApp
            </span>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/channel/UCwLGiUDe4228vrUa3wfnYpQ"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-2"
            title="YouTube Channel"
          >
            <div className="bg-gradient-to-br from-red-400 to-red-600 p-4 md:p-5 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <FaYoutube className="text-white text-2xl md:text-3xl" />
            </div>
            <span className="mt-2 text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors">
              YouTube
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/tenni_scricketleague?igsh=MWJkbXZ1OTh5azJkOQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-2"
            title="Instagram Profile"
          >
            <div className="bg-gradient-to-br from-pink-400 to-purple-600 p-4 md:p-5 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <FaInstagram className="text-white text-2xl md:text-3xl" />
            </div>
            <span className="mt-2 text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
              Instagram
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

   </div>

    {/* Optional subtle top curve decoration */}
  <div className="absolute top-0 left-0 w-full h-10 bg-white rounded-b-full"></div>
</section>

      <Footer />
    </div>
  );
}
